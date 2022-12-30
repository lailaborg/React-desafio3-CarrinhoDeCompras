import React from 'react';

export default function Header(props) {
    const {countCarItems} = props;
    return (
    <header className='row block center'>
        <div>
            <a href="#/">
                <h1>Carrinho de Compras</h1>
            </a>
        </div>
        <div>
            <a href="#/cart" className='comandos'>
            Carrinho{' '}
            {props.countCartItems ? (
                <button className="badge">{props.countCartItems}</button>
            ) : (
                ''
            )}
            </a>{'     '}

            <a href="#/signin" className='comandos'>Login</a>
        </div>
    </header>
    )
}