import styled from "styled-components";


const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 56px;
    width: 566px;
    max-width: 814px;
    border: 2px solid #C98CF1;
    /* border-image: linear-gradient(90deg, #C98CF1 0%, #7B78E5 100%) 1; */
    border-radius: 10px;
    padding: 12px 16px;
    box-sizing: border-box;
    input {
        background-color: transparent;
        border: none;
        &::placeholder {
            color: #D9D9D9;
            font-size: 20px;
            font-weight: 400;
            line-height: 20px;
        }
    }
    img {
        max-width: 32px;
        max-height: 32px;
    }
`

const CampoTexto = (props) => {
    return (<Container>
        <input type="text" placeholder="O que você procura?" {...props}/>
        <img src="/imagens/search.png" alt="Ícone de lupa" />
    </Container>)
}

export default CampoTexto;