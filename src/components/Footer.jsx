const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div id="footer">
      <p className="footer-copyright">
        <small>
          Copyright &copy; {currentYear} by Zach Vollink &bull; Stay Wild &#128572;
        </small>
      </p>
    </div>
  );
}

export default Footer;