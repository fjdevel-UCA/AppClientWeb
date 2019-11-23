import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
export default class NavbarCountry extends React.Component {
  render() {
    return (
      <div>
        <Navbar>
          <Navbar bg="light">
            <Navbar.Brand>Paises UCA</Navbar.Brand>
          </Navbar>
          <ul className="nav justify-content-end">
            <li>
              <Link className="nav-link active" to="/">
                Listar Paises
              </Link>
            </li>
            <li>
              <Link className="nav-link active" to="/agregar">
                agregar
              </Link>
            </li>
            <li>
              <Link className="nav-link active" to="/edit">
                Buscar y actualizar
              </Link>
            </li>
          </ul>
        </Navbar>
      </div>
    );
  }
}
