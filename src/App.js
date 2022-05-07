import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './pages/Blogs/Blogs';
import Home from './pages/Home/Home/Home';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';
import NotFound from './pages/Shared/NotFound/NotFound';
import Login from './pages/UserManagement/Login/Login';
import SignUp from './pages/UserManagement/Signup/Signup';
import { ToastContainer } from 'react-toastify';
import RequireAuth from './pages/UserManagement/RequireAuth/RequireAuth';
import Inventory from './pages/Inventory/Inventory';
import ManageInventory from './pages/ManageInventory/ManageInventory';
import NewItem from './pages/NewItem/NewItem';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/inventory/:id' element={<RequireAuth>
        <Inventory></Inventory>
      </RequireAuth>}></Route>
      <Route path='/manage' element={<RequireAuth>
        <ManageInventory></ManageInventory>
      </RequireAuth>}></Route>
      <Route path='/newitem' element={<RequireAuth>
        <NewItem></NewItem>
      </RequireAuth>}></Route>
      <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer/>
    </div>
  );
}

export default App;
