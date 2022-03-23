import "./App.css";
import Layout from "./pages";
import { Routes, Route } from "react-router-dom";
// import NoPageFound from "./pages/NoPageFound";
import Accounts from "./pages/Accounts";
import CreateAccount from "./pages/CreateAccount";
import Header from "./components/header/index";
import EditAccount from './pages/EditAccount';
import SnackbarNotif from './components/ui/notification';


export default function App() {
  return (
    <div>
      <SnackbarNotif />
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Accounts />} />
          <Route path="accounts" element={<Accounts />} />
          <Route path="create-account" element={<CreateAccount />} />
          <Route path="update-account" element={<EditAccount />} />
          <Route path="*" element={<Accounts />} />
        </Route>
      </Routes>
    </div>
  );
}
