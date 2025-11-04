import { GlobalStyles } from "./styles/GlobalStyles";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import PurchaseSection from "./components/PurchaseSection/PurchaseSection";
import Reconnect from "./components/Reconnect/Reconnect";
import VoucherRecharge from "./components/VoucherRecharge/VoucherRecharge";
import UserLogin from "./components/UserLogin/UserLogin";

function App() {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Header />
        <PurchaseSection />
        <Reconnect />
        <VoucherRecharge />
        <UserLogin />
      </Layout>
    </>
  );
}

export default App;
