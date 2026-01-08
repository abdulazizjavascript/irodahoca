/* eslint-disable react/no-unescaped-entities */

import { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import ReactPixel from 'react-facebook-pixel';

import RegisterModal from '../../../components/registeration-modal'
import Timer from '../../../components/timer'

import irodahoca from '../../../assets/irodahoca-sm-size.webp'
import Gifts from '../../../components/gifts';

export default function MasterclassPage2() {

  ReactPixel.init( '845233971722269' );
  ReactPixel.pageView(); // For page load
  ReactPixel.track( 'PageView' ); // Custom events

  const [ isModalOpen, setIsModalOpen ] = useState( false )

  return (
    <div>
      <div className="container mx-auto px-3 pt-4 pb-8 text-center">
        <div className="inline-block rounded-lg border border-black border-dashed px-2 py-2 mb-2">
          16-17-18-yanvar | soat 20:00 | bepul online dars
        </div>
        <h2 className="font-semibold mb-2 uppercase">
          <span className='text-[25px]'>O'quvchilarimiz turk tilini</span> <br /> <span className='text-[17px]'>bizning maxsus texnikalar yordamida</span>
        </h2>
        <h1 className="flex justify-center text-[20px] uppercase font-bold mb-3 text-white"><span className='px-3 rounded-tl-lg rounded-bl-lg py-1 bg-green-500'>0 dan o'rganib</span> <span className='px-3 py-1 bg-red-600 rounded-tr-lg rounded-br-lg'>atigi 2-3 oyda</span></h1>
        <div className="max-w-3xl mx-auto mb-2">
          <h2 className="font-semibold mb-4 uppercase">
            <span className='text-[17.5px]'>turklardek gapirishni o'rganishyapti</span> <br />
            <span className='text-[15.2px]'>va til sertifikatlarini qo'lga kiritishyapti.</span>
          </h2>
          <p className="mb-4">
            <span className='text-[15px]'>
              Bu texnikalar 3 kunlik bepul darsimizda o'rgatiladi.
            </span> <br />
            <span className="text-[15px]">
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
              }}
              className="flex items-center gap-2 font-bold -mt-14 z-10 bg-green-600 text-white px-12 py-4 rounded-lg text-xl hover:bg-red-700 transition-colors animate-pulseGlow"
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