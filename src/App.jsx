import styled from "styled-components"
import EstilosGlobais from "./components/EstilosGlobais"
import Cabecalho from "./components/Cabecalho"
import BarraLateral from "./components/BarraLateral"
import Banner from "./components/TituloEstilizado"

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

const Container = styled.div`
    display: flex;
    gap: 24px;
    margin-inline: auto;
  `

function App() {

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <Cabecalho />

      <Container>
        <BarraLateral />
        <Banner backgroundImage="/imagens/foto-banner.png" texto="A galeria mais completa de fotos do espaço!"/>
      </Container>

    </FundoGradiente>
  )
}

export default App
