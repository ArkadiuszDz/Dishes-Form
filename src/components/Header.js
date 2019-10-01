import React from "react";
import { Link } from "gatsby";
import '../scss/header.scss';

const Header = ({ siteTitle }) => {
  return (
      <header>
        <div>
          <h1>
            <Link
              to="/">
              {siteTitle}
            </Link>
          </h1>
        </div>
    </header>
  )
}

export default Header;
