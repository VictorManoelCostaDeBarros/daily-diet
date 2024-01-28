import { Alert, FlatList, Text } from "react-native";
import { useCallback, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { Header } from "@components/Header";
import { Percent } from "@components/Percent";
import { Button } from "@components/Button";
import { DailyMeals } from "@components/DailyMeals";

import { Container, AddMeal, Label } from "./styles";
import { MealStorageDTO } from "@storage/meal/mealStorageDTO";
import { mealGetAll } from "@storage/meal/mealGetAll";
import moment from "moment";

type MealsType = {
  date: string;
  meals: MealStorageDTO[]
}

export function Home() {
  const [meals, setMeals] = useState<MealsType[]>([])
  const navigation = useNavigation()

  function handleRegisterMeal() {
    navigation.navigate('register', {})
  }

  async function getMeals() {
    try {
      const mealsResponse = await mealGetAll()

      setMeals(mealsResponse.reduce<MealsType[]>((prev, cur) => {
        const currentDate = moment(cur.date).format('YYYY-MM-DD')

        if (prev.find(item => item.date === currentDate)) {
          prev.find(item => item.date === currentDate)?.meals.push(cur)
        } else {
          prev.push({
            date: currentDate,
            meals: [cur]
          })
        }

        return prev
      }, []))

    } catch (error) {
      console.log(error)
      Alert.alert('Refeições', 'Não foi possível carregar as refeições.')
    }
  }

  useFocusEffect(
    useCallback(() => {
      getMeals()
    }, [])
  )

  return (
    <Container>
      <Header />

      <Percent 
        type="SECONDARY"
        percent={50.04}
      />

      <AddMeal>
        <Label>Refeições</Label>
        <Button 
          icon="add"
          title="Nova refeição"
          onPress={handleRegisterMeal}
        />
      </AddMeal>

      <FlatList 
        data={meals}
        keyExtractor={(item) => item.date}
        renderItem={({ item }) => (
          <DailyMeals
            meals={item.meals}
          />
        )}
        contentContainerStyle={{
          paddingBottom: 70
        }}
        showsVerticalScrollIndicator={false}
      />
 



    </Container>
  )
}