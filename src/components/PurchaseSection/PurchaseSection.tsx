import type { Package } from "../../types";
import * as S from "./styles";

const PurchaseSection = () => {
  const packages: Package[] = [
    {
      duration: "1 HOUR",
      price: "KSH 7",
      speed: "MAX 4mbps",
      popular: false,
      icon: "⏰",
    },
    {
      duration: "3 HOURS",
      price: "KSH 10",
      speed: "MAX 4mbps",
      popular: false,
      icon: "☕",
    },
    {
      duration: "8 HOURS",
      price: "KSH 25",
      speed: "MAX 4mbps",
      popular: true,
      icon: "💼",
    },
    {
      duration: "24 HOURS",
      price: "KSH 35",
      speed: "MAX 3mbps",
      popular: false,
      icon: "🌙",
    },
    {
      duration: "3 DAYS",
      price: "KSH 100",
      speed: "MAX 4mbps",
      popular: true,
      icon: "📅",
    },
    {
      duration: "7 DAYS",
      price: "KSH 190",
      speed: "MAX 3mbps",
      popular: false,
      icon: "🗓️",
    },
    {
      duration: "30 DAYS",
      price: "KSH 500",
      speed: "MAX 3mbps",
      popular: false,
      icon: "⭐",
    },
    {
      duration: "30 DAYS MEGA",
      price: "KSH 700",
      speed: "MAX 4mbps",
      popular: true,
      icon: "🚀",
    },
  ];

  const handlePackageSelect = (pkg: Package) => {
    console.log("Selected package:", pkg);
  };

  return (
    <S.PurchaseContainer>
      <S.SectionHeader>
        <S.WifiIcon>📶</S.WifiIcon>
        <S.SectionTitle>HIGH-SPEED INTERNET PACKAGES</S.SectionTitle>
        <S.PromoBadge>🔥 HOT DEALS</S.PromoBadge>
      </S.SectionHeader>

      <S.Instructions>
        <S.InstructionHeader>
          <S.InstructionIcon>🎯</S.InstructionIcon>
          <h4>How To Get Connected:</h4>
        </S.InstructionHeader>
        <S.InstructionList>
          <S.InstructionItem>
            <S.StepNumber>1</S.StepNumber>
            Tap on your preferred package below
          </S.InstructionItem>
          <S.InstructionItem>
            <S.StepNumber>2</S.StepNumber>
            Enter your phone number when prompted
          </S.InstructionItem>
          <S.InstructionItem>
            <S.StepNumber>3</S.StepNumber>
            Click "PAY NOW" to proceed with M-Pesa
          </S.InstructionItem>
          <S.InstructionItem>
            <S.StepNumber>4</S.StepNumber>
            Enter your M-Pesa PIN and wait for confirmation
          </S.InstructionItem>
        </S.InstructionList>
      </S.Instructions>

      <S.ContactInfo>
        <S.PhoneIcon>📞</S.PhoneIcon>
        <div>
          <strong>Need Help? Call Us: 0743 749 995</strong>
          <span>24/7 Customer Support Available</span>
        </div>
      </S.ContactInfo>

      <S.PromoSection>
        <S.PromoTitle>🎉 LIMITED TIME OFFERS</S.PromoTitle>
        <S.PromoGrid>
          <S.PromoCard>
            <S.PromoIcon>⚡</S.PromoIcon>
            <S.PromoText>Lightning Fast 4mbps</S.PromoText>
          </S.PromoCard>
          <S.PromoCard>
            <S.PromoIcon>💰</S.PromoIcon>
            <S.PromoText>Best Value Deals</S.PromoText>
          </S.PromoCard>
          <S.PromoCard>
            <S.PromoIcon>📱</S.PromoIcon>
            <S.PromoText>Instant Activation</S.PromoText>
          </S.PromoCard>
        </S.PromoGrid>
      </S.PromoSection>

      <S.PackagesGrid>
        {packages.map((pkg, index) => (
          <S.PackageCard
            key={index}
            onClick={() => handlePackageSelect(pkg)}
            $popular={pkg.popular}
          >
            {pkg.popular && <S.PopularBadge>MOST POPULAR 🏆</S.PopularBadge>}
            <S.PackageIcon>{pkg.icon}</S.PackageIcon>
            <S.PackageDuration>{pkg.duration}</S.PackageDuration>
            <S.PackagePrice>{pkg.price}</S.PackagePrice>
            <S.PackageSpeed>{pkg.speed}</S.PackageSpeed>
            <S.SelectButton>SELECT PLAN</S.SelectButton>
          </S.PackageCard>
        ))}
      </S.PackagesGrid>

      <S.GuaranteeSection>
        <S.GuaranteeIcon>✅</S.GuaranteeIcon>
        <S.GuaranteeText>
          <strong>30-Minute Money Back Guarantee</strong> - If you're not
          satisfied, we'll refund your purchase!
        </S.GuaranteeText>
      </S.GuaranteeSection>
    </S.PurchaseContainer>
  );
};

export default PurchaseSection;
