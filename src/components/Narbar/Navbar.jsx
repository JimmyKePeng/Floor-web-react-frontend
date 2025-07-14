import { Link } from "react-router-dom";
import "./style.css";
import logo from "../../assets/logo.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="narbar">
      <div className={`logo ${isScrolled ? "scrolled" : ""}`}>
        <img
          src={logo}
          width={150}
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        />
        <div>
          <h1
            className="text-4xl"
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          >
            Ming Hardwood Floor
          </h1>
          <p className="text-lg font-medium">Family owned business</p>
        </div>
        <div className="text-sm">
          <p>Lic# : 1046708</p>
          <p>Cell: 510-882-8948</p>
          <p>Email: MingHardwoodfloor@gmail.com</p>
        </div>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        {/* <Link to="/services">Service</Link> */}
        <Link to="/installation">Installation</Link>
        <Link to="/refinishing">Refinishing</Link>
        <Link to="/videos">Videos</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
export default Navbar;
