import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  padding: 2.5rem 1.5rem;
  text-align: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

export const Title = styled.h1`
  color: #1a202c;
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  letter-spacing: -1px;
  background: linear-gradient(135deg, #10b981, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const Subtitle = styled.h2`
  color: #3b82f6;
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &::before {
    content: "⚡";
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
