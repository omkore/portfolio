import "./Header.css";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Services from "../Services/Services";
import Qualification from "../Qualification/Qualification";
import Testimonials from "../Testimonials/Testimonials";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import Work from "../Work/Work";
import {motion} from "framer-motion"
import Gallery from "../Gallery/Gallery";
const Header = () => {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }
  


  return (
    // <main className="main">
      <>
      <motion.main
       variants={container}
       initial="hidden"
       animate="show">
     
        <Navbar variants={item}/>
        <Home variants={item}/>
        <About variants={item}/>
        <Skills variants={item}/>
        <Gallery variants={item}/>
        <Services variants={item}/>
        <Qualification variants={item}/>
        <Work variants={item}/>
        <Testimonials variants={item}/>
        <Contact variants={item}/>
      </motion.main>

        <Footer/>
        <ScrollToTop/>

      </>
    // </main>
  )
}

export default Header