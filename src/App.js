import { Route,Switch,Redirect } from "react-router-dom";
import About from "./components/About/About";
import AddItem from "./components/AddItem/AddItem";
import Contact from "./components/Contact/Contact";
import Detail from "./components/Detail/Detail";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Register from "./components/Register/Register";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const {user,authIsReady} = useAuthContext()
  return (
    <>
      <Navbar />
      {authIsReady &&(<Switch>
        <Route path="/" exact>{user && <Home />}{ !user && <Redirect to='/login' />}</Route>
        <Route path="/products" exact ><Products /></Route>
        <Route path="/about" exact >{<About />}</Route>
        <Route path="/contact" exact >{<Contact />}</Route>
        <Route path="/login" exact>{!user && <Login />}{user && <Redirect to='/' />}</Route>
        <Route path="/register" exact>{!user && <Register />}{user && <Redirect to='/' />}</Route>
        <Route path="/additem" exact>{<AddItem />}</Route>
        <Route path="/detail/:id" exact>{<Detail />}</Route>

      </Switch>)}
      
      
    </>
  );
}

export default App;
