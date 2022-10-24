import { createContext, PropsWithChildren, useEffect, useMemo, useState } from 'react';
import { OrderType } from '../pages/OrderPage/Type';

export interface Total {
  products: number;
  options: number;
  total: number;
}
export type UpdateItemCountFunc = (itemName: string, newItemCount: number | string, orderType: OrderType) => void;
export type OrderContextProps = [{
  totals: Total,
  products: Map<string, number>,
  options: Map<string, number>
}, UpdateItemCountFunc];

const OrderContext = createContext<OrderContextProps | []>([]);

const pricePerItem = {
  products: 1000,
  options: 500
};

function calculateSubtotal(orderType: OrderType, orderCounts: { options: Map<any, any>; products: Map<any, any> }) {
  let optionCount = 0;
  for (const count of orderCounts[orderType].values()) {
    optionCount += count;
  }
  
  return optionCount * pricePerItem[orderType];
}

export const OrderContextProvider = (props: PropsWithChildren) => {
  const [orderCounts, setOrderCounts] = useState({
    products: new Map<string, number>(),
    options: new Map<string, number>()
  });
  
  const [totals, setTotals] = useState(({
    products: 0,
    options: 0,
    total: 0
  }));
  
  useEffect(() => {
    const productsTotal = calculateSubtotal('products', orderCounts);
    const optionsTotal = calculateSubtotal('options', orderCounts);
    const total = productsTotal + optionsTotal;
    setTotals({
      products: productsTotal,
      options: optionsTotal,
      total
    });
    
  }, [orderCounts]);
  
  const value = useMemo<OrderContextProps>(() => {
    const updateItemCount = (itemName: string, newItemCount: number | string, orderType: OrderType) => {
      const newOrderCounts = {...orderCounts};
      
      const orderCountsMap = orderCounts[orderType];
      orderCountsMap.set(itemName, parseInt(newItemCount.toString(), 10));
      
      setOrderCounts(newOrderCounts);
    };
    
    return [{...orderCounts, totals}, updateItemCount];
  }, [orderCounts, totals]);
  
  return <OrderContext.Provider value={value} {...props} />
}

export default OrderContext;
