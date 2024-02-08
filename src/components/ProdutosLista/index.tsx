import Produto from '../Produtos'

import sushi from '../assets/Sushi.png'
import macarrao from '../assets/Macarrao.png'
import { Lista } from './styles'
import { useEffect, useState } from 'react'

export type Pratos = {
  titulo: string
  avaliacao: string
  descricao: string
  capa: string
}

const formataTexto = (descricao: string) => {
  if (descricao.length > 205) {
    return descricao.slice(0, 203) + '...'
  }
  return descricao
}

const ProdutoLista = () => {
  const [pratos, setPratos] = useState<Pratos[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes').then(
      (res) => res.json().then((res) => setPratos(res))
    )
  })

  return (
    <Lista>
      {pratos.map((prato) => (
        // eslint-disable-next-line react/jsx-key
        <Produto
          title={prato.titulo}
          image={prato.capa}
          nota={prato.avaliacao}
          description={formataTexto(prato.descricao)}
        ></Produto>
      ))}
    </Lista>
  )
}

export default ProdutoLista
