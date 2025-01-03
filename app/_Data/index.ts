export const dummyVouchers = [
  {
    id: 1,
    name: "Voucher Kemerdekaan Indonesia 17 Agustus",
    type: "diskon", // jenis voucher
    discount: "100.000",
    status: "aktif", // status
    period: {
      start: "15 Mar 2024 20.00",
      end: "21 Jul 2024 23.00",
    },
    targetProduct: "Semua Produk", // produk
    quota: {
      used: 0,
      total: 2,
    },
    targetVoucher: "Publik", // target voucher
  },
  {
    id: 2,
    name: "Promo Belanja Akhir Tahun",
    type: "diskon",
    discount: "50.000",
    status: "aktif",
    period: {
      start: "1 Des 2024 00.00",
      end: "31 Des 2024 23.59",
    },
    targetProduct: "Produk Tertentu",
    quota: {
      used: 5,
      total: 10,
    },
    targetVoucher: "Publik",
  },
  {
    id: 3,
    name: "Diskon Spesial Ramadhan",
    type: "biaya pengiriman",
    discount: "Gratis Ongkir",
    status: "akan datang",
    period: {
      start: "22 Mar 2024 00.00",
      end: "21 Apr 2024 23.59",
    },
    targetProduct: "Semua Produk",
    quota: {
      used: 20,
      total: 25,
    },
    targetVoucher: "Publik",
  },
  {
    id: 4,
    name: "Promo Cashback Lebaran",
    type: "diskon",
    discount: "10%",
    status: "aktif",
    period: {
      start: "15 Apr 2024 10.00",
      end: "30 Apr 2024 23.59",
    },
    targetProduct: "Produk Tertentu",
    quota: {
      used: 0,
      total: 5,
    },
    targetVoucher: "Terbatas",
  },
  {
    id: 5,
    name: "Diskon Harbolnas 12.12",
    type: "diskon",
    discount: "20%",
    status: "aktif",
    period: {
      start: "1 Des 2024 00.00",
      end: "12 Des 2024 23.59",
    },
    targetProduct: "Semua Produk",
    quota: {
      used: 2,
      total: 10,
    },
    targetVoucher: "Publik",
  },
  {
    id: 6,
    name: "Diskon Khusus Pelanggan Baru",
    type: "diskon",
    discount: "25%",
    status: "aktif",
    period: {
      start: "1 Jan 2024 00.00",
      end: "31 Jan 2024 23.59",
    },
    targetProduct: "Produk Tertentu",
    quota: {
      used: 1,
      total: 3,
    },
    targetVoucher: "Terbatas",
  },
];
