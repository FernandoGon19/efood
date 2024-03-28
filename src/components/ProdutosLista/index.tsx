import Produto from '../Produtos'
import { Lista } from './styles'
import { useEffect, useState } from 'react'

export type Cardapio = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurantes = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: Cardapio[]
}

export const formataTexto = (descricao: string) => {
  if (descricao.length > 205) {
    return descricao.slice(0, 203) + '...'
  }
  return descricao
}

const ProdutoLista = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurantes[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes').then(
      (res) => res.json().then((res) => setRestaurantes(res))
    )
  }, [])

  console.log(typeof restaurantes)

  return (
    <Lista>
      {restaurantes.map((restaurante) => (
        <Produto
          key={restaurante.id}
          title={restaurante.titulo}
          image={restaurante.capa}
          nota={restaurante.avaliacao}
          description={formataTexto(restaurante.descricao)}
          id1={restaurante.id}
        ></Produto>
      ))}
    </Lista>
  )
}

export default ProdutoLista
