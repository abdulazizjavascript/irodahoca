/* eslint-disable react/no-unescaped-entities */

import PropTypes from "prop-types"

const Card = ( { children, title, price } ) => {
  return (
    <div className="relative" >
      <div className="absolute left-1/2 -translate-x-1/2 transform -translate-y-1/2 bg-red-600 text-white px-4 py-2 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold tracking-wider whitespace-nowrap">{title}</h1>
      </div>
      <div className="max-w-[500px] mx-auto bg-green-500 rounded-xl py-8 px-4 text-center text-white shadow-xl" >
        {children}
      </div>
      {price ? <div className="absolute -translate-y-1/2 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded-xl shadow-lg">
        <p className="text-lg font-bold tracking-wider whitespace-nowrap">
          BEPUL <span className="line-through">{price}</span> so'm
        </p>
      </div> : null}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node, title: PropTypes.string, price: PropTypes.number,
}

export default Card