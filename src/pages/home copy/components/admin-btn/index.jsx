import PropTypes from 'prop-types';

const AdminBtn = ( { title, link } ) => {
  return (
    <div className="text-center mt-12">
      <a href={link || "https://t.me/irodahoca_payment_bot"} className="bg-red-600 text-white px-3 py-2 rounded-xl uppercase font-bold text-xl hover:bg-red-700 transition-colors animate-pulseGlow">
        {title || "Ro'yxatdan o'tish"}
      </a>
    </div>
  )
}

AdminBtn.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string
}

export default AdminBtn