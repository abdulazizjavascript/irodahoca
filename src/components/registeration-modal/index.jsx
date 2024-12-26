/* eslint-disable react/no-unescaped-entities */
import { useForm } from 'react-hook-form'
import InputMask from 'react-input-mask'
import { useEffect, useState } from 'react'

import PropTypes from 'prop-types'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function RegisterModal( { isOpen, onClose } ) {
  const [ showModal, setShowModal ] = useState( false )
  const [ loading, setLoading ] = useState( false );
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  useEffect( () => {
    if ( isOpen ) {
      setShowModal( true )
    } else {
      setTimeout( () => {
        setShowModal( false )
      }, 300 )
    }
  }, [ isOpen ] )

  const onSubmit = async ( data ) => {
    try {
      setLoading( true )

      data.phone = data.phone.replace( /[^\d]/g, '' ).replace( /^998(\d{2})(\d{7})$/, '+998$1$2' );

      console.log( data );

      axios.post( 'https://irodahoca-production.up.railway.app/register', data );

      navigate( '/telegram' )
    } catch ( err ) {
      console.log( err )
    } finally {
      setLoading( false )
    }
  }

  if ( !showModal ) return null

  return (
    <div
      className={`fixed z-20 inset-0 flex items-center justify-center p-4 transition-all duration-300 ease-in-out ${isOpen
        ? 'opacity-100 bg-black/50'
        : 'opacity-0 bg-black/0 pointer-events-none'
        }`}
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-lg p-6 w-full max-w-md transition-all duration-300 ease-in-out ${isOpen
          ? 'scale-100 opacity-100 translate-y-0'
          : 'scale-95 opacity-0 translate-y-8'
          }`}
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Ro'yxatdan o'tish</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit( onSubmit )} className="space-y-4">
          <div>
            <label className="block text-lg font-medium mb-1">
              Ismingiz
            </label>
            <input
              {...register( 'name', { required: 'Ismingizni kiriting' } )}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-lg font-medium mb-1">
              Telefon raqamingiz
            </label>
            <InputMask
              // eslint-disable-next-line no-nonoctal-decimal-escape
              mask="+\9\98 (99) 999-99-99"
              maskPlaceholder="-"
              {...register( 'phone', {
                required: 'Telefon raqamingizni kiriting',
                pattern: {
                  value: /^\+998 \(\d{2}\) \d{3}-\d{2}-\d{2}$/,
                  message: "Telefon raqamingizni to'g'ri kiriting"
                }
              } )}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="+998991234567"
            >
              {( inputProps ) => <input {...inputProps} type="tel" placeholder="+998 (__) ___-__-__" />}
            </InputMask>
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <button
              disabled={loading}
              type="submit"
              className="flex disabled:opacity-75 items-center justify-center gap-6 w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              {loading ? <svg
                className="w-5 h-5 animate-spin text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.963 7.963 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg> : null}
              <span>Davom etish</span>
            </button>
          </div>
        </form>

      </div>
    </div>
  )
}

RegisterModal.propTypes = {
  isOpen: PropTypes.boolean,
  onClose: PropTypes.func
}