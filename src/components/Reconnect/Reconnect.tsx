import { useState } from "react";
import * as S from "./styles";

const Reconnect = () => {
  const [mpesaCode, setMpesaCode] = useState("");

  const handleConnect = () => {
    console.log("Reconnecting with code:", mpesaCode);
    setMpesaCode("");
  };

  return (
    <S.LoginContainer>
      <S.SectionHeader>
        <S.SyncIcon>🔄</S.SyncIcon>
        <S.SectionTitle>Reconnect Your Account</S.SectionTitle>
        <S.InfoBadge>Instant Reactivation</S.InfoBadge>
      </S.SectionHeader>

      <S.Description>
        Already paid? Enter your M-Pesa confirmation code below to instantly
        reconnect your WiFi access.
      </S.Description>

      <S.InputGroup>
        <S.Label>
          <S.KeyIcon>🔑</S.KeyIcon>
          Enter Your M-Pesa Code
        </S.Label>
        <S.Input
          type="text"
          value={mpesaCode}
          onChange={(e) => setMpesaCode(e.target.value)}
          placeholder="e.g., QAH9QWWZRR"
        />
        <S.ExampleText>Example format: QAH9QWWZRR</S.ExampleText>
      </S.InputGroup>

      <S.FeaturesList>
        <S.FeatureItem>
          <S.FeatureIcon>⚡</S.FeatureIcon>
          Instant activation within seconds
        </S.FeatureItem>
        <S.FeatureItem>
          <S.FeatureIcon>🛡️</S.FeatureIcon>
          Secure and verified payment
        </S.FeatureItem>
        <S.FeatureItem>
          <S.FeatureIcon>📱</S.FeatureIcon>
          No app download required
        </S.FeatureItem>
      </S.FeaturesList>

      <S.ButtonGroup>
        <S.Button variant="primary" onClick={handleConnect}>
          <S.ButtonIcon>🚀</S.ButtonIcon>
          Reconnect Now
        </S.Button>
      </S.ButtonGroup>

      <S.HelpSection>
        <S.HelpIcon>❓</S.HelpIcon>
        <S.HelpText>
          <strong>Can't find your code?</strong> Check your M-Pesa SMS
          confirmation message
        </S.HelpText>
      </S.HelpSection>
    </S.LoginContainer>
  );
};

export default Reconnect;
