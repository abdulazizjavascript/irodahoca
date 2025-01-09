/* eslint-disable react/no-unescaped-entities */

import PropTypes from 'prop-types'
import { useState } from 'react'

const faqData = [
  {
    question: "Yuqoridagi to'lovlar 1 oygami ?",
    answer: "To'lovlar 1 oyga emas, jami 3 oyga qilinadigan to'lov."
  },
  {
    question: "Bo'lib to'lasa bo'ladi ?",
    answer: "Bo'ladi, narxlardagi 2-chizilgan summani 4 martalik bo'lib to'lashingiz mumkin. Bu qaror hali tasdiqlanmadi."
  },
  {
    question: "Ertalabga ham guruhlar bormi ?",
    answer: "Hozircha yo'q, talab kam bo'lgani uchun ocha olmaymiz."
  }
]

function AccordionItem( { question, answer, isOpen, onClick } ) {
  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-5 px-3 text-left"
        onClick={onClick}
      >
        <span className="font-medium text-gray-900">{question}</span>
        <svg
          className={`w-6 h-6 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''
            }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="pb-5 px-3">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  )
}

AccordionItem.propTypes = {
  question: PropTypes.string, answer: PropTypes.string, isOpen: PropTypes.bool, onClick: PropTypes.func,
}

export default function FAQ() {
  const [ openIndex, setOpenIndex ] = useState( null )

  const toggleAccordion = ( index ) => {
    setOpenIndex( openIndex === index ? null : index )
  }

  return (
    <div className="w-full max-w-3xl mx-auto p-6 space-y-8">
      <div className="text-center space-y-2">
        <svg
          className="w-12 h-12 mx-auto text-red-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h1 className="text-xl lg:text-3xl font-bold tracking-tight py-3 px-6 bg-red-600 text-white rounded-xl uppercase">Eng ko'p so'raladigan savollar</h1>
      </div>

      <div>
        {faqData.map( ( faq, index ) => (
          <AccordionItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => toggleAccordion( index )}
          />
        ) )}
      </div>
    </div>
  )
}