import { GlobalStyles } from "./styles/GlobalStyles";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import PurchaseSection from "./components/PurchaseSection/PurchaseSection";
import Reconnect from "./components/Reconnect/Reconnect";
import VoucherRecharge from "./components/VoucherRecharge/VoucherRecharge";
import UserLogin from "./components/UserLogin/UserLogin";
import * as S from "./components/Layout/styles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Header />
        <PurchaseSection />
        <S.SectionsContainer>
          <Reconnect />
          <VoucherRecharge />
          <UserLogin />
        </S.SectionsContainer>
      </Layout>
    </>
  );
}

export default App;
