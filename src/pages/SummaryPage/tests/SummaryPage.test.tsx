import { render } from '../../../test-utils';
import { screen } from '@testing-library/react';
import SummaryPage from '../SummaryPage';

test('checkbox and button', () => {
  const setStep = jest.fn();
  render(<SummaryPage setStep={setStep} />);
  const checkbox = screen.getByRole<HTMLInputElement>('checkbox', {
    name: '주문하려는 것을 확인하셨나요?'
  });
  expect(checkbox.checked).toEqual(false);
  
  const confirmButton = screen.getByRole<HTMLButtonElement>('button', {
    name: '주문 확인'
  });
  expect(confirmButton.disabled).toBeTruthy();
});
