/* eslint-disable react/no-unescaped-entities */

import { useState } from 'react'
import { CircleDotIcon } from 'lucide-react'
import RegisterModal from '../../../../components/registeration-modal'

export default function Plans() {
  const [ isModalOpen, setIsModalOpen ] = useState( false )

  const questions = [
    {
      text: "UZTURK o'quv markazimizning 1000 lab o'quvchilarda sinab ko'rilgan sara metodikalar"
    },
    {
      text: "90% o'quvchilarimizni 3 oyda B2 va C1 sertifikatga erishtirgan texnikalarimiz"
    },
    {
      text: "Turk tilini tez va oson o'rganish usullari"
    }
  ]

  return (
    <div className="bg-pink-100">
      <div className="max-w-2xl mx-auto px-4 py-12 space-y-4">
        <div className="space-y-6 text-center">
          <h1 className="text-2xl font-bold">
            <span className="bg-green-600 text-white py-2 ps-4 pe-2 rounded-tl-xl rounded-bl-xl"> SERTIFIKAT </span> <span className="bg-red-600 py-2 text-white ps-2 pe-4 rounded-tr-xl rounded-br-xl">SIRLARI</span>
          </h1>
          <p className="text-xl font-medium">4-5-6-yanvar</p>
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-center">
            Quyidagilarni o'rganasiz
          </h2>

          <ul className="space-y-3">
            {questions.map( ( question, index ) => (
              <li key={index} className="flex items-start gap-1">
                <CircleDotIcon className="w-6 h-6 flex-shrink-0 mt-" />
                <span className="text-md">{question.text}</span>
              </li>
            ) )}
          </ul>

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setIsModalOpen( true )}
              className="bg-red-600 text-white px-12 py-4 rounded-full text-xl hover:bg-red-700 transition-colors"
            >
              ISHTIROK ETISH
            </button>
          </div>

          <RegisterModal isOpen={isModalOpen} onClose={() => setIsModalOpen( false )} />
        </div>
      </div>
    </div>
  )
}