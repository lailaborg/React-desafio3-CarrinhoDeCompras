import './App.css';
import Header from './components/header';
import Main from './components/main';
import Basket from './components/basket';
import data from './data';
import { useState } from 'react';

function App() {
  const { produtos } = data;

  const [cartItems, setCartItems] = useState([]);

  const onAdd = (produto) => {
    const exist = cartItems.find(x => x.id === produto.id);
    if (exist) {
      setCartItems(cartItems.map(x => 
        x.id === produto.id ? {...exist, qty: exist.qty + 1} : x )
      );
    } else {
      setCartItems([...cartItems, {...produto, qty:1}]);
    }
  }

  const onRemove = (produto) => {
    const exist = cartItems.find((x) => x.id === produto.id);
    if (exist.qty === 1 ) {
      setCartItems(cartItems.filter((x) => x.id !== produto.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
        x.id === produto.id ? {...exist, qty: exist.qty - 1} : x )      );
    }
  }

  return (
    <div className="App">
      <Header countCartItems={cartItems.length} ></Header>
      <div className='row'>
        <Main onAdd={onAdd} produtos={produtos}></Main>
        <Basket 
          onAdd={onAdd} 
          onRemove={onRemove} 
          cartItems={cartItems}>

        </Basket>
      </div>
      
    </div>
  );
};

export default App;
