

import { Gift, SquareCheckBig } from "lucide-react"
import Card from "../../../../components/card"

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
        <div className="mb-12">
          <Card title="FOUNDATION" price="500.000">
            {events.map( item => <div key={item} className="flex text-sm items-start gap-1"> <div className="min-h-4 min-w-4 max-h-4 max-w-4 pt-0.5"><SquareCheckBig className="w-full h-full" /></div> <p>{item}</p> </div> )}
          </Card>
        </div>

        <div className="relative mb-12" >
          <div className="absolute left-1/2 -translate-x-1/2 transform -translate-y-1/2 bg-red-600 text-white px-2 py-1 rounded-lg shadow-lg">
            <h1 className="text-lg font-bold tracking-wider whitespace-nowrap">MOTIVATION DARSI</h1>
          </div>
          <div className="max-w-[500px] mx-auto bg-green-500 rounded-3xl py-6 px-2 text-center text-white shadow-xl" >
            <p className="text-sm">Turk tili o’rganuvchilari uchun kerakli maslahat va tajribalar berib o’tiladi.</p>
          </div>
        </div>
        <div className="relative mb-12" >
          <div className="absolute left-1/2 -translate-x-1/2 transform -translate-y-1/2 bg-red-600 text-white px-2 py-1 rounded-lg shadow-lg">
            <h1 className="text-lg font-bold tracking-wider whitespace-nowrap">ILM OLISH SIRLARI</h1>
          </div>
          <div className="max-w-[500px] mx-auto bg-green-500 rounded-3xl py-6 px-2 text-center text-white shadow-xl" >
            <p className="text-sm">Ilm olishga doir tajriba va kitoblarga o’qiganlarimiz ulashilinadi.</p>
          </div>
        </div>
        <div className="relative mb-12" >
          <div className="absolute left-1/2 -translate-x-1/2 transform -translate-y-1/2 bg-red-600 text-white px-2 py-1 rounded-lg shadow-lg">
            <h1 className="text-lg text-center font-bold tracking-wider whitespace-nowrap">MAQSAD QO’YISH</h1>
          </div>
          <div className="max-w-[500px] mx-auto bg-green-500 rounded-3xl py-6 px-2 text-center text-white shadow-xl" >
            <p className="text-sm">Qanday qilib maqsad qo’yish va shaxsiy rivojlanish bo’yicha tajriba va tavsiyalarimizni ulashamiz.</p>
          </div>
        </div>
        <div className="relative mb-12" >
          <div className="absolute left-1/2 -translate-x-1/2 transform -translate-y-1/2 bg-red-600 text-white px-2 py-1 rounded-lg shadow-lg">
            <h1 className="text-lg text-center font-bold tracking-wider whitespace-nowrap">O’ZBEK TILI GRAMMATIKASI</h1>
          </div>
          <div className="max-w-[500px] mx-auto bg-green-500 rounded-3xl py-6 px-2 text-center text-white shadow-xl" >
            <p className="text-sm">Darslar soni 3 ta bo’lib, turk tiliga kirishingiz oldin kerak bo’ladigan o’zbek tili grammatikasi o’rgatiladi.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Bonus