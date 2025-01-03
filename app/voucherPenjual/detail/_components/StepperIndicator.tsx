import clsx from "clsx";

interface StepIndicatorProps {
  step: number; // Langkah saat ini
}

export default function StepIndicator({ step }: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-center">
      {/* Step 1 */}
      <div className="flex items-center">
        <div
          className={clsx(
            "w-8 h-8 flex items-center justify-center font-bold rounded-full border-2",
            {
              "bg-white text-red-600 border-white": step === 1,
              "text-white border-white": step !== 1,
            }
          )}
        >
          1
        </div>
        <div className="w-8 h-1 bg-white"></div>
      </div>

      {/* Step 2 */}
      <div className="flex items-center">
        <div
          className={clsx(
            "w-8 h-8 flex items-center justify-center font-bold rounded-full border-2",
            {
              "bg-white text-red-600 border-white": step === 2,
              "text-white border-white": step !== 2,
            }
          )}
        >
          2
        </div>
        <div className="w-8 h-1 bg-white"></div>
      </div>
    </div>
  );
}
