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
          <h2 className='text-2xl text-yellow-500 font-bebas'>Turk tili hamjamiyatiga xush kelibsiz!</h2>
        </div>
        <div className="inline-block rounded-full border border-black border-dashed px-8 py-2 mb-2">
          4-5-6-yanvar | Soat 20:30 da
        </div>
        <h3 className="text-md font-bold mb-4">
          Turk tili bo'yicha ekspert IRODAHOCA va UZTURK o'quv markazi tomonidan 3 kunlik onlayn vebinar
        </h3>

        <h1 className="text-3xl font-bold mb-3"><span className='text-green-600'>SERTIFIKAT</span> <span className='text-red-600'>SIRLARI</span></h1>

        <div className="max-w-3xl mx-auto mb-8">
          <h2 className="text-lg font-semibold mb-4">
            Qanday qilib 3 oy ichida turk tilini o'rganib, sertifikat olish mumkin ?
          </h2>

          <p className="text-sm mb-3">
            3 kun vaqt ajratsangiz o'zim o'rgataman 😉
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
              className=" -mt-14 z-10 bg-red-600 text-white px-12 py-4 rounded-full text-xl hover:bg-red-700 transition-colors animate-pulseGlow"
            >
              ISHTIROK ETISH
            </button>
          </div>
          <p className="text-xl font-bold text-red-600">BEPUL</p>
          <span className="text-sm">100% sertifikatli qiladigan sirlarni bilib oling</span>
        </div>
      </div>

      <RegisterModal isOpen={isModalOpen} onClose={() => setIsModalOpen( false )} />
    </div> )
}

