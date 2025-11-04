import { useState } from "react";
import type { LoginCredentials } from "../../types";
import * as S from "./styles";

const UserLogin = () => {
  const [credentials, setCredentials] = useState<LoginCredentials>({
    username: "",
    password: "",
  });

  const handleInputChange = (field: keyof LoginCredentials, value: string) => {
    setCredentials((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleLogin = () => {
    console.log("Login credentials:", credentials);
  };

  return (
    <S.LoginContainer>
      <S.SectionHeader>
        <S.UserIcon>👤</S.UserIcon>
        <S.SectionTitle>Member Login</S.SectionTitle>
        <S.PremiumBadge>PREMIUM ACCESS</S.PremiumBadge>
      </S.SectionHeader>

      <S.Description>
        Welcome back! Enter your credentials to access premium WiFi services.
      </S.Description>

      <S.InputGroup>
        <S.Label>
          <S.UserInputIcon>👤</S.UserInputIcon>
          Username
        </S.Label>
        <S.Input
          type="text"
          value={credentials.username}
          onChange={(e) => handleInputChange("username", e.target.value)}
          placeholder="Enter your username"
        />
      </S.InputGroup>

      <S.InputGroup>
        <S.Label>
          <S.PasswordIcon>🔒</S.PasswordIcon>
          Password
        </S.Label>
        <S.Input
          type="password"
          value={credentials.password}
          onChange={(e) => handleInputChange("password", e.target.value)}
          placeholder="Enter your password"
        />
      </S.InputGroup>

      <S.Features>
        <S.Feature>
          <S.FeatureIcon>⚡</S.FeatureIcon>
          High-speed browsing
        </S.Feature>
        <S.Feature>
          <S.FeatureIcon>🎮</S.FeatureIcon>
          Gaming optimized
        </S.Feature>
        <S.Feature>
          <S.FeatureIcon>📺</S.FeatureIcon>
          Streaming ready
        </S.Feature>
      </S.Features>

      <S.Button onClick={handleLogin}>
        <S.ButtonIcon>🚀</S.ButtonIcon>
        CONNECT TO WIFI
      </S.Button>

      <S.HelpLink>
        <S.HelpIcon>🔍</S.HelpIcon>
        Forgot your password? Contact admin for assistance
      </S.HelpLink>
    </S.LoginContainer>
  );
};

export default UserLogin;
