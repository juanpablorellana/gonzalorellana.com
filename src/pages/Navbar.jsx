import styled from 'styled-components'
import { Link, Outlet } from 'react-router-dom'
import { useState } from 'react'
import Burger from './Burger'

const Navbar = () => {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked)
  }
  return (
    <>
      <StyleNav>
        <Link to='/'>
          <h2>Gonzalo Orellana</h2>
        </Link>
        <div className={`botones ${clicked ? 'active' : ''}`}>
          <Link onClick={handleClick} to='/biografia'>Biografía</Link>
          <Link onClick={handleClick} to='/contacto'>Contacto</Link>
          <Link onClick={handleClick} to='/clases'>Clases</Link>
          <Link onClick={handleClick} to='/galeria/acuarela/figura-humana'>Galería</Link>
        </div>
        <Burger clicked={clicked} handleClick={handleClick} />
      </StyleNav>
      <BgDiv className={`initial ${clicked ? 'active' : ''}`} />
      <Outlet />
    </>
  )
}

const StyleNav = styled.nav`
  background-color: #6f7078;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-variant: small-caps;
  
  h2 {
    padding-bottom: 0.2rem;
    color: black;
    font-weight: 500;
    margin-left: 2rem;
  }
  
  a {
    color: black;
    text-decoration: none;
    margin-right: 1rem;
  }

  a:hover {
    color: white;
  }

  .botones {
    z-index: 2;
    position: fixed;
    top: -1000px;
    right: -1000px;
    @media (min-width: 1020px) {
      position: initial;
      margin-right: 1rem;
    }
  }
  @media (max-width: 1019px) {
    .botones.active {
      display: flex;
      flex-flow: column;
      a {
        margin: 0 2rem 1rem 0;
        font-size: calc(10px + 2vmin);
        transition: 1s;
        color: white;
      }
      top: 15%;
      left: 0;
      right: 0;
      text-align: right;
    }
  }

  @media (min-width: 1020px) {
    h2::after {
      content: ' Campbell';
    }
  }
`

const BgDiv = styled.div`
  @media (max-width: 1019px) {
    z-index: 1;
    background-color: #333;
    width: 50%;
    height: 100vw;
    position: fixed;
    top: -1000px;
    right: -1000px;
    border-radius: 0 0 0 90%;

    &.active {
      top: 0;
      right: 0;
    }
  }
`

export default Navbar;