import styled from "styled-components"
import EstilosGlobais from "./components/EstilosGlobais"
import Cabecalho from "./components/Cabecalho"
import BarraLateral from "./components/BarraLateral"
import Banner from "./components/Banner"
import Galeria from "./components/Galeria"

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`

const Container = styled.div`
    display: flex;
    gap: 24px;
`

const ContainerGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

function App() {

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
      <Cabecalho />

      <Container>
        <BarraLateral />
          <ContainerGaleria>
            <Banner backgroundImage="/imagens/foto-banner.png" texto="A galeria mais completa de fotos do espaço!"/>
            <Galeria />

          </ContainerGaleria>
      </Container>

      </AppContainer>

    </FundoGradiente>
  )
}

export default App
