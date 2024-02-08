import styled from 'styled-components'

export const Card = styled.div`
  height: 317px;
  width: 472px;
  margin-top: 200px;
  font-family: roboto;

  .capa {
    height: 250px;
    width: 100%;
  }
`

export const Descricao = styled.p`
  color: #e66767;
  border: 1px solid #e66767;
  line-height: 22px;
`

export const Conteudo = styled.div`
  padding: 10px;
`

export const Titulo = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
`
export const Botao = styled.button`
  background-color: #e66767;
  border: none;
  padding: 5px;
  color: white;
  margin-top: 5px;

  cursor: pointer;

  a {
    color: white;
  }
`
