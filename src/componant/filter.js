import React, { useState } from 'react';

function Filter({ onSizeClick }) {
  const [selectedSize, setSelectedSize] = useState('');

  const handleSizeClick = (size) => {
    setSelectedSize(size);
    onSizeClick(size);
  };

  return (
    <>
      <h2>Sản Phẩm</h2>
      <button
        className={`ft ${selectedSize === 'ao' ? 'selected' : ''}`}
        onClick={() => handleSizeClick('ao')}
      >
       Áo đấu
      </button>
      <button
        className={`ft ${selectedSize === 'Giay' ? 'selected' : ''}`}
        onClick={() => handleSizeClick('Giay')}
      >
        Giày
      </button>
      <button
        className={`ft ${selectedSize === 'bong' ? 'selected' : ''}`}
        onClick={() => handleSizeClick('bong')}
      >
        Bóng
      </button>
      <button
        className={`ft ${selectedSize === 'gang' ? 'selected' : ''}`}
        onClick={() => handleSizeClick('gang')}
      >
        Găng tay
      </button>
      <button
        className={`ft ${selectedSize === 'phukien' ? 'selected' : ''}`}
        onClick={() => handleSizeClick('phukien')}
      >
        Phụ Kiện
      </button>
      <button
        className={`ft ${selectedSize === '' ? 'selected' : ''}`}
        onClick={() => handleSizeClick('')}
      >
        ALL
      </button>
    </>
  );
}

export default Filter;
