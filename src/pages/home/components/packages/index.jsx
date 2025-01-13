/* eslint-disable react/no-unescaped-entities */

import { Check, Infinity } from 'lucide-react'
import AdminBtn from '../admin-btn'

export default function PricingTable() {
  const basicPlan = [
    "3 oy davom etadi",
    "Umrbod videolarga ruxsat",
    "Katta bitiruv oqshomi",
    "Sertifikat bilan taqdirlanish",
    "Quron xatm bo'ladi",
  ]
  const premiumPlan = [
    "Faqat ayollar uchun",
    "Kurator shug'ullanadi",
    "3 oy davom etadi",
    "Haftada 6 kun dars bo'ladi",
    "3 kun Irodahoca videolar",
    "Umrbod videolarga ruxsat",
    "3 kun kurator jonli dars",
    "Savol-javob qilinadi",
    "Lug'at so'raladi",
    "4 bosqich ustida ishlanadi",
    "Uyga vazifalar tekshiriladi",
    "Imtihonlar, musobaqalar bo'ladi",
    "15 kishilik telegram guruh",
    "Katta bitiruv oqshomi",
    "Sertifikat bilan taqdirlanish",
    "Quron xatm bo'ladi",
  ]
  const erkakPlan = [
    "Faqat erkaklar uchun",
    "4 yil turkiyaga o'qib kelgan kurator shug'ullanadi",
    "3 oy davom etadi",
    "Haftada 6 kun dars bo'ladi",
    "3 kun Irodahoca videolar",
    "Umrbod videolarga ruxsat",
    "3 kun kurator jonli dars",
    "Savol-javob qilinadi",
    "Lug'at so'raladi",
    "4 bosqich ustida ishlanadi",
    "Uyga vazifalar tekshiriladi",
    "Imtihonlar, musobaqalar bo'ladi",
    "15 kishilik telegram guruh",
    "Katta bitiruv oqshomi",
    "Sertifikat bilan taqdirlanish",
    "Quron xatm bo'ladi",
  ]
  const vipPlan = [
    "Faqat ayollar uchun",
    "Irodahoca shug'ullanadi",
    "3 oy davom etadi",
    "Haftada 6 kun dars bo'ladi",
    "3 kun Irodahoca videolar",
    "Umrbod videolarga ruxsat",
    "3 kun Irodahoca jonli dars",
    "Savol-javob qilinadi",
    "Lug'at so'raladi",
    "4 bosqich ustida ishlanadi",
    "Uyga vazifalar tekshiriladi",
    "Imtihonlar, musobaqalar bo'ladi",
    "20 kishilik telegram guruh",
    "Katta bitiruv oqshomi",
    "Sertifikat bilan taqdirlanish",
    "Quron xatm bo'ladi",
    "Yordamchi ustoz xizmati",
    "Ustoz bo'lish imkoniyati",
  ]
  return (
    <section id='plans' className="py-8">
      <div className="container">
        <h2 className="mb-6 text-center text-3xl font-bold bg-red-600 text-white py-4 rounded-xl">
          TA'RIFLAR
        </h2>

        <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-4">
          {/* Basic Plan */}
          <div className="relative border-2 border-blue-400 rounded-2xl flex flex-col overflow-hidden">
            <div className="bg-blue-500 py-2">
              <h3 className="text-center text-2xl font-bold text-white">MUSTAQIL</h3>
            </div>
            <div className="bg-blue-500 py-2 border-t border-blue-400">
              <p className="text-center text-lg text-white font-bold">FAQAT VIDEOLAR</p>
            </div>
            <div className="bg-blue-500 py-2 border-t border-blue-400">
              <p className="text-center text-lg text-white flex items-center justify-center gap-2">JOYLAR SONI: <span><Infinity /></span> </p>
            </div>
            <div className="p-6 flex-1">
              <ul className="space-y-4">
                {basicPlan.map( ( feature ) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-6 w-6 flex-shrink-0 text-blue-500" />
                    <span className="ml-3 text-base">{feature}</span>
                  </li>
                ) )}
              </ul>
              <div className="mt-8">
                <div className="flex flex-col items-center justify-center">
                  <span className="text-red-600">JAMI TO'LOV</span>
                  <span className="line-through text-gray-500">1.197.000 so'm</span>
                  <span className="line-through text-gray-500">1.047.000 so'm</span>
                  <span className="text-2xl font-bold text-red-600">897.000 so'm</span>
                  <span className="mt-2 inline-flex items-center justify-center gap-2 rounded-md text-xl bg-red-600 px-3 py-1 font-semibold text-white">
                    25%
                  </span>
                </div>
                <AdminBtn />
              </div>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="relative border-2 border-red-700 rounded-2xl flex flex-col overflow-hidden">
            <div className="bg-red-800 py-2">
              <h3 className="text-center text-2xl font-bold text-white">PREMIUM</h3>
            </div>
            <div className="bg-red-800 py-2 border-t border-red-700">
              <p className="text-center text-lg text-white font-bold">KURATORLIK TA'RIFI</p>
            </div>
            <div className="bg-red-800 py-2 border-t border-red-700">
              <p className="text-center text-lg text-white flex items-center justify-center gap-2">JOYLAR SONI: 40 / 60 </p>
            </div>
            <div className="p-6 flex-1">
              <ul className="space-y-4">
                {premiumPlan.map( ( feature ) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-6 w-6 flex-shrink-0 text-red-700" />
                    <span className="ml-3 text-base">{feature}</span>
                  </li>
                ) )}
              </ul>
              <div className="mt-8">
                <div className="flex flex-col items-center justify-center">
                  <span className="text-red-600">JAMI TO'LOV</span>
                  <span className="line-through text-gray-500">1.397.000 so'm</span>
                  <span className="line-through text-gray-500">1.197.000 so'm</span>
                  <span className="text-2xl font-bold text-red-600">997.000 so'm</span>
                  <span className="mt-2 inline-flex items-center justify-center gap-2 rounded-md text-xl bg-red-600 px-3 py-1 font-semibold text-white">
                    30%
                  </span>
                </div>
                <AdminBtn />
              </div>
            </div>
          </div>

          {/* Erkak Plan */}
          <div className="relative border-2 border-black rounded-2xl flex flex-col overflow-hidden">
            <div className="bg-black py-2">
              <h3 className="text-center text-2xl font-bold text-white">ERKAK</h3>
            </div>
            <div className="bg-black py-2 border-t border-gray-500">
              <p className="text-center text-lg text-white font-bold">KURATORLIK TA'RIFI</p>
            </div>
            <div className="bg-black py-2 border-t border-gray-500">
              <p className="text-center text-lg text-white flex items-center justify-center gap-2">JOYLAR SONI: 10 / 30 </p>
            </div>
            <div className="p-6 flex-1">
              <ul className="space-y-4">
                {erkakPlan.map( ( feature ) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-6 w-6 flex-shrink-0 text-black" />
                    <span className="ml-3 text-base">{feature}</span>
                  </li>
                ) )}
              </ul>
              <div className="mt-8">
                <div className="flex flex-col items-center justify-center">
                  <span className="text-red-600">JAMI TO'LOV</span>
                  <span className="line-through text-gray-500">1.597.000 so'm</span>
                  <span className="line-through text-gray-500">1.397.000 so'm</span>
                  <span className="text-2xl font-bold text-red-600">1.197.000 so'm</span>
                  <span className="mt-2 inline-flex items-center justify-center gap-2 rounded-md text-xl bg-red-600 px-3 py-1 font-semibold text-white">
                    30%
                  </span>
                </div>
                <AdminBtn />
              </div>
            </div>
          </div>

          {/* VIP Plan */}
          <div className="relative border-2 border-yellow-300 rounded-2xl flex flex-col overflow-hidden">
            <div className="bg-yellow-400 text-white py-2">
              <h3 className="text-center text-2xl font-bold">VIP</h3>
            </div>
            <div className="bg-yellow-400 py-2 border-t border-yellow-300">
              <p className="text-center text-lg text-white font-bold">SHOGIRLIK TA'RIFI</p>
            </div>
            <div className="bg-yellow-400 py-2 border-t border-yellow-300">
              <p className="text-center text-lg text-white flex items-center justify-center gap-2">JOYLAR SONI: 36 / 40</p>
            </div>
            <div className="p-6 flex-1">
              <ul className="space-y-4">
                {vipPlan.map( ( feature, index ) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-6 w-6 flex-shrink-0 text-yellow-400" />
                    <span className={`ml-3 text-base ${( index == 1 || index == 6 || index == 16 || index == 17 ) ? 'text-red-600 font-semibold' : ''}`}>
                      {feature}
                    </span>
                  </li>
                ) )}
              </ul>
              <div className="mt-8">
                <div className="flex flex-col items-center justify-center">
                  <span className="text-red-600">JAMI TO'LOV</span>
                  <span className="line-through text-gray-500">1.997.000 so'm</span>
                  <span className="line-through text-gray-500">1.747.000 so'm</span>
                  <span className="text-2xl font-bold text-red-600">1.497.000 so'm</span>
                  <span className="mt-2 inline-flex items-center justify-center gap-2 rounded-md text-xl bg-red-600 px-3 py-1 font-semibold text-white">
                    25%
                  </span>
                </div>
                <AdminBtn />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

