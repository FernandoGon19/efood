import { useParams } from 'react-router-dom'
import Banner from '../../components/BannerCategorie'
import HeaderCategorie from '../../components/HeaderCategorie'
import ProdutoCategoria from '../../components/ProdutosCategorie'

import { useEffect, useState } from 'react'
import { Restaurantes } from '../../components/ProdutosLista'

const Categories = () => {
  const { id } = useParams()
  const [restaurantes, setRestaurante] = useState<Restaurantes>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`).then(
      (res) => res.json().then((res) => setRestaurante(res))
    )
  }, [id])

  if (!restaurantes) return <p>oi</p>

  console.log(restaurantes)

  return (
    <div>
      <HeaderCategorie></HeaderCategorie>
      <Banner
        title={restaurantes.titulo}
        image={restaurantes.capa}
        tipo={restaurantes.tipo}
      ></Banner>
      <div className="container grid">
        {restaurantes.cardapio.map((restaurante) => (
          <ProdutoCategoria
            key={restaurante.id}
            title={restaurante.nome}
            description={restaurante.descricao}
            image={restaurante.foto}
            porcao={restaurante.porcao}
            preco={restaurante.preco}
          ></ProdutoCategoria>
        ))}
      </div>
    </div>
  )
}

export default Categories
