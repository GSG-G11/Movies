import React from 'react'
import './Pagecss.css'

export default function Error() {
  return (
    <section className="error">
      <div className="error__content">
        <div className="error__message message">
          <h1 className="message__title">Page Not Found</h1>
          <p className="message__text">We're sorry, the page you were looking for isn't found here. The link you followed may either be broken or no longer exists. Please try again, or take a look at our.</p>
        </div>
        <div className="error__nav e-nav">
          <a href="/" target="_blanck" className="e-nav__link"></a>
        </div>
      </div>
    </section>
  )
}
