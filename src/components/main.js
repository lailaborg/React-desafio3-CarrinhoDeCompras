import React from 'react';
import Produto from './produto';

export default function Main(props) {
    const {produtos, onAdd} = props;
    return <main className='block col-2 caixa-de-produtos'>
        <h2>Produtos</h2>
        <hr></hr>
        <div className='row'>
            {produtos.map((produto) => (
                <Produto key={produto.id} produto={produto} onAdd={onAdd}></Produto>
    
            ))}

        </div>
    </main>
}