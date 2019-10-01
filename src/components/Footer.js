import React from 'react';
import '../scss/footer.scss';

const Footer = () => {
  return (
    <footer>
      <div>
        © {new Date().getFullYear()}, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
      </div>
    </footer>
  )
}

export default Footer;