/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types';


const Gifts = ( { titleColor } ) => {
  return (
    <div className='flex justify-center items-center flex-col gap-2'>
      <h3 className={`mb-2 text-[15px] ${titleColor || "bg-green-500"} inline-block p-2 text-white rounded-md`}>
        🎁 Ro'yxatdan o'tganlar uchun sovg'a 🎁
      </h3>
      <ul className="text-[12px]">
        <li className="list-item">1. Turk tili alifbosi video darsi</li>
        <li className="list-item">2. Turk tili 1-unit "Merhaba" video darsi</li>
        <li className="list-item">3. 500 ta gap mavjud turkcha so'zlashamiz kitobi</li>
        <li className="list-item">4. Turk tilida 500 ta eng ko'p ishlatiladigan so'zlar kitobi</li>
        <li className="list-item">5. 2024-yil sertifikat olgan o'quvchilarimizdan motivatsion rolik</li>
        <li className="list-item">.............................................................................................</li>
        <li className="list-item">Qolgan sovg'alar online bepul darsimizda qatnashganlarga beriladi</li>
      </ul>
    </div>
  )
}

export default Gifts

Gifts.propTypes = {
  titleColor: PropTypes.string
}