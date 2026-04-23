'use client'

export default function ScrollTop() {
  return (
    <>
      <canvas className="cursor-trail" id="trail" style={{ display: 'none' }}></canvas>
      <button id="goTop">
        <span className="border-progress"></span>
        <span className="ic-wrap">
          <span className="icon icon-long-arrow-alt-up-solid"></span>
        </span>
      </button>
    </>
  )
}
