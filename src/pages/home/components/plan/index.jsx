/* eslint-disable react/no-unescaped-entities */
import { CircleDotIcon } from 'lucide-react'

export default function Plans() {
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
    <div className="max-w-2xl mx-auto px-4 py-12 space-y-4 bg-pink-100">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">
          <span className="bg-green-600 text-white ps-4 pe-2 rounded-tl-xl rounded-bl-xl"> SERTIFIKAT </span> <span className="bg-red-600 text-white ps-2 pe-4 rounded-tr-xl rounded-br-xl">SIRLARI</span>
        </h1>
        <p className="text-2xl font-medium">4-5-6-YANVAR</p>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-center">
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
      </div>
    </div>
  )
}