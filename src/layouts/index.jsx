import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import MainHeader from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <div>
      <MainHeader />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
