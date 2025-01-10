/* eslint-disable react/no-unescaped-entities */

import { LazyLoadImage } from 'react-lazy-load-image-component'

import irodahoca from '../../../../assets/irodahoca.png'

export default function Page() {

  return (
    <section className="bg-pink-100">
      <div className="container pt-4 pb-8 text-center">
        <div className="inline-block rounded-full border border-black border-dashed px-8 py-2 mb-2">
          Start: 15-yanvar
        </div>
        <h3 className="text-md font-bold mb-4">
          Turk tili bo'yicha ekspert IRODAHOCA va UZTURK o'quv markazi tomonidan ishlab chiqilgan onlayn
        </h3>

        <h1 className="flex justify-center text-3xl font-bold mb-3 text-white"><span className='px-3 rounded-tl-lg rounded-bl-lg py-1 bg-green-500'>100%</span> <span className='px-3 py-1 bg-red-600 rounded-tr-lg rounded-br-lg'>SERTIFIKAT</span></h1>

        <div className="max-w-3xl mx-auto mb-8">
          <h2 className="text-md font-bold mb-4">
            nomli turk tili kurs orqali 3 oy ichida turk tilini o'rganing va sertifikatli bo'ling !
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
            <a href="#course-audience" className="flex -mt-14 z-10 bg-red-600 text-white px-12 py-2 rounded-xl text-xl hover:bg-red-700 transition-colors animate-pulseGlow">
              BATAFSIL BILISH
            </a>
          </div>
          <div className="text-sm">
            <p>Kursimiz haqida batafsil tanishib chiqing.</p>
            <p>Va o'zingizga qulay ta'rifni tanlang.</p>
          </div>
        </div>
      </div>
    </section> )
}

