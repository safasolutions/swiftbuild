'use client'

export default function MobileMenu() {
  return (
    <div className="offcanvas-menu">
      <div className="offcanvas-content">
        <div className="container h-100">
          <div className="offcanvas-content_wrapin">
            <div className="canvas_head">
              <a href="/" className="logo-site">
                <i className="icon icon-davies-logo"></i>
              </a>
              <div className="btn-mobile-menu close-mb-menu text-caption link">
                <i className="icon icon-close"></i>
                CLOSE
              </div>
            </div>
            <div className="canvas_center">
              <ul className="nav-ul-mb" id="mobile-menu">
                <li>
                  <div className="item">
                    <a href="/" className="mb-menu-link text-display-1">
                      <span className="text">Home</span>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <a href="/about" className="mb-menu-link text-display-1">
                      <span className="text">About</span>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <a href="/services" className="mb-menu-link text-display-1">
                      <span className="text">Services</span>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <a href="/works" className="mb-menu-link text-display-1">
                      <span className="text">Works</span>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <a href="/contact" className="mb-menu-link text-display-1">
                      <span className="text">Contact</span>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="canvas_foot">
              <div className="left">
                <a href="mailto:swiftbuild@gmail.com" className="text-caption text-neutral-200">swiftbuild@gmail.com</a>
                <p className="text-caption text-neutral-200">
                  CUP <span className="clock"></span>
                </p>
              </div>
              <div className="right">
                <a href="#" className="tf-link-icon text-caption text-neutral-200">
                  <i className="icon icon-arrow-top-right"></i>
                  TWITTER (X)
                </a>
                <a href="#" className="tf-link-icon text-caption text-neutral-200">
                  <i className="icon icon-arrow-top-right"></i>
                  DRIBBBLE
                </a>
                <a href="#" className="tf-link-icon text-caption text-neutral-200">
                  <i className="icon icon-arrow-top-right"></i>
                  LINKEDIN
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
