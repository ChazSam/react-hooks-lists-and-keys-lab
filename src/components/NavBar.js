import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{links.map(obj => <a key = {obj} href = {`#${obj}`} > {obj} </a>)}</nav>;
  
}

export default NavBar;
