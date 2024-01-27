import React from 'react'
import './MarketPlace.scss'
import MpNav from '../../layout/mp-nav/MpNav'
import {Container, Card} from '../../utils/Utils'
import MpFooter from '../../layout/mp-footer/MpFooter'
import MpSidebar from '../../layout/mp-sidebar/MpSidebar'
import MpSection from '../../components/mp-section/MpSection'
import Hero from '../../assests/images/public/Market-plase-shc-img.png'

const MarketPlace = () => {
  return (
       <>
      <MpNav/>
      <Container>
        <div className="market-wrapper">
          <div>
            <h3>Welcome to yashil bozor</h3>
            <h1>
              Protect nature <br /> with <span>plants</span>
            </h1>
            <p>
              When designing a website in Figma, you can choose a canvas size
              that aligns with the target platform or device. Keep in mind that
              responsive design is essential.
            </p>
            <button>SHOP NOW</button>
          </div>
          <img src={Hero} alt="" />
        </div>

        <div className="products">
          <MpSidebar />
          <div className="products-cards ">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <MpSection />
      </Container>
      <MpFooter/>
    </>
  )
}

export default MarketPlace