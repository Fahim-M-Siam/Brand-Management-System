// @ts-nocheck
const Footer = () => {
  return (
    <footer className="footer p-10 bg-black text-white">
      <aside>
        <img
          className="w-32 h-32"
          src="https://i.ibb.co/7bcX2nv/logo.png"
          alt=""
        />
        <p>
          Speedy Wrench
          <br />
          Rev up your automotive experience at SpeedyWrench!
        </p>
      </aside>
      <nav>
        <header className="footer-title">Brands</header>
        <a className="link link-hover">Toyota</a>
        <a className="link link-hover">Ford</a>
        <a className="link link-hover">BMW</a>
        <a className="link link-hover">Mercedes-Benz</a>
        <a className="link link-hover">Tesla</a>
        <a className="link link-hover">Honda</a>
      </nav>
      <nav>
        <header className="footer-title">Company</header>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <header className="footer-title">Legal</header>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
