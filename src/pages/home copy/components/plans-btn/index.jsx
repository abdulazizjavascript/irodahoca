import PropTypes from 'prop-types';

const PlansBtn = ( { title } ) => {
  return (
    <div className="text-center mt-12">
      <a href="#plans" className="bg-red-600 text-white px-3 py-2 rounded-xl uppercase font-bold text-xl hover:bg-red-700 transition-colors animate-pulseGlow">
        {title || "Kursga yozilish"}
      </a>
    </div>
  )
}

PlansBtn.propTypes = {
  title: PropTypes.string,
}

export default PlansBtn