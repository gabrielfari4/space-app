import styled from "styled-components";

const RodapeEstilizado = styled.footer`
    height: 80px;
    background-color: #04244f;
    margin-top: 4.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: 2rem;
`;

const Icones = styled.div`
    display: flex;
    column-gap: 2rem;
    img {
        height: 20px;
    }
`;

const Creditos = styled.p`
    color: white;
`;

const Footer = () => {
    return (
        <RodapeEstilizado>
            <Icones>
                <a href="#">
                    <img
                        src="/imagens/sociais/facebook.svg"
                        alt="Ícone Facebook"
                    />
                </a>
                <a href="#">
                    <img
                        src="/imagens/sociais/instagram.svg"
                        alt="Ícone Instagram"
                    />
                </a>
                <a href="#">
                    <img
                        src="/imagens/sociais/twitter.svg"
                        alt="Ícone Twitter"
                    />
                </a>
            </Icones>
            <Creditos>Desenvolvido por Alura</Creditos>
        </RodapeEstilizado>
    );
};

export default Footer;
