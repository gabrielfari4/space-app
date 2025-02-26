// import { useState } from "react";
import styled from "styled-components";


const Figure = styled.figure`
    height: ${ props => props.$expandida ? '100%' : '340px'};
    width: ${ props => props.$expandida ? '100%' : '460px'};
    /* position: ${ props => props.$expandida ? 'absolute' : 'static'}; */
    display: flex;
    flex-direction: column;
    /* margin: 1.5rem 1.5rem 0 0; */
    /* margin: 0; */
    margin: ${ props => props.$expandida ? 'auto' : '1.5rem 1.5rem 0 0'};
    & > img {
        /* height: 260px; */
        height: ${ props => props.$expandida ? '80%' : '260px'};
        /* width: 100%; */
        border-radius: 20px 20px 0 0;
        object-fit: cover;
    }
    figcaption {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: #001634;
        border-radius: 0 0 20px 20px;
        /* height: 80px; */
        height: ${ props => props.$expandida ? '100px' : '80px'};
        h3 {
            font-family: GandhiSansBold;
            font-size: 1.25rem;
            color: white;
            margin: 0 1.25rem 0;
        }
        footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-inline: 1.25rem;
            p {
                color: white;
            }
            div {
                display: flex;
                column-gap: 1.5rem;
                button {
                    cursor: pointer;
                    background-color: transparent;
                    border: none;
                    height: 24px;
                    width: 24px;
                    img {
                        object-fit: contain;
                    }
                }
            }
        }
    }
`

const Imagem = ({ foto, aoZoomSolicitado, expandida = false, aoAlternarFavorito }) => {
    /* const [expandida, setExpandida] = useState(false)

    const handleExpandida = () => {
        setExpandida(
            expandida ? false : true
        )
    } */

    const iconeFavorito = foto.favorita ? '/icones/favorito-ativo.png' : '/icones/favorito.png'

    return (
        <Figure 
        $expandida={expandida} 
        id={`foto-${foto.id}`}>
            <img src={foto.path} alt={foto.titulo} />
            <figcaption>
                <h3>{foto.titulo}</h3>
                <footer>
                    <p>{foto.fonte}</p>
                    <div>
                        <button onClick={() => aoAlternarFavorito(foto)}><img src={iconeFavorito} alt="Favoritar" /></button>
                        {!expandida && <button 
                            // onClick={handleExpandida}
                            onClick={() => aoZoomSolicitado(foto)}
                        ><img src="/icones/expandir.png" alt="Expandir" /></button>}
                    </div>
                </footer>

            </figcaption>
        </Figure>
    )
}

export default Imagem;