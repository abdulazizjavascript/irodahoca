

import PropTypes from "prop-types";

const CertificateView = ( { name, certificateRef } ) => {
  return (
    <div ref={certificateRef} className="fixed left-[10000px] top-[10000px] -z-10 py-8 font-condensed bg-[url('/uzturk-flag-phone.png')] bg-cover bg-center w-[794px] h-[1323px] bg-white border-8 border-yellow-500 px-20 mx-auto">
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
      <div className="flex flex-col items-center justify-center">
        <h1 className="mt-10 mb-4 text-white uppercase text-center">
          <p className="text-[22px]">6 YILLIK TAJRIBA VA C1 DARAJALI SERTIFIKATGA EGA </p>
          <p className="text-[27px]">2000 DAN ZIYOD O’QUVCHILAR TURK TILI USTOZI</p>
          <p className="text-[25.5px] text-yellow-400">IRODAHOCADAN 3 KUNLIK BEPUL ONLINE MASTERKLASS</p>
        </h1>
        <img className="h-[450px] w-[400px] object-cover object-top" src="/irodahoca-magistr-cleaner-resize.png" alt="" />
        <div className="text-white bg-red-600 pt-0 pb-6 rounded-xl text-center w-full">
          <p className="text-[24px]">TURK TILINI 0 DAN ATIGI 2-3 OYDA TEZ VA OSON O’RGANIB</p>
          <p className="text-[22px]">BEMALOL GAPIRA OLISH VA 100% SERTIFIKATLI BO’LISH SIRLARI</p>
        </div>

      </div>

      {/* Content */}
      <div className="my-2 text-center">
        <h1 className="rounded-xl mb-8 text-[48px] font-bold text-yellow-400">MASTERKLASS ISHTIROKCHISI</h1>

        <h1 className="font-bold uppercase text-4xl px-4 font-cursive bg-green-500 rounded-lg pt-0 pb-8">
          {name}
        </h1>
        {/* <div className="mx-28 h-[1px] bg-white mb-2"></div> */}
        <p className="text-[21.5px] text-white">
          Sizni 16-17-18-yanvar kunlari soat 20:00 da masterklassimizda kutamiz.
        </p>
      </div>

      {/* Signatures */}
      <div className="w-full mt-12 px-3 flex justify-between items-center text-white">
        <div className="text-center">
          <img className="h-20 mx-auto" src="/iroda-sign.png" alt="IRODAHOCA" />
          <div className="h-[2px] bg-white mb-3"></div>
          <p className="text-sm font-cursive">IRODAHOCA NASRIDDINOVA</p>
          <p className="text-sm">BOSH USTOZ</p>
        </div>
        <div className="w-48 h-48 mx-auto border-4 border-yellow-500 rounded-full">
          <img className="w-full rounded-full" src="/uzturk-square.png" alt="UZTURK" />
        </div>
        <div className="text-center">
          <img className="h-20 mx-auto" src="/abdulaziz-sign.png" alt="Abdulaziz" />
          <div className="h-[2px] bg-white mb-3"></div>
          <p className="text-sm font-cursive">ABDULAZIZ TOSHPULATOV</p>
          <p className="text-sm">RAHBAR</p>
        </div>
      </div>

      <div className="text-center mt-4">
        <h1 className="inline-block rounded-xl mb-3 text-xl px-2 font-bold bg-yellow-500 pt-0 pb-4 uppercase">16-17-18-yanvar soat 20:00</h1>
      </div>
    </div>
  );
};

CertificateView.propTypes = {
  name: PropTypes.string,
  certificateRef: PropTypes.ref
}

export default CertificateView;
