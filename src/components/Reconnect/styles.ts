import styled from "styled-components";

export const LoginContainer = styled.section`
  background: rgba(255, 255, 255, 0.95);
  margin: 1rem auto;
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
  max-width: 500px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    margin: 0.5rem auto;
  }
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

export const SyncIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

export const SectionTitle = styled.h3`
  color: #1a202c;
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #3b82f6, #10b981);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const InfoBadge = styled.div`
  background: linear-gradient(135deg, #10b981, #3b82f6);
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  font-weight: 700;
  font-size: 0.9rem;
  display: inline-block;
  box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
`;

export const Description = styled.p`
  color: #4a5568;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  line-height: 1.6;
  font-weight: 500;
`;

export const InputGroup = styled.div`
  margin-bottom: 2rem;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  color: #2d3748;
  font-weight: 700;
  font-size: 1.1rem;
`;

export const KeyIcon = styled.span`
  font-size: 1.2rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1.2rem 1.5rem;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  background: white;
  font-weight: 500;
  color: #1a202c;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
    transform: translateY(-2px);
  }

  &::placeholder {
    color: #a0aec0;
  }

  @media (max-width: 768px) {
    padding: 1rem 1.2rem;
    font-size: 1rem;
  }
`;

export const ExampleText = styled.p`
  color: #718096;
  margin-top: 0.5rem;
  font-size: 0.9rem;
  font-style: italic;
`;

export const FeaturesList = styled.div`
  background: linear-gradient(135deg, #f0f9ff, #e0f2fe);
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  border: 1px solid #bae6fd;
`;

export const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  color: #1e40af;
  font-weight: 600;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const FeatureIcon = styled.span`
  font-size: 1.2rem;
  flex-shrink: 0;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const Button = styled.button<{ variant?: "primary" | "secondary" }>`
  flex: 1;
  padding: 1.2rem 2rem;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);

  ${({ variant = "primary" }) =>
    variant === "primary"
      ? `
        background: linear-gradient(135deg, #3b82f6, #10b981);
        color: white;
        
        &:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(59, 130, 246, 0.4);
        }
      `
      : `
        background: linear-gradient(135deg, #6b7280, #4b5563);
        color: white;
        
        &:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(107, 114, 128, 0.4);
        }
      `}

  &:active {
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
    font-size: 1rem;
  }
`;

export const ButtonIcon = styled.span`
  font-size: 1.2rem;
`;

export const HelpSection = styled.div`
  background: linear-gradient(135deg, #fef3c7, #fef7cd);
  padding: 1rem 1.5rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 1px solid #fcd34d;
`;

export const HelpIcon = styled.span`
  font-size: 1.5rem;
  flex-shrink: 0;
`;

export const HelpText = styled.div`
  color: #92400e;
  font-size: 0.95rem;

  strong {
    display: block;
    margin-bottom: 0.2rem;
  }
`;
