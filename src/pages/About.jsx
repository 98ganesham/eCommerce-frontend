import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsBox from '../components/NewsBox'
const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={"ABOUT"} text2={"US"} />

      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.logo} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit consectetur autem totam vero esse beatae consequuntur cumque eveniet! Rerum, in minus. Error molestias ipsa explicabo culpa quis modi, suscipit blanditiis.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis asperiores atque esse ipsa, modi eius voluptate labore est harum, nisi consequatur rem ut assumenda, accusantium quos neque odit porro inventore!</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel autem dolorum aliquid praesentium at maiores optio eum quod, beatae minima enim! Expedita esse laborum officiis voluptatem alias provident ex mollitia?</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={"WHY"} text2={"CHOOSE US"}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance::</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus placeat architecto veniam quia nihil deleniti. Pariatur, fugiat rem distinctio rerum nulla laudantium, aliquid animi quam porro earum quos. Dolorem, sunt?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience: </b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus placeat architecto veniam quia nihil deleniti. Pariatur, fugiat rem distinctio rerum nulla laudantium, aliquid animi quam porro earum quos. Dolorem, sunt?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service: </b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus placeat architecto veniam quia nihil deleniti. Pariatur, fugiat rem distinctio rerum nulla laudantium, aliquid animi quam porro earum quos. Dolorem, sunt?</p>
        </div>
      </div>
      <NewsBox />
      
    </div>
  )
}

export default About
