import 'bootstrap/dist/css/bootstrap.min.css';

import { useProductContext } from './products';
import { useCart } from './CartContext';

const ProductList = ({ selectedSize }) => {
  const { cartDispatch } = useCart(); 

  const { state } = useProductContext();

  const handleAddToCart = (product) => {
    const itemToAdd = {
      ...product,
      count: 1,
      totalPrice: parseFloat(product.description),
    };
    cartDispatch({ type: 'ADD_TO_CART', payload: itemToAdd });
  };

  const filteredProducts = state.products.filter((product) => {
    return product.size === selectedSize || selectedSize === '';
  });

  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="col"
          >
            <div className="card">
              <img src={product.image}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Giá: {product.description}</p>
                <p className="giaidau">{product.size} </p>
                <button className="add-cart" onClick={() => handleAddToCart(product)}>Add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
