import styled from "styled-components";


const FigureEstilizada = styled.figure`
    background-image: ${props => `url(${props.$backgroundImage})`};
    flex-grow: 1;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    min-height: 328px;
    margin: 0;
    border-radius: 20px;
    max-width: 100%;
    background-size: cover;
`

const TituloEstilizado = styled.h1`
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: #FFFFFF;
    width: fit-content;
    max-width: 430px;
    padding: 0 64px;
    height: 150px;
`

const Banner = ({texto, backgroundImage}) => {
    return (
        <FigureEstilizada $backgroundImage={backgroundImage}>
            <TituloEstilizado>
                {texto}
            </TituloEstilizado>
        </FigureEstilizada>)
}

export default Banner;

/* const Container = styled.div`
    width: 1156px;
    height: 328px;
    background-image: url(/imagens/foto-banner.png);
    border-radius: 20px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    h1 {
        width: 300px;
        height: 150px;
        font-size: 40px;
        color: white;
        font-weight: 300;
        margin-left: 5rem;
    }
`

const TituloEstilizado = () => {
    return (
        <Container>
            <h1>
                A galeria mais completa de fotos do espaço!
            </h1>
        </Container>
    )
} */
