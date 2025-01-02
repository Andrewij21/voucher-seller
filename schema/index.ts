import * as z from "zod";

export const CreateVoucherSchema = z.object({
  step1: z.object({
    nama: z
      .string()
      .min(1, { message: "Nama voucher tidak boleh kosong" })
      .max(60, { message: "Nama voucher tidak boleh lebih dari 60 karakter" }),
    kode: z
      .string()
      .min(1, { message: "Kode tidak boleh kosong" })
      .max(8, { message: "Kode tidak boleh lebih dari 8 karakter" }),
    target_produk: z.enum(["publik", "terbatas"], {
      required_error: "Target produk tidak boleh kosong",
    }),
    masa_berlaku_awal: z.date({
      required_error: "Tanggal awal tidak boleh kosong.",
    }),
    masa_berlaku_akhir: z.date({
      required_error: "Tanggal akhir tidak boleh kosong.",
    }),
  }),
  step2: z
    .object({
      jenis_voucher: z.enum(["diskon_produk", "biaya_pengiriman"], {
        required_error: "Jenis voucher tidak boleh kosong",
      }),
      jenis_Diskon: z.enum(["nominal", "presentase"], {
        required_error: "Jenis Diskon tidak boleh kosong",
      }),
      diskon: z
        .string()
        .min(1, { message: "diskon tidak boleh kosong" })
        .regex(/^\d+$/, { message: "Diskon hanya boleh angka" }),
      minimun_pembelian: z
        .string()
        .min(1, { message: "minimum pembelian tidak boleh kosong" })
        .regex(/^\d+$/, { message: "minimum pembelian hanya boleh angka" }),
      kuota_pemakaian: z
        .string()
        .nonempty({ message: "kuota pemakaian wajib diisi" })
        .regex(/^\d+$/, {
          message: "kuota pemakaian pembelian hanya boleh angka",
        })
        .refine((val) => parseInt(val, 10) > 0, {
          message: "Kuota pemakaian minimal adalah 1",
        }),
      kuota_pemakaian_per_pembeli: z
        .string()
        .nonempty({ message: "Kuota pemakaian per pembelian wajib diisi" }) // Tidak boleh kosong
        .regex(/^\d+$/, { message: "Kuota pemakaian hanya boleh angka" }) // Hanya angka
        .refine((val) => parseInt(val, 10) > 0, {
          message: "Kuota pemakaian per pembelian minimal adalah 1",
        }),
      maksimum_diskon: z
        .object({
          mode: z.enum(["tidak_terbatas", "atur_batas"], {
            required_error: "Pilih mode maksimum diskon",
          }),
          value: z.string().optional(),
        })
        .optional(),
    })
    .refine(
      (data) => {
        const jenisDiskon = data.jenis_Diskon;
        const diskon = parseInt(data.diskon, 10);
        const minimunPembelian = parseInt(data.minimun_pembelian, 10);

        const batasBawah = 333000; // Nominal minimal

        if (jenisDiskon === "nominal") {
          const batasAtas = diskon * 0.6; // Maksimal 60% dari diskon
          return (
            minimunPembelian >= batasBawah && minimunPembelian <= batasAtas
          );
        }

        if (jenisDiskon === "presentase") {
          // Maksimal 60%, minimal 1%
          return diskon >= 1 && diskon <= 60 && minimunPembelian >= batasBawah;
        }

        return false;
      },
      {
        message:
          "Nominal minimal Rp333.000 dan maksimum 60% dari diskon untuk jenis nominal, atau persentase antara 1% dan 60% untuk jenis presentase",
        path: ["minimun_pembelian"], // Pesan error di field minimum_pembelian
      }
    )
    .refine(
      (data) => {
        const jenisDiskon = data.jenis_Diskon;
        const diskon = parseInt(data.diskon, 10);

        if (jenisDiskon === "presentase") {
          return diskon <= 60;
        }

        return true;
      },
      {
        message: "Persentase maksimal 60%",
        path: ["diskon"], // Pesan error di field minimum_pembelian
      }
    )
    .refine(
      (data) =>
        parseInt(data.kuota_pemakaian_per_pembeli, 10) <=
        parseInt(data.kuota_pemakaian, 10),
      {
        message: "Maksimal sama seperti kuota pemakaian",
        path: ["kuota_pemakaian_per_pembeli"], // Error ditampilkan di field ini
      }
    )
    .refine(
      (data) =>
        data.jenis_Diskon !== "presentase" ||
        data.maksimum_diskon?.mode === "tidak_terbatas" ||
        (data.maksimum_diskon?.value &&
          parseInt(data.maksimum_diskon.value, 10) <=
            parseInt(data.diskon, 10)),
      {
        message: "Batas maksimum diskon tidak boleh melebihi diskon",
        path: ["maksimum_diskon.value"],
      }
    ),
  step3: z.object({
    target_produk: z.enum(["semua_produk", "produk_tertentu"], {
      required_error: "Target produk tidak boleh kosong",
    }),
  }),
});
