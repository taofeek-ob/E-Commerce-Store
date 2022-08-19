import Link from "next/link";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Tawfiq All rights reserverd</p>
      <p className="icons" style={{ cursor: "pointer" }}>
        <Link href="https://github.com/taofeek-ob">
          <AiFillGithub />
        </Link>
        <Link href="https://twitter.com/taofeek_ob">
          <AiOutlineTwitter />
        </Link>
        <Link href="https://linkedin.com/in/taofeek-ob">
          <AiOutlineLinkedin />
        </Link>
      </p>
    </div>
  );
};

export default Footer;
