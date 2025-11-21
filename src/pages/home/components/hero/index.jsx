/* eslint-disable react/no-unescaped-entities */

import { LazyLoadImage } from 'react-lazy-load-image-component'

import ReactPixel from 'react-facebook-pixel';

import irodahoca from '../../../../assets/irodahoca.png'

export default function Page() {

  ReactPixel.init( '715181871137398' );
  ReactPixel.pageView(); // For page load
  ReactPixel.track( 'PageView' ); // Custom events

  return (
    <section className="bg-pink-100">
      <div className="container pt-4 pb-8 text-center">
        <h3 className="text-[12px] font-bold mb-4">
          Turk tili bo'yicha 5 yillik tajriba va xalqaro sertifikatga ega
          <br /> <span className='text-[12.5px]'>C1 darajali filolog, UZTURK markazi asoschi IrodaHoca</span>
          <br /> <span className='text-[14.5px]'>tomonidan ishlab chiqilgan online turk tili kursi</span>
        </h3>

        <h1 className="flex justify-center text-3xl font-bold mb-3 text-white"><span className='px-3 rounded-tl-lg rounded-bl-lg py-1 bg-green-500'>100%</span> <span className='px-3 py-1 bg-red-600 rounded-tr-lg rounded-br-lg'>SERTIFIKAT</span></h1>

        <div className="max-w-3xl mx-auto mb-8">
          <h2 className="font-bold mb-4">
            <span className='text-md'>Turk tilini 0 dan 2-3 oyda haftada 7 kun 3 ta</span> <br /> <span className='text-[16.5px]'>ustoz bilan o'qitib sizni sertifikatli qilamiz</span> <br /> <span className='text-[20.5px] text-red-600'>aks holda pulingizni qaytaramiz !</span>
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
            <button onClick={() => { ReactPixel.track( 'Complete registration' ); window.location.href = 'https://t.me/irodahoca_support_bot?start=sales-site'; }} className="flex -mt-14 z-10 font-bold bg-red-600 text-white px-12 py-2 rounded-xl text-xl hover:bg-red-700 transition-colors animate-pulseGlow">
              RO'YXATDAN O'TISH
            </button>
          </div>
          <div className="text-sm">
            <p>Sizni sertifikatli qilmaguncha qo'ymaymiz !</p>
            <h2 className='my-2 text-[14px] bg-red-500 inline-block p-2 text-white rounded-md'>
              2 dars bepul va ro'yxatdan o'tsangiz 8 ta sovg'a
            </h2>
            <ul className='px-6'>
              <li className='bg-green-500 text-[12px] my-2 py-1 rounded-md text-white'>1. Turk tilining alifbosi video darsi</li>
              <li className='bg-green-500 text-[12px] my-2 py-1 rounded-md text-white'>2. Merhaba-singilmanizm video darsi</li>
            </ul>
            <ul className='px-6'>
              <li className='bg-green-500 text-[12px] my-2 py-1 rounded-md text-white'>3. Suniy intellekt orqali turk tili o'rganish</li>
              <li className='bg-green-500 text-[12px] my-2 py-1 rounded-md text-white'>4. Lug'at yodlashning 13 ta sirli texnikalari</li>
              <li className='bg-green-500 text-[12px] my-2 py-1 rounded-md text-white'>5. Turk tiliga kerakli o'zbek tili grammatikasi</li>
              <li className='bg-green-500 text-[12px] my-2 py-1 rounded-md text-white'>6. "Turk tili orqali 2-3 oyda til sertifikati" video</li>
              <li className='bg-green-500 text-[12px] my-2 py-1 rounded-md text-white'>7. Turk tilidagi barcha eng zo'r darsliklar kanali</li>
              <li className='bg-green-500 text-[12px] my-2 py-1 rounded-md text-white'>8. Turk tili o'rganuvchilari uchun motivatsion rolik</li>
              <li className='bg-green-500 text-[12px] my-2 py-1 rounded-md text-white'>9. 500 ta gapdan iborat turkcha so'zlashamiz kitobi</li>
              <li className='bg-green-500 text-[12px] my-2 py-1 rounded-md text-white'>10. 500 ta eng ko'p ishlatiladigan turkcha so'zlar kitobi</li>
            </ul>
          </div>
          <div className="flex items-center justify-center gap-4 mt-10">
            <button onClick={() => { ReactPixel.track( 'Complete registration' ); window.location.href = 'https://t.me/irodahoca_support_bot?start=sales-site'; }} className="flex font-bold bg-red-600 text-white px-12 py-2 rounded-xl text-xl hover:bg-red-700 transition-colors animate-pulseGlow">
              RO'YXATDAN O'TISH
            </button>
          </div>
        </div>
      </div>
    </section> )
}

