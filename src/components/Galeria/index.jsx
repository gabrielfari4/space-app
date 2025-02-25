import styled from "styled-components";
import Titulo from "../Titulo";
import Populares from "./Populares";
import Tags from "./Tags";
import Imagem from "./Imagem";

const GaleriaContainer = styled.div`
    display: flex;
`

const SecaoFluida = styled.section`
    flex-grow: 1;
`

const PostsContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
`

const Galeria = ({ fotos = [] }) => {
    return (
        <>
            <Tags />
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>
                        Navegue pela nossa galeria
                    </Titulo>
                    {/* <ul>
                        {fotos.map(foto => <li key={foto.id}>{foto.titulo}</li>)}
                    </ul> */}
                    <PostsContainer>
                        {fotos.map(foto => 
                        <Imagem 
                        key={foto.id} 
                        foto={foto}
                        />)}
                    </PostsContainer>
                </SecaoFluida>
            <Populares />

            </GaleriaContainer>

        </>
    )
}

export default Galeria;