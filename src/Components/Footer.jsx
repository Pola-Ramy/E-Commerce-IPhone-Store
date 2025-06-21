import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="footer-gradient text-white pt-5 pb-3 mt-5">
        <div className="container d-flex flex-column align-items-center text-center">
          <hr className="border-secondary mb-4 w-100" />
          <h5 className="fw-bold mb-3" style={{color:'white'}}>Connect with us</h5>
          <div className="d-flex flex-row justify-content-center gap-3 mb-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon"
            >
              <i className="bi bi-facebook" title="Facebook"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon"
            >
              <i className="bi bi-twitter" title="Twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon"
            >
              <i className="bi bi-instagram" title="Instagram"></i>
            </a>
            <a href="mailto:yourstore@gmail.com" className="footer-icon">
              <i className="bi bi-envelope" title="Gmail"></i>
            </a>
          </div>
          <div className="mb-2 small w-100">
            <i className="bi bi-envelope me-2"></i>
            <a
              href="mailto:yourstore@gmail.com"
              className="text-white text-decoration-none"
            >
              yourstore@gmail.com
            </a>
          </div>
          <div className="small opacity-75 w-100">
            &copy; {new Date().getFullYear()} iPhone Store. All rights reserved.
          </div>
        </div>
        <style>{`
          .footer-gradient {
            background: linear-gradient(90deg, #232526 0%, #414345 100%);
            border-top-left-radius: 1.5rem;
            border-top-right-radius: 1.5rem;
            box-shadow: 0 -2px 16px rgba(0,0,0,0.12);
          }
          .footer-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 44px;
            height: 44px;
            border-radius: 50%;
            background: rgba(255,255,255,0.08);
            color: #fff;
            font-size: 1.5rem;
            transition: background 0.2s, color 0.2s, box-shadow 0.2s;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
            text-decoration: none;
          }
          .footer-icon:hover {
            background: #0d6efd;
            color: #fff;
            box-shadow: 0 4px 16px rgba(13,110,253,0.15);
          }
        `}</style>
      </footer>
    </div>
  )
}

export default Footer
