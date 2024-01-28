import { useNavigation, useRoute } from "@react-navigation/native";
import { ButtonGoBack, FullCard, CardTitle, Container, Content, Header, HeaderContent, Icon, PercentDescription, PercentText, Title, HalfCardContainer, HalfCard } from "./styles";
import { useMemo } from "react";

type RouteParams = {
  sequenceFollowDiet: number;
  amountMeals: number;
  healthyMeals: number;
  unhealthyMeals: number;
}

export function Statistics() {

  const navigation = useNavigation()
  const route = useRoute()
  const { amountMeals, healthyMeals, sequenceFollowDiet, unhealthyMeals } = route.params as RouteParams

  function handleGoBack() {
    navigation.goBack()
  }

  const percent = useMemo(() => { return healthyMeals / amountMeals * 100 }, [amountMeals, healthyMeals]) 

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
          <CardTitle>{sequenceFollowDiet}</CardTitle>
          <PercentDescription>melhor sequência de pratos dentro da dieta</PercentDescription>
        </FullCard>

        <FullCard>
          <CardTitle>{amountMeals}</CardTitle>
          <PercentDescription>refeições registradas</PercentDescription>
        </FullCard>

        <HalfCardContainer>
          <HalfCard type="success">
            <CardTitle>{healthyMeals}</CardTitle>
            <PercentDescription>refeições dentro da dieta</PercentDescription>
          </HalfCard>

          <HalfCard type="fail">
            <CardTitle>{unhealthyMeals}</CardTitle>
            <PercentDescription>refeições fora da dieta</PercentDescription>
          </HalfCard>
        </HalfCardContainer>
      </Content>
    </Container>
  )
}