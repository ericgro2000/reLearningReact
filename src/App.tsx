import { BrowserRouter } from "react-router-dom"
import "./styles/App.css"
import Navbar from "./components/UI/NavBar/MyNavbar"
import AppRouter from "./components/AppRouter"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter/>
    </BrowserRouter>
  )
}

export default App