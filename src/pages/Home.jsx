import styled from 'styled-components'

const Home = () => {
  return (
    <StyleFoto>
      <img src='obras/acuarelas/lago.jpg' className="horizontal" alt=''/>
      <img src="obras/acuarelas/Urbanas/La Bicicleta, acuarela sobre papel, 26 x 17 cm..jpg" className="vertical" alt=''/>
    </StyleFoto>
  )
}

const StyleFoto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  img {
    width: 100%;
  }

  @media (min-width: 1020px) {
    .vertical {
      display: none;
    }
  }

  @media (max-width: 1019px) {
    .horizontal {
      display: none;
    }
  }
`

export default Home