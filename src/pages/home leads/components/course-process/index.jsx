import { SquareCheckBig } from "lucide-react"
import Card from "../../../../components/card"
import PlansBtn from "../plans-btn"

const CourseProcess = () => {

  const events = [
    'Daraja imtihonlar',
    'Konushma klublar',
    'Musobaqalar',
    'Mok imtihonlar',
  ]
  return (
    <section className="bg-pink-200 pt-16 pb-8">
      <div className="container ">
        <div className="mb-12">
          <Card title="KURS JARAYONLARI">
            {events.map( item => <div key={item} className="flex  items-start gap-1"> <div className="min-h-4 min-w-4 max-h-4 max-w-4 pt-0.5"><SquareCheckBig className="w-full h-full" /></div> <p>{item}</p> </div> )}
          </Card>
        </div>
        <div className="relative mb-12" >
          <div className="absolute left-1/2 -translate-x-1/2 transform -translate-y-1/2 bg-red-600 text-white px-2 py-1 rounded-lg shadow-lg">
            <h1 className="text-lg font-bold tracking-wider whitespace-nowrap">DARAJA IMTIHONLARI</h1>
          </div>
          <div className="max-w-[500px] mx-auto bg-green-500 rounded-2xl py-6 px-2 text-center text-white shadow-xl" >
            <p className="">Har bir darajada imtihon bo’ladi. Imtihondan o’tganlarga daraja sertifikatlari beriladi. Yiqilganlar bilan ishlanadi yoki quyi guruhlarga tushiriladi.</p>
          </div>
        </div>
        <div className="relative mb-12" >
          <div className="absolute left-1/2 -translate-x-1/2 transform -translate-y-1/2 bg-red-600 text-white px-2 py-1 rounded-lg shadow-lg">
            <h1 className="text-lg font-bold tracking-wider whitespace-nowrap">KONUSHMA KLUBLAR</h1>
          </div>
          <div className="max-w-[500px] mx-auto bg-green-500 rounded-2xl py-6 px-2 text-center text-white shadow-xl" >
            <p className="">O’quvchilar o’rtasida jamoaviy tarzda konushma klublar o’tkaziladi. Jamoalarga mukofotlar beriladi.</p>
          </div>
        </div>
        <div className="relative mb-12" >
          <div className="absolute left-1/2 -translate-x-1/2 transform -translate-y-1/2 bg-red-600 text-white px-2 py-1 rounded-lg shadow-lg">
            <h1 className="text-lg font-bold tracking-wider whitespace-nowrap">MUSOBAQALAR</h1>
          </div>
          <div className="max-w-[500px] mx-auto bg-green-500 rounded-2xl py-6 px-2 text-center text-white shadow-xl" >
            <p className="">Turli xil musobaqalar o’tqazilib 1-o’rinni olgan o’quvchilarga mukofotlar beriladi.</p>
          </div>
        </div>
        <div className="relative mb-12" >
          <div className="absolute left-1/2 -translate-x-1/2 transform -translate-y-1/2 bg-red-600 text-white px-2 py-1 rounded-lg shadow-lg">
            <h1 className="text-lg font-bold tracking-wider whitespace-nowrap">MOK IMTIHONLAR</h1>
          </div>
          <div className="max-w-[500px] mx-auto bg-green-500 rounded-2xl py-6 px-2 text-center text-white shadow-xl" >
            <p className="">O’zingizni imtihonga kirishdan oldin sinab ko’rishingiz uchun mok imtihonlar tashkil qilinib turiladi. B1 darajadan keyin.</p>
          </div>
        </div>

        <PlansBtn />

      </div>
    </section>
  )
}

export default CourseProcess