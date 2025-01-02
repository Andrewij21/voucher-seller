// components/StepIndicator.js
export default function StepIndicator() {
  return (
    <div className="flex items-center justify-center">
      {/* Step 1 */}
      <div className="flex items-center">
        <div className="w-8 h-8 flex items-center justify-center bg-white text-red-600 font-bold rounded-full border-2 border-white">
          1
        </div>
        <div className="w-8 h-1 bg-white"></div>
      </div>

      {/* Step 2 */}
      <div className="flex items-center">
        <div className="w-8 h-8 flex items-center justify-center text-white font-bold rounded-full border-2 border-white">
          2
        </div>
        <div className="w-8 h-1 bg-white"></div>
      </div>

      {/* Step 3 */}
      <div className="flex items-center">
        <div className="w-8 h-8 flex items-center justify-center text-white font-bold rounded-full border-2 border-white">
          3
        </div>
      </div>
    </div>
  );
}
