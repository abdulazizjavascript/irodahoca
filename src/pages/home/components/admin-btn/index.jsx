const AdminBtn = ( { title } ) => {
  return (
    <div className="text-center mt-12">
      <a href="https://t.me/irodahoca_admin" className="bg-red-600 text-white px-3 py-2 rounded-xl uppercase font-bold text-xl hover:bg-red-700 transition-colors animate-pulseGlow">
        {title || "Ro'yxatdan o'tish"}
      </a>
    </div>
  )
}

export default AdminBtn