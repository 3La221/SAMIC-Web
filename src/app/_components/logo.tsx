import React from 'react';

const Logo = () => {
  return (
    <a href='/'>
      <img 
        src='/logos/logo.png' 
        alt='logo' 
        width={200} // Adjust width as needed
        height={200} // Adjust height as needed
        style={{ width: 'auto', height: 'auto' }}
        loading="lazy" // Lazy loading
      />
    </a>
  );
};

export default Logo;
