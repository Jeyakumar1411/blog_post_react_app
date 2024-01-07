import React from 'react'


const Footer = ({length}) => {
  return (
      <footer className='Footer'>
        <p>{length} Blog {length === 1 ? "Post" : "Posts"}</p>
      </footer>
  )
}

export default Footer