import styled from "styled-components";

const Burger = (props) => {
    return (
        <StyledBurger>
            <div onClick={props.handleClick} className={`icon burger ${props.clicked ? 'open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </StyledBurger>
    )
};

export default Burger;

const StyledBurger = styled.div`
  z-index: 3;
  .burger {
    width: 35px;
    height: 30px;
    margin: 10px 10px;
    margin-right: 1rem;
    position: relative;
    cursor: pointer;
    display: inline-block;
  }
  .burger span {
    background-color: black;
    position: absolute;
    border-radius: 2px;
    transition: .3s cubic-bezier(.8, .5, .2, 1.4);
    width: 100%;
    height: 4px;
    transition-duration: 500ms
  }
  .burger:hover span {
    background-color: white
  }
  .burger span:nth-child(1) {
    top: 0px;
    left: 0px;
  }
  .burger span:nth-child(2) {
    top: 13px;
    left: 0px;
    opacity: 1;
  }
  .burger span:nth-child(3) {
    bottom: 0px;
    left: 0px;
  }
  .burger.open span:nth-child(1) {
    transform: rotate(45deg);
    top: 13px;
  }
  .burger.open span:nth-child(2) {
    opacity: 0;
  }
  .burger.open span:nth-child(3) {
    transform: rotate(-45deg);
    top: 13px;
  }

  @media (min-width: 1020px) {
    display: none
  }
`