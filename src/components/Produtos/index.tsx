import { Botao, Card, Conteudo, Descricao, Titulo } from './styles'

import estrela from '../assets/estrela.png'
import { Link, useParams } from 'react-router-dom'

export type PropsRestaurantes = {
  title: string
  description: string
  image: string
  nota: string
  id1: number
}

const Produto = ({
  title,
  description,
  image,
  nota,
  id1
}: PropsRestaurantes) => {
  return (
    <>
      <Card>
        <Descricao>
          <img className="capa" src={image} alt={title} />
          <Conteudo>
            <Titulo>
              <h2>{title}</h2>
              <h2>
                {nota} <img src={estrela} alt="estrela" />
              </h2>
            </Titulo>
            <p>{description}</p>
            <Botao>
              <Link to={`/Categories/${id1}`}>Saiba mais</Link>
            </Botao>
          </Conteudo>
        </Descricao>
      </Card>
    </>
  )
}

export default Produto
