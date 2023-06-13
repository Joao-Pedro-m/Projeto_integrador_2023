import shopping_cart from "../img/shopping-cart.png"
function ProductItem({ product }) {
  return (
    <>
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <div>
          <img src={product.image} alt={product.name} title={product.name} className="w-full h-48 object-contain rounded-lg" />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold mb-2">{product.name}</h3>
          <p className="text-gray-600 mb-2">R${(product.price).toFixed(2)}</p>
          <div className="flex justify-around">
          <button className="bg-[#1E90FF] hover:bg-[#00008B] text-white font-bold py-2 px-4 rounded">
            Comprar
          </button>
          <button className="bg-[#1E90FF] hover:bg-[#00008B] text-white font-bold py-2 px-4 rounded">
            <img src={shopping_cart} alt="adicionar ao carrinho" className="w-8" title="adicionar ao carrinho" />
          </button>
            </div>
        </div>
      </div>
    </>
  );
}

export default ProductItem;