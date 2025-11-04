import styled from "styled-components";

export const LayoutContainer = styled.div`
  min-height: 100vh;
  padding: 1.5rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`;

export const Content = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;

export const SectionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-top: 1.5rem;
  }
`;