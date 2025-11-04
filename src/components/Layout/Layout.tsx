import * as S from "./styles";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <S.LayoutContainer>
      <S.Content>{children}</S.Content>
    </S.LayoutContainer>
  );
};

export default Layout;
