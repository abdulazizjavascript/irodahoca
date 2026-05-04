/* eslint-disable react/no-unescaped-entities */

import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState } from "react";

import irodahoca from "../../../../assets/irodahoca-strelka.avif";
import RegisterModal from "../../../../components/registeration-modal";

import ReactPixel from "react-facebook-pixel";

export default function Page() {
  const [ isModalOpen, setIsModalOpen ] = useState( false );

  return (
    <section className="bg-white roboto-condensed">
      <div className="container pt-4 pb-8 text-center">
        <h1 className="flex justify-center text-[20px] font-bold mb-3 text-white uppercase">
          <span className="px-3 rounded-tl-lg rounded-bl-lg py-1 bg-green-500">
            Turkçe konuş
          </span>
          <span className="px-3 py-1 bg-red-600 rounded-tr-lg rounded-br-lg">
            100% sertifika
          </span>
        </h1>
        <h3 className="font-bold mb-2">
          <span className="text-[19px]">KURSIMIZ ORQALI SIZNI 0 DAN 3 OYDA</span>
          <br />
          <span className="text-[17.5px]">B2 SERTIFIKAT DARAJASIGA CHIQARAMIZ</span>
        </h3>

        <div className="mb-2">
          <h3 className="font-bold"> <span className="text-[15.8px]">IMTIHONGA KIRIB SERTIFIKAT OLOLMASANGIZ</span>
            <br />
            <span className="text-[23.5px] text-red-600">PULINGIZNI 100% QAYTARAMIZ</span></h3>
        </div>

        <div className="relative max-w-xl mx-auto mb-10">
          <LazyLoadImage
            className="mx-auto mb-8 rounded-3xl w-[95%] object-cover"
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
              className="flex -mt-10 z-10 font-bold bg-blue-500 text-white px-8 py-2 rounded-xl text-[23px] hover:bg-red-700 transition-colors animate-pulseGlow"
            >
              TEZROQ MA'LUMOT OLISH
            </a>
            {/* <p>Sizni sertifikatli qilmaguncha qo'ymaymiz !</p> */}
            {/* <p className="text-[14px]">Yuqoridagi "Adminga yozish" tugmasini bosing. <br /> Sizga kurs va narxlari haqidagi ma'lumotlar <br /> adminimiz tomonidan yuborib qo'yiladi.</p> */}
          </div>

        </div>

        <div className="max-w-3xl mx-auto font-bold mb-8">
          <h2 className="inline-block text-[17px] py-2 px-3 rounded-lg bg-red-600 text-white mb-4">
            FAQAT MAY OYI UCHUN 3+1 CHEGIRMASI
          </h2>
          <p>
            MAY OYIDA 3 OYLIK KURSIMIZGA YOZILSANGIZ
            <br />
            <span className="text-red-600">SENTABRDAGI IMTIHONGACHA BEPUL O'QIYSIZ</span>
          </p>
        </div>

      </div>
      <RegisterModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen( false )}
      />
    </section>
  );
}
