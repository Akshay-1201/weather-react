import React, { useState } from 'react'

const Wed = () => {
  const [query,setQuery] = useState('');
  const search = evt => {
    
  }
  return (
    <>
      <main>
        <div className='search-box'>
          <input type='text' className='search-bar' placeholder='city name' value={query} onChange={e => setQuery(e.target.value)} onKeyPress={search} />
        </div>
      </main>
    </>
  )
}

export default Wed;