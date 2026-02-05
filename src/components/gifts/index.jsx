/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import PropTypes from "prop-types";

import RegisterModal from "../registeration-modal";

import ReactPixel from "react-facebook-pixel";

const Gifts = ( { titleClassName, registerClassName } ) => {
  const [ isModalOpen, setIsModalOpen ] = useState( false );

  return (
    <div className="flex justify-center items-center flex-col gap-2">
      <div className="text-sm">
        <h2
          className={`my-2 text-[14px] bg-red-500 inline-block px-4 py-2 text-white rounded-md ${titleClassName}`}
        >
          {/* Ro'yxatdan o'tganlar uchun sovg'alarimiz ro'yxati */}
          🎁 Shuningdek quyidagi 10 ta sovg'alar ham 🎁
        </h2>
        <ul className="text-center">
          <li className="bg-green-500 text-[12px] my-2 py-1 rounded-md text-white">
            1. Turk tilining alifbosi video darsi
          </li>
          <li className="bg-green-500 text-[12px] my-2 py-1 rounded-md text-white">
            2. Merhaba-singilmanizm video darsi
          </li>
          <li className="bg-green-500 text-[12px] my-2 py-1 rounded-md text-white">
            3. 1000 ta rasmli lug'atlar iborat kitob
          </li>
          <li className="bg-green-500 text-[12px] my-2 py-1 rounded-md text-white">
            4. Turk tili o'rganishdagi xatoliklarga yechimlar
          </li>
          <li className="bg-green-500 text-[12px] my-2 py-1 rounded-md text-white">
            5. Turk tilidagi barcha eng zo'r darsliklar kanali
          </li>
          <li className="bg-green-500 text-[12px] my-2 py-1 rounded-md text-white">
            6. 2026-yilda turk tili orqali 2-3 oyda til sertifikati
          </li>
          <li className="bg-green-500 text-[12px] my-2 py-1 rounded-md text-white">
            7. Turk tili o'rganuvchilari uchun motivatsion rolik
          </li>
          <li className="bg-green-500 text-[12px] my-2 py-1 rounded-md text-white">
            8. Turk tilida 0 dan 2-3 oyda bemalol gaplasha olish
          </li>
          <li className="bg-green-500 text-[12px] my-2 py-1 rounded-md text-white">
            9. 500 ta gapdan iborat turkcha so'zlashamiz kitobi
          </li>
          <li className="bg-green-500 text-[12px] my-2 py-1 rounded-md text-white">
            10. 500 ta eng ko'p ishlatiladigan turkcha so'zlar kitobi
          </li>
        </ul>
      </div>
      <div
        className={`flex items-center justify-center gap-4 mt-10 ${registerClassName}`}
      >
        <button
          onClick={() => {
            // setIsModalOpen( true );
            ReactPixel.track( "Lead" );
            window.location.href = "https://t.me/m/0kO11m-FMjFi";
          }}
          className="flex font-bold bg-red-600 text-white px-12 py-2 rounded-xl text-xl hover:bg-red-700 transition-colors animate-pulseGlow"
        >
          SOVG'ALARNI OLISH
        </button>
      </div>
      <RegisterModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen( false )}
      />
    </div>
  );
};

export default Gifts;

Gifts.propTypes = {
  titleClassName: PropTypes.string,
  registerClassName: PropTypes.string,
};
