import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/home"
import InstagramPhoto from "./pages/instagram-photo"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/instagram-photo' element={<InstagramPhoto />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App