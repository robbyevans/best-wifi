import { useState, useEffect } from "react";
import type { Package } from "../../types";
import * as S from "./styles";

interface PayModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage: Package | null;
  onPaymentSuccess: () => void;
}

const PayModal: React.FC<PayModalProps> = ({
  isOpen,
  onClose,
  selectedPackage,
  onPaymentSuccess,
}) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(20);

  useEffect(() => {
    if (!isOpen) {
      setPhoneNumber("");
      setIsLoading(false);
      setCountdown(20);
    }
  }, [isOpen]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isLoading && countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (isLoading && countdown === 0) {
      // Simulate payment success after timeout
      handlePaymentSuccess();
    }
    return () => clearTimeout(timer);
  }, [isLoading, countdown]);

  const handlePayment = async () => {
    if (!phoneNumber.trim() || !selectedPackage) return;

    // Validate phone number (Safaricom format)
    const phoneRegex = /^(07\d{8}|2547\d{8}|011\d{7})$/;
    if (!phoneRegex.test(phoneNumber.replace(/\s/g, ""))) {
      alert("Please enter a valid Safaricom phone number");
      return;
    }

    setIsLoading(true);
    setCountdown(20);

    // Simulate API call to initiate M-Pesa STK push
    try {
      // In a real app, you would call your backend API here
      console.log("Initiating payment for:", {
        phoneNumber,
        package: selectedPackage,
      });

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // For demo purposes, we'll simulate success after 5 seconds
      setTimeout(() => {
        handlePaymentSuccess();
      }, 5000);
    } catch (error) {
      console.error("Payment error:", error);
      setIsLoading(false);
      alert("Payment failed. Please try again.");
    }
  };

  const handlePaymentSuccess = () => {
    setIsLoading(false);
    onPaymentSuccess();
    onClose();
  };

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digit characters
    const digits = value.replace(/\D/g, "");

    // Format as 2547XXXXXXXX or 07XXXXXXXX
    if (digits.startsWith("254") && digits.length === 12) {
      return digits;
    } else if (digits.startsWith("07") && digits.length === 10) {
      return digits;
    } else if (digits.startsWith("7") && digits.length === 9) {
      return `254${digits}`;
    }

    return value;
  };

  if (!isOpen || !selectedPackage) return null;

  return (
    <S.ModalOverlay>
      <S.ModalContainer>
        <S.ModalHeader>
          <S.ModalTitle>Enter Safaricom Phone Number</S.ModalTitle>
          {!isLoading && <S.CloseButton onClick={onClose}>×</S.CloseButton>}
        </S.ModalHeader>

        <S.ModalContent>
          <S.Description>
            You are about to pay <S.Amount>{selectedPackage.price}</S.Amount>{" "}
            for <S.PackageName>{selectedPackage.duration}</S.PackageName>{" "}
            package
          </S.Description>

          {!isLoading ? (
            <>
              <S.InputGroup>
                <S.Label>
                  <S.PhoneIcon>📱</S.PhoneIcon>
                  M-Pesa Phone Number
                </S.Label>
                <S.PhoneInput
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) =>
                    setPhoneNumber(formatPhoneNumber(e.target.value))
                  }
                  placeholder="07XXXXXXXX or 2547XXXXXXXX"
                  disabled={isLoading}
                />
                <S.ExampleText>
                  Example: 0712345678 or 254712345678
                </S.ExampleText>
              </S.InputGroup>

              <S.PaymentDetails>
                <S.DetailItem>
                  <S.DetailLabel>Package:</S.DetailLabel>
                  <S.DetailValue>{selectedPackage.duration}</S.DetailValue>
                </S.DetailItem>
                <S.DetailItem>
                  <S.DetailLabel>Speed:</S.DetailLabel>
                  <S.DetailValue>{selectedPackage.speed}</S.DetailValue>
                </S.DetailItem>
                <S.DetailItem>
                  <S.DetailLabel>Amount:</S.DetailLabel>
                  <S.DetailValue>{selectedPackage.price}</S.DetailValue>
                </S.DetailItem>
              </S.PaymentDetails>

              <S.PayButton
                onClick={handlePayment}
                disabled={!phoneNumber.trim() || isLoading}
              >
                <S.ButtonIcon>🚀</S.ButtonIcon>
                PAY NOW
              </S.PayButton>
            </>
          ) : (
            <S.LoadingSection>
              <S.Spinner />
              <S.LoadingTitle>Processing Payment</S.LoadingTitle>
              <S.LoadingText>
                Please check your phone for M-Pesa STK push prompt
              </S.LoadingText>
              <S.Countdown>
                Waiting for payment confirmation... {countdown}s
              </S.Countdown>
              <S.Instructions>
                <S.Instruction>
                  <S.Number>1</S.Number>
                  Check your phone for M-Pesa prompt
                </S.Instruction>
                <S.Instruction>
                  <S.Number>2</S.Number>
                  Enter your M-Pesa PIN
                </S.Instruction>
                <S.Instruction>
                  <S.Number>3</S.Number>
                  Wait for confirmation
                </S.Instruction>
              </S.Instructions>
            </S.LoadingSection>
          )}
        </S.ModalContent>
      </S.ModalContainer>
    </S.ModalOverlay>
  );
};

export default PayModal;
