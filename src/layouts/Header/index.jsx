import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import styles from "./index.module.css";
import baladiLogo from "../../assets/baladiLogo.svg";
import {
  SearchBar,
  LocatoinDropdown,
  HeaderOptions,
} from "../../components/index";
import { BsPerson } from "react-icons/bs";
import { LiaShoppingBagSolid } from "react-icons/lia";

function MainHeader() {
  return (
    <header className={styles["header"]}>
      <Navbar>
        <Container>
          <Navbar.Brand as={NavLink} to={"/restaurants"}>
            <img src={baladiLogo} alt="Baladi Express" />
          </Navbar.Brand>
          <SearchBar />
          <LocatoinDropdown />
          <div className={styles["header-options-wrapper"]}>
            <HeaderOptions isText={true}>{"EN"}</HeaderOptions>
            <HeaderOptions>
              <BsPerson size={25} />
            </HeaderOptions>
            <HeaderOptions isBadge={true}>
              <LiaShoppingBagSolid size={25} />
            </HeaderOptions>
          </div>
        </Container>
      </Navbar>
    </header>
  );
}
export default MainHeader;
