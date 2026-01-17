/* eslint-disable react/no-unescaped-entities */

import PropTypes from "prop-types";

const DiplomaView = ( { name, diplomaRef } ) => {
  return (
    <div ref={diplomaRef} className="fixed left-[10000px] top-[10000px] -z-10 py-8 font-condensed bg-[url('/uzturk-flag.png')] bg-cover bg-center w-[1123px] h-[794px] bg-white border-8 border-yellow-500 px-20 mx-auto">
      
      {/* Border Decorations */}
      <div className="absolute top-0 left-0">
        <img className="-rotate-90" width="300px" src="/christmas-corner.png" alt="christmas-corner" />
      </div>
      <div className="absolute top-0 right-0">
        <img width="300px" src="/christmas-corner.png" alt="christmas-corner" />
      </div>
      <div className="absolute bottom-0 right-0">
        <img className="rotate-90" width="300px" src="/christmas-corner.png" alt="christmas-corner" />
      </div>
      <div className="absolute bottom-0 left-0">
        <img className="rotate-180" width="300px" src="/christmas-corner.png" alt="christmas-corner" />
      </div>

      {/* Certificate Title */}
      <div className="text-center">
        <h1 className="mb-8 text-8xl font-bold text-yellow-500">DIPLOM</h1>
        <p className="text-xl text-white"> Turk tili bo'yicha O'zbekistondagi eng katta </p>
        <h2 className="text-3xl text-white font-bold mb-1">
          <span className="text-green-500">TURK TILIDA 0 DAN 2-3 OYDA BEMALOL GAPLASHISH</span> <br /> <span className="text-red-500">VA 100% SERTIFIKATLI BO'LISH</span>
        </h2>
        <p className="text-xl text-white">nomli masterklassning 2-kunida ishtirok etganligi uchun </p>
      </div>

      {/* Content */}
      <div className="text-center">
        <h1 className="font-bold uppercase text-6xl px-4 mb-10 font-cursive text-yellow-500 mt-4 inline-block">
          {name}
        </h1>
        <div className="mx-28 h-[1px] bg-white"></div>
        <p className="text-xl text-white">
          Turk tilida bemalol gaplashishingiz va sertifikatni 100% naqd qilishingiz tilakdoshimiz !
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

      <div className="text-center mt-4">
        <p className="text-white">17.01.2026</p>
      </div>
    </div>
  );
};

DiplomaView.propTypes = {
  name: PropTypes.string,
  diplomaRef: PropTypes.ref
}

export default DiplomaView;
