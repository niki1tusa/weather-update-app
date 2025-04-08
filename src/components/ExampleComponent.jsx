import React from 'react';

const ExampleComponent = () => {
  return (
    <div>
      {/* Использование через Tailwind класс */}
      <h1 className="font-custom text-2xl">Этот текст использует ваш шрифт через Tailwind</h1>
      
      {/* Использование через inline стили */}
      <p style={{ fontFamily: 'YourFontName, sans-serif' }}>
        Этот текст использует ваш шрифт через inline стили
      </p>
      
      {/* Использование через CSS класс (предполагается, что вы определили этот класс в CSS) */}
      <div className="custom-font-text">
        Этот текст использует ваш шрифт через CSS класс
      </div>
    </div>
  );
};

export default ExampleComponent;