/* eslint-disable react/no-unescaped-entities */

import Card from "../../../../components/card"

const CourseAudience = () => {
  const targetAudiences = [
    "Maoshiga qo'shimcha ustama olmoqchi bo'lganlar uchun",
    "Qo'shimcha bir til organmoqchi bo'lganlar uchun",
    "Turkiyada oqimoqchi bo'lganlar uchun",
    "Turkiyaga sayohat qilmoqchi bo'lganlar uchun",
    "Turk tiliga qiziquvchilar uchun",
    "Ustoz bo'lib ishlamoqchi bo'lganlar uchun",
    "Turk tilini o'rganmoqchi bo'lgan barcha-barcha uchun",
  ]

  return (
    <section>
      <div className="container py-16">
        <div className="mb-6">
          <Card title="100% SERTIFIKAT">
            <p className="text-sm text-center">Bu kurs turk tilini o'rganib sertifikat olib bakalavr, magistr, doktoranturaga kirmoqchi bo'lganlar uchun ishlab chiqilgan 3 oylik maxsus tayyorlov kursi hisoblanadi.</p>
          </Card>
        </div>
        <h1 className="text-center font-bold text-2xl text-red-600 rounded-xl py-2 mb-6">
          SHUNINGDEK, BU KURS
        </h1>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {targetAudiences.map( ( text, index ) => (
            <div
              key={index}
              className="bg-green-500 text-white p-3 rounded-lg shadow-lg"
            >
              <p className="text-sm text-center">{text}</p>
            </div>
          ) )}
        </div>
      </div>
    </section>
  )
}

export default CourseAudience