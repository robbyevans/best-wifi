import { useState } from "react";
import * as S from "./styles";

const VoucherRecharge = () => {
  const [voucherCode, setVoucherCode] = useState("");

  const handleActivate = () => {
    console.log("Activating voucher:", voucherCode);
    setVoucherCode("");
  };

  return (
    <S.VoucherContainer>
      <S.SectionHeader>
        <S.GiftIcon>🎁</S.GiftIcon>
        <S.SectionTitle>Voucher Recharge</S.SectionTitle>
        <S.DiscountBadge>SPECIAL OFFER</S.DiscountBadge>
      </S.SectionHeader>

      <S.Description>
        Got a voucher code? Redeem it here for instant WiFi access!
      </S.Description>

      <S.InputGroup>
        <S.Label>
          <S.VoucherIcon>🎫</S.VoucherIcon>
          Enter Voucher Code
        </S.Label>
        <S.Input
          type="text"
          value={voucherCode}
          onChange={(e) => setVoucherCode(e.target.value)}
          placeholder="Enter your voucher code"
        />
      </S.InputGroup>

      <S.Benefits>
        <S.BenefitItem>
          <S.BenefitIcon>💰</S.BenefitIcon>
          <S.BenefitText>
            <strong>Save Money</strong>
            <span>Special voucher-only discounts</span>
          </S.BenefitText>
        </S.BenefitItem>
        <S.BenefitItem>
          <S.BenefitIcon>⚡</S.BenefitIcon>
          <S.BenefitText>
            <strong>Instant Access</strong>
            <span>Activate immediately after payment</span>
          </S.BenefitText>
        </S.BenefitItem>
        <S.BenefitItem>
          <S.BenefitIcon>🎯</S.BenefitIcon>
          <S.BenefitText>
            <strong>Flexible Plans</strong>
            <span>Choose any package with your voucher</span>
          </S.BenefitText>
        </S.BenefitItem>
      </S.Benefits>

      <S.Button onClick={handleActivate}>
        <S.ButtonIcon>🎯</S.ButtonIcon>
        ACTIVATE VOUCHER
      </S.Button>

      <S.SupportSection>
        <S.SupportIcon>📞</S.SupportIcon>
        <S.SupportText>
          <strong>Need a voucher?</strong>
          <span>Call admin: 0743 749 995</span>
        </S.SupportText>
      </S.SupportSection>
    </S.VoucherContainer>
  );
};

export default VoucherRecharge;
