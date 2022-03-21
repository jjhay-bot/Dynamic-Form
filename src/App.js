import "./App.css";
import Layout from "./components/pages";
import Home from "./components/pages/Home";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import NoPageFound from "./components/pages/NoPageFound";
import Accounts from "./components/pages/Accounts";
import CreateAccount from "./components/pages/CreateAccount";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="accounts" element={<Accounts />} />
          <Route path="create-account" element={<CreateAccount />} />
          <Route path="*" element={<NoPageFound />} />
        </Route>
      </Routes>
    </div>
  );
}
