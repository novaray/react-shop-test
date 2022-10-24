import React from 'react';
import './App.css';
import OrderPage from './pages/OrderPage/OrderPage';
import { OrderContextProvider } from './contexts/OrderContext';

function App() {
  return (
    <div style={{padding: '4rem'}}>
      <OrderContextProvider>
        <OrderPage/>
      </OrderContextProvider>
    </div>
  );
}

export default App;
