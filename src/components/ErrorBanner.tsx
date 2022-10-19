import React from 'react';

export interface ErrorBannerProps {
  message: string;
}

const ErrorBanner = ({message}: ErrorBannerProps) => {
  const errorMessage = message || '에러입니다.'
  
  return (
    <div
      data-testid="error-banner"
      style={{backgroundColor: 'red', color: 'white'}}
    >
      {errorMessage}
    </div>
  );
};

export default ErrorBanner;
