import { MealStorageDTO } from "@storage/meal/mealStorageDTO";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: { 
        sequenceFollowDiet: number;
        amountMeals: number;
        healthyMeals: number;
        unhealthyMeals: number;
      }
      register: Partial<MealStorageDTO>
      response: {
        type: 'success' | 'failure'
      }
      meal: {
        id: string
        name: string
        description: string
        date: Date
        hour: Date
        onDiet: boolean
      }
    }
  }
}