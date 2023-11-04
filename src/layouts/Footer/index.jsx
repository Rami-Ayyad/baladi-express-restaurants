import { Col, Container, Row } from "react-bootstrap";
import styles from "./index.module.css";
import footerLogo from "../../assets/footerLogo.png";
import { EmailInput, AppStoreBtn } from "../../components";
import { SlSocialYoutube, SlSocialTwitter } from "react-icons/sl";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { BsApple } from "react-icons/bs";
import { BiLogoPlayStore } from "react-icons/bi";

function Footer() {
  const footerLinks1 = [
    "Let us help you",
    "Privacy Policy",
    "Warranty Policy",
    "Delivery Information",
    "T&C",
  ];

  const footerLinks2 = ["Get to know us", "About us", "Contact us", "FAQ"];

  const socialIconsSize = 30;
  const socialMediaIcons = [
    <SlSocialYoutube size={socialIconsSize} />,
    <FiFacebook size={socialIconsSize} />,
    <SlSocialTwitter size={socialIconsSize} />,
    <FiInstagram size={socialIconsSize} />,
  ];

  const renderFooterLinks = (footerLinksArr) => {
    return footerLinksArr.map((link, i) => <p key={i}>{link}</p>);
  };

  const renderSocialIcons = (socialMediaIconsArr) => {
    return socialMediaIconsArr.map((social, i) => (
      <span key={i}>{social}</span>
    ));
  };

  return (
    <>
      <footer className={`${styles["footer"]}`}>
        <Container>
          <Row>
            <Col className={`${styles["logo"]}`}>
              <img src={footerLogo} alt="Baladi" />
            </Col>
            <Col className={`${styles["link"]}`}>
              {renderFooterLinks(footerLinks1)}
            </Col>
            <Col className={`${styles["link"]}`}>
              {renderFooterLinks(footerLinks2)}
            </Col>
            <Col className={`${styles["email"]}`}>
              <p>subscribe to our newsletter</p>
              <EmailInput />
            </Col>
          </Row>

          <Row>
            <Col className={`${styles["social-icons"]}`}>
              <u>
                <p>Become a Partner</p>
              </u>
              {renderSocialIcons(socialMediaIcons)}
            </Col>
            <Col className={`${styles["app-stores"]}`}>
              <AppStoreBtn
                icon={<BiLogoPlayStore size={20} />}
                text={"GET IT ON"}
                title={"Google Play"}
              />
              <AppStoreBtn
                icon={<BsApple size={20} />}
                text={"Donwload on the"}
                title={"App Store"}
              />
            </Col>
          </Row>

          <Row>
            <Col className={`${styles["trade-mark"]}`}>
              {"© 2023 Baladi Express, All Rights Reserved"}
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
