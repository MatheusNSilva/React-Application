import React from 'react';

const Header = () => {
    return (
        <nav>
        <div className="nav-wrapper indigo lighten-2">
          <a href="/" className="brand-logo">Casa do Saber</a>
          <ul id="nav-mobile" className="right ">
            <li><a href="/autores">Autores</a></li>
            <li><a href="/contato">Livros</a></li>
            <li><a href="/sobre">Sobre</a></li>
          </ul>
        </div>
      </nav>
    );
}
export default Header;