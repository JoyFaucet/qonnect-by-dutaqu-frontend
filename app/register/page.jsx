'use client';

import AsideTemplate from "../components/AsideTemplate";
import BareBone from "../components/BareBone";
import SectionCore from "../components/SectionCore";
import { useState } from 'react';
import StepOne from "./wizard-komponen/step-1/stepOne";
import StepTwo from "./wizard-komponen/step-2/stepTwo";
import StepThree from "./wizard-komponen/step-3/stepThree";
import StepFour from "./wizard-komponen/step-4/stepFour";


export default function register() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: '',
      nama_lembaga: '',
      alamat_lembaga: '',
      provinsi_id: '',
      kabkota_id: '', 
      kecamatan_id: '',
      tipe_lembaga: '',
      jenjang_pendidikan: '',
      tanggal_berdiri: '',
      nama_pimpinan: '',
      nomor_hp_pimpinan: ''
    });
  
    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };


  const steps = {
    1: <StepOne formData={formData} handleChange={handleChange} nextStep={nextStep} />,
    2: <StepTwo formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />,
    3: <StepThree formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />,
    4: <StepFour formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep}  />
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Form Disubmit!");
  }

    return (
        <BareBone>
            <SectionCore>
                <header id="Title-And-Oauth-Next-Feature" className="mt-2 md:mt-4 lg:mt-6 xl:mt-8 2xl:mt-10">
                    <h1 className="text-gray-900 dark:text-white font-semibold text-xl md:text-2xl">Register to <span>Qonnect By Dutaqu</span></h1>
                </header>
                <hr className="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700" />
                <div id="multipe-step-wizard" className="relative flex items-center w-full mb-6">
                    {/* Garis full background */}
                    <div
                      className="
                        w-full h-[3px]
                        bg-gray-200
                        rounded-full
                        absolute top-1/2 left-0 -translate-y-1/2
                      "
                    ></div>
                    <div
                      style={{ width: `${step * 25}%` }}
                      className="
                        h-[3px]
                        bg-gradient-to-br from-green-400 to-blue-600
                        rounded-full
                        transition-all
                        absolute top-1/2 left-0 -translate-y-1/2 duration-300
                      "
                    ></div>

                    {/* Step 1 */}
                    <div className="relative z-10 w-1/4 flex justify-center">
                        <div
                            className="
                            flex
                            w-10 h-10
                            text-white font-semibold
                            bg-[#2563eb]
                            rounded-full
                            items-center justify-center
                            md:w-12 md:h-12
                            "
                        >1</div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative z-10 w-1/4 flex justify-center">
                        <div
                          className={`
                                flex
                                w-10 h-10
                                font-semibold text-white
                                rounded-full
                                items-center justify-center
                                md:w-12 md:h-12
                                transition-all duration-500 ease-in-out
                                ${step >= 2 ? "bg-[#2563eb]" : "bg-gray-300"}
                              `}
                        >2</div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative z-10 w-1/4 flex justify-center">
                        <div
                          className={`
                                flex
                                w-10 h-10
                                font-semibold text-white
                                rounded-full
                                items-center justify-center
                                md:w-12 md:h-12
                                transition-all duration-500 ease-in-out
                                ${step >= 3 ? "bg-[#2563eb]" : "bg-gray-300"}
                              `}
                        >3</div>
                    </div>

                    {/* Step 4 */}
                    <div className="relative z-10 w-1/4 flex justify-center">
                        <div
                          className={`
                                flex
                                w-10 h-10
                                font-semibold text-white
                                rounded-full
                                items-center justify-center
                                md:w-12 md:h-12
                                transition-all duration-500 ease-in-out
                                ${step >= 4 ? "bg-[#2563eb]" : "bg-gray-300"}
                              `}
                        >4</div>
                    </div>
                </div>
                <div id="form-register" className="mb-2 md:mb-4 lg:mb-6 xl:mb-8 2xl:mb-10">
                    <form onSubmit={handleRegister} className="flex flex-wrap mb-2">
                        {steps[step]}
                    </form>
                </div>
            </SectionCore>
            <AsideTemplate />
        </BareBone>
    )
}