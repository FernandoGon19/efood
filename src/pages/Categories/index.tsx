import Banner from '../../components/BannerCategorie'
import HeaderCategorie from '../../components/HeaderCategorie'
import ProdutoCategoria from '../../components/ProdutosCategorie'

import pizza from '../../components/assets/PizzaCategoria.png'
import { useEffect, useState } from 'react'

type Cardapio = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

const Categories = () => {
  const [cardapio, setCardapio] = useState<Cardapio[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes').then(
      (res) => res.json().then((res) => setCardapio(res))
    )
  })

  console.log(cardapio)

  return (
    <div>
      {cardapio.map((pratos) => (
        <div key={pratos.id}>
          <h1>{pratos.nome}</h1>
        </div>
      ))}

      <HeaderCategorie></HeaderCategorie>
      <Banner></Banner>
      <div className="container grid">
        <ProdutoCategoria
          title="Pizza Marguerita"
          description="A clássica Marguerita: molho de tomate suculento,
      mussarela derretida, manjericão fresco e um toque de azeite.
      Sabor e simplicidade!"
          image={pizza}
        ></ProdutoCategoria>

        <ProdutoCategoria
          title="Pizza Marguerita"
          description="A clássica Marguerita: molho de tomate suculento,
      mussarela derretida, manjericão fresco e um toque de azeite.
      Sabor e simplicidade!"
          image={pizza}
        ></ProdutoCategoria>

        <ProdutoCategoria
          title="Pizza Marguerita"
          description="A clássica Marguerita: molho de tomate suculento,
      mussarela derretida, manjericão fresco e um toque de azeite.
      Sabor e simplicidade!"
          image={pizza}
        ></ProdutoCategoria>

        <ProdutoCategoria
          title="Pizza Marguerita"
          description="A clássica Marguerita: molho de tomate suculento,
      mussarela derretida, manjericão fresco e um toque de azeite.
      Sabor e simplicidade!"
          image={pizza}
        ></ProdutoCategoria>

        <ProdutoCategoria
          title="Pizza Marguerita"
          description="A clássica Marguerita: molho de tomate suculento,
      mussarela derretida, manjericão fresco e um toque de azeite.
      Sabor e simplicidade!"
          image={pizza}
        ></ProdutoCategoria>

        <ProdutoCategoria
          title="Pizza Marguerita"
          description="A clássica Marguerita: molho de tomate suculento,
      mussarela derretida, manjericão fresco e um toque de azeite.
      Sabor e simplicidade!"
          image={pizza}
        ></ProdutoCategoria>
      </div>
    </div>
  )
}

export default Categories
