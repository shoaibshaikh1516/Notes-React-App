import React from 'react';

export default function Footer() {
  return (
    <footer style={footerStyles} className="text-white p-3 text-center">
      Copyright &copy;
      {new Date().getFullYear()} JOTer/ SEMIBREVE
    </footer>
  );
}

const footerStyles = {
  background: '#6A10B4',
  color: 'd9c3ec',
};
