import { useParams } from 'react-router-dom'
import Banner from '../../components/BannerCategorie'
import HeaderCategorie from '../../components/HeaderCategorie'
import ProdutoCategoria from '../../components/ProdutosCategorie'

import { useEffect, useState } from 'react'
import { Restaurantes } from '../../components/ProdutosLista'

const Categories = () => {
  const { id } = useParams()
  const [restaurantes, setRestaurante] = useState<Restaurantes[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`).then(
      (res) => res.json().then((res) => setRestaurante(res))
    )
  }, [id])

  console.log(restaurantes)

  return (
    <div>
      <HeaderCategorie></HeaderCategorie>
      <Banner></Banner>
      <div className="container grid">
        {restaurantes.map((restaurante) => (
          <ProdutoCategoria
            key={restaurante.cardapio.id}
            title={restaurante.cardapio.nome}
            description={restaurante.cardapio.descricao}
            image={restaurante.cardapio.foto}
          ></ProdutoCategoria>
        ))}
      </div>
    </div>
  )
}

export default Categories
