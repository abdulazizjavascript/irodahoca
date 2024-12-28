import irodahocaNew from '../../../../assets/irodahoca-new.jpg'

const Irodahoca = () => {
  return (
    <div className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Christmas decoration overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('https://images.unsplash.com/photo-1576919228236-a097c32a5cd4')] bg-cover bg-center" />

      <div className="container mx-auto px-4 py-16 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <div className="lg:w-1/2 space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              IRODA NASRIDDINOVA
            </h1>

            <div className="space-y-4">
              <p className="text-gray-300 uppercase tracking-wider">
                4 yillik tajribaga ega C1 darajali turk tili ustozi
              </p>
            </div>

            {/* Achievement cards */}
            <div className="grid gap-4">
              {achievements.map( ( achievement, index ) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm border border-gray-700"
                >
                  <span className="flex items-center justify-center min-w-12 min-h-12 rounded-full bg-red-500 text-white font-bold">
                    {String( index + 1 ).padStart( 2, '0' )}
                  </span>
                  <p className="text-gray-200">{achievement}</p>
                </div>
              ) )}
            </div>
          </div>

          {/* Right image */}
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-red-500/20 rounded-full blur-3xl" />
              <img
                src={irodahocaNew}
                alt="Professional portrait"
                className="relative w-full max-w-lg mx-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const achievements = [
  "500 ga yaqin o'quvchilari ustozi",
  "UZTURK o'quv markazi asoschilaridan biri",
  "ToshDO'TAU O'FF fakulteti bitiruvchisi",
  "Turkcha maqolalar yozish bo'yicha respublika konferensiyalari g'olibi",
  "Ko'zi ojizlarga turk tilini o'rgatish bo'yicha loyiha rahbari"
];

export default Irodahoca