import styled from "styled-components";
const Biografia = () => {
  return (
    <>
      <StyleBio>
        <a href='/Dossier.pdf' target='_blank'>
          <h4><u>Dossier de Artista</u></h4>
        </a>
        <div className='bio'>
          <img src='foto-suya.jpg' alt='' />
          <div className='texto'>
            <h1>Biografía</h1>
            <h3>Gonzalo Emiliano Orellana Campbell</h3>
            <p>
              Estudia en la Facultad de Artes de la Universidad de Chile donde obtiene la Licenciatura en 1999 y el Título Profesional con mención en pintura (distinción máxima) en 2001. En 2001 y 2002 se desempeñó como ayudante del profesor Rodrigo Vega en la asignatura de dibujo de figura humana, para alumnos de tercer y cuarto año en la Facultad de Artes de la Universidad de Chile.<br /><br />
              De 2003 a 2021, impartió diversos talleres de dibujo y pintura entre los que destacan: Taller de pintura en Centro Crecer para personas con discapacidad física entre los años 2003 y 2014, talleres de Pintura al óleo en Vitaintegración para personas con capacidades diferentes (distintos tipos de discapacidad) de 2012 a la fecha, talleres de dibujo y pintura en The Grange School, en el año 2005 y talleres de dibujo de figura humana, acuarela y pintura acrílica en Espacio Endesa, para los trabajadores de Endesa Chile, entre los años 2006 y 2008.<br /><br />
              Paralelamente, desde 2003 se ha desempeñado como profesor particular de dibujo y pintura, actividad que mantiene hasta el día de hoy en su taller, ubicado en la comuna de Las Condes.<br /><br />
              En los últimos años se ha dedicado fundamentalmente a pintar con acuarela,
              participando en diferentes muestras internacionales con dicha técnica en
              Chile, Latinoamérica y Europa.
            </p>
          </div>
        </div>
      </StyleBio>
    </>
  )
};

export default Biografia;

const StyleBio = styled.div`
  line-height: 25px;

  @media (min-width: 1020px) {
    padding-right: 9rem;
    padding-left: 9rem;
    padding-bottom: 3rem;

    .bio {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
    }

    img {
      padding-top: 1.2rem;
      padding-right: 3rem;
      width: 30%;
      height: 30%;
    }
  }

  @media (max-width: 1020px) {
    padding-right: 2rem;
    padding-left: 2rem;
    padding-bottom: 1rem;

    .bio {
      display: flex;
      flex-flow: column wrap;
    }

    img {
      width: 50%;
      height: 50%;
      align-self: center;
    }
  }

  .texto {
    text-align: justify;
  }

  h4 {
    text-align: right;
  }

  a {
    color: black;
    text-decoration: none;
  }
`