/* eslint-disable react/no-unescaped-entities */

import { useState } from 'react'
import RegisterModal from '../../../components/registeration-modal'

import irodahoca from '../../../assets/irodahoca.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Timer from '../../../components/timer'

export default function MasterclassPage1() {
  const [ isModalOpen, setIsModalOpen ] = useState( false )

  return (
    <div className="">
      <div className="container mx-auto px-3 pt-4 pb-8 text-center">
        <div className="inline-block rounded-lg border border-black border-dashed px-2 py-2 mb-2">
          22-23-24-may | soat 20:30 | bepul masterklass
        </div>
        <h3 className="text-xl font-bold mb-3">
          C1 darajali filolog Iroda Nasriddinova
        </h3>
        <h1 className="flex justify-center text-2xl uppercase font-bold mb-3 text-white"><span className='px-3 rounded-tl-lg rounded-bl-lg py-1 bg-green-500'>Turk tilida</span> <span className='px-3 py-1 bg-red-600 rounded-tr-lg rounded-br-lg'>0 dan 3 oyda</span></h1>
        <div className="max-w-3xl mx-auto mb-2">
          <h2 className="text-[22px] font-semibold mb-4 uppercase">
            100% sertifikatli bo'lish yoki <br /> erkin gapira olish mumkinmi?
          </h2>
          <p className="text-[15px] mb-4">
            3 kunlik bepul online masterklassda bilib olasiz. <br />
            Hoziroq quyidagi tugmani bosib ro'yxatdan o'ting.
          </p>
        </div>

        <div className="relative max-w-xl mx-auto">
          <LazyLoadImage
            className="mx-auto mb-8 rounded-3xl w-full object-cover h-[250px]"
            alt="Irodahoca"
            fetchPriority='high'
            effect="blur"
            src={irodahoca} />

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setIsModalOpen( true )}
              className="font-bold -mt-14 z-10 bg-red-600 text-white px-12 py-4 rounded-lg text-xl hover:bg-red-700 transition-colors animate-pulseGlow"
            >
              RO'YXATDAN O'TISH
            </button>
          </div>
          <Timer />
          <p className="text-xl font-bold text-red-600">BEPUL</p>
          <p className="text-sm mb-3">
            Bu 2 kun uchun sizga turk tilidan 3 oy ichida sertifikatni 100% naqd qilish yo'llarini o'rganasiz.
          </p>
        </div>
      </div>

      <RegisterModal isOpen={isModalOpen} onClose={() => setIsModalOpen( false )} />
    </div> )
}