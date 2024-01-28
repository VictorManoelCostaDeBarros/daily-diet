import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from "@storage/storageConfig";
import { MealStorageDTO } from "./mealStorageDTO";
import uuid from 'react-native-uuid';

import { mealGetAll } from "./mealGetAll";

export async function addOrUpdateMeal(meal: Omit<MealStorageDTO, 'id'> & { id?: string }) {
  try {
    const storedMeals = await mealGetAll()
    let storage = ''

    if (meal.id && storedMeals.find(item => item.id === meal.id)) {
      storage = JSON.stringify([...storedMeals.filter(item => item.id !== meal.id), meal])
    } else {
      storage = JSON.stringify([...storedMeals, {
        ...meal,
        id: uuid.v4().toString()
      }])
    }

    await AsyncStorage.setItem(`${MEALS_COLLECTION}`, storage)
  } catch (error) {
    throw error
  }
}