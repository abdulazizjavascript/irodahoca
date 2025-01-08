import irodahocaNew from '../../assets/irodahoca-new.jpg'

const Irodahoca = () => {
  return (
    <section className='bg-pink-200'>
      <div className="container mx-auto px-4 py-8 relative">
        <div className="space-y-4">
          <div className="text-center">
            <h1 className="mb-3 text-3xl font-bold text-red-500">
              IRODAHOCA KIM ?
            </h1>
            <p className="text-sm font-bold uppercase tracking-wider">
              IRODA NASRIDDINOVA SAYFIDDINI QIZI
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-red-500/20 rounded-full blur-3xl" />
            <img
              src={irodahocaNew}
              alt="Professional portrait"
              className="relative w-full max-w-lg mx-auto rounded-2xl shadow-2xl"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {achievements.map( ( achievement, index ) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-green-500 p-2 rounded-lg backdrop-blur-sm border border-gray-700"
              >
                <span className="text-xs flex items-center justify-center min-w-6 min-h-6 rounded-full bg-red-500 text-white font-bold">
                  {String( index + 1 ).padStart( 2, '0' )}
                </span>
                <p className="text-white text-xs">{achievement}</p>
              </div>
            ) )}
          </div>
        </div>
      </div>
    </section>
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