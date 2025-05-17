/* eslint-disable react/no-unescaped-entities */

import { useState } from 'react'
import RegisterModal from '../../../components/registeration-modal'

import ReactPixel from 'react-facebook-pixel';

import { LazyLoadImage } from 'react-lazy-load-image-component'

import irodahoca from '../../../assets/irodahoca-new-year.webp'
import Timer from '../../../components/timer'

export default function MasterclassPage1() {


  ReactPixel.init( '995937562693005' );
  ReactPixel.pageView(); // For page load
  ReactPixel.track( 'PageView' ); // Custom events

  const [ isModalOpen, setIsModalOpen ] = useState( false )

  return (
    <div>
      <div className="container mx-auto px-3 pt-4 pb-8 text-center">
        <div className="uppercase inline-block rounded-lg border border-black border-dashed px-2 py-2 mb-2">
          22-23-24-may | 20:30 | online masterklass
        </div>
        <h2 className="text-[25px] font-semibold uppercase">
          Turk tilini 0 dan o'rganib
        </h2>
        <h1 className="flex justify-center text-xl uppercase font-bold mb-1 text-white"><span className='px-3 rounded-tl-lg rounded-bl-lg py-1 bg-green-500'>3 oyga</span> <span className='px-3 py-1 bg-red-600 rounded-tr-lg rounded-br-lg'>bormasdan</span></h1>
        <div className="max-w-3xl mx-auto mb-2">
          <h2 className="font-semibold mb-4 uppercase">
            <span className='text-[23px]'>100% sertifikatli bo'lish va</span> <br /> <span className='text-[21px]'>erkin gapira olish mumkinmi?</span>
          </h2>
          <p className="text-[15px] mb-4">
            3 kunlik bepul online masterklassda bilib olasiz. <br />
            Hoziroq quyidagi tugmani bosib ro'yxatdan o'ting.
          </p>
        </div>

        <div className="relative max-w-xl mx-auto">
          <LazyLoadImage
            rel="preload"
            className="mx-auto rounded-3xl"
            alt="Irodahoca"
            width="300px"
            fetchPriority='high'
            effect="blur"
            src={irodahoca} />

          <div className="flex items-center justify-center gap-4 mb-1">
            <button
              onClick={() => { setIsModalOpen( true ); ReactPixel.track( 'Lead' ); }}
              className="flex items-center gap-2 font-bold -mt-10 z-10 bg-red-600 text-white px-12 py-4 rounded-lg text-xl hover:bg-red-700 transition-colors animate-pulseGlow"
            >
              <span>RO'YXATDAN O'TISH</span>
              <Timer minute={2} className='text-xl font-bold' />
            </button>
          </div>
          <h3 className='text-2xl mb-1 text-red-500'>BEPUL <del>500.000 SO'M</del></h3>
          <h3 className='mb-2 text-[15px] bg-green-500 inline-block px-2 text-white rounded-md'>
            Ro'yxatdan o'tganlar uchun sovg'a
          </h3>
          <div className='flex justify-center items-center gap-2'>
            <div>
              <span className='text-4xl'>🎁</span>
            </div>
            <div>
              <h3 className='text-[18px]'>
                "Turkcha so'zlashamiz kitobi"
              </h3>
              <p className='text-[11.5px]'>Turk tilida eng ko'p ishlatiladigan 500 ta gap</p>
            </div>
          </div>
        </div>
      </div>
      <RegisterModal isOpen={isModalOpen} onClose={() => setIsModalOpen( false )} />
    </div> )
}