/* eslint-disable react/no-unescaped-entities */

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
    <section id='course-audience'>
      <div className="container py-16">
        <div className="mb-6">
          <div className="relative" >
            <div className="absolute left-1/2 -translate-x-1/2 transform -translate-y-1/2 bg-red-600 text-white px-4 py-2 rounded-xl shadow-lg">
              <h1 className="text-3xl font-bold tracking-wider whitespace-nowrap">100% SERTIFIKAT</h1>
            </div>
            <div className="max-w-[500px] mx-auto bg-green-500 rounded-xl py-8 px-4 text-center text-white shadow-xl" >
              <p className="text-sm text-center">Bu kurs turk tilini o'rganib sertifikat olib bakalavr, magistr, doktoranturaga kirmoqchi bo'lganlar uchun ishlab chiqilgan 3 oylik maxsus tayyorlov kursi hisoblanadi.</p>
            </div>
          </div>
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