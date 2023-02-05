import React from 'react'

const HeroSection = () => {
  return (
    <div className='heroSecMainParent'>
        
        <p className='text-4x1 mt-20 text-center welcomeStore'>Welcome</p>
        <br />
        <br />

        <p className='heroDescription relative text-xl flex flex-wrap'>The pharmaceutical brand that is setting up a new standard. Cheap, Quality Assured and Effective Medicines</p>

        <div className="heroPicHold flex flex-row ">
            <img src="" alt="" className=''/>
            <img src="" alt="" className=''/>
            <img src="" alt="" className=''/>
        </div>

        <div className="heroHeadingHold font-medium text-xl flex flex-row">
            <p>Exceptional</p>
            <p>Top Quality</p>
            <p>Better Prices</p>
        </div>

        <div className="heroDescHold flex-row flex relative text-base font-normal">
            <p>Lorem ipsum dolor sit <br />amet.</p>
            <p>Lorem ipsum dolor sit <br />amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit <br />amet consectetur adipisicing.</p>
        </div>
    </div>
  )
}

export default HeroSection