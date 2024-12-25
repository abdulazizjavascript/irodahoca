/* eslint-disable react/no-unescaped-entities */
import { useForm } from 'react-hook-form'
import InputMask from 'react-input-mask'
import { useEffect, useState } from 'react'

import PropTypes from 'prop-types'

export default function RegisterModal( { isOpen, onClose } ) {
  const [ showModal, setShowModal ] = useState( false )

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

  const onSubmit = ( data ) => {
    console.log( data )
    onClose()
  }

  if ( !showModal ) return null

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center p-4 transition-all duration-300 ease-in-out ${isOpen
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
              {...register( 'username', { required: 'Ismingizni kiriting' } )}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
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
                required: 'Phone number is required',
                pattern: {
                  value: /^\+998 \(\d{2}\) \d{3}-\d{2}-\d{2}$/,
                  message: 'Please enter a valid phone number'
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
              type="submit"
              className="w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              Davom etish
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