import { useState } from "react";
import styled from "styled-components";


const Figure = styled.figure`
    height: ${ props => props.$expandida ? '90%' : '340px'};
    width: ${ props => props.$expandida ? '90%' : '460px'};
    /* position: ${ props => props.$expandida ? 'absolute' : 'static'}; */
    display: flex;
    flex-direction: column;
    margin: 1.5rem 1.5rem 0 0;
    /* margin: 0; */
    /* margin: ${ props => props.$expandida ? 'auto' : '1.5rem 1.5rem 0 0'}; */
    & > img {
        height: 260px;
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
        height: 80px;
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

const Imagem = ({ favoritado = false, foto }) => {
    const [expandida, setExpandida] = useState(false)

    const handleExpandida = () => {
        setExpandida(
            expandida ? false : true
        )
    }

    return (
        <Figure $expandida={expandida}>
            <img src={foto.path} alt="" />
            <figcaption>
                <h3>{foto.titulo}</h3>
                <footer>
                    <p>{foto.fonte}</p>
                    <div>
                        <button><img src="/icones/favorito.png" alt="Favoritar" /></button>
                        <button onClick={handleExpandida}><img src="/icones/expandir.png" alt="Expandir" /></button>
                    </div>
                </footer>

            </figcaption>
        </Figure>
    )
}

export default Imagem;