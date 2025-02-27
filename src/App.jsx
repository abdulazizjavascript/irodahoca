import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from "./pages/home"
import InstagramPhoto from "./pages/instagram-photo"
import Telegram from "./pages/telegram"
// import CertificatePage from "./pages/certificate"
import ByePage from "./pages/bye"
// import DiplomaPage from "./pages/diploma"
// import TashakkurnomaPage from "./pages/tashakkurnoma"
import VebinarPage from "./pages/vebinar"
import GraduationPage from "./pages/graduation"
import LevelGraduationPage from "./pages/level-graduation"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="kurs" element={<HomePage />} />
        <Route index element={<VebinarPage />} />
        <Route path='ins' element={<InstagramPhoto />} />
        <Route path='telegram' element={<Telegram />} />
        {/* <Route path='certificate' element={<CertificatePage />} /> */}
        {/* <Route path='diploma' element={<DiplomaPage />} /> */}
        <Route path='bye' element={<ByePage />} />
        {/* <Route path='tashakkurnoma' element={<TashakkurnomaPage />} /> */}
        <Route path='graduation' element={<GraduationPage />} />
        <Route path='level-graduation' element={<LevelGraduationPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App