import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  padding: 1rem 1.5rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border-bottom: 1px solid rgba(226, 232, 240, 0.8);
  position: relative;

  @media (max-width: 768px) {
    padding: 0.8rem 1rem;
  }
`;

export const Title = styled.h1`
  color: #1a202c;
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 0.3rem;
  letter-spacing: -0.5px;
  background: linear-gradient(135deg, #10b981, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 0.2rem;
  }
`;

export const Subtitle = styled.h2`
  color: #3b82f6;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;

  &::before {
    content: "⚡";
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    gap: 0.2rem;
  }
`;
