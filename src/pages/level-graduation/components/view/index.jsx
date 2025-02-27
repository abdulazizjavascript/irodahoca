/* eslint-disable react/no-unescaped-entities */

import PropTypes from "prop-types";

const CertificateView = ( { name, certificateRef, level, teacher, ball } ) => {
  return (
    <div ref={certificateRef} className="fixed left-[10000px] top-[10000px] -z-10 py-8 font-condensed bg-[url('/uzturk-flag.png')] bg-cover bg-center w-[1123px] h-[794px] bg-white border-8 border-yellow-500 px-20 mx-auto">
      {/* Border Decorations */}
      <div className="absolute top-5 left-5">
        <img width="200px" src="/pattern.png" alt="Pattern" />
      </div>
      <div className="absolute top-5 right-5">
        <img className="rotate-90" width="200px" src="/pattern.png" alt="Pattern" />
      </div>
      <div className="absolute bottom-5 left-5">
        <img className="-rotate-90" width="200px" src="/pattern.png" alt="Pattern" />
      </div>
      <div className="absolute bottom-5 right-5">
        <img className="rotate-180" width="200px" src="/pattern.png" alt="Pattern" />
      </div>

      {/* Certificate Title */}
      <div className="text-center">
        <h1 className="mb-8 text-8xl font-bold text-yellow-500">{level} SERTIFIKAT</h1>
        <p className="text-xl text-white"> Turk tiliga ixtisoslashgan UZTURK o'quv markazi o'quv kursida <br /> {level} darajani <span>{ball} ball</span> bilan tamomlaganligi uchun</p>
      </div>

      {/* Content */}
      <div className="mt-12 text-center">
        <h1 className="font-bold uppercase text-6xl px-4 mb-10 font-cursive text-yellow-500 mt-4 inline-block">
          {name}
        </h1>
        <div className="mx-28 h-[1px] bg-white"></div>
        <p className="text-xl text-white">
          Keyingi daraja sertifikatini ham muvaffaqqiyatli olishingiz tilakdoshimiz !
        </p>
      </div>

      {/* Signatures */}
      <div className="mt-12 mx-16 flex justify-between items-center text-white">
        <div className="text-center">
          <img className="h-20 mx-auto" src="/iroda-sign.png" alt="IRODAHOCA" />
          <div className="h-[2px] bg-white mb-3"></div>
          <p className="text-xl font-cursive">IRODAHOCA NASRIDDINOVA</p>
          <p className="text-sm">BOSH USTOZ</p>
        </div>
        <div className="w-48 h-48 mx-auto border-4 border-yellow-500 rounded-full">
          <img className="w-full rounded-full" src="/uzturk-square.png" alt="UZTURK" />
        </div>
        <div className="text-center">
          <img className="h-20 mx-auto" src="/abdulaziz-sign.png" alt="Abdulaziz" />
          <div className="h-[2px] bg-white mb-3"></div>
          <p className="text-xl font-cursive">ABDULAZIZ TOSHPULATOV</p>
          <p className="text-sm">RAHBAR</p>
        </div>
      </div>

      <div className="text-center mt-10 text-white">
        <p className="inline-block text-xl font-cursive border-b-2 border-white pb-3">{teacher}</p>
        <p className="text-sm">USTOZ</p>
      </div>
    </div>
  );
};

CertificateView.propTypes = {
  name: PropTypes.string,
  level: PropTypes.string,
  teacher: PropTypes.string,
  ball: PropTypes.string,
  certificateRef: PropTypes.ref
}

export default CertificateView;
