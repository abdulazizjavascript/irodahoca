const SampleLessons = () => {
  return (
    <section className="py-16">
      <div className="container">
        <h1 className="text-3xl bg-red-600 font-bold text-center text-white py-3 rounded-lg uppercase mb-8">NAMUNAVIY DARSLAR</h1>
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/4Uv81D_ku-w?si=1JjnMSuFiOqkh2nH" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/9EicX5oJYwM?si=wbjXmEWtUD9Y3omJ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SampleLessons