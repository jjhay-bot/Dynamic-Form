import "./App.css";
import Layout from "./pages";
import { Routes, Route } from "react-router-dom";
// import NoPageFound from "./pages/NoPageFound";
import Accounts from "./pages/Accounts";
import CreateAccount from "./pages/CreateAccount";
import Header from "./components/header/index";
import UpdateAccount from "./components/form/update";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Accounts />} />
          <Route path="accounts" element={<Accounts />} />
          <Route path="create-account" element={<CreateAccount />} />
          <Route path="update-account" element={<UpdateAccount />} />
          <Route path="*" element={<Accounts />} />
        </Route>
      </Routes>
    </div>
  );
}
