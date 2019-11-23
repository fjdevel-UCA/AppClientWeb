import React from "react";
import NavbarCountry from "./NavbarCountry";
function Layout(props) {
  return (
    <React.Fragment>
      <NavbarCountry/>
      {props.children}
    </React.Fragment>
  );
}

export default Layout;