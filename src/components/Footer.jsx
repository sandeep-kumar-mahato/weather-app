import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="pt-5">
      <div className="text-center text-light pt-5">
        <div className="text-center">
          <a
            className="link-light px-2 fs-3"
            href="https://www.instagram.com/sandeep.mahato.3726/"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            className="link-light px-2 fs-3"
            href="https://twitter.com/Sandeep06360711?t=E9aoPdwiXfZOtiPom9qTUA&s=03"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            className="link-light px-2 fs-3"
            href="https://www.facebook.com/sandeep.mahato.3726"
          >
            <i className="fab fa-facebook"></i>
          </a>
        </div>
        <p>
          Copyright &copy;{" "}
          <script>document.write(new Date().getFullYear())</script> All Rights
          Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
