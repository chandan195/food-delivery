import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import AddItems from "./pages/addItems/AddItems";
import Order from "./pages/orders/Orders";
import ListItems from "./pages/listItems/ListItems"
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div>
      <ToastContainer/>
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<AddItems />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/list" element={<ListItems />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
