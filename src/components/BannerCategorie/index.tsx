import { DivBanner, DivEfeito, TextoBanner, TituloBanner } from './styles'

type Props = {
  title: string
  image: string
  tipo: string
}

const Banner = ({ title, image, tipo }: Props) => (
  <DivBanner style={{ backgroundImage: `url(${image})` }}>
    <div className="container">
      <TextoBanner>{tipo}</TextoBanner>
      <TituloBanner>{title}</TituloBanner>
      <DivEfeito />
    </div>
  </DivBanner>
)

export default Banner
