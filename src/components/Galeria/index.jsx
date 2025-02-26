import styled from "styled-components";
import Titulo from "../Titulo";
import Populares from "./Populares";
import Tags from "./Tags";
import Imagem from "./Imagem";

const GaleriaContainer = styled.div`
    display: flex;
`

const SecaoFluida = styled.section`
    /* flex-grow: 1; */
    max-width: 968px;
`

const PostsContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
`

const Galeria = ({ fotos = [], aoFotoSelecionada, aoAlternarFavorito }) => {
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
                        aoZoomSolicitado={aoFotoSelecionada}
                        aoAlternarFavorito={aoAlternarFavorito}
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