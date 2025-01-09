const Guarantee = () => {
  return (
    <section className="bg-black py-16">
      <div className="container">
        {/* <img className="w-full mb-12" src="https://static.vecteezy.com/system/resources/previews/024/382/882/non_2x/satisfaction-guaranteed-label-icon-symbol-golden-red-white-design-transparent-background-free-png.png" alt="Guaranteed" /> */}
        <div className="relative" >
          <div className="absolute left-1/2 -translate-x-1/2 transform -translate-y-1/2 bg-red-600 text-white px-4 py-2 rounded-xl shadow-lg">
            <h1 className="text-3xl font-bold tracking-wider whitespace-nowrap">KAFOLATLANADI</h1>
          </div>
          <div className="max-w-[500px] mx-auto bg-green-500 rounded-3xl py-8 px-4 text-center text-white shadow-xl" >
            <p className="text-lg">Kurslarimizni muvaqqiyatli tugatib, sertifikat ololmasangiz, to’lovingiz 100% qaytariladi yoki qayta bepulga o’qishingiz mumkin bo’ladi.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guarantee