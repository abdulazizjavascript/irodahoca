/* eslint-disable react/no-unescaped-entities */

import { ArrowDown } from 'lucide-react'
// import { LazyLoadImage } from 'react-lazy-load-image-component'

import Gifts from '../../components/gifts';

// import irodahoca from '../../assets/irodahoca-new-sm.webp'

export default function Telegram() {

  return (
    <div className="bg-amber-50 flex h-screen items-center justify-center">
      <main className="container mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
            <h1 className="inline-block bg-red-500 p-3 rounded-lg text-white text-lg font-condensed uppercase md:text-6xl font-bold">
              BEPUL DARSGACHA Oxirgi qadam qoldi
            </h1>
            <p className="text-[17px] md:text-2xl text-gray-600 max-w-xl">
              Bepul online darsimizga qatnashish uchun <br /> "TELEGRAMGA O'TISH" tugmasini bosing.
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
                  window.location.href = 'https://t.me/turktili_bepul_dars/2';
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

          <h3 className='mb-2 text-[14px] bg-green-500 inline-block p-2 text-white rounded-md'>
            🎁 Ushbu sovg'alar sizni telegramda kutyapti 🥳
          </h3>
          <Gifts titleClassName="hidden" />
        </div>
      </main >
    </div >
  )
}

