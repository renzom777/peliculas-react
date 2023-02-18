import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <span className="mb-3 mb-md-0 text-muted">
              &copy; Desarrollado por Renzo Mercado
            </span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a href="https://www.linkedin.com/in/renzo-mercado-4a9720197/">
                <iconify-icon icon="logos:linkedin-icon"></iconify-icon>
              </a>
            </li>
            <li className="ms-3">
              <a href="https://github.com/renzom777">
                <iconify-icon icon="codicon:github-inverted"></iconify-icon>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
