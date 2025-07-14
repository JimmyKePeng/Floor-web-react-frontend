import { useState } from "react";
import { Link } from "react-router-dom"; // <Link to="/refinishing">Refinishing</Link>
import "./home.css";
import ReviewBox from "../components/ReviewBox/ReviewBox";
import Reviews from "../components/ReviewBox/Reviews";
import ContactMe from "../components/ContactMe";

function Home() {
  const googleReviewURL =
    "https://www.google.com/search?sca_esv=e677e56a37b07b31&rlz=1C1VDKB_enUS1097US1097&cs=0&output=search&kgmid=/g/11gxh71404&q=Ming+Hardwood+Floor&shndl=30&shem=lcuae,uaasie&source=sh/x/loc/uni/m1/1&kgs=4ebfef965045764e#lrd=0x808f87f02d46233d:0x8d86e06c61a25ce4,1,,,,";

  return (
    <div className="home-container">
      <div className="call-to-action">
        <h1>Licensed flooring contractor</h1>
        <h1>Serving the entire Bay Area since 2011</h1>
        <h1>Free Estimate</h1>
      </div>

      <p style={{ color: "var(--my-letter-color)", fontWeight: "bold" }}>
        See what our customers are saying{" "}
        <a href={googleReviewURL} style={{ color: "blue" }}>
          here!
        </a>
      </p>
      <ContactMe />
      <div>
        <Reviews />
      </div>
    </div>
  );
}
export default Home;
