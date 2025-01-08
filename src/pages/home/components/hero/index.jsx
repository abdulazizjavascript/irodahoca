/* eslint-disable react/no-unescaped-entities */

import { LazyLoadImage } from 'react-lazy-load-image-component'
import { ArrowDown } from 'lucide-react'

import irodahoca from '../../../../assets/irodahoca.png'

export default function Page() {

  return (
    <div className="bg-pink-100">
      <div className="container pt-4 pb-8 text-center">
        <h3 className="text-md font-bold mb-4">
          Turk tili bo'yicha ekspert IRODAHOCA va UZTURK o'quv markazi tomonidan ishlab chiqilgan onlayn
        </h3>

        <h1 className="text-3xl font-bold mb-3"><span className='text-green-600'>"100%</span> <span className='text-red-600'>SERTIFIKAT"</span></h1>

        <div className="max-w-3xl mx-auto mb-8">
          <h2 className="text-md font-bold mb-4">
            nomli turk tili kurs orqali 3 oy ichida turk tilidan sertifikatli bo'ling !
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
            <a href="#course" className="flex -mt-14 z-10 bg-red-600 text-white px-12 py-2 rounded-full text-xl hover:bg-red-700 transition-colors animate-pulseGlow">
              <ArrowDown className="w-6 h-6 text-white" />
              <ArrowDown className="w-6 h-6 text-white" />
              <ArrowDown className="w-6 h-6 text-white" />
            </a>
          </div>
          <p className="text-xl font-bold text-red-600">BATAFSIL</p>
          <span className="text-sm">Sizni sertifikatli qilmaguncha qo'ymaymiz</span>
        </div>
      </div>
    </div> )
}

