import styled from "styled-components";
import Titulo from "../../Titulo";


import fotos from "./fotos-populares.json"

const PopularesContainer = styled.div`
    /* flex-grow: 1; */
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        width: 14vw;
        border-radius: 20px;
        margin-top: 1.5rem;
    }
`
const Botao = styled.button`
    background-color: transparent;
    color: #fff;
    border: 2px solid;
    border-color: #C98CF1;
    padding: 12px 20px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    margin-top: 16px;
`;

const Populares = () => {
    return (
        <PopularesContainer>
            <Titulo $alinhamento='center'>
                Populares
            </Titulo>
            {fotos.map(foto => <img src={foto.path} key={foto.id}/>)}
            <Botao>Ver mais</Botao>
        </PopularesContainer>
    )
}

export default Populares;