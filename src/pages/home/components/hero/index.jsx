/* eslint-disable react/no-unescaped-entities */

import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState } from "react";

import irodahoca from "../../../../assets/irodahoca-strelka-2.webp";
import RegisterModal from "../../../../components/registeration-modal";

export default function Page() {
  const [ isModalOpen, setIsModalOpen ] = useState( false );

  return (
    <section className="bg-white roboto-condensed">
      <div className="container pt-4 pb-8 text-center">
        <h3 className="text-[17.5px] text-yellow-500 font-bold mb-2">
          Turkcha gaplash va 100% sertifikatli bo'l
        </h3>

        <h1 className="flex justify-center text-[18px] font-bold mb-3 text-white uppercase">
          <span className="px-3 rounded-tl-lg rounded-bl-lg py-1 bg-green-500">
            Turkçe konuş
          </span>
          <span className="px-3 py-1 bg-red-600 rounded-tr-lg rounded-br-lg">
            100% sertifika
          </span>
        </h1>

        <div className="max-w-3xl mx-auto mb-8">
          <h2 className="font-bold mb-4">
            <span className="text-md">
              Turk tilini 0 dan 2-3 oyda haftada 7 kun 3 ta
            </span>{" "}
            <br />{" "}
            <span className="text-[16.8px]">
              ustoz bilan o'qitib sizni sertifikatli qilamiz
            </span>{" "}
            <br />{" "}
            <span className="text-[21.3px] text-red-600">
              aks holda pulingizni qaytaramiz !
            </span>
          </h2>
        </div>

        <div className="relative max-w-xl mx-auto">
          <LazyLoadImage
            className="mx-auto mb-8 rounded-3xl w-full object-cover h-[250px]"
            alt="Irodahoca"
            fetchPriority="high"
            effect="blur"
            src={irodahoca}
          />

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => {
                setIsModalOpen( true );
              }}
              className="flex -mt-14 z-10 font-bold bg-red-600 text-white px-12 py-2 rounded-xl text-xl hover:bg-red-700 transition-colors animate-pulseGlow"
            >
              RO'YXATDAN O'TISH
            </button>
          </div>
          <div className="text-sm">
            <p>Sizni sertifikatli qilmaguncha qo'ymaymiz !</p>
            <h2 className="my-2 text-[14px] bg-red-500 inline-block p-2 text-white rounded-md">
              Ro'yxatdan o'tganlar uchun sovg'alarimiz ro'yxati
            </h2>
            <ul className="px-6">
              <li className="bg-green-500 text-[12px] my-2 py-1 rounded-md text-white">
                1. Turk tilining alifbosi video darsi
              </li>
              <li className="bg-green-500 text-[12px] my-2 py-1 rounded-md text-white">
                2. Merhaba-singilmanizm video darsi
              </li>
            </ul>
            <ul className="px-6">
              <li className="bg-green-500 text-[12px] my-2 py-1 rounded-md text-white">
                3. 1000 ta rasmli lug'atlar iborat kitob
              </li>
              <li className="bg-green-500 text-[12px] my-2 py-1 rounded-md text-white">
                4. Turk tilida 0 dan 2-3 oyda bemalol gaplasha olish
              </li>
              <li className="bg-green-500 text-[12px] my-2 py-1 rounded-md text-white">
                5. Turk tili o'rganishdagi eng katta xatoliklarga yechimlar
              </li>
              <li className="bg-green-500 text-[12px] my-2 py-1 rounded-md text-white">
                6. 2026-yilda turk tili orqali 2-3 oyda til sertifikati
              </li>
              <li className="bg-green-500 text-[12px] my-2 py-1 rounded-md text-white">
                7. Turk tilidagi barcha eng zo'r darsliklar kanali
              </li>
              <li className="bg-green-500 text-[12px] my-2 py-1 rounded-md text-white">
                8. Turk tili o'rganuvchilari uchun motivatsion rolik
              </li>
              <li className="bg-green-500 text-[12px] my-2 py-1 rounded-md text-white">
                9. 500 ta gapdan iborat turkcha so'zlashamiz kitobi
              </li>
              <li className="bg-green-500 text-[12px] my-2 py-1 rounded-md text-white">
                10. 500 ta eng ko'p ishlatiladigan turkcha so'zlar kitobi
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={() => {
                setIsModalOpen( true );
              }}
              className="flex font-bold bg-red-600 text-white px-12 py-2 rounded-xl text-xl hover:bg-red-700 transition-colors animate-pulseGlow"
            >
              RO'YXATDAN O'TISH
            </button>
          </div>
        </div>
      </div>
      <RegisterModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen( false )}
      />
    </section>
  );
}
