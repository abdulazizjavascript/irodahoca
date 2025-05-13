/* eslint-disable react/no-unescaped-entities */

import { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import ReactPixel from 'react-facebook-pixel';

import RegisterModal from '../../../components/registeration-modal'
import Timer from '../../../components/timer'

import irodahoca from '../../../assets/irodahoca-sm-size.webp'

export default function MasterclassPage2() {

  ReactPixel.init( '559470840532153' );
  ReactPixel.pageView(); // For page load
  ReactPixel.track( 'PageView' ); // Custom events

  const [ isModalOpen, setIsModalOpen ] = useState( false )

  return (
    <div>
      <div className="container mx-auto px-3 pt-4 pb-8 text-center">
        <div className="inline-block rounded-lg border border-black border-dashed px-2 py-2 mb-2">
          22-23-24-may | soat 20:30 | bepul masterklass
        </div>
        <h2 className="text-[22px] font-semibold mb-2 uppercase">
          Bu texnikalar orqali
        </h2>
        <h1 className="flex justify-center text-[19px] uppercase font-bold mb-3 text-white"><span className='px-3 rounded-tl-lg rounded-bl-lg py-1 bg-green-500'>o'quvchilarimiz</span> <span className='px-3 py-1 bg-red-600 rounded-tr-lg rounded-br-lg'>0 dan 2.5 oyda</span></h1>
        <div className="max-w-3xl mx-auto mb-2">
          <h2 className="font-semibold mb-4 uppercase">
            <span className='text-[20px]'>Turklardek gapirishni o'rganib</span> <br />
            <span className='text-[23px]'>B2 sertifikatli bo'lishyapti.</span>
          </h2>
          <p className="mb-4">
            <span className='text-[13px]'>
              Bu texnikalar 3 kunlik bepul masterklassda o'rgatiladi.
            </span> <br />
            <span className="text-[14px]">
              Hoziroq quyidagi tugmani bosib ro'yxatdan o'ting.
            </span>
          </p>
        </div>

        <div className="relative max-w-xl mx-auto">
          <LazyLoadImage
            rel="preload"
            className="mx-auto mb-8 rounded-3xl"
            alt="Irodahoca"
            width="330px"
            fetchPriority='high'
            effect="blur"
            src={irodahoca} />

          <div className="flex items-center justify-center gap-4 mb-2">
            <button
              onClick={() => {
                setIsModalOpen( true );
                ReactPixel.track( "Lead" );
              }}
              className="flex items-center gap-2 font-bold -mt-14 z-10 bg-green-600 text-white px-12 py-4 rounded-lg text-xl hover:bg-red-700 transition-colors animate-pulseGlow"
            >
              <span>RO'YXATDAN O'TISH</span>
              <Timer minute={2} className='text-xl font-bold' />
            </button>
          </div>
          <h3 className='mb-2 text-[15px] bg-red-500 inline-block px-2 text-white rounded-md'>
            Ro'yxatdan o'tganlar uchun sovg'a
          </h3>
          <div className='relative z-10 flex justify-center items-center gap-2'>
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