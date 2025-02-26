import styled from "styled-components";
import Imagem from "../Galeria/Imagem";

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    inset: 0;
`

const DialogEstilizado = styled.dialog`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 80vh;
    width: 60vw;
    border-radius: 20px;
    border: none;
    background-color: transparent;
    form {
        position: absolute;
        top: 2.5vh;
        right: 1.5vw;
        button {
            border: none;
            background-color: transparent;
        }
    }
`

const ModalZoom = ({ foto, aoFechar }) => {
    return (
        <>
            {foto && <>
                <Overlay />
                <DialogEstilizado open={!!foto} onClose={aoFechar}>
                    <Imagem foto={foto} expandida={true}/>
                    <form method="dialog">
                        <button formMethod="dialog">
                            <img src="/icones/fechar.png" alt="" />
                        </button>
                    </form>
                </DialogEstilizado>
            </>}
        </>
    )
}

export default ModalZoom;