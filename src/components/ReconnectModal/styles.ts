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
  background: linear-gradient(135deg, #3b82f6, #10b981);
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
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  line-height: 1.5;
  color: #6b7280;
`;

export const CodeDisplay = styled.div`
  background: #f8fafc;
  padding: 1.2rem;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  border: 2px solid #e2e8f0;
  text-align: center;
`;

export const CodeLabel = styled.div`
  color: #6b7280;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

export const CodeValue = styled.div`
  color: #10b981;
  font-size: 1.4rem;
  font-weight: 800;
  font-family: "Courier New", monospace;
  letter-spacing: 2px;
`;

export const VerificationDetails = styled.div`
  background: #f0f9ff;
  padding: 1.2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  border: 1px solid #bae6fd;
`;

export const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 0.8rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const DetailIcon = styled.span`
  font-size: 1.2rem;
  flex-shrink: 0;
`;

export const DetailText = styled.span`
  color: #0369a1;
  font-weight: 500;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const CancelButton = styled.button`
  flex: 1;
  padding: 1rem 1.5rem;
  background: #f3f4f6;
  color: #6b7280;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background: #e5e7eb;
    border-color: #d1d5db;
  }
`;

export const ReconnectButton = styled.button`
  flex: 2;
  padding: 1rem 1.5rem;
  background: linear-gradient(135deg, #3b82f6, #10b981);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(59, 130, 246, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const ButtonIcon = styled.span`
  font-size: 1.1rem;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  border: 4px solid #f3f4f6;
  border-top: 4px solid #3b82f6;
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

export const ProgressSteps = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 20px;
    left: 10%;
    right: 10%;
    height: 3px;
    background: #e5e7eb;
    z-index: 1;
  }
`;

export const ProgressStep = styled.div<{ $completed: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
`;

export const StepNumber = styled.div<{ $completed?: boolean }>`
  background: ${(props) => (props.$completed ? "#10b981" : "#e5e7eb")};
  color: ${(props) => (props.$completed ? "white" : "#9ca3af")};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;
`;

export const StepText = styled.div<{ $completed?: boolean }>`
  color: ${(props) => (props.$completed ? "#10b981" : "#9ca3af")};
  font-size: 0.8rem;
  font-weight: 600;
  text-align: center;
  transition: all 0.3s ease;
`;

export const InfoSection = styled.div`
  background: #f0f9ff;
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid #bae6fd;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const InfoIcon = styled.span`
  font-size: 1.2rem;
  flex-shrink: 0;
`;

export const InfoText = styled.div`
  color: #0369a1;
  font-size: 0.9rem;
  font-weight: 500;
  line-height: 1.4;
`;
