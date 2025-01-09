/* eslint-disable react/no-unescaped-entities */

const students = [
  {
    id: 10,
    name: "Mamasharipova Nodira",
    university: "ToshDO‘TAU bitiruvchisi ToshDO‘TAU magistranti",
    level: 'C1 sertifikat sohibi',
    image: "/students/10.jpg"
  },
  {
    id: 1,
    name: "Norqobilova Muhayyo",
    university: "ToshDO‘TAU talabasi. Hozirda Chirchiq davlat Pedagogika universiteti magistranti",
    level: 'Offline darslarga qatnashib B2 sertifikatini olgan',
    image: "/students/1.jpg"
  },
  {
    id: 2,
    name: "Aminov Behzod",
    university: "Hozirda O'zbekiston milliy universiteti doktaranti",
    level: "Online darslarda qatnashib B2 sertifikatni olishga muyassar bo'lganlar",
    image: "/students/2.jpg"
  },
  {
    id: 3,
    name: "Norjigitova Ma'mura",
    university: "ToshDO‘TAU talabasi. Hozirda Samarqand davlat Pedagogika universiteti magistranti",
    level: 'Offline darslarga qatnashib B2 sertifikatini olgan',
    image: "/students/3.jpg"
  },
  {
    id: 16,
    name: "Abovova Mohinur",
    university: "ToshDO‘TAU 4-kurs talabasi",
    level: "3-kursligida B2 sertifikatga ega bo'lgan",
    image: "/students/6.jpg"
  },
  {
    id: 4,
    name: "Nurmamatova Jamila",
    university: "ToshDO‘TAU talabasi",
    level: 'Online va Offline darslarga qatnashib B2 sertifikatini olgan',
    image: "/students/4.jpg"
  },
  {
    id: 5,
    name: "Charos Avazova",
    university: "ToshDO‘TAU bitiruvchisi. TOSHDO‘TAU magistranti",
    level: "Offline darslarga qatnashib B2 sertifikatni qo'lga kiritgan",
    image: "/students/5.jpg"
  },
  {
    id: 6,
    name: "Habibullayeva Sabina",
    university: "ToshDO‘TAU bitiruvchisi. TOSHDO‘TAU magistranti",
    level: "Offline darslarga qatnashib B2 sertifikatni qo'lga kiritgan.",
    image: "/students/6.jpg"
  },
  {
    id: 7,
    name: "Ergasheva Gulbahor",
    university: "Hozirda O'zMU magistranti",
    level: "Online darslarga qatnashib B2 sertifikatni qo'lga kiritgan. 3 farzandning onasi.",
    image: "/students/7.jpg"
  },
  {
    id: 8,
    name: "Maftuna Norboboyeva",
    university: "Hozirda O'zMU doktaranti",
    level: 'Online darslarga qatnashib B2 sertifikatni olganlar. 2 farzandning onasi. ',
    image: "/students/8.jpg"
  },
  {
    id: 9,
    name: "Nilufar Karimova",
    university: "ToshDO‘TAU 4-kurs talabasi",
    level: "3-kursligida B2 sertifikatga ega bo'lgan",
    image: "/students/9.jpg"
  },
  {
    id: 11,
    name: "Lobar Xasanova",
    university: "ToshDO‘TAU 4-kurs talabasi",
    level: "2-kursligida B2 sertifikatga ega bo'lgan",
    image: "/students/11.jpg"
  }
]

export default function Students() {
  return (
    <section className="py-12 bg-pink-200">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl bg-red-600 font-bold text-center text-white py-3 rounded-lg uppercase mb-8">O'QUVCHILARIMIZ</h1>
        <div className="mb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {students.map( ( student ) => (
            <div key={student.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-80">
                <img
                  src={student.image}
                  alt={student.name}
                  className='object-cover object-top w-full h-full'
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{student.name}</h3>
                <p className="mb-3 text-sm">{student.university}</p>
                <p className="text-sm text-gray-600">{student.level}</p>
              </div>
            </div>
          ) )}
        </div>
        <div className="text-center">
          <p className="text-gray-600 mb-3">Yuqoridagilar 10% ham emas.</p>
          <a className="bg-blue-500 inline-block py-3 px-6 rounded-xl text-white" href="https://t.me/irodahoca_natijalar">Ko'proq natijalarni ko'rish</a>
        </div>
      </div>
    </section>
  )
}