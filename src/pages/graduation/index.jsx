/* eslint-disable react/no-unescaped-entities */

import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import html2canvas from 'html2canvas';
import CertificateView from './components/view'

export default function GraduationPage() {
  const [ name, setName ] = useState( '' )
  const [ isLoading, setIsLoading ] = useState( false );

  const navigate = useNavigate()
  const certificateRef = useRef( null );

  const handleSubmit = async ( e ) => {
    try {
      e.preventDefault()
      if ( certificateRef.current ) {
        setIsLoading( true );
        // Capture the element as a canvas
        const canvas = await html2canvas( certificateRef.current );

        const image = canvas.toDataURL( "image/png" );

        const link = document.createElement( "a" );
        link.href = image;
        link.download = `${name} sertifikat`; // File name for the downloaded certificate
        link.click();

        navigate( '/bye' )
      }
    } finally {
      setIsLoading( false )
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="mb-3 text-center">
          <span>Turk tili bo'yicha O'zbekistondagi eng katta</span>
          <h1 className="text-3xl text-white font-bold my-3"><span className="text-green-500">SERTIFIKAT</span> <span className="text-red-500">SIRLARI</span></h1>
          <span>nomli vibenarimizning 1-kunida qatnashganingiz uchun tashakkur. Qolgan kunlarda ham sizni kutamiz 😍</span>
          <h1 className='mt-3 font-bold'>Marhamat, ism familiyangizni kiritib sertifikatingizni olishingiz mumkin</h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Ism-familiyangizni kiriting"
            value={name}
            onChange={( e ) => setName( e.target.value )}
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
            required
          />
          <button
            type="submit"
            disabled={!name.trim() || isLoading}
            className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-primary/90 disabled:bg-red-300 disabled:cursor-not-allowed transition-colors"
          >
            Yuklab olish
          </button>
        </form>
        <CertificateView certificateRef={certificateRef} name={name} />
      </div>
    </div>
  )
}