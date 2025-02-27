/* eslint-disable react/no-unescaped-entities */

import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import html2canvas from 'html2canvas';
import CertificateView from './components/view'

export default function LevelGraduationPage() {
  const [ name, setName ] = useState( '' )
  const [ teacher, setTeacher ] = useState( '' )
  const [ ball, setBall ] = useState( '' )
  const [ level, setLevel ] = useState( 'A1' )
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
        link.download = `${name} uchun ${level} darajali sertifikat`; // File name for the downloaded certificate
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
          <span>O'zbekistondagi turk tiliga ixtisoslashgan eng ko'p o'quvchiga ega online turk tili markazi</span>
          <h1 className="text-3xl text-white font-bold my-3"><span className="text-green-500">UZ</span><span className="text-red-500">TURK</span></h1>
          <h1 className='mt-3 font-bold'>O'quvchi darajasini tanlab, ism-familiyasini kiritib sertifikatni yuklab olishingiz mumkin.</h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <select
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
            value={level}
            onChange={( e ) => setLevel( e.target.value )}
          >
            <option value="A1">A1</option>
            <option value="A2">A2</option>
            <option value="B1">B1</option>
          </select>
          <input
            type="text"
            placeholder="O'quvchi imtihon bali"
            value={ball}
            onChange={( e ) => setBall( e.target.value )}
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
            required
          />
          <input
            type="text"
            placeholder="O'quvchi ism familiyasini kiriting"
            value={name}
            onChange={( e ) => setName( e.target.value )}
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
            required
          />
          <input
            type="text"
            placeholder="Ustoz ism va familiyangizni kiriting"
            value={teacher}
            onChange={( e ) => setTeacher( e.target.value )}
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
            required
          />
          <button
            type="submit"
            disabled={!name.trim() || !teacher.trim() || !ball.trim() || isLoading}
            className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-primary/90 disabled:bg-red-300 disabled:cursor-not-allowed transition-colors"
          >
            Yuklab olish
          </button>
        </form>
        <CertificateView certificateRef={certificateRef} name={name} level={level} teacher={teacher} ball={ball} />
      </div>
    </div>
  )
}