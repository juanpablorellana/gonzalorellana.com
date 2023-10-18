import obras from '../obras.json'
import NoPage from './NoPage'
import styled from 'styled-components'
import { Link, Outlet, useParams } from 'react-router-dom'

let categorias = [
  'figura-humana',
  'animales-y-aves',
  'marinas',
  'retratos',
  'rurales',
  'urbanas'
]

// BOTONES
const BotonesCategorias = () => {
  const { categoria } = useParams()
  return <div className='botones'>
    <ul>
      {categorias.map(c => {
        return <li>
          <Link to={`/galeria/${c}`}>
            <button className={`${c === categoria ? 'activo' : ''}`}>{`${c[0].toUpperCase()}${c.slice(1).replaceAll('-', ' ')}`}</button>
          </Link>
        </li>
      })}
    </ul>
  </div>
}

// MOSTRAR FOTOS
const mostrarCategoria = (categoria) => {
  return categoria.map((o, i) => {
    return <div className={o.titulo} >
      <img src={o.ruta} alt='' />
      <p>{o.titulo}, {o.ficha}</p>
      <hr color='black' />
    </div>
  })
}

// COMPONENTE
const Galeria = () => {
  const { categoria } = useParams()
  if (!categorias.some(c => c === categoria)) return <NoPage />
  return (
    <>
      <StyleGaleria>
        <h1>Galería</h1>
        <BotonesCategorias />
        {mostrarCategoria(obras.Acuarelas[categoria])}
        <Outlet />
      </StyleGaleria>
    </>
  )
};

export default Galeria;

const StyleGaleria = styled.div`

  div {
    display: flex;
    flex-flow: column;
    align-items: center;
    padding-bottom: 1rem;
  }

  .botones {
    button {
      color: black;
      margin: 0.5rem;
      padding: 10px 2rem;
      border: 2px solid #6f7078;
      font-size: 16px;
      font-weight: bold;
      border-radius: 12px;
      cursor: pointer;
    }
    ul {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      padding: 0;
      margin: 0;
      list-style: none;
    }
    .activo {
      background: #6f7078;
      color: white;
    }
  }

  @media (min-width: 1020px) {
    img, hr, p {
      width: 50%;
      text-align: left
    }
  }
  @media (max-width: 1019px) {
    img, hr, p {
      width: 90%
    }
  }
`