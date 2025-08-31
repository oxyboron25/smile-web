'use client';

import React from 'react';

const OpenYourBranch = () => {
  return (
    <>
      <div className="container">
        <div className="header">Open Your Branch</div>

        <div className="banner">
          <h1 className="headline">Ready to Grow?</h1>
          <button className="cta-button">Get in Touch with Us</button>
          <p className="footer-text">
            For any queries regarding expansion reach out to:{' '}
            <a href="mailto:expansion@smile-global.org">
              expansion@smile-global.org
            </a>
          </p>
        </div>
      </div>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #00211c;
        }

        .container {
          width: 90%;
          max-width: 1440px;
          margin: 0 auto;
        }

        .header {
          color: white;
          padding-top: 4rem;
          font-size: 2.1rem; 
          font-weight: bold;
          text-align: left;
        }

        .banner {
          background: white;
          clip-path: polygon(0 0, 100% 0, 90% 50%, 100% 100%, 0% 100%);
          padding: 4rem 2rem;
          position: relative;
          box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
          opacity: 1;
          text-align: left;
          margin-top: 2rem;
        }

        .headline {
          font-size: 5rem;
          color: #5a9e94;
          margin-bottom: 2rem;
          font-weight: 700;
        }

        .cta-button {
          background-color: #1d1d1d;
          color: white;
          border: none;
          padding: 1rem 2rem;
          font-size: 1rem;
          font-weight: 500;
          border-radius: 12px;
          cursor: pointer;
          margin-bottom: 2rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .cta-button:hover {
          background-color: #5a9e94;
          color: #001612;
          transform: scale(1.05);
        }

        .footer-text {
          font-size: 0.9rem;
          color: #000;
        }

        .footer-text a {
          color: #000;
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .headline {
            font-size: 2rem;
          }

          .cta-button {
            padding: 0.8rem 1.5rem;
            font-size: 0.95rem;
          }

          .banner {
            clip-path: polygon(0 0, 100% 0, 95% 50%, 100% 100%, 0% 100%);
            padding: 3rem 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .headline {
            font-size: 1.75rem;
          }

          .cta-button {
            font-size: 0.9rem;
            padding: 0.7rem 1.2rem;
          }

          .header {
            font-size: 2rem; /* optional mobile font-size */
          }
        }
      `}</style>
    </>
  );
};

export default OpenYourBranch;



