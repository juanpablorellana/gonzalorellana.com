import styled from "styled-components";
const Contacto = () => {
  return (
    <>
      <StyleContacto>
          <img src='obras/acuarelas/bosque.jpg' alt='' className='foto' />
          <div className='contactos'>
            <h1>Contacto</h1>
            <a href='mailto:gonzalorellana@gmail.com'>
              <div className="mail">
                <img src="mail.svg" alt='' />
                <h4>gonzalorellana@gmail.com</h4>
              </div>
            </a>
            <a href='tel:+56997478453'>
              <div className="fono">
                <img src="phone.svg" alt='' />
                <h4>+56997478453</h4>
              </div>
            </a>
            <a href='https://www.instagram.com/gonzalorellana_pinturas/' target='_blank' rel="noreferrer">
              <div className="ig">
                <img src="instagram.svg" alt='' />
                <h4>@gonzalorellana_pinturas</h4>
              </div>
            </a>
            <a href='https://www.facebook.com/gonzalo.campbell' target='_blank' rel="noreferrer">
              <div className="fb">
                <img src="facebook.svg" alt='' />
                <h4>@gonzalo.campbell</h4>
              </div>
            </a>
          </div>
      </StyleContacto>
    </>
  )
};

export default Contacto;

const StyleContacto = styled.div`

  padding: 2rem;
  padding-bottom: 4rem;
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: center;
  
  .ig, .fb, .fono, .mail {
    display: flex;
    flex-flow: row nowrap;
    img {
      width: 10%;
      padding-right: 1rem;
    }
  }
  
  a {
    text-decoration: none;
    color: black
  }

  h1 {
    text-align: left;
  }

  @media (max-width: 1020px) {
    .foto {
      width: 80%;
      height: 80%;
    }
    .contactos {
      padding-top: 1rem;
    }
  }
  
  @media (min-width: 1020px) {
    .foto {
      width: 40%;
      height: 40%;
      padding-top: 1.5rem;
    }
    .contactos {
      padding: 2rem;
      padding-left: 3rem;
      padding-top: 0;
    }
  }
  `