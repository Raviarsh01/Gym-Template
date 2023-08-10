import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div>
          <h2>Follow us on</h2>
          <div>
            <a className="footer-1" href="#">
              Instagram
            </a>
            <br />
            <a className="footer-1" href="#">
              Facebook
            </a>
            <br />
            <a className="footer-1" href="#">
              Twitter
            </a>
          </div>
        </div>
        <div>
          <h2>Opening Time</h2>
          <p className="footer-1">
            Mon to Sat : 5:00 A.M. to 11 P.M. <br />
            Sunday: 5:00 A.M. to 11:00 A.M.
          </p>
        </div>
        <div>
          <h2>Address</h2>
          <p className="footer-1">
            12A street, Green Avenue, Opp.- HDFC Bank,
            <br />
            Amritsar, Punjab, India
          </p>
        </div>
      </footer>
      <p className="copy-right">
        Copyright@Neo Fitness gym . All Rights Reserved
      </p>
    </>
  );
};

export default Footer;
