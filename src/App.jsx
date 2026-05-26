import React from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger ,SplitText} from 'gsap/all';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
gsap.registerPlugin(ScrollTrigger ,SplitText);
import Cocktails from './components/Cocktails';
import About from './components/About';
import Art from './components/Art';
const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
    </main>
  )
}

export default App