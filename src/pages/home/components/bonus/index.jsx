/* eslint-disable react/no-unescaped-entities */

import { Gift, Lock, SquareCheckBig } from "lucide-react"

const Bonus = () => {

  const events = [
    "Maqsad qo'yish va shaxsiy rivojlanish",
    "Motivation darsi",
    "Ilm olish sirlari",
    "Turk tiliga kerakli o'zbek tili grammatikasi",
  ]
  return (
    <section className="pt-16 pb-8 bg-pink-200">
      <div className="container ">
        <h1 className="flex gap-2 items-center justify-center mb-12 font-bold bg-red-600 text-3xl py-3 text-white text-center rounded-xl">
          <Gift className="text-white w-8 h-8" /> <span>BONUS</span>
        </h1>
        <div className="relative mb-12" >
          <div className="absolute left-1/2 -translate-x-1/2 transform -translate-y-1/2 bg-red-600 text-white px-2 py-1 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold tracking-wider whitespace-nowrap">FOUNDATION DARSLARI</h3>
          </div>
          <div className="max-w-[500px] mx-auto bg-green-500 rounded-xl py-6 px-2 text-center text-white shadow-xl" >
            {events.map( item => <div key={item} className="flex text-sm items-start gap-1"> <div className="min-h-4 min-w-4 max-h-4 max-w-4 pt-0.5"><SquareCheckBig className="w-full h-full" /></div> <p>{item}</p> </div> )}
          </div>
        </div>

        <div className="relative mb-12" >
          <div className="absolute left-1/2 -translate-x-1/2 transform -translate-y-1/2 bg-red-600 text-white px-2 py-1 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold tracking-wider whitespace-nowrap">MOTIVATION DARSI</h3>
          </div>
          <div className="max-w-[500px] mx-auto bg-green-500 rounded-xl py-6 px-2 text-center text-white shadow-xl" >
            <p className="text-sm">Turk tili o’rganuvchilari uchun kerakli maslahat va tajribalar berib o’tiladi.</p>
          </div>
        </div>
        <div className="relative mb-12" >
          <div className="absolute left-1/2 -translate-x-1/2 transform -translate-y-1/2 bg-red-600 text-white px-2 py-1 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold tracking-wider whitespace-nowrap">ILM OLISH SIRLARI</h3>
          </div>
          <div className="max-w-[500px] mx-auto bg-green-500 rounded-xl py-6 px-2 text-center text-white shadow-xl" >
            <p className="text-sm">Ilm olishga doir tajriba va kitoblarga o’qiganlarimiz ulashilinadi.</p>
          </div>
        </div>
        <div className="relative mb-12" >
          <div className="absolute left-1/2 -translate-x-1/2 transform -translate-y-1/2 bg-red-600 text-white px-2 py-1 rounded-lg shadow-lg">
            <h3 className="text-lg text-center font-bold tracking-wider whitespace-nowrap">MAQSAD QO’YISH</h3>
          </div>
          <div className="max-w-[500px] mx-auto bg-green-500 rounded-xl py-6 px-2 text-center text-white shadow-xl" >
            <p className="text-sm">Qanday qilib maqsad qo’yish va shaxsiy rivojlanish bo’yicha tajriba va tavsiyalarimizni ulashamiz.</p>
          </div>
        </div>
        <div className="relative mb-12" >
          <div className="absolute left-1/2 -translate-x-1/2 transform -translate-y-1/2 bg-red-600 text-white px-2 py-1 rounded-lg shadow-lg">
            <h3 className="text-lg text-center font-bold tracking-wider whitespace-nowrap">O’ZBEK TILI GRAMMATIKASI</h3>
          </div>
          <div className="max-w-[500px] mx-auto bg-green-500 rounded-xl py-6 px-2 text-center text-white shadow-xl" >
            <p className="text-sm">Darslar soni 3 ta bo’lib, turk tiliga kirishingiz oldin kerak bo’ladigan o’zbek tili grammatikasi o’rgatiladi.</p>
          </div>
        </div>
        <div className="relative mb-12" >
          <div className="absolute left-1/2 -translate-x-1/2 transform -translate-y-1/2 bg-red-600 text-white px-2 py-1 rounded-lg shadow-lg">
            <h2 className="text-2xl text-center font-bold tracking-wider whitespace-nowrap">SERTIFIKAT SIRLARI</h2>
          </div>
          <div className="max-w-[500px] mx-auto bg-green-500 rounded-xl py-6 px-2 text-center text-white shadow-xl" >
            <p className="text-sm">3 kun bo'lib o'tgan O'zbekistondagi eng katta SERTIFIKAT SIRLARI vebinarining to'liq zapislari</p>
          </div>
        </div>
        <div className="text-center relative mb-12">
          <img className="rounded-xl w-full" src="/1-kun.jpg" alt="1-kun" />
          <a className="absolute left-1/2 bottom-0 transform translate-y-1/2 -translate-x-1/2 inline-block -mt-6 py-3 px-6 bg-red-600 text-white rounded-xl" href="https://www.youtube.com/live/kPSenm0Us5U">Ko'rish</a>
        </div>
        <div className="text-center relative mb-12">
          <img className="rounded-xl w-full" src="/2-kun.jpg" alt="2-kun" />
          <button disabled className="disabled:bg-red-400 flex gap-1 absolute left-1/2 bottom-0 transform translate-y-1/2 -translate-x-1/2 -mt-6 py-3 px-6 bg-red-600 text-white rounded-xl" ><Lock /> <span>Ko'rish</span></button>
        </div>
        <div className="text-center relative mb-12">
          <img className="rounded-xl w-full" src="/3-kun.jpg" alt="3-kun" />
          <button disabled className="disabled:bg-red-400 flex gap-1 absolute left-1/2 bottom-0 transform translate-y-1/2 -translate-x-1/2 -mt-6 py-3 px-6 bg-red-600 text-white rounded-xl" ><Lock /> <span>Ko'rish</span></button>
        </div>
      </div>
    </section>
  )
}

export default Bonus