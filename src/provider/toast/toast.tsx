import styled from '@emotion/styled';
import React, { createContext, PropsWithChildren, useContext, useState, useEffect } from 'react';

interface ToastContextProps {
  showToast: (message: string) => void;
}

export const ToastContext = createContext<ToastContextProps>({
  showToast: () => { },
});

export const ToastProvider = ({ children }: PropsWithChildren) => {
  const [toastMessage, setToastMessage] = useState<string>('');
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const showToast = (message: string) => {
    setToastMessage(message);
  };

  useEffect(() => {
    if (toastMessage) {
      setIsVisible(true);
      const hideTimeout = setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => {
          setToastMessage('');
        }, 500); // 애니메이션 지속 시간과 일치시킴
      }, 3000);

      return () => clearTimeout(hideTimeout);
    }
  }, [toastMessage]);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toastMessage && (
        <StyledToast className={`toast ${isVisible ? 'visible' : 'hidden'}`}>
          <span className="toast-message">{toastMessage}</span>
        </StyledToast>
      )}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  return useContext(ToastContext);
};

const StyledToast = styled.div`
  position: fixed;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: #fff;
  padding: 8px 16px;
  border-radius: 8px;
  z-index: 9999;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s, transform 0.5s;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  &.hidden {
    opacity: 0;
    transform: translateY(20px);
  }
`;