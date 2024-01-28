import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from "@storage/storageConfig";

import { MealStorageDTO } from "./mealStorageDTO";

export async function mealDelete(id: string) {
  try {
    const storage = await AsyncStorage.getItem(MEALS_COLLECTION)

    const meals: MealStorageDTO[] = storage ? JSON.parse(storage) : []

    await AsyncStorage.setItem(`${MEALS_COLLECTION}`, JSON.stringify(meals.filter(meal => meal.id !== id)))

  } catch (error) {
    throw error
  }
}