import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Desitination from "./pages/destination/Desitination";
import Crew from "./pages/crew/Crew";
import Technology from "./pages/technology/Technology";

function App() {
  const [openSidebar,setOpenSidebar] = useState(false)
  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar)
  }
  return (
    <Router>
        <Navbar toggle={toggleSidebar} />
        <Sidebar isOpen={openSidebar} open={toggleSidebar}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/destination" element={<Desitination/>}/>
        <Route path="/crew" element={<Crew/>} />
        <Route path="/technology" element={<Technology/>} />
      </Routes>
    </Router>
  );
}




export default App;