import { Alert, FlatList, Text } from "react-native";
import { useCallback, useMemo, useState } from "react";
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

  const [mealsOnDiet, mealsOutDiet] = useMemo(() => {
    return meals.reduce((prev, cur) => {
      cur.meals.forEach(meal => {
        if (meal.onDiet) {
          prev[0] += 1;
        } else {
          prev[1] += 1;
        }
      });
  
      return prev; // Importante retornar o acumulador atualizado a cada iteração
    }, [0, 0]);
  }, [meals]);

  const totalMeals = useMemo(() => {
    return meals.reduce((prev, cur) => {
      return prev += cur.meals.length
    }, 0)
  }, [meals])

  const sequenceFollowDiet = useMemo(() => {
    return meals.reduce((prev, cur) => {
      let contadorAtual = 0;
      
      cur.meals.forEach(meal => {
        if (meal.onDiet) {
          contadorAtual += 1;
        } else {
          contadorAtual = 0; 
        }
  
        if (contadorAtual > prev) {
          prev = contadorAtual;
        }
      });
  
      return prev;
    }, 0);
  }, [meals]);

  function handleRegisterMeal() {
    navigation.navigate('register', {})
  }

  function handleNavigationStatistics() {
    navigation.navigate('statistics', { amountMeals: totalMeals, healthyMeals: mealsOnDiet, unhealthyMeals: mealsOutDiet, sequenceFollowDiet: sequenceFollowDiet  })
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
        type={mealsOnDiet > mealsOutDiet ? "PRIMARY" : "SECONDARY"}
        percent={mealsOnDiet / totalMeals * 100}
        onNavigationStatistics={handleNavigationStatistics}
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