/* eslint-disable react/no-unescaped-entities */

import PropTypes from "prop-types";

const CertificateView = ( { name, certificateRef } ) => {
  return (
    <div ref={certificateRef} className="left-[10000px] top-[10000px] fixed -z-10 font-condensed bg-[url('/uzturk-flag.png')] bg-cover bg-center w-[1123px] h-[794px] bg-white border-8 border-yellow-500 py-16 px-20 mx-auto">
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
        <h1 className="mb-8 text-8xl font-bold text-yellow-500">SERTIFIKAT</h1>
        <p className="text-xl text-white"> Turk tili bo'yicha O'zbekistondagi eng katta </p>
        <h2 className="text-3xl text-white font-bold mb-1"><span className="text-green-500">SERTIFIKAT</span> <span className="text-red-500">SIRLARI</span></h2>
        <p className="text-xl text-white"> nomli vebinarning 1-kunida qatnashganligi uchun </p>
      </div>

      {/* Content */}
      <div className="mt-12 text-center">
        <h1 className="font-bold uppercase text-6xl px-4 mb-10 font-cursive text-yellow-500 mt-4 inline-block">
          {name} fdasfdfdaads
        </h1>
        <div className="mx-28 h-[1px] bg-white"></div>
        <p className="text-xl text-white">
          Turk tilini o'rganib, 2025-yilda turk tilidan sertifikatni 100% naqd qilishingiz tilakdoshimiz !
        </p>
      </div>

      {/* Signatures */}
      <div className="mt-12 mx-16 flex justify-between items-center text-white">
        <div className="text-center">
          <div className="h-[1px] bg-white mb-3"></div>
          <p className="text-xl font-cursive">IRODAHOCA NASRIDDINOVA</p>
          <p className="text-sm">BOSH USTOZ</p>
        </div>
        <div className="w-48 h-48 mx-auto border-4 border-yellow-500 rounded-full">
          <img className="w-full rounded-full" src="/uzturk-square.png" alt="UZTURK" />
        </div>
        <div className="text-center">
          <div className="h-[1px] bg-white mb-3"></div>
          <p className="text-xl font-cursive">ABDULAZIZ TOSHPULATOV</p>
          <p className="text-sm">RAHBAR</p>
        </div>
      </div>
    </div>
  );
};

CertificateView.propTypes = {
  name: PropTypes.string,
  certificateRef: PropTypes.ref
}

export default CertificateView;
