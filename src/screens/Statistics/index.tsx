import { useNavigation } from "@react-navigation/native";
import { ButtonGoBack, FullCard, CardTitle, Container, Content, Header, HeaderContent, Icon, PercentDescription, PercentText, Title, HalfCardContainer, HalfCard } from "./styles";

export function Statistics() {

  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  const percent = 90.86

  return (
    <Container >
      <Header type="healthy">
        <ButtonGoBack onPress={handleGoBack}>
          <Icon name="arrow-left" type="healthy" />

          <HeaderContent>
            <PercentText>{percent.toFixed(2).replace('.', ',')}%</PercentText>
            <PercentDescription>das refeições dentro da dieta</PercentDescription>
          </HeaderContent>
        </ButtonGoBack>
      </Header>

      <Content>
        <Title>Estatísticas gerais</Title>
        
        <FullCard>
          <CardTitle>4</CardTitle>
          <PercentDescription>melhor sequência de pratos dentro da dieta</PercentDescription>
        </FullCard>

        <FullCard>
          <CardTitle>109</CardTitle>
          <PercentDescription>refeições registradas</PercentDescription>
        </FullCard>

        <HalfCardContainer>
          <HalfCard type="success">
            <CardTitle>32</CardTitle>
            <PercentDescription>refeições dentro da dieta</PercentDescription>
          </HalfCard>

          <HalfCard type="fail">
            <CardTitle>32</CardTitle>
            <PercentDescription>refeições fora da dieta</PercentDescription>
          </HalfCard>
        </HalfCardContainer>
      </Content>
    </Container>
  )
}