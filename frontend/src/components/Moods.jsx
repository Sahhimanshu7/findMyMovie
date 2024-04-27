import React from 'react'
import { useNavigate } from "react-router-dom";

const Moods = () => {
  const navigate = useNavigate();
  const handleSelect = (mood) =>{
    console.log(mood);
    navigate("/");
  }
  return (
    <section className='md:max-w-[60vw]'>
      {/* provide buttons for users to click and then load movies onto the next movies page. */}
      <h1 className='md:text-4xl text-2xl text-center bg-gradient-to-r from-blue-300 to-fuchsia-300 bg-clip-text text-transparent font-bold'>What are you feeling right now?</h1>
      <div className='flex flex-row flex-wrap justify-center space-x-2'>
        <button 
        className='md:text-2xl text-xl text-white font-mono md:px-4 px-2 py-2 border-orange-900 border-2 md:m-2 my-2 focus-within:bg-orange-700 hover:bg-orange-700'
        onClick={(e) => handleSelect("inspirational")}>😀 Inspirational</button>
        <button 
        className='md:text-2xl text-xl text-white font-mono md:px-4 px-2 py-2 border-orange-900 border-2 md:m-2 my-2 focus-within:bg-orange-700 hover:bg-orange-700'
        onClick={(e) => handleSelect("reflective")}>🤔 Reflective</button>
        <button 
        className='md:text-2xl text-xl text-white font-mono md:px-4 px-2 py-2 border-orange-900 border-2 md:m-2 my-2 focus-within:bg-orange-700 hover:bg-orange-700'
        onClick={(e) => handleSelect("cheerful")}>😄 Cheerful</button>
        <button 
        className='md:text-2xl text-xl text-white font-mono md:px-4 px-2 py-2 border-orange-900 border-2 md:m-2 my-2 focus-within:bg-orange-700 hover:bg-orange-700'
        onClick={(e) => handleSelect("chill")}>😎 Chill</button>
        <button 
        className='md:text-2xl text-xl text-white font-mono md:px-4 px-2 py-2 border-orange-900 border-2 md:m-2 my-2 focus-within:bg-orange-700 hover:bg-orange-700'
        onClick={(e) => handleSelect("romantic")}>🥰 Romantic</button>
        <button 
        className='md:text-2xl text-xl text-white font-mono md:px-4 px-2 py-2 border-orange-900 border-2 md:m-2 my-2 focus-within:bg-orange-700 hover:bg-orange-700'
        onClick={(e) => handleSelect("sleepy")}>😴 Sleepy</button>
        <button 
        className='md:text-2xl text-xl text-white font-mono md:px-4 px-2 py-2 border-orange-900 border-2 md:m-2 my-2 focus-within:bg-orange-700 hover:bg-orange-700'
        onClick={(e) => handleSelect("lonely")}>😔 Lonely</button>
        <button 
        className='md:text-2xl text-xl text-white font-mono md:px-4 px-2 py-2 border-orange-900 border-2 md:m-2 my-2 focus-within:bg-orange-700 hover:bg-orange-700'
        onClick={(e) => handleSelect("fearful")}>😱 Fearful</button>
        <button 
        className='md:text-2xl text-xl text-white font-mono md:px-4 px-2 py-2 border-orange-900 border-2 md:m-2 my-2 focus-within:bg-orange-700 hover:bg-orange-700'
        onClick={(e) => handleSelect("smart")}>🧐 Smart</button>
        <button 
        className='md:text-2xl text-xl text-white font-mono md:px-4 px-2 py-2 border-orange-900 border-2 md:m-2 my-2 focus-within:bg-orange-700 hover:bg-orange-700'
        onClick={(e) => handleSelect("thrill")}>🤩 Thrill</button>
        <button 
        className='md:text-2xl text-xl text-white font-mono md:px-4 px-2 py-2 border-orange-900 border-2 md:m-2 my-2 focus-within:bg-orange-700 hover:bg-orange-700'
        onClick={(e) => handleSelect("patriotic")}>🇺🇸 Patriotic</button>
        <button 
        className='md:text-2xl text-xl text-white font-mono md:px-4 px-2 py-2 border-orange-900 border-2 md:m-2 my-2 focus-within:bg-orange-700 hover:bg-orange-700'
        onClick={(e) => handleSelect("animation")}>🙂 Animation</button>
        
      </div>
    </section>
  )
}

export default Moods