import React from 'react'
import About from '../../Components/Home/About/About'
import Offers from '../../Components/Home/Offers/Offers'
import Subscribe from '../../Components/Home/Subscribe/Subscribe'
import ProductsSlider from '../../Components/Home/ProductsSlider/ProductsSlider'
import Header from '../../Components/Home/Header/Header'
import MainSlider from '../../Components/Home/MainSlider/MainSlider'

const HomePage = () => {
  return (
    <>
      {/* <Header /> */}
      <About />
      {/* <ProductsSlider /> */}
      <MainSlider />
      <Offers />
      <Subscribe />
    </>
  )
}

export default HomePage