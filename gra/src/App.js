import NavBar from "./components/NavBar" ;
import { Image } from "./components/Image";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import{BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <div>
      <Image/>
      <BrowserRouter>
   <NavBar />
     <Routes>
      <Route path="/"element= {<Home />}></Route>
      <Route path="/product"element= {<ProductList />}></Route>
      <Route path="/task-manager"element= {<TaskManager />}></Route>
      <Route path="/about"element= {<About />}></Route>
      <Route path="/contact"element= {<Contact />}></Route>
     </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
