import { Alert, TouchableOpacity, View } from "react-native";
import { Container, Content, DateTime, Description, Footer, Header, HeaderTitle, Icon, Label, Tag, TagStatus, TagText, Title } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import moment from "moment";
import { Button } from "@components/Button";
import { mealDelete } from "@storage/meal/mealDelete";

type RouteParams = {
  id: string
  name: string
  description: string
  date: Date
  hour: Date
  onDiet: boolean
}

export function Meal() {

  const navigation = useNavigation()
  const route = useRoute()

  const { id, name, description, date, hour, onDiet } = route.params as RouteParams

  function handleGoBack() {
    navigation.goBack()
  }

  function onEditMeal() {
    navigation.navigate('register', { id, name, description, date, hour, onDiet })
  }

  async function handleDeleteMeal() {
    try {
      await mealDelete(id)

      navigation.navigate('home')
    } catch (error) {
      Alert.alert("Excluir Refeição", "Não foi possível excluir uma nova refeição.")
      console.log(error)
    }
  }


  return (
    <Container>
      <Header type={onDiet ? 'healthy' : 'unhealthy'}>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon name="arrow-left" />
        </TouchableOpacity>

        <HeaderTitle>Refeição</HeaderTitle>

        <View style={{ width: 24 }} />
      </Header>

      <Content>
        <Title>{name}</Title>
        <Description>{description}</Description>

        <Label>Data e hora</Label>
        <DateTime>{moment(date).format('DD/MM/YYYY')} às {moment(hour).format('HH:mm')}</DateTime>

        <Tag>
          <TagStatus type={onDiet ? 'healthy' : 'unhealthy'} />
          <TagText>{onDiet ? 'dentro da dieta' : 'fora da dieta'}</TagText>
        </Tag>
      </Content>

      <Footer>
        <Button 
          title="Editar refeição"
          icon="edit"
          onPress={onEditMeal}
        />
        <Button 
          title="Excluir refeição"
          icon="delete"
          ghost
          onPress={handleDeleteMeal}
        />
      </Footer>
    </Container>
  )
}