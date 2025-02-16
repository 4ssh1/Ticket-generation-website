import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./Router/HomePage"
import FormPage from "./Router/FormPage"
import DownloadTicketPage from "./Router/DownloadTicketPage"
import About from "./Router/About"
import AllTickets from "./Router/AllTickets"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element= {<HomePage />}/>
      <Route path="/ticket" element={<FormPage />}/>
      <Route path="/lastPage" element={<DownloadTicketPage />}/>
      <Route path="/aboutpage" element={<About />}/>
      <Route path="/alltickets" element={<AllTickets />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
