/* eslint-disable react/no-unescaped-entities */

import { useState, useEffect } from 'react'

export default function CountdownTimer() {
  const [ timeLeft, setTimeLeft ] = useState( {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  } )

  useEffect( () => {
    // Set target date in Tashkent timezone (UTC+5)
    const targetDate = new Date( '2025-01-11T00:00:00+05:00' ).getTime()

    const timer = setInterval( () => {
      // Get current time in Tashkent
      const now = new Date().toLocaleString( 'en-US', { timeZone: 'Asia/Tashkent' } )
      const tashkentTime = new Date( now ).getTime()
      const difference = targetDate - tashkentTime

      if ( difference > 0 ) {
        setTimeLeft( {
          days: Math.floor( difference / ( 1000 * 60 * 60 * 24 ) ),
          hours: Math.floor( ( difference % ( 1000 * 60 * 60 * 24 ) ) / ( 1000 * 60 * 60 ) ),
          minutes: Math.floor( ( difference % ( 1000 * 60 * 60 ) ) / ( 1000 * 60 ) ),
          seconds: Math.floor( ( difference % ( 1000 * 60 ) ) / 1000 )
        } )
      } else {
        clearInterval( timer )
        setTimeLeft( { days: 0, hours: 0, minutes: 0, seconds: 0 } )
      }
    }, 1000 )

    return () => clearInterval( timer )
  }, [] )

  const timeUnits = [
    { label: 'Kun', value: timeLeft.days },
    { label: 'Soat', value: timeLeft.hours },
    { label: 'Daqiqa', value: timeLeft.minutes },
    { label: 'Soniya', value: timeLeft.seconds }
  ]

  return (
    <section className="bg-black py-10">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <h1 className="mb-3 px-3 py-3 text-2xl rounded-lg md:text-3xl lg:text-6xl bg-red-600 text-white font-bold text-center">
            NARX KO'TARILISHGA QOLGAN VAQT
          </h1>
          <p className="text-sm md:text-xl lg:text-2xl text-white text-center mb-12">
            Shoshiling, tarif narxlari ko'tarilishiga oz qoldi
          </p>

          <div className="grid grid-cols-4 gap-4 md:gap-8 lg:gap-12">
            {timeUnits.map( ( { label, value } ) => (
              <div key={label} className="flex flex-col items-center">
                <div className="bg-red-600 rounded-lg p-4 md:p-6 lg:p-8">
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white text-center">
                    {String( value ).padStart( 2, '0' )}
                  </div>
                </div>
                <div className="text-white mt-2 text-sm md:text-xl lg:text-2xl">
                  {label}
                </div>
              </div>
            ) )}
          </div>
        </div>
      </div>
    </section>
  )
}