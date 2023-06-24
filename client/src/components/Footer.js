import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>made with ❤️ by Vivek</p>
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
