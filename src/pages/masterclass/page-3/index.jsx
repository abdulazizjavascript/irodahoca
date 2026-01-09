/* eslint-disable react/no-unescaped-entities */

import { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import ReactPixel from 'react-facebook-pixel';

import RegisterModal from '../../../components/registeration-modal'
import Timer from '../../../components/timer'

import irodahoca from '../../../assets/irodahoca-magistr-resize.png'
import Gifts from '../../../components/gifts';

export default function MasterclassPage3() {

  ReactPixel.init( '845233971722269' );
  ReactPixel.pageView(); // For page load
  ReactPixel.track( 'PageView' ); // Custom events

  const [ isModalOpen, setIsModalOpen ] = useState( false )

  return (
    <div className='max-w-[390px] mx-auto'>
      <div className="container mx-auto px-3 pt-4 pb-8 text-center">
        <div className="inline-block rounded-lg border border-black border-dashed px-2 py-2 mb-2">
          16-17-18-yanvar | soat 20:00 | bepul online dars
        </div>
        <h2 className="text-[22px] font-semibold mb-2 uppercase">
          TURK TILINI 0 DAN ATIGI 2-3 OYDA
        </h2>
        <h1 className="flex justify-center text-[20px] uppercase font-bold mb-3 text-white"><span className='px-3 rounded-tl-lg rounded-bl-lg py-1 bg-green-500'>TEZ VA OSONLIK</span> <span className='px-3 py-1 bg-red-600 rounded-tr-lg rounded-br-lg'>BILAN O'RGANIB</span></h1>

        <div className="max-w-3xl mx-auto mb-2">
          <h2 className="font-semibold mb-4 uppercase">
            <span className='text-[16px]'>Bemalol gapira oladigan darajaga chiqish</span> <br />
            <span className='text-[22px]'>100% sertifikatli bo'lish sirlari</span>
          </h2>
        </div>

        <div className="flex justify-between h-[250px] relative">
          <ul className='flex justify-center flex-col pl-[10px]'>
            <li className="list-item mb-2 w-7/12 text-left text-[12px]">
              1. Turk tilini 0 dan atigi 2-3 oyda ham ish ham o'qish ham oilani eplagan holatda sertifikat olish yo'llarini o'rganasiz.
            </li>
            <li className="list-item mb-2 w-7/12 text-left text-[12px]">
              2. Turk tilidagi lug'atlarni yodlay olmaslik yoki tez unutib qo'yish, gapira olmaslik, dangasalik qilib tashlab qo'yish kabi muammolaringizga yechim topasiz.
            </li>
            <li className="list-item mb-2 w-5/12 text-left text-[12px]">
              3. Turk tilini tez va oson o'rganish usullari bilib olasiz.
            </li>
          </ul>
          <div className='absolute right-[-5px]'>
            <LazyLoadImage
              className='h-[250px]'
              rel="preload"
              alt="Irodahoca"
              fetchPriority='high'
              effect="blur"
              src={irodahoca} />
          </div>
        </div>
        <div className="max-w-xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-2">
            <button
              onClick={() => {
                setIsModalOpen( true );
              }}
              className="flex items-center gap-2 font-bold z-10 bg-green-600 text-white px-12 py-4 rounded-lg text-xl hover:bg-red-700 transition-colors animate-pulseGlow"
            >
              <span>RO'YXATDAN O'TISH</span>
              <Timer minute={2} className='text-xl font-bold' />
            </button>
          </div>
          <h3 className='text-[30px] font-bold mb-1 text-red-500'>BEPUL <del>500.000 SO'M</del></h3>
          <Gifts titleClassName="bg-red-500" />
        </div>
      </div>
      <RegisterModal isOpen={isModalOpen} onClose={() => setIsModalOpen( false )} />
    </div> )
}