/* eslint-disable react/no-unescaped-entities */

import { useState } from 'react'
import RegisterModal from '../../../components/registeration-modal'

import ReactPixel from 'react-facebook-pixel';

import { LazyLoadImage } from 'react-lazy-load-image-component'

import irodahoca from '../../../assets/irodahoca-new-year-1.webp'
import Timer from '../../../components/timer'
import Gifts from '../../../components/gifts';

export default function MasterclassPage1() {


  ReactPixel.init( '1496245968139998' );
  ReactPixel.pageView(); // For page load
  ReactPixel.track( 'PageView' ); // Custom events

  const [ isModalOpen, setIsModalOpen ] = useState( false )

  return (
    <div>
      <div className="container mx-auto px-3 pt-4 pb-8 text-center">
        <div className="inline-block rounded-lg border border-black border-dashed px-2 py-2 mb-2">
          16-17-18-yanvar | soat 20:00 | online bepul dars
        </div>
        <h2 className="text-[28px] font-semibold uppercase">
          Qanday qilib turk tilini
        </h2>
        <h1 className="flex justify-center text-xl font-bold mb-1 text-white">
          <span className='px-3 rounded-tl-lg rounded-bl-lg py-1 bg-green-500'>0 DAN O'RGANIB</span>
          <span className='px-3 py-1 bg-red-600 rounded-tr-lg rounded-br-lg'>ATIGI 2-3 OYDA</span></h1>
        <div className="max-w-3xl mx-auto mb-2">
          <h2 className="font-semibold mb-4 uppercase">
            <span className='text-[24px]'>100% sertifikatli bo'lish va</span> <br /> <span className='text-[23.5px]'>erkin gapira olish mumkin?</span>
          </h2>
          <p className="text-[15px] mb-4">
            3 kunlik bepul online darsda bilib olasiz. <br />
            Hoziroq quyidagi tugmani bosib ro'yxatdan o'ting.
          </p>
        </div>

        <div className="relative max-w-xl mx-auto">
          <LazyLoadImage
            rel="preload"
            className="mx-auto rounded-3xl"
            alt="Irodahoca"
            height="240px"
            width="300px"
            fetchPriority='high'
            effect="blur"
            src={irodahoca} />

          <div className="flex items-center justify-center gap-4 mb-1">
            <button
              onClick={() => { setIsModalOpen( true ); ReactPixel.track( 'Complete Registration' ); }}
              className="flex items-center gap-2 font-bold -mt-10 z-10 bg-red-600 text-white px-12 py-4 rounded-lg text-xl hover:bg-red-700 transition-colors"
            > 
              <span>RO'YXATDAN O'TISH</span>
              <Timer minute={2} className='text-xl font-bold' />
            </button>
          </div>
          <h3 className='text-[30px] font-bold mb-1 text-red-500'>BEPUL <del>500.000 SO'M</del></h3>
          <Gifts />
        </div>
      </div>
      <RegisterModal isOpen={isModalOpen} onClose={() => setIsModalOpen( false )} />
    </div> )
}