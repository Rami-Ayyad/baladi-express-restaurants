import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import homeIcon from "src/assets/images/Twist/home-icon.svg";
import newsIcon from "src/assets/images/Twist/news-icon.svg";
import videosIcon from "src/assets/images/Twist/videos-icon.svg";
import tournamentsIcon from "src/assets/images/Twist/tournaments-icon.png";
import matchesIcon from "src/assets/images/Twist/matches-icon.png";
import { FaUserAlt } from "react-icons/fa";
import styles from "./index.module.css";

function TheHeader() {
  const contentNews = [
    { name: "home", path: "/", logo: homeIcon },
    { name: "news", path: "/news", logo: newsIcon },
    { name: "videos", path: "/videos", logo: videosIcon },
    { name: "matches", path: "/matches", logo: matchesIcon },
    { name: "tournaments", path: "/tournaments", logo: tournamentsIcon },
  ];

  return (
    <header>
      <Navbar>
        <Container>
          <Navbar.Brand as={NavLink} to={""}></Navbar.Brand>

          <NavLink to={""}>
            <div>
              <FaUserAlt size={40} />
            </div>
          </NavLink>
        </Container>
      </Navbar>
    </header>
  );
}
export default TheHeader;
