import obras from '../obras.json'
import styled from 'styled-components'
import { Link, Outlet, useParams } from 'react-router-dom'
import { useState } from 'react'

// BOTONES

const BotonesCategorias = (props) => {
  // const { categoria, tipos } = useParams()
  return <div className='botones'>
    {<ul>{props.children}</ul>}
  </div>
}

let categoriaActual = ''
const Dropdown = (props) => {
  const [open, setOpen] = useState(false)
  return <li>
    <Link onClick={() => {
      setOpen(!open)
      categoriaActual = props.nombre.toLowerCase()
    }}>
      <button>{props.nombre}</button>
    </Link>
    {open && props.children}
  </li>
}

const Redirect = (props) => {
  const { tipos } = useParams()
  return <li>
    <Link to={`/galeria/${categoriaActual}/${props.path}`}>
      <button className={`${props.path === tipos ? 'activo' : ''}`}>{props.nombre}</button>
    </Link>
  </li>
}

// MOSTRAR FOTOS
const mostrarCategoria = (categoria) => {
  return categoria.map(o => {
    return <div className={o.titulo} >
      <img src={o.ruta} alt='' />
      <p>{o.titulo}, {o.ficha}</p>
      <hr color='black' />
    </div>
  })
}

// COMPONENTE
const Galeria = () => {
  const { tipos } = useParams()
  // if (!categorias.some(c => c === categoria)) return <NoPage />
  return (
    <StyleGaleria>
      <h1>Galería</h1>
      <BotonesCategorias>
        <Dropdown nombre='Acuarelas'>
          <ul className='acuarelas'>
            <Redirect nombre='Marinas' path='marinas' />
            <Redirect nombre='Retratos' path='retratos'/>
            <Redirect nombre='Urbanas' path='urbanas'/>
            <Redirect nombre='Rurales' path='rurales'/>
            <Redirect nombre='Animales y Aves' path='animales-y-aves'/>
            <Redirect nombre='Figura Humana' path='figura-humana'/>
          </ul>
        </Dropdown>
        <Dropdown nombre='Óleos'>
          <ul className='oleos'>
            <Redirect nombre='Urbanas' path='urbanas'/>
            <Redirect nombre='Personajes' path='personajes'/>
            <Redirect nombre='Rural' path='rural'/>
          </ul>
        </Dropdown>
        <Redirect nombre='Dibujos' path='dibujos'/>
        <Redirect nombre='Fotos' path='fotos'/>
      </BotonesCategorias >
      {mostrarCategoria(obras.Acuarelas[tipos])}
      <Outlet />
    </StyleGaleria>
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
    .acuarelas, .oleos {
      flex-flow: column;
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