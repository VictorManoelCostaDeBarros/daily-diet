import { useNavigation } from "@react-navigation/native";
import { Container, Divider, Hour, Meal, MealName, Status, Title } from "./styles";
import { MealStorageDTO } from "@storage/meal/mealStorageDTO";
import moment from "moment";

type Props = {
  meals: MealStorageDTO[]
}

export function DailyMeals({ meals }: Props) {
  const navigation = useNavigation()

  function handleViewMeal(meal: MealStorageDTO) {
    navigation.navigate('meal', {
      id: meal.id,
      name: meal.name,
      description: meal.description,
      date: meal.date,
      hour: meal.hour,
      onDiet: meal.onDiet
    })
  }

  return (
    <Container>
      <Title>{moment(meals[0].date).format('DD.MM.YY')}</Title>

      {
        meals.map(meal => {
          return (
            <Meal key={meal.id} onPress={() => handleViewMeal(meal)}>
              <Hour>{moment(meal.hour).format('HH:mm')}</Hour>
              <Divider />
              <MealName>{meal.name}</MealName>
              <Status status={meal.onDiet ? "healthy" : "unhealthy"} />
            </Meal>
          )
        })
      }


    </Container>
  )
}