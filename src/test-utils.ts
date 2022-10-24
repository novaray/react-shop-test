import { render, RenderOptions } from '@testing-library/react';
import { OrderContextProvider } from './contexts/OrderContext';
import { ReactElement } from 'react';

const customRender = (ui: ReactElement, options?: RenderOptions) => {
  render(ui, {
    wrapper: OrderContextProvider,
    ...options
  });
}

export * from '@testing-library/react';

export {customRender as render};
