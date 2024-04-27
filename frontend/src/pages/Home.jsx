import React from 'react'
import AISearch from '../components/AISearch'
import Moods from '../components/Moods'

const Home = () => {
  return (
    // <div><AISearch /></div>
    <section className='flex flex-col items-center space-y-8'>
      <div>
        <AISearch />
      </div>
      <div>
        <Moods />
      </div>
    </section>
  )
}

export default Home