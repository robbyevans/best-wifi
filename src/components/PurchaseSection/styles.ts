import styled from "styled-components";

export const PurchaseContainer = styled.section`
  background: rgba(255, 255, 255, 0.95);
  margin: 1rem auto;
  padding: 1.5rem;
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
  max-width: 1000px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  @media (max-width: 768px) {
    padding: 1rem;
    margin: 0.5rem auto;
    border-radius: 16px;
  }
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

export const WifiIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 0.3rem;
  }
`;

export const SectionTitle = styled.h3`
  color: #1a202c;
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #10b981, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 0.3rem;
  }
`;

export const PromoBadge = styled.div`
  background: linear-gradient(135deg, #ff6b6b, #ffa726);
  color: white;
  padding: 0.4rem 1rem;
  border-radius: 15px;
  font-weight: 700;
  font-size: 0.8rem;
  display: inline-block;
  box-shadow: 0 3px 10px rgba(255, 107, 107, 0.3);

  @media (max-width: 768px) {
    padding: 0.3rem 0.8rem;
    font-size: 0.7rem;
  }
`;

// Mobile-only simplified instructions
export const MobileInstructions = styled.div`
  background: linear-gradient(135deg, #f8fafc, #e2e8f0);
  padding: 0.8rem 1rem;
  border-radius: 10px;
  margin-bottom: 1rem;
  border-left: 4px solid #10b981;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileInstructionText = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #4a5568;
  font-weight: 600;
  font-size: 0.9rem;
`;

// Desktop instructions (hidden on mobile)
export const DesktopInstructions = styled.div`
  background: linear-gradient(135deg, #f8fafc, #e2e8f0);
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  border-left: 4px solid #10b981;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const InstructionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  h4 {
    color: #1a202c;
    font-size: 1.2rem;
    font-weight: 700;
    margin: 0;
  }
`;

export const InstructionIcon = styled.div`
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const InstructionList = styled.ol`
  list-style: none;
  padding: 0;
`;

export const InstructionItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.8rem;
  padding: 0.8rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
  font-weight: 600;
  color: #4a5568;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const StepNumber = styled.div`
  background: linear-gradient(135deg, #3b82f6, #10b981);
  color: white;
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.8rem;
  flex-shrink: 0;
`;

// Desktop contact info (hidden on mobile)
export const DesktopContactInfo = styled.div`
  background: linear-gradient(135deg, #dbeafe, #e0f2fe);
  padding: 1.2rem;
  border-radius: 12px;
  margin: 1.5rem 0;
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 2px solid #3b82f6;

  strong {
    color: #1e40af;
    font-size: 1.1rem;
    display: block;
    margin-bottom: 0.2rem;
  }

  span {
    color: #4b5563;
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

// Mobile contact info (simplified)
export const MobileContactInfo = styled.div`
  background: linear-gradient(135deg, #dbeafe, #e0f2fe);
  padding: 0.8rem 1rem;
  border-radius: 10px;
  margin: 1rem 0;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  border: 1px solid #3b82f6;
  display: none;

  strong {
    color: #1e40af;
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const PhoneIcon = styled.div`
  font-size: 1.5rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

// Desktop promo section (hidden on mobile)
export const DesktopPromoSection = styled.div`
  background: linear-gradient(135deg, #fffbeb, #fef3c7);
  padding: 1.5rem;
  border-radius: 12px;
  margin: 1.5rem 0;
  border: 2px dashed #f59e0b;
  text-align: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const PromoTitle = styled.h4`
  color: #92400e;
  font-size: 1.2rem;
  font-weight: 800;
  margin-bottom: 1rem;
`;

export const PromoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
`;

export const PromoCard = styled.div`
  background: white;
  padding: 1rem 0.8rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const PromoIcon = styled.div`
  font-size: 1.5rem;
  margin-bottom: 0.3rem;
`;

export const PromoText = styled.div`
  color: #1f2937;
  font-weight: 600;
  font-size: 0.8rem;
`;

// Packages Grid - Optimized for mobile with 3 columns
export const PackagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 0.8rem;
  margin: 1.5rem 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.6rem;
    margin: 1rem 0;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
  }
`;

export const PackageCard = styled.div<{ $popular?: boolean }>`
  background: ${(props) =>
    props.$popular
      ? "linear-gradient(135deg, #3b82f6, #10b981)"
      : "linear-gradient(135deg, #ffffff, #f8fafc)"};
  padding: 1.2rem 0.8rem;
  border-radius: 12px;
  text-align: center;
  color: ${(props) => (props.$popular ? "white" : "#1a202c")};
  transition: all 0.2s ease;
  cursor: pointer;
  position: relative;
  box-shadow: ${(props) =>
    props.$popular
      ? "0 8px 20px rgba(59, 130, 246, 0.25)"
      : "0 4px 12px rgba(0, 0, 0, 0.08)"};
  border: ${(props) =>
    props.$popular
      ? "1px solid rgba(255, 255, 255, 0.3)"
      : "1px solid rgba(226, 232, 240, 0.8)"};
  min-height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${(props) =>
      props.$popular
        ? "0 12px 25px rgba(59, 130, 246, 0.35)"
        : "0 6px 15px rgba(0, 0, 0, 0.12)"};
  }

  @media (max-width: 768px) {
    padding: 0.8rem 0.5rem;
    min-height: 140px;
    border-radius: 10px;

    &:hover {
      transform: translateY(-2px);
    }
  }
`;

export const PopularBadge = styled.div`
  background: linear-gradient(135deg, #ffd700, #ffa500);
  color: #1a202c;
  padding: 0.3rem 0.6rem;
  border-radius: 12px;
  font-weight: 700;
  font-size: 0.7rem;
  position: absolute;
  top: -6px;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  box-shadow: 0 2px 8px rgba(255, 215, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 0.6rem;
    padding: 0.2rem 0.5rem;
    border-radius: 10px;
  }
`;

export const PackageIcon = styled.div`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 0.3rem;
  }
`;

export const PackageDuration = styled.h4`
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-bottom: 0.3rem;
  }
`;

export const PackagePrice = styled.div`
  font-size: 1.3rem;
  font-weight: 900;
  margin-bottom: 0.4rem;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 0.3rem;
  }
`;

export const PackageSpeed = styled.div`
  font-size: 0.75rem;
  opacity: ${(props) => (props.theme === "popular" ? "0.9" : "0.8")};
  font-weight: 600;
  margin-bottom: 0.6rem;
  background: ${(props) =>
    props.theme === "popular"
      ? "rgba(255, 255, 255, 0.2)"
      : "rgba(59, 130, 246, 0.1)"};
  padding: 0.3rem 0.6rem;
  border-radius: 10px;
  display: inline-block;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 0.7rem;
    padding: 0.2rem 0.5rem;
    margin-bottom: 0.4rem;
  }
`;

export const GuaranteeSection = styled.div`
  background: linear-gradient(135deg, #d1fae5, #a7f3d0);
  padding: 1rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  border: 1px solid #10b981;

  @media (max-width: 768px) {
    padding: 0.8rem;
    gap: 0.6rem;
  }
`;

export const GuaranteeIcon = styled.div`
  font-size: 1.5rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const GuaranteeText = styled.div`
  color: #065f46;
  font-size: 0.9rem;
  line-height: 1.3;

  strong {
    display: block;
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;

    strong {
      font-size: 0.8rem;
    }
  }
`;
