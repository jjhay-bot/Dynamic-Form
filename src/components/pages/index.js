import { Link, Outlet } from "react-router-dom";

export default function Pages() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/accounts">Accounts</Link>
          </li>
          <li>
            <Link to="/create-account">Create account</Link>
          </li>

        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
