"use client";
import { useState } from "react";
import InformasiVoucher from "./_components/InformasiVoucher";
import Nav from "./_components/Nav";
import DaftarPesanan from "./_components/DaftarPesanan";

export default function Page() {
  const [currentStep, setCurrentStep] = useState(1);

  const next = async () => {
    if (currentStep < 2) {
      setCurrentStep((step) => step + 1);
    }
  };
  const prev = () => {
    if (currentStep > 0) setCurrentStep((step) => step - 1);
  };
  return (
    <>
      <Nav step={currentStep} />
      <div className="px-2 py-4">
        {currentStep === 1 && <InformasiVoucher next={next} />}
        {currentStep === 2 && <DaftarPesanan prev={prev} />}
      </div>
    </>
  );
}
