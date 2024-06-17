import React from 'react';
import './Header.css';

const Header = () => {
  // Array of navigation links
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Resume', href: '/resume' },
    { name: 'Skills', href: '/skills' }
  ];

  return (
    <header className="header">
      <div className="nav">
        {/* Logo section */}
        <div className="logo">
          <img src='images/logo2.png' alt="My Portfolio" className="logo-image" />
        </div>
        {/* Navigation links */}
        <div className="nav-links">
          {/* Use map to generate nav links dynamically */}
          {navLinks.map((link, index) => (
            <a key={index} href={link.href}>{link.name}</a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
