import styled from 'styled-components';
import tags from './tags.json';

const Container = styled.div`
    display: flex;
    height: 50px;
    align-items: center;
    gap: 1rem;
    margin-top: 3.5rem;
`

const Texto = styled.p`
    color: #D9D9D9;
    font-size: 1.5rem;
    width: 220px;
`
const ContainerTags = styled.div`
    display: flex;
    gap: 1.5rem;
`

const BotaoEstilizado = styled.button`
    font-size: 1.5rem;
    width: fit-content;
    padding: 10px 8px;
    transition: background-color 0.3s ease;
    color: white;
    border-radius: 10px;
    background-color: rgba(217, 217, 217, 0.30);
    border: 2px solid transparent;
    &:hover {
        border-color: #C98CF1;
        cursor: pointer;
    }
    border-color: ${props => props.$ativo ? '#C98CF1' : 'transparent'};
`

const Tags = ({ ativo = false }) => {
    return (
        <Container>
            <Texto>
                Busque por tags:
            </Texto>
            <ContainerTags>
                {tags.map(tag => <BotaoEstilizado $ativo={ativo} key={tag.id}>{tag.titulo}</BotaoEstilizado>)}
            </ContainerTags>
        </Container>
    )
}

export default Tags;