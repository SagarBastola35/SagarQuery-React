import "./App.css";
import heroImg from "./assets/hero-section.png";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./home/page.jsx";
import About from "./about/page.jsx";
import Contact from "./contact/page.jsx";
import SignUp from "./SignUp/page.jsx";
import Login from "./Login/page.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Github from "../src/assets/github.svg";
import Twitter from "../src/assets/Twitter.png";
import Linkedin from "../src/assets/Linkedin.png";
import Portfolio from "../src/assets/GitHub_Profile-Img.png";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>

      {/* Hero Section */}
      <div className="bg-green-200 text-black w-full">
        <section id="center">
          <div className="hero w-full overflow-hidden">
            <img
              src={heroImg}
              className="w-full h-auto object-cover"
              alt="Hero Section"
            />
          </div>
        </section>

        {/* Social Media Section */}
        <section id="next-steps" className="w-full">
          <div className="flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10">
            <ul className="font-bold text-sm sm:text-base md:text-lg lg:text-2xl flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 w-full">
              {/* Github */}
              <li className="flex items-center justify-center">
                <a
                  href="https://github.com/SagarBastola35"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform duration-200"
                >
                  <img 
                    src={Github} 
                    alt="Github" 
                    className="w-12 sm:w-16 md:w-20 lg:w-24"
                  />
                </a>
              </li>

              {/* Portfolio */}
              <li className="flex items-center justify-center">
                <a
                  href="https://beautiful-react-tailwind-portfolio-xi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform duration-200"
                >
                  <img 
                    className="w-12 sm:w-16 md:w-20 lg:w-24 rounded-2xl" 
                    src={Portfolio} 
                    alt="Portfolio" 
                  />
                </a>
              </li>

              {/* Twitter */}
              <li className="flex items-center justify-center">
                <a
                  href="https://x.com/SagarBasto19269"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform duration-200"
                >
                  <img 
                    className="w-12 sm:w-16 md:w-20 lg:w-24" 
                    src={Twitter} 
                    alt="Twitter" 
                  />
                </a>
              </li>

              {/* LinkedIn */}
              <li className="flex items-center justify-center">
                <a
                  href="https://www.linkedin.com/in/sagar-bastola-425785358/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform duration-200"
                >
                  <img 
                    className="w-12 sm:w-16 md:w-20 lg:w-24" 
                    src={Linkedin} 
                    alt="LinkedIn" 
                  />
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default App;
