import React from 'react';

export default function Basket(props) {
    const {cartItems, onAdd, onRemove} = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const shippingPrice = itemsPrice > 2000 ? 0 : 50;
    const totalPrice = itemsPrice + shippingPrice;
    return (
        <aside className="block col-1 carrinho">
          <h2 className='titulo-carrinho'>Itens do Carrinho</h2>
          <div>
            {cartItems.length === 0 && <div>Carrinho vazio</div>}
            {cartItems.map((item) => (
              <div key={item.id} className="row">
                <div className="col-2 produto-carrinho">{item.name}</div>
                <div className="col-2">
                  <button onClick={() => onRemove(item)} className="remove">
                    -
                  </button>{' '}
                  <button onClick={() => onAdd(item)} className="add">
                    +
                  </button>
                </div>
    
                <div className="col-2 text-right">
                  {item.qty} x R${item.price.toFixed(2)}
                </div>
              </div>
            ))}
            <br></br>
            {cartItems.length !== 0 && (
                <>
                <hr></hr>
                <div className='row'>
                    <div className='col-2'>Preço dos itens</div>
                    <div className='col-1 text-right'>R${itemsPrice.toFixed(2)}</div>
                </div>
                <div className='row'>
                    <div className='col-2'>Entrega</div>
                    <div className='col-1 text-right'>R${shippingPrice.toFixed(2)}</div>
                </div>
                <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>

              
            </div>
            <hr />
            <br></br>
            <div className="row">
              <button onClick={() => alert('Implement Checkout!')}>
                Confirmar
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}