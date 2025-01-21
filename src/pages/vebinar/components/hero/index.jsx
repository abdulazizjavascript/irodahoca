/* eslint-disable react/no-unescaped-entities */

import { useState } from 'react'
import RegisterModal from '../../../../components/registeration-modal'

import irodahoca from '../../../../assets/irodahoca.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export default function Page() {
  const [ isModalOpen, setIsModalOpen ] = useState( false )

  return (
    <div className="bg-pink-100">
      <div className="container mx-auto px-3 pt-4 pb-8 text-center">
        <div className='bg-black rounded-md py-1 mb-2'>
          <h2 className='text-xl text-yellow-500 font-bebas'>Bo'lajak talaba, magistr, doktorantlar !</h2>
        </div>
        <div className="inline-block rounded-full border border-black border-dashed px-8 py-2 mb-2">
          26-yanvar | Soat 20:00 da
        </div>
        <h3 className="text-md font-bold mb-4">
          Turk tili bo'yicha ekspert IRODAHOCA va UZTURK o'quv markazi tomonidan turk tili orqali
        </h3>
        <h1 className="flex justify-center text-2xl font-bold mb-3 text-white"><span className='px-3 rounded-tl-lg rounded-bl-lg py-1 bg-green-500'>0 DAN 3 OYDA</span> <span className='px-3 py-1 bg-red-600 rounded-tr-lg rounded-br-lg'>SERTIFIKAT</span></h1>
        <p className="text-md font-bold mb-4">
          nomli 2 kunlik onlayn bepul masterklass
        </p>
        <div className="max-w-3xl mx-auto mb-2">
          <h2 className="text-lg font-semibold mb-4 text-red-500">
            Sertifikatsiz qolib ketishni istamasangiz, bu masterklass siz uchun juda-juda muhim.
          </h2>
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
              className="font-bold -mt-14 z-10 bg-red-600 text-white px-12 py-4 rounded-full text-xl hover:bg-red-700 transition-colors animate-pulseGlow"
            >
              ISHTIROK ETISH
            </button>
          </div>
          <p className="text-xl font-bold text-red-600">BEPUL</p>
          <p className="text-sm mb-3">
            Bu 2 kun uchun sizga turk tilidan 3 oy ichida sertifikatni 100% naqd qilish yo'llarini o'rganasiz.
          </p>
        </div>
      </div>

      <RegisterModal isOpen={isModalOpen} onClose={() => setIsModalOpen( false )} />
    </div> )
}

