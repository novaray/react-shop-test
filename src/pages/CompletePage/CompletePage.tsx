import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import OrderContext, { Total } from '../../contexts/OrderContext';
import ErrorBanner from '../../components/ErrorBanner';
import { AppPassingProps } from '../../App';

export interface Order {
  orderNumber: number;
  price: number;
}

const CompletePage = ({setStep}: AppPassingProps) => {
  const [orderDatas, , resetOrderDatas] = useContext(OrderContext);
  const [orderHistory, setOrderHistory] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    orderCompleted(orderDatas);
  }, [orderDatas]);
  
  const orderCompleted = async (orderDatas?: { totals: Total, products: Map<string, number>, options: Map<string, number> }) => {
    try {
      const response = await axios.post('http://localhost:5001/order', orderDatas);
      setOrderHistory(response.data);
      setLoading(false);
    } catch (e) {
      setError(true);
    }
  };
  
  if (error) {
    return <ErrorBanner message="에러가 발생했습니다."/>;
  }
  
  const orderTable = orderHistory.map(item => (
    <tr key={item.orderNumber}>
      <td>{item.orderNumber}</td>
      <td>{item.price}</td>
    </tr>
  ));
  
  const handleClick = () => {
    resetOrderDatas && resetOrderDatas();
    setStep(0);
  }
  
  if (loading) {
    return <div>loading</div>;
  } else {
    return (
      <div style={{textAlign: 'center'}}>
        <h2>주문이 성공했습니다.</h2>
        <h3>지금까지 모든 주문</h3>
        <br/>
        <table style={{margin: 'auto'}}>
          <tbody>
          <tr>
            <th>주문 번호</th>
            <th>주문 가격</th>
          </tr>
          {orderTable}
          </tbody>
        </table>
        <button onClick={handleClick}>첫페이지로</button>
      </div>
    );
  }
};

export default CompletePage;
