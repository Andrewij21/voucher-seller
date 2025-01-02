export default function VoucherPage() {
  return (
    <div className="max-w-screen-sm min-h-screen mx-auto ">
      {/* Floating Action Button */}
      <button
        className="absolute bottom-4 right-4 bg-red-500 text-white rounded-full w-14 h-14 shadow-lg flex items-center justify-center text-2xl"
        aria-label="Buat Voucher"
      >
        +
      </button>

      {/* Bottom Navigation */}
      <div className="bg-white shadow-md flex justify-around items-center py-2">
        {["Pesan", "Buat Voucher", "Profile"].map((item) => (
          <button
            key={item}
            className="text-gray-500 flex flex-col items-center"
          >
            <div className="w-6 h-6 bg-gray-300 rounded-full mb-1"></div>
            <span className="text-xs">{item}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
