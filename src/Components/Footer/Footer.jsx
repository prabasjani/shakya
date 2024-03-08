import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <span>
        Copyright &copy; {year} All Rights Reserved | Developed by{" "}
        <a href="">PRABANJAN</a>
      </span>
    </footer>
  );
};

export default Footer;
