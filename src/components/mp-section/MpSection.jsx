import React from 'react'
import './MpSection.scss'
import image from '../../assests/images/public/Market-plase-section-1-1.png'

const MpSection = () => {
  return (
    <section>
      <div className="div-border">
        <div className="img1">
          <img src={image} alt="" />
          <img src={image} alt="" />
          <img src={image} alt="" />
        </div>
        <h4>Garden Crae</h4>
        <p>
          ''Yashil bozor'' is a modern and affordable online market offering a
          variety of plants and products
        </p>
      </div>

      <div className="div-border">
        <div className="img1">
          <img src={image} alt="" />
          <img src={image} alt="" />
          <img src={image} alt="" />
        </div>
        <h4>Garden Crae</h4>
        <p>
          ''Yashil bozor'' is a modern and affordable online market offering a
          variety of plants and products
        </p>
      </div>

      <div className="div-border">
        <div className="img1">
          <img src={image} alt="" />
          <img src={image} alt="" />
          <img src={image} alt="" />
        </div>
        <h4>Garden Crae</h4>
        <p>
          ''Yashil bozor'' is a modern and affordable online market offering a
          variety of plants and products
        </p>
      </div>

      <div className="form-group">
        <h3>Get advice</h3> 
        <form>
          <input type="text" name="search" placeholder="Search.." />
        </form>
      </div>
    </section>
  )
}

export default MpSection