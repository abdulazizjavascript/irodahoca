import PlansBtn from "../plans-btn"

const curators = [
  {
    id: 1,
    name: "Lobar Xasanova",
    experience: "1 yildan ortiq tajribaga ega",
    level: 'B2',
    image: "/curators/lobar.jpg",
  },
  {
    id: 2,
    name: "Abdumalik Astankulov",
    experience: "4 yillik turkiya tajribasi",
    level: 'C1',
    image: "/curators/malikbey.jpg"
  },
  {
    id: 3,
    name: "Mohinur Karimova",
    experience: "3 yillik tajribaga ega",
    level: 'C1',
    image: "/curators/mohinur.jpg"
  },
  {
    id: 4,
    name: "Sanginov Shukrona",
    experience: "1 yildan ortiq tajribaga ega",
    level: 'C1',
    image: "/curators/hijab.jpg"
  },
  {
    id: 5,
    name: "Durdona Sirocheva",
    experience: "3 yillik tajribaga ega",
    level: 'C1',
    image: "/curators/hijab.jpg"
  },
  {
    id: 6,
    name: " Osiyo Gʻaybullayeva",
    experience: "3 yillik tajribaga ega",
    level: 'C1',
    image: "/curators/hijab.jpg"
  }
]

export function Curators() {
  return (
    <section className="py-12 bg-pink-200">
      <div className="container">
        <h1 className="text-3xl bg-red-600 font-bold text-center text-white py-3 rounded-lg uppercase mb-8">Kuratorlarimiz</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {curators.map( ( curator ) => (
            <div key={curator.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-80">
                <img
                  className="object-cover object-top w-full h-full"
                  src={curator.image}
                  alt={curator.name}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{curator.name}</h3>
                <p className="text-gray-600 mb-2">{curator.experience}</p>
                <p className="text-sm text-gray-500">
                  <span className="font-semibold">{curator.level}</span> darajaga ega
                </p>
              </div>
            </div>
          ) )}
        </div>
        <PlansBtn />

      </div>
    </section>
  )
}

export default Curators