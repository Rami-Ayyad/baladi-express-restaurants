import { Col, Container, Row } from "react-bootstrap";
import styles from "./index.module.css";

function Footer() {
  const footerLinks = [
    { title: "من نحن", url: "#" },
    { title: "سياسة الخصوصية", url: "#" },
    { title: "خدمات نقدمها", url: "#" },
    { title: "أخبار", url: "#" },
    { title: "شروط الاستخدام", url: "#" },
    { title: "اعلن معنا", url: "#" },
    { title: "أبطال أوروبا", url: "#" },
    { title: "مقارنات", url: "#" },
  ];

  return (
    <>
      <footer className={`${styles["footer"]}`}>
        <Container>
          <Row>
            <Col></Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
