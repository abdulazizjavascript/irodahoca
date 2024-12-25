import instagramPhoto from '../../assets/irodahoca.jpg'

const InstagramPhoto = () => {
  return (
    <div className="h-screen w-screen">
      <img className="object-cover w-full h-full" src={instagramPhoto} alt="Irodahoca" />
    </div>
  )
}

export default InstagramPhoto