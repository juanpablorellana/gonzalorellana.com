import { Link } from "react-router-dom";
import styled from "styled-components";

const Clases = () => {
  return (
    <>
      <h1>Clases</h1>
      <StyledClases>
        <div className="dibujo">
          <img src="obras/dibujo/017.JPG" alt="" />
          <div className="dataDibujo">
            <h3>Dibujo figura humana con modelo</h3>
            <ul>
              <li><b>Modalidad:</b> Presencial</li>
              <li><b>Horario:</b> Martes 19:30 - 21:30 horas</li>
              <li><b>Valor:</b> 80.000 CLP (Mensual)</li>
            </ul>
            <Link to='/contacto'><button className="boton1"><b>Contacto</b></button></Link>
          </div>
        </div>
        <div className="acuarela">
          <div className="recortar"></div>
          <div>
            <h3>Acuarela</h3>
            <ul>
              <li><b>Modalidad:</b> Presencial</li>
              <li><b>Horario:</b></li>
              <li>- Lunes 16:00 - 18:00 horas</li>
              <li>- Viernes 19:00 - 21:00 horas</li>
              <li><b>Valor:</b> 70.000 CLP (Mensual)</li>
            </ul>
            <Link to='/contacto'><button><b>Contacto</b></button></Link>
          </div>
        </div>
        {/*
        <div className="acuarela-zoom">
          <img src="/obras/acuarelas/Marinas/Lanchas en la Bruma, acuarela in situ sobre  papel, 54 x 74 cm..jpg" alt="" />
          <div>
            <h3>Acuarela</h3>
            <ul>
              <li><b>Modalidad:</b> Vía Zoom, cada clase una demostración y explicación del paso a paso, a partir de la hoja en blanco.</li>
              <li><b>Horario:</b> Viernes 19:00 - 21:00 horas</li>
              <li><b>Valor:</b> 70.000 CLP (Mensual)</li>
            </ul>
            <Link to='/contacto'><button><b>Contacto</b></button></Link>
          </div>
        </div>
        */}
      </StyledClases>
    </>
  )
};

export default Clases;

const StyledClases = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding-bottom: 1rem;
  text-align: left;
  @media (min-width: 1020px) { align-items: stretch; }
  @media (max-width: 1019px) { align-items: flex-start; }
   
  ul {
    list-style: none;
    padding: 0;
    line-height: 25px;
  }
  li {
    margin-bottom: 10px;
    text-align: justify;
  }
  .dibujo, .acuarela, .acuarela-zoom {
    margin: 1rem;
    width: 19rem;
    border: 2px solid #6f7078;
    border-radius: 12px;
    box-shadow: 0 2px 3px black
  }
  .acuarela {
    .recortar {
      margin: 0;
      height: 210px;
      border-radius: 12px 12px 0 0;
      background-image: url("obras/ensenando/Screenshot_20221122-230036_Facebook.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 0 -129px;
    }
  }
  div {
    margin: 0 1rem 1rem 1rem;
    background-color: #F4F4F4;
  }
  button {
    color: #F4F4F4;
    padding: 0.5rem 1rem;
    font-size: 18px;
    border: none;
    border-radius: 12px;
    background-color: #6f7078;
  }
  img {
    width: 19rem;
    border-radius: 11px 11px 0 0;
  }
`