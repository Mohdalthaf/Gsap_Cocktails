import React from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger ,SplitText} from 'gsap/all';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
gsap.registerPlugin(ScrollTrigger ,SplitText);
import Cocktails from './components/Cocktails';

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
    </main>
  )
}

export default App