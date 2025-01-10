/* eslint-disable react/no-unescaped-entities */

import { SquareCheckBig } from "lucide-react"
import Card from "../../../../components/card"

const Course = () => {
  const levels = [
    { id: "A1", lessons: "10 TA DARS" },
    { id: "A2", lessons: "10 TA DARS" },
    { id: "B1", lessons: "10 TA DARS" },
    { id: "B2", lessons: "10 TA DARS" },
  ]

  const scheduleData = [
    {
      title: "3 kun video dars",
      days: "Dushanba, chorshanba, juma",
    },
    {
      title: "3 kun jonli dars",
      days: "Seshanba, payshanba, shanba",
    },
  ]

  const videoLessons = [
    "Video darslar IRODAHOCA tomonidan sifatli tarzda yozib chiqilgan",
    "Har bir video uzunligi o'rtacha 0.5 soatni tashkil qiladi",
    "Nazariya va grammatika o'tiladi",
    "Zerikmasdan mazza qilib ko'rasiz"
  ]

  const liveLessons = [
    'Video dars bo’yicha savol-javob bo’ladi',
    '4 bosqich ustida ishlanadi. Konushma, dinleme, yazma, okuma qilinadi',
    'Lug’atlar so’raladi',
    'Qo’shimcha mavzular o’rgatiladi'
  ]

  return (
    <section className="py-16">
      <div className="container ">
        <div className="mb-6">
          <Card title="KURS HAQIDA">
            <p className="text-sm">Kurs onlayn bo'lib 3 oy davom etadi. 3 oy davomida 4 ta daraja tugatiladi.</p>
          </Card>
        </div>

        <div className="mb-4 text-center">
          <h2 className="px-6 inline-block text-xl py-1 rounded-xl bg-red-600 text-center mx-auto text-white font-bold">4 TA DARAJA</h2>
        </div>

        <div className="mb-10 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 relative z-10">
          {levels.map( ( level ) => (
            <div key={level.id} className="relative">
              <div className="bg-green-500 text-white p-4 rounded-xl shadow-lg">
                <h2 className="text-xl font-bold text-center">{level.id}</h2>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-red-600 text-white px-2 py-1 rounded-md shadow-lg whitespace-nowrap">
                  <p className="text-xs font-bold">{level.lessons}</p>
                </div>
              </div>
            </div>
          ) )}
        </div>

        <div className="rounded-xl bg-green-500 text-white p-3 text-center mb-6">
          <p>O’quv reja va presentatsiyalar mutaxasislar tomonidan
            mukammal qilib ishlab chiqilgan.
          </p>
        </div>

        {/* O'quv reja */}
        <div className="mb-6 text-center">
          <a href="https://irodahoca.notion.site/3-OYLIK-REJA-16cc531ea474801a9348daa5547efd00?pvs=4" className='px-6 rounded-lg text-white py-2 inline-block text-center bg-blue-500'>O'quv rejani ko'rish</a>
        </div>

        {/* Haftada necha kun */}
        <div className="relative z-10 mb-12">
          <div className="mb-6 text-center">
            <h2 className="px-6 inline-block text-lg font-bold bg-red-600 text-white py-1 rounded-xl shadow-lg">
              HAFTADA 6 KUN
            </h2>
          </div>
          <div className="mb-12 grid md:grid-cols-2 gap-6">
            {scheduleData.map( ( item, index ) => (
              <div key={index} className="relative">
                <div className="bg-green-500 text-white px-4 py-3 rounded-xl shadow-lg">
                  <h2 className="text-xl font-bold text-center">
                    {item.title}
                  </h2>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-red-600 text-white px-2 py-1 rounded-md shadow-lg">
                    <p className="text-xs text-center whitespace-nowrap">
                      {item.days}
                    </p>
                  </div>
                </div>
              </div>
            ) )}
          </div>
          <div className="relative mb-8" >
            <div className="absolute left-1/2 -translate-x-1/2 transform -translate-y-1/2 bg-red-600 text-white px-2 py-1 rounded-lg shadow-lg">
              <h1 className="text-lg font-bold tracking-wider whitespace-nowrap">VIDEO DARSLAR</h1>
            </div>
            <div className="max-w-[500px] mx-auto bg-green-500 rounded-xl py-6 px-2 text-white shadow-xl space-y-1" >
              {videoLessons.map( item => <div key={item} className="flex text-sm items-start gap-1"> <div className="min-h-4 min-w-4 max-h-4 max-w-4 pt-0.5"><SquareCheckBig className="w-full h-full" /></div> <p>{item}</p> </div> )}
            </div>
          </div>
          <div className="relative mb-6" >
            <div className="absolute left-1/2 -translate-x-1/2 transform -translate-y-1/2 bg-red-600 text-white px-2 py-1 rounded-lg shadow-lg">
              <h1 className="text-lg font-bold tracking-wider whitespace-nowrap">JONLI DARSLAR</h1>
            </div>
            <div className="max-w-[500px] mx-auto bg-green-500 rounded-xl py-6 px-2 text-white shadow-xl space-y-1" >
              {liveLessons.map( item => <div key={item} className="flex text-sm items-start gap-1"> <div className="min-h-4 min-w-4 max-h-4 max-w-4 pt-0.5"><SquareCheckBig className="w-full h-full" /></div> <p>{item}</p> </div> )}
            </div>
          </div>
        </div>

        {/* Uyga vazifa */}
        <div className="relative mb-12" >
          <div className="absolute left-1/2 -translate-x-1/2 transform -translate-y-1/2 bg-red-600 text-white px-2 py-1 rounded-lg shadow-lg">
            <h1 className="text-lg font-bold tracking-wider whitespace-nowrap">UYGA VAZIFA</h1>
          </div>
          <div className="max-w-[500px] mx-auto bg-green-500 rounded-xl py-6 px-2 text-center text-white shadow-xl" >
            <p className="text-sm">Uyga vazifalar ustozlar tomonidan tekshiriladi va statistika qilib boriladi.</p>
          </div>
        </div>

        <div className="relative mb-12" >
          <div className="absolute left-1/2 -translate-x-1/2 transform -translate-y-1/2 bg-red-600 text-white px-2 py-1 rounded-lg shadow-lg">
            <h1 className="text-lg font-bold tracking-wider whitespace-nowrap">VAQTLARI</h1>
          </div>
          <div className="max-w-[500px] mx-auto bg-green-500 rounded-xl py-6 px-2 text-center text-white shadow-xl" >
            <p className="text-sm">Darslar uzog'i 1.5 soat davom etadi.</p>
            <p className="text-sm">Kechki vaqtga to'g'ri keladi.</p>
          </div>
          <div className="absolute flex gap-6 left-1/2 -translate-x-1/2 transform -translate-y-1/2">
            <div className="bg-red-600 text-white px-2 py-1 rounded-lg shadow-lg">
              <div className="text-xs font-bold tracking-wider whitespace-nowrap">20:00-21:30</div>
            </div>
            <div className="bg-red-600 text-white px-2 py-1 rounded-lg shadow-lg">
              <div className="text-xs font-bold tracking-wider whitespace-nowrap">21:30-23:00</div>
            </div>
          </div>
        </div>

        {/* O'quvchilar soni */}
        <div className="mb-12 text-center">
          <h2 className="inline-block text-lg font-bold px-6 bg-red-600 text-white py-2 rounded-xl shadow-lg">
            15 kishilik yopiq telegram guruh
          </h2>
        </div>

        {/* Darsliklar */}
        <div className="relative" >
          <div className="absolute left-1/2 -translate-x-1/2 transform -translate-y-1/2 bg-red-600 text-white px-2 py-1 rounded-lg shadow-lg">
            <h1 className="text-lg font-bold tracking-wider whitespace-nowrap">Turli xil darsliklar</h1>
          </div>
          <div className="max-w-[500px] mx-auto bg-green-500 rounded-xl py-6 px-2 text-center text-white shadow-xl" >
            <div className="flex text-sm items-start gap-1"> <div className="min-h-4 min-w-4 max-h-4 max-w-4 pt-0.5"><SquareCheckBig className="w-full h-full" /></div> <p>İstanbul yabancilar için türkçe ders kitabi</p> </div>
            <div className="flex text-sm items-start gap-1"> <div className="min-h-4 min-w-4 max-h-4 max-w-4 pt-0.5"><SquareCheckBig className="w-full h-full" /></div> <p>Yedi iklim türkçe ders kitaplari</p> </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Course