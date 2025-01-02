/* eslint-disable react/no-unescaped-entities */

import { useRef, useState } from 'react'
import html2canvas from 'html2canvas';
import CertificateView from './components/view'

export default function CertificatePage() {
  const [ name, setName ] = useState( '' )
  const certificateRef = useRef( null );

  const handleSubmit = async ( e ) => {
    e.preventDefault()
    if ( certificateRef.current ) {

      // Capture the element as a canvas
      const canvas = await html2canvas( certificateRef.current, {
        scale: 2,
        width: 1123,
        height: 794,
        backgroundColor: '#ffffff',
        useCORS: true,
        logging: false,
        removeContainer: true,
        allowTaint: true,
      } );

      const image = canvas.toDataURL( "image/png" );

      const link = document.createElement( "a" );
      link.href = image;
      link.download = `${name} 1-kun sertifikati`; // File name for the downloaded certificate
      link.click();
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-primary mb-8">
          Sertifikat generatori
        </h1>
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
            disabled={!name.trim()}
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-primary/90 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            Ko'rish
          </button>
        </form>
        <CertificateView certificateRef={certificateRef} name={name} />
      </div>
    </div>
  )
}