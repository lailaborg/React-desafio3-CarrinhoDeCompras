import React from 'react';

export default function Produto(props) {
  const { produto, onAdd } = props;
  return (
    <div className='item-produto'>
      <img className='small' src={produto.image} alt={produto.name}></img>
      <h3>{produto.name}</h3>
      <div className='preco'>R${produto.price}</div>
      <div>
        <button className='addCart' onClick={() => onAdd(produto)}>Adicionar ao carrinho</button>
      </div>
    </div>
  );
};
