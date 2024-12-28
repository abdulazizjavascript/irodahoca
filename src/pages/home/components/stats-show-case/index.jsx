export default function StatsShowCase() {

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-center mb-6">
        Sizni nimalar kutyapti
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center">
          <div className="bg-red-600 text-white px-8 py-4 rounded-full text-3xl font-bold">
            10 SOAT
          </div>
          <div className="transform -rotate-6 -mt-2 bg-black text-white px-6 py-3 rounded-full text-sm">
            Aniq va tushunarli darslar
          </div>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="bg-red-600 text-white px-8 py-4 rounded-full text-3xl font-bold">
            20+
          </div>
          <div className="transform rotate-6 -mt-2 bg-black text-white px-6 py-3 rounded-full text-sm">
            Sertifikat sirlari
          </div>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="bg-red-600 text-white px-8 py-4 rounded-full text-3xl font-bold">
            100+
          </div>
          <div className="transform -rotate-6 -mt-2 bg-black text-white px-6 py-3 rounded-full text-sm">
            Foydali insaytlar
          </div>
        </div>
      </div>
    </div>
  )
}