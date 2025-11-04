import styled, { keyframes } from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`;

export const ModalContainer = styled.div`
  background: white;
  border-radius: 20px;
  padding: 2rem;
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
  position: relative;

  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 16px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  position: relative;
`;

export const ModalIcon = styled.div`
  font-size: 2.5rem;
  margin-right: 1rem;
`;

export const ModalTitle = styled.h3`
  color: #1a202c;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  flex: 1;
  background: linear-gradient(135deg, #10b981, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  color: #6b7280;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: #f3f4f6;
    color: #374151;
  }
`;

export const ModalContent = styled.div`
  color: #4a5568;
`;

export const Description = styled.p`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  line-height: 1.5;
  color: #6b7280;
`;

export const Amount = styled.span`
  color: #10b981;
  font-weight: 700;
  font-size: 1.2rem;
`;

export const PackageName = styled.span`
  color: #3b82f6;
  font-weight: 700;
`;

export const InputGroup = styled.div`
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.8rem;
  color: #374151;
  font-weight: 600;
  font-size: 1rem;
`;

export const PhoneIcon = styled.span`
  font-size: 1.2rem;
`;

export const PhoneInput = styled.input`
  width: 100%;
  padding: 1rem 1.2rem;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  background: white;
  color: #1a202c;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }

  &:disabled {
    background: #f9fafb;
    color: #6b7280;
  }
`;

export const ExampleText = styled.p`
  color: #6b7280;
  font-size: 0.85rem;
  margin-top: 0.5rem;
  font-style: italic;
`;

export const PaymentDetails = styled.div`
  background: #f8fafc;
  padding: 1.2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  border: 1px solid #e2e8f0;
`;

export const DetailItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.8rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const DetailLabel = styled.span`
  color: #6b7280;
  font-weight: 500;
`;

export const DetailValue = styled.span`
  color: #1a202c;
  font-weight: 600;
`;

export const PayButton = styled.button<{ disabled?: boolean }>`
  width: 100%;
  padding: 1.2rem 2rem;
  background: ${(props) =>
    props.disabled
      ? "linear-gradient(135deg, #9ca3af, #6b7280)"
      : "linear-gradient(135deg, #10b981, #3b82f6)"};
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0 6px 20px rgba(16, 185, 129, 0.3);

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(16, 185, 129, 0.4);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }
`;

export const ButtonIcon = styled.span`
  font-size: 1.2rem;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  border: 4px solid #f3f4f6;
  border-top: 4px solid #10b981;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spin} 1s linear infinite;
  margin: 0 auto 1.5rem;
`;

export const LoadingSection = styled.div`
  text-align: center;
  padding: 1rem 0;
`;

export const LoadingTitle = styled.h4`
  color: #1a202c;
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
`;

export const LoadingText = styled.p`
  color: #6b7280;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`;

export const Countdown = styled.div`
  background: #fffbeb;
  color: #92400e;
  padding: 0.8rem 1.2rem;
  border-radius: 10px;
  font-weight: 600;
  margin-bottom: 1.5rem;
  border: 1px solid #fcd34d;
`;

export const Instructions = styled.div`
  background: #f0f9ff;
  padding: 1.2rem;
  border-radius: 10px;
  border: 1px solid #bae6fd;
`;

export const Instruction = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 0.8rem;
  color: #0369a1;
  font-weight: 500;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Number = styled.div`
  background: #0ea5e9;
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 700;
  flex-shrink: 0;
`;
