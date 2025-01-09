
import AdminBtn from './../admin-btn/index';
const Admin = () => {
  return (
    <section className="bg-green-500 py-16">
      <div className="container text-center">
        <h1 className="font-bold text-center bg-red-600 py-3 px-3 inline-block text-white text-3xl rounded-xl">SAVOLLARINGIZ BO'LSA SO'RANG</h1>
        <AdminBtn title="Adminga yozish" />
      </div>
    </section>
  )
}

export default Admin