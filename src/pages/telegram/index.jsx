/* eslint-disable react/no-unescaped-entities */

import { ArrowDown } from 'lucide-react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import irodahoca from '../../assets/irodahoca-new.jpg'

export default function Telegram() {
  return (
    <div className="bg-white">
      <main className="container mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              Oxirgi qadam qoldi 🥳
            </h1>
            <p className="text-sm md:text-2xl text-gray-600 max-w-xl">
              Jonli efirda qatnashish uchun quyidagi ko'k tugmani bosib yopiq kanalga obuna bo'ling!
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
              <a
                href='https://t.me/+P8GmxXVQrbs4ZWRi'
                className="w-4/5 flex items-center justify-center gap-2 mx-auto bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 text-xl rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-slide"
              >
                <span>OBUNA BO'LISH</span>
                <img width="30" height="30" src="https://optim.tildacdn.one/tild3836-6439-4334-a334-663162313433/-/resize/104x/-/format/webp/492-4925781_telegram.png" alt="Telegram" />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 relative">
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
          </div>
        </div>
      </main>
    </div>
  )
}

