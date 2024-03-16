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

import pizza from '../assets/PizzaCategoria.png'
import { useState } from 'react'

type Props = {
  title: string
  description: string
  image: string
}

type GalleryItem = {
  IsVisible: boolean
}

const ProdutoCategoria = ({ title, description, image }: Props) => {
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
              <img src={pizza} alt="" />
            </div>
            <div>
              <h2>Pizza Marguerita</h2>
              <p>
                A pizza Margherita é uma pizza clássica da culinária italiana,
                reconhecida por sua simplicidade e sabor inigualável. Ela é
                feita com uma base de massa fina e crocante, coberta com molho
                de tomate fresco, queijo mussarela de alta qualidade, manjericão
                fresco e azeite de oliva extra-virgem. A combinação de sabores é
                perfeita, com o molho de tomate suculento e ligeiramente ácido,
                o queijo derretido e cremoso e as folhas de manjericão frescas,
                que adicionam um toque de sabor herbáceo. É uma pizza simples,
                mas deliciosa, que agrada a todos os paladares e é uma ótima
                opção para qualquer ocasião.
              </p>
              <br />
              <br />
              <p>Serve: de 2 a 3 pessoas</p>
              <br />
              <button>Adicionar ao carrinho - R$ 60,00</button>
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
            <p>{description}</p>
            <Botao>Adicionar ao carrinho</Botao>
          </Conteudo>
        </Descricao>
      </Card>
    </>
  )
}

export default ProdutoCategoria
