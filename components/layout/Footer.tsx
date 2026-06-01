export default function Footer() {
  return (
    <footer>
      <div className="footer-image">
        <img className="effectFade fadeUp" src="/assets/images/logo/logo-footer.png" alt="" />
      </div>
      <div className="container">

        <div className="footer-bottom">
          <ul className="footer-links d-flex gap-24 align-items-center">
            <li>
              <a href="/services" className="fw-semibold link-underline link1">Services</a>
            </li>
            <li>
              <a href="/about" className="fw-semibold link-underline link1">About</a>
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
