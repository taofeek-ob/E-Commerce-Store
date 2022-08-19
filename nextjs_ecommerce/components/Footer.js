import Link from "next/link";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Tawfiq All rights reserverd</p>
      <p className="icons" style={{ cursor: "pointer" }}>
        <Link href="https://instagram.com/modestly.ng">
          <AiFillInstagram />
        </Link>
        <Link href="https://twitter.com/modestly_ng">
          <AiOutlineTwitter />
        </Link>
      </p>
    </div>
  );
};

export default Footer;
