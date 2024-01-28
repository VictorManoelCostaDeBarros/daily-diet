import { useNavigation, useRoute } from "@react-navigation/native";
import { Container, Footer, Image, SubTitle, SubTitleBold, Title } from "./styles";

import SuccessImage from '@assets/success.png'
import FailureImage from '@assets/failure.png'
import { Button } from "@components/Button";

type RouteParams = {
  type: 'success' | 'failure'
}

export function Response() {

  const navigation = useNavigation()
  const route = useRoute()
  const { type } = route.params as RouteParams

  function handleGoInitialPage() {
    navigation.navigate('home')
  }

  return (
    <Container>
      <Title type={type}>{type === 'success' ? 'Continue assim!' : 'Que pena!'}</Title>
      {
        type === 'success' ? (
          <SubTitle>Você continua <SubTitleBold>dentro da dieta</SubTitleBold>. Muito bem!</SubTitle>
        ) : (
          <SubTitle>Você <SubTitleBold>saiu da dieta</SubTitleBold> dessa vez, mas continue se esforçando e não desista!</SubTitle>
        )
      }

      <Image source={type === 'success' ? SuccessImage : FailureImage} />

      <Footer>
        <Button 
          title="Ir para a página inicial"
          onPress={handleGoInitialPage}
        />
      </Footer>
    </Container>
  )
}