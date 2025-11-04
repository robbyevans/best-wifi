import { useState, useEffect } from "react";
import * as S from "./styles";

interface ReconnectModalProps {
  isOpen: boolean;
  onClose: () => void;
  mpesaCode: string;
  onReconnectSuccess: () => void;
}

const ReconnectModal: React.FC<ReconnectModalProps> = ({
  isOpen,
  onClose,
  mpesaCode,
  onReconnectSuccess,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(15);

  useEffect(() => {
    if (!isOpen) {
      setIsLoading(false);
      setCountdown(15);
    }
  }, [isOpen]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isLoading && countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (isLoading && countdown === 0) {
      // Simulate reconnect success after timeout
      handleReconnectSuccess();
    }
    return () => clearTimeout(timer);
  }, [isLoading, countdown]);

  const handleReconnect = async () => {
    if (!mpesaCode.trim()) return;

    setIsLoading(true);
    setCountdown(15);

    // Simulate API call to verify M-Pesa code and reconnect
    try {
      console.log("Verifying M-Pesa code:", mpesaCode);

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // For demo purposes, we'll simulate success after 3 seconds
      setTimeout(() => {
        handleReconnectSuccess();
      }, 3000);
    } catch (error) {
      console.error("Reconnect error:", error);
      setIsLoading(false);
      alert(
        "Reconnection failed. Please check your M-Pesa code and try again."
      );
    }
  };

  const handleReconnectSuccess = () => {
    setIsLoading(false);
    onReconnectSuccess();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <S.ModalOverlay>
      <S.ModalContainer>
        <S.ModalHeader>
          <S.ModalIcon>🔄</S.ModalIcon>
          <S.ModalTitle>
            {isLoading ? "Reconnecting Your Account" : "Confirm Reconnection"}
          </S.ModalTitle>
          {!isLoading && <S.CloseButton onClick={onClose}>×</S.CloseButton>}
        </S.ModalHeader>

        <S.ModalContent>
          {!isLoading ? (
            <>
              <S.Description>
                You are about to reconnect your WiFi access using M-Pesa code:
              </S.Description>

              <S.CodeDisplay>
                <S.CodeLabel>M-Pesa Code:</S.CodeLabel>
                <S.CodeValue>{mpesaCode}</S.CodeValue>
              </S.CodeDisplay>

              <S.VerificationDetails>
                <S.DetailItem>
                  <S.DetailIcon>✅</S.DetailIcon>
                  <S.DetailText>Verify payment confirmation</S.DetailText>
                </S.DetailItem>
                <S.DetailItem>
                  <S.DetailIcon>⚡</S.DetailIcon>
                  <S.DetailText>Instant account reactivation</S.DetailText>
                </S.DetailItem>
                <S.DetailItem>
                  <S.DetailIcon>🔒</S.DetailIcon>
                  <S.DetailText>Secure and validated</S.DetailText>
                </S.DetailItem>
              </S.VerificationDetails>

              <S.ButtonGroup>
                <S.CancelButton onClick={onClose}>
                  <S.ButtonIcon>←</S.ButtonIcon>
                  Cancel
                </S.CancelButton>
                <S.ReconnectButton onClick={handleReconnect}>
                  <S.ButtonIcon>🚀</S.ButtonIcon>
                  Confirm & Reconnect
                </S.ReconnectButton>
              </S.ButtonGroup>
            </>
          ) : (
            <S.LoadingSection>
              <S.Spinner />
              <S.LoadingTitle>Reconnecting Your Account</S.LoadingTitle>
              <S.LoadingText>
                Verifying your M-Pesa code and reactivating your WiFi access...
              </S.LoadingText>
              <S.Countdown>Processing... {countdown}s</S.Countdown>

              <S.ProgressSteps>
                <S.ProgressStep $completed={true}>
                  <S.StepNumber>1</S.StepNumber>
                  <S.StepText>Code received</S.StepText>
                </S.ProgressStep>
                <S.ProgressStep $completed={countdown < 12}>
                  <S.StepNumber>2</S.StepNumber>
                  <S.StepText>Verifying payment</S.StepText>
                </S.ProgressStep>
                <S.ProgressStep $completed={countdown < 5}>
                  <S.StepNumber>3</S.StepNumber>
                  <S.StepText>Reactivating access</S.StepText>
                </S.ProgressStep>
              </S.ProgressSteps>

              <S.InfoSection>
                <S.InfoIcon>💡</S.InfoIcon>
                <S.InfoText>
                  Your WiFi will be automatically reconnected once verification
                  is complete
                </S.InfoText>
              </S.InfoSection>
            </S.LoadingSection>
          )}
        </S.ModalContent>
      </S.ModalContainer>
    </S.ModalOverlay>
  );
};

export default ReconnectModal;
