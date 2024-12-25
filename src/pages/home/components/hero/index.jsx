/* eslint-disable react/no-unescaped-entities */

import { useState } from 'react'
import RegisterModal from '../../../../components/registeration-modal'

import irodahoca from '../../../../assets/irodahoca.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export default function Page() {
  const [ isModalOpen, setIsModalOpen ] = useState( false )

  return (
    <div className="min-h-screen bg-pink-100">
      <div className="container mx-auto px-3 py-8 text-center">
        <div className="inline-block rounded-full border border-black border-dashed px-8 py-2 mb-2">
          4-5-6-yanvar | Soat 20:30 da
        </div>

        <p className="text-md mb-4">
          Turk tili bo'yicha ekspert IRODAHOCA va UZTURK o'quv markazi tomonidan 3 kunlik onlayn vibenar
        </p>

        <h1 className="text-4xl font-bold mb-3">SERTIFIKAT SIRLARI</h1>

        <div className="max-w-3xl mx-auto mb-8">
          <h2 className="text-xl font-semibold mb-4">
            Qanday qilib 3 oy ichida turk tilidan B2 sertifikatga erishish mumkin ?
          </h2>

          <p className="text-sm mb-3">
            3 kun vaqt ajratsangiz o'zim o'rgataman 😉
          </p>
        </div>

        <div className="relative max-w-xl mx-auto">
          <LazyLoadImage
            className="mx-auto mb-8 rounded-3xl w-full"
            alt="Irodahoca"
            effect="blur"
            wrapperProps={{
              style: { transitionDelay: "0.5s" },
            }}
            src={irodahoca} />

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setIsModalOpen( true )}
              className="bg-red-600 text-white px-12 py-4 rounded-full text-xl hover:bg-red-700 transition-colors"
            >
              ISHTIROK ETISH
            </button>
            <span className="text-2xl font-bold">BEPUL</span>
          </div>
        </div>
      </div>

      <RegisterModal isOpen={isModalOpen} onClose={() => setIsModalOpen( false )} />
    </div> )
}

