const CourseEnd = () => {
  const events = [
    {
      title: "Katta bitiruv oqshomi",
      description: "Barcha talabalar va o'qituvchilar ishtirokida tantanali kecha o'tqaziladi.",
      image: "https://al-taqwa.vic.edu.au/wp-content/uploads/2016/11/p06.jpg",
      alt: "Bitiruv oqshomi tasviri"
    },
    {
      title: "Sertifikat topshirish marosimi",
      description: "Kursni muvaffaqiyatli tugatgan talabalarga sertifikatlar topshiriladi.",
      image: "https://university.help.edu.my/wp-content/uploads/2023/09/HELP-1200.jpg",
      alt: "Sertifikat topshirish marosimi tasviri"
    },
    {
      title: "Qur'on xatm",
      description: "Imtihonga kirishdan oldin o'quvchilarni ruhlantirish maqsadida qilinadi.",
      image: "https://pic.iumsonline.org/uploads/MainContent/%D8%AD%D9%81%D9%84%20%D8%A7%D9%84%D9%82%D8%B1%D8%A2%D9%86_20241025231522_20241026112642.jpg",
      alt: "Qur'on xatm marosimi tasviri"
    }
  ];

  return (
    <section className="py-8">
      <div className="container">
        <h2 className="uppercase text-3xl font-bold mb-6 text-center bg-red-600 py-3 rounded-xl text-white">Kurs Oxirida</h2>
        <div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map( ( event, index ) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <img
                src={event.image}
                alt={event.alt}
                width={300}
                height={200}
                className="w-full object-cover"
              />
              <div className="p-2 text-white bg-green-500">
                <h3 className="text-xl font-semibold text-red bg-red-600 rounded-md mb-2 px-2 py-1">{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </div>
          ) )}
        </div>
      </div>
    </section>
  );
};

export default CourseEnd;