import type { FC, ReactNode } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="containerMain">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
