/* eslint-disable react/no-unescaped-entities */

import { ArrowDown } from 'lucide-react'
// import { LazyLoadImage } from 'react-lazy-load-image-component'

import ReactPixel from 'react-facebook-pixel';

// import irodahoca from '../../assets/irodahoca-new-sm.webp'

export default function Telegram() {

  ReactPixel.init( '1194225341879374' );
  ReactPixel.pageView(); // For page load
  ReactPixel.track( 'PageView' ); // Custom events

  return (
    <div className="bg-amber-50 flex h-screen items-center justify-center">
      <main className="container mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
            <h1 className="bg-red-500 py-3 rounded-lg text-white text-3xl font-condensed uppercase md:text-6xl font-bold">
              Oxirgi qadam qoldi!
            </h1>
            <p className="text-[17px] md:text-2xl text-gray-600 max-w-xl">
              Masterklassda qatnashish uchun quyidagi "TELEGRAMGA O'TISH" tugmasini bosing.
            </p>
            {/* Arrows and Button */}
            <div className="relative pt-3 pb-4">
              <div className="flex justify-center md:justify-start space-x-4 mb-6">
                {[ ...Array( 5 ) ].map( ( _, i ) => (
                  <ArrowDown
                    key={i}
                    className="w-6 h-6 text-blue-500 animate-bounce"
                    style={{
                      animationDelay: `${i * 0.2}s`
                    }}
                  />
                ) )}
              </div>
              <button
                className="flex items-center justify-center gap-2 mx-auto bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 text-xl rounded-xl shadow-lg hover:shadow-xl"
                onClick={() => {
                  window.location.href = 'https://t.me/turktili_masterklass';
                  ReactPixel.track( "Lead" );
                }}
              >
                <span>TELEGRAMGA O'TISH</span>
                <img width="30" height="30" src="https://optim.tildacdn.one/tild3836-6439-4334-a334-663162313433/-/resize/104x/-/format/webp/492-4925781_telegram.png" alt="Telegram" />
              </button>
            </div>
            <p className="text-center text-[18px] md:text-2xl text-gray-600 max-w-xl">
              Bismillah deya telegram kanalga o'ting <br /> va obuna bo'lib doimiy kuzatib boring!
            </p>
          </div>

          <div className='text-center'>
            <h3 className='mb-2 text-[14px] bg-green-500 inline-block px-2 text-white rounded-sm'>
              Quyidagi sovg'a sizni telegramda kutib turibdi
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

          {/* Image */}
          {/* <div className="w-full md:w-1/2 relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              <LazyLoadImage
                src={irodahoca}
                alt="Irodahoca"
                className="relative z-10 rounded-full w-full"
                fetchPriority='high'
                effect="blur"
                wrapperProps={{
                  style: { transitionDelay: "0.5s" },
                }}
              />
            </div>
          </div> */}
        </div>
      </main >
    </div >
  )
}

