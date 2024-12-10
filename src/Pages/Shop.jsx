import React from 'react'
import HeroSection from '../Components/HeroSection/HeroSection'
import Explore from '../Components/Explore/Explore'
import Popular from '../Components/Popular/Popular'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'

const Shop = () => {
  return (
    <div>
      <HeroSection/>
      <Explore/>
      <Popular/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  )
}

export default Shop
