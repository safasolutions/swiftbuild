export default function NotFound() {
  return (
    <section className="section-404 flat-spacing">
      <div className="container text-center">
        <h1 className="title fw-semibold text-dispaly-1 effectFade fadeZoom">404 Page Not Found</h1>
        <p className="desc text-body-1 text-white-64 effectFade fadeZoom">
          Sorry, we couldn&apos;t find the page you where looking for. <br />
          We suggest that you return to homepage.
        </p>
        <div className="effectFade fadeZoom">
          <a href="/" className="tf-btn">
            <span className="text-body-2 fw-semibold">HOME PAGE</span>
          </a>
        </div>
      </div>
    </section>
  )
}
