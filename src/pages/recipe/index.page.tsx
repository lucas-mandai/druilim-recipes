import {
  DefaultContainer,
  Ingredients,
  Preparation,
  RecipeContainer,
} from './styles'
import Image from 'next/image'
import arrozBrocolis from '../../assets/recipes/arrozBrocolis.jpeg'
import { GiMoneyStack, GiNetworkBars, GiSandsOfTime } from 'react-icons/gi'

export default function Recipe() {
  return (
    <DefaultContainer>
      <RecipeContainer>
        <h1>Arroz com Brocolis</h1>

        <div className="imageContainer">
          <Image src={arrozBrocolis} alt={''}></Image>
        </div>

        <div className="recipeInfo">
          <div className="recipeInfoItem">
            <GiSandsOfTime size={20} />
            <strong>Tempo</strong>
            <span>40min</span>
          </div>
          <div className="recipeInfoItem">
            <GiNetworkBars size={20} />
            <strong>Dificuldade</strong>
            <span>Fácil</span>
          </div>
          <div className="recipeInfoItem">
            <GiMoneyStack size={20} />
            <strong>Custo</strong>
            <span>Médio</span>
          </div>
        </div>

        <Ingredients>
          <h2>Ingredientes</h2>
          <ul>
            <li>1xícara de arroz</li>
            <li>1 caldo knorr de legumes</li>
            <li>Cebola e sal a gosto</li>
            <li>1 maço de brócolis</li>
            <li>2 dentes de alho</li>
          </ul>
        </Ingredients>

        <Preparation>
          <h2>Modo de Preparo</h2>
          <ol>
            <li>
              Em uma panela, coloque o arroz, o alho e a cebola. Coloque um fio
              de óleo e o sal a gosto. Deixe de lado.
            </li>
            <li>
              Corte o brócolis separando-o em pequenas partes. O talo poderá ser
              usado. Coloque-o em uma panela separada e acrescente água até
              cobrir o brócolis.
            </li>
            <li>
              Coloque o knorr de legumes e 1 pitada de sal. Ferva até ficar al
              dente, ou ao seu gosto.
            </li>
            <li>
              Pegue a panela do arroz, coloque o brócolis pronto, com a água em
              cima do arroz. Mexa bastante, para que fique bem misturado.
            </li>
            <li>Coloque no fogo por 10 minutos, até que a água quase seque.</li>
            <li>
              Desligue o fogo e aguarde mais 10 minutos. O arroz ficará
              soltinho.A
            </li>
          </ol>
        </Preparation>
      </RecipeContainer>
    </DefaultContainer>
  )
}
