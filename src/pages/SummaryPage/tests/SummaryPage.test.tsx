import { render, screen } from '@testing-library/react';
import SummaryPage from '../SummaryPage';

test('checkbox and button', () => {
  render(<SummaryPage />);
  const checkbox = screen.getByRole<HTMLInputElement>('checkbox', {
    name: '주문하려는 것을 확인하셨나요?'
  });
  expect(checkbox.checked).toEqual(false);
  
  const confirmButton = screen.getByRole<HTMLButtonElement>('button', {
    name: '주문 확인'
  });
  expect(confirmButton.disabled).toBeTruthy();
});
