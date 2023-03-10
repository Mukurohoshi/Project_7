import LOGO from "../image/LOGO.png";
import { NavLink } from "react-router-dom";

export default function Header({ props }) {
  return (
  <header className="kasa-header">
            <div>
            <NavLink to="/">
                <img
                    src={LOGO}
                    alt="logo Kasa"
                    className="kasa-header-logo"
                ></img>
            </NavLink>
            </div>
            <nav>
                <ul className="kasa-header-list">
                    <li className="kasa_accueil">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? 'kasa-link-active'
                                    : 'kasa-link-inactive'
                            }
                        >
                            Accueil
                        </NavLink>
                    </li>
                    <li  className="kasa_apropos">
                        <NavLink
                            to="/A_propos"
                            className={({ isActive }) =>
                                isActive
                                    ? 'kasa-link-active'
                                    : 'kasa-link-inactive'
                            }
                        >
                            A propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}