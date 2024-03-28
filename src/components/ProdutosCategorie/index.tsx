import {
  Botao,
  Card,
  Conteudo,
  Descricao,
  Modal,
  ModalContent,
  PizzaModal,
  Titulo
} from './styles'

import { useState } from 'react'
import { formataTexto } from '../ProdutosLista'

type Props = {
  title: string
  description: string
  image: string
  porcao: string
  preco: number
}

type GalleryItem = {
  IsVisible: boolean
}

const ProdutoCategoria = ({
  title,
  description,
  image,
  porcao,
  preco
}: Props) => {
  const [modal, setModal] = useState<GalleryItem>({
    IsVisible: false
  })

  const closeModal = () => {
    setModal({
      IsVisible: false
    })
  }

  return (
    <>
      <Modal className={modal.IsVisible ? 'visivel' : ''}>
        <ModalContent>
          <PizzaModal>
            <div>
              <img src={image} alt="" />
            </div>
            <div>
              <h2>{title}</h2>
              <p>{description}</p>
              <br />
              <br />
              <p>Serve: {porcao}</p>
              <br />
              <button>Adicionar ao carrinho - R$ {preco}</button>
            </div>
          </PizzaModal>
        </ModalContent>
        <div
          className="overlay"
          onClick={() => {
            closeModal()
          }}
        ></div>
      </Modal>

      <Card
        onClick={() => {
          setModal({
            IsVisible: true
          })
        }}
      >
        <Descricao>
          <img src={image} alt={title} />
          <Conteudo>
            <Titulo>{title}</Titulo>
            <p>{formataTexto(description)}</p>
            <Botao>Adicionar ao carrinho</Botao>
          </Conteudo>
        </Descricao>
      </Card>
    </>
  )
}

export default ProdutoCategoria
