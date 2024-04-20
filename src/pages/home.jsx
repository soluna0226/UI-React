import React from "react";

import Hero from './components/hero'
import Laptop from './components/mac'
import Cards from './components/cards'


export default function Home() {
  return (
    <div className="overflow-y-scroll bg-black">
        <Hero />
        <Laptop />
        <Cards />
    </div>
  );
}

