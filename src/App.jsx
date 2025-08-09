
import styles from "./App.module.css";
import { Hero } from "./components/Hero/Hero";
import About from "./components/About/About"; // ✅ no curly braces
import { Services } from "./components/Services/Services";
import { Contact } from "./components/Contact/Contact"
import { Navbar } from "./components/Navbar/Navbar";


function App() {
  return (
  <div className={styles.App}>
    <Navbar/>
  <Hero />
  <About />
  <Services />

  <Contact />
  </div>
  );
}

export default App
