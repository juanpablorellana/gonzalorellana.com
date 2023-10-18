import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <StyleFooter>
          <a href='https://www.instagram.com/gonzalorellana_pinturas/' target='_blank' rel="noreferrer">
            <img src="instagram.svg" alt='' />
          </a>
          <a href='https://www.facebook.com/gonzalo.campbell' target='_blank' rel="noreferrer">
            <img src="facebook.svg" alt='' />
          </a>
      </StyleFooter>
    </>
  )
};

export default Footer;

const StyleFooter = styled.footer`
  background-color: #6f7078;
  padding: 1rem;
  display: flex;
  justify-content: center;

  img {
    width: 10%;
    height: 100%;
  }
`