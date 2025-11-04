import styled from "styled-components";

export const PurchaseContainer = styled.section`
  background: rgba(255, 255, 255, 0.95);
  margin: 2rem auto;
  padding: 2.5rem;
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  max-width: 1000px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    margin: 1rem auto;
    border-radius: 20px;
  }
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
  position: relative;
`;

export const WifiIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

export const SectionTitle = styled.h3`
  color: #1a202c;
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #10b981, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const PromoBadge = styled.div`
  background: linear-gradient(135deg, #ff6b6b, #ffa726);
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  font-weight: 700;
  font-size: 0.9rem;
  display: inline-block;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
`;

export const Instructions = styled.div`
  background: linear-gradient(135deg, #f8fafc, #e2e8f0);
  padding: 2rem;
  border-radius: 16px;
  margin-bottom: 2rem;
  border-left: 6px solid #10b981;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const InstructionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;

  h4 {
    color: #1a202c;
    font-size: 1.3rem;
    font-weight: 700;
    margin: 0;
  }
`;

export const InstructionIcon = styled.div`
  font-size: 2rem;
`;

export const InstructionList = styled.ol`
  list-style: none;
  padding: 0;
`;

export const InstructionItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.2rem;
  padding: 1rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  font-weight: 600;
  color: #4a5568;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const StepNumber = styled.div`
  background: linear-gradient(135deg, #3b82f6, #10b981);
  color: white;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  flex-shrink: 0;
`;

export const ContactInfo = styled.div`
  background: linear-gradient(135deg, #dbeafe, #e0f2fe);
  padding: 1.5rem;
  border-radius: 16px;
  margin: 2rem 0;
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 2px solid #3b82f6;
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.15);

  strong {
    color: #1e40af;
    font-size: 1.2rem;
    display: block;
    margin-bottom: 0.3rem;
  }

  span {
    color: #4b5563;
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const PhoneIcon = styled.div`
  font-size: 2.5rem;
  flex-shrink: 0;
`;

export const PromoSection = styled.div`
  background: linear-gradient(135deg, #fffbeb, #fef3c7);
  padding: 2rem;
  border-radius: 16px;
  margin: 2.5rem 0;
  border: 2px dashed #f59e0b;
  text-align: center;
`;

export const PromoTitle = styled.h4`
  color: #92400e;
  font-size: 1.4rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
`;

export const PromoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
`;

export const PromoCard = styled.div`
  background: white;
  padding: 1.5rem 1rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const PromoIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

export const PromoText = styled.div`
  color: #1f2937;
  font-weight: 600;
  font-size: 0.9rem;
`;

export const PackagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  margin: 2.5rem 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const PackageCard = styled.div<{ $popular?: boolean }>`
  background: ${(props) =>
    props.$popular
      ? "linear-gradient(135deg, #3b82f6, #10b981)"
      : "linear-gradient(135deg, #ffffff, #f8fafc)"};
  padding: 2rem 1.5rem;
  border-radius: 20px;
  text-align: center;
  color: ${(props) => (props.$popular ? "white" : "#1a202c")};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  box-shadow: ${(props) =>
    props.$popular
      ? "0 20px 40px rgba(59, 130, 246, 0.3)"
      : "0 8px 25px rgba(0, 0, 0, 0.1)"};
  border: ${(props) =>
    props.$popular
      ? "2px solid rgba(255, 255, 255, 0.3)"
      : "2px solid transparent"};

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: ${(props) =>
      props.$popular
        ? "0 25px 50px rgba(59, 130, 246, 0.4)"
        : "0 15px 35px rgba(0, 0, 0, 0.15)"};
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`;

export const PopularBadge = styled.div`
  background: linear-gradient(135deg, #ffd700, #ffa500);
  color: #1a202c;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 800;
  font-size: 0.8rem;
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
`;

export const PackageIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

export const PackageDuration = styled.h4`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const PackagePrice = styled.div`
  font-size: 2.2rem;
  font-weight: 900;
  margin-bottom: 1rem;
  text-shadow: ${(props) =>
    props.theme === "popular" ? "0 2px 4px rgba(0, 0, 0, 0.2)" : "none"};

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const PackageSpeed = styled.div`
  font-size: 1rem;
  opacity: ${(props) => (props.theme === "popular" ? "0.9" : "0.8")};
  font-weight: 600;
  margin-bottom: 1.5rem;
  background: ${(props) =>
    props.theme === "popular"
      ? "rgba(255, 255, 255, 0.2)"
      : "rgba(59, 130, 246, 0.1)"};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  display: inline-block;
`;

export const SelectButton = styled.div`
  background: ${(props) =>
    props.theme === "popular"
      ? "rgba(255, 255, 255, 0.2)"
      : "linear-gradient(135deg, #3b82f6, #10b981)"};
  color: ${(props) => (props.theme === "popular" ? "white" : "white")};
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  font-weight: 700;
  font-size: 0.9rem;
  border: ${(props) =>
    props.theme === "popular" ? "2px solid rgba(255, 255, 255, 0.5)" : "none"};
  transition: all 0.3s ease;

  ${PackageCard}:hover & {
    background: ${(props) =>
      props.theme === "popular"
        ? "rgba(255, 255, 255, 0.3)"
        : "linear-gradient(135deg, #10b981, #3b82f6)"};
    transform: scale(1.05);
  }
`;

export const GuaranteeSection = styled.div`
  background: linear-gradient(135deg, #d1fae5, #a7f3d0);
  padding: 1.5rem;
  border-radius: 16px;
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 2px solid #10b981;
  box-shadow: 0 8px 25px rgba(16, 185, 129, 0.15);

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const GuaranteeIcon = styled.div`
  font-size: 2.5rem;
  flex-shrink: 0;
`;

export const GuaranteeText = styled.div`
  color: #065f46;
  font-size: 1rem;
  line-height: 1.5;

  strong {
    display: block;
    font-size: 1.1rem;
    margin-bottom: 0.3rem;
  }
`;
