import React from 'react';

const Button = ({ text, imgSrc, imgAlt, className, to  }) => {
  return (
    <Link to={to}>
<button className={`ml-10 px-9 py-5 text-gray-500 font-semibold rounded-full transition duration-300 flex items-center transform hover:scale-105 ${className}`}>
      {text} 
      <img src={imgSrc} className="pl-5 w-sm hover:stroke-white" alt={imgAlt} />
    </button>
    </Link>
  );
};

export default Button;