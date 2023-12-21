import React from 'react'


const Header = () => {
  return (
    <div className='header'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe5Zavx2YoxyB5OkVuNIffdkImlmK9ePAg5s92e_KgyA&s" 
      alt="img-logo" className="logo" />
      <div className='menu'>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
