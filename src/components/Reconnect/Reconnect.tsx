import { useState } from "react";
import * as S from "./styles";
import ReconnectModal from "../ReconnectModal/ReconnectModal";

const Reconnect = () => {
  const [mpesaCode, setMpesaCode] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleConnect = () => {
    if (!mpesaCode.trim()) {
      alert("Please enter your M-Pesa code");
      return;
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleReconnectSuccess = () => {
    console.log("Reconnection successful for code:", mpesaCode);
    // Handle successful reconnection
    setMpesaCode("");
    alert("Reconnection successful! Your WiFi access has been restored.");
  };

  return (
    <>
      <S.ReconnectContainer>
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
            onChange={(e) => setMpesaCode(e.target.value.toUpperCase())}
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
      </S.ReconnectContainer>

      <ReconnectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        mpesaCode={mpesaCode}
        onReconnectSuccess={handleReconnectSuccess}
      />
    </>
  );
};

export default Reconnect;
