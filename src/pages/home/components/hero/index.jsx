/* eslint-disable react/no-unescaped-entities */

import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState } from "react";

import irodahoca from "../../../../assets/irodahoca-strelka-2.webp";
import RegisterModal from "../../../../components/registeration-modal";
import Gifts from "../../../../components/gifts";

import ReactPixel from "react-facebook-pixel";

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

          <div className="flex items-center flex-col justify-center gap-2">
            {/* <button
              onClick={() => {
                // setIsModalOpen( true );
              }}
              className="flex -mt-10 z-10 font-bold bg-red-600 text-white px-8 py-2 rounded-xl text-3xl hover:bg-red-700 transition-colors animate-pulseGlow"
            >
              ADMINGA YOZISH
            </button> */}
            <a
              href="https://t.me/m/0kO11m-FMjFi"
              target="_blank"
              onClick={() => ReactPixel.track( "Lead" )}
              rel="noopener noreferrer"
              className="flex -mt-10 z-10 font-bold bg-red-600 text-white px-8 py-2 rounded-xl text-3xl hover:bg-red-700 transition-colors animate-pulseGlow"
            >
              ADMINGA YOZISH
            </a>
            {/* <p>Sizni sertifikatli qilmaguncha qo'ymaymiz !</p> */}
            <p className="text-[14px]">Yuqoridagi "Adminga yozish" tugmasini bosing. <br /> Sizga kurs va narxlari haqidagi ma'lumotlar <br /> adminimiz tomonidan yuborib qo'yiladi.</p>
          </div>
          <Gifts />
        </div>
      </div>
      <RegisterModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen( false )}
      />
    </section>
  );
}
