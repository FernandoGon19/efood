import styled from 'styled-components'

export const Card = styled.div`
  height: 458px;
  width: 320px;
  margin-top: 20px;
  font-family: roboto;
  background-color: #e66767;
  cursor: pointer;
`

export const Descricao = styled.p`
  color: white;
  line-height: 22px;
  font-size: 14px;

  img {
    padding: 5px;
    width: 97%;
    height: 250px;
  }
`

export const Conteudo = styled.div`
  padding: 10px;
`

export const Titulo = styled.div`
  padding-bottom: 10px;
  font-size: 16px;
`
export const Botao = styled.button`
  background-color: white;
  border: none;
  padding: 5px;
  color: #e66767;
  margin-top: 5px;
  width: 100%;
  font-weight: bold;

  cursor: pointer;
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;
  transition: 1s;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.72);
  }
`

export const ModalContent = styled.div`
  position: relative;
  z-index: 1;
  background-color: #e66767;
  width: 1024px;
  height: 344px;
  border-radius: 20px;
`

export const PizzaModal = styled.div`
  display: flex;
  color: white;
  font-family: roboto;

  div {
    padding-top: 30px;
    padding-left: 10px;
    padding-right: 30px;

    h2 {
      font-weight: bold;
      font-size: 18px;
      line-height: 21px;
      margin-bottom: 20px;
    }

    p {
      font-size: 14px;
      line-height: 22px;
    }
  }

  img {
    padding-top: 5px;
    padding-left: 20px;
    width: 280px;
    height: 280px;
  }

  button {
    border: none;
    padding: 5px;
    cursor: pointer;
    font-weight: 700;
    color: #e66767;
  }
`
