export default function Footer() {
  return (
    <footer>
      <div className="footer-image">
        <img className="effectFade fadeUp" src="/assets/images/logo/logo-footer.png" alt="" />
      </div>
      <div className="container">
        <div className="footer-content">
          <a href="/" className="footer-logo">
            <img src="/assets/images/logo/logo-2.svg" alt="" />
          </a>
          <div className="title h6 fw-semibold">Get connected <br /> with SwiftBuild on social</div>
          <div className="text">Don&apos;t miss our new updates!</div>
          <div className="tf-social-1 justify-content-center">
            <a href="https://x.com/" target="_blank" rel="noreferrer" className="text-body-1 fw-semibold">
              Twitter / X
              <div className="social-item">
                <i className="icon icon-twitter-x"></i>
              </div>
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="text-body-1 fw-semibold">
              Facebook
              <div className="social-item">
                <i className="icon icon-facebook-f"></i>
              </div>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="text-body-1 fw-semibold">
              Instagram
              <div className="social-item">
                <i className="icon icon-instagram"></i>
              </div>
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="text-body-1 fw-semibold">
              Linkedin
              <div className="social-item">
                <i className="icon icon-linkedin-in"></i>
              </div>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <ul className="footer-links d-flex gap-24 align-items-center">
            <li>
              <a href="/about" className="fw-semibold link-underline link1">About</a>
            </li>
            <li>
              <a href="/services" className="fw-semibold link-underline link1">Services</a>
            </li>
            <li>
              <a href="/works" className="fw-semibold link-underline link1">Works</a>
            </li>
            <li>
              <a href="/contact" className="fw-semibold link-underline link1">Contact</a>
            </li>
          </ul>
          <p className="text-secondary coppy-rights text-center">© 2026 SwiftBuild. All Rights Reserved.</p>
          <a href="#" className="action-go-top d-flex gap-8 align-items-center justify-content-end link1">
            <span className="fw-semibold">Back to top</span>
            <i className="icon icon-long-arrow-alt-up-solid fs-20"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}
