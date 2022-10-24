import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Products, { ProductsProps } from './Products';
import ErrorBanner from '../../components/ErrorBanner';
import Options from './Options';
import OrderContext from '../../contexts/OrderContext';

export type OrderType = 'products' | 'options';
export type updateItemCountComponentFunc = (itemName: string, newItemCount: number | string) => void;

const Type = ({orderType}: { orderType: OrderType }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  const [orderDatas, updateItemCount] = useContext(OrderContext);
  
  useEffect(() => {
    loadItems(orderType);
  }, [orderType]);
  
  const loadItems = async (orderType: string) => {
    try {
      const response = await axios.get(`http://localhost:5001/${orderType}`);
      setItems(response.data);
    } catch (error) {
      setError(true);
    }
  };
  
  if (error) {
    return <ErrorBanner message="에러가 발생했습니다."/>
  }
  
  const ItemComponents = orderType === 'products' ? Products : Options;
  
  const optionItems = !ItemComponents ? null : items.map((item: ProductsProps) => {
    if (!updateItemCount) {
      return null;
    }
  
    return (
      <ItemComponents
        key={item.name}
        name={item.name}
        imagePath={item.imagePath}
        updateItemCount={(itemName: string, newItemCount: number | string) => updateItemCount(itemName, newItemCount, orderType)}
      />
    );
  });
  
  const orderTypeKorean = orderType === 'products' ? '상품' : '옵션';
  return (
    <>
      <h2>주문 종류</h2>
      <p>하나의 가격</p>
      <p>{orderTypeKorean} 총 가격: {orderDatas?.totals[orderType] ?? 0}</p>
      <div
        style={{
          display: 'flex',
          flexDirection: orderType === 'options' ? 'column' : 'row'
        }}
      >
        {optionItems}
      </div>
    </>
  );
};

export default Type;
