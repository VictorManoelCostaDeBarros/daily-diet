import { TouchableOpacityProps } from "react-native";
import { Container, PercentTypeStyleProps, PercentText, PercentDescription, Icon } from "./styles";
import { useNavigation } from "@react-navigation/native";

type Props = TouchableOpacityProps & {
  type: PercentTypeStyleProps
  percent: number
}

export function Percent({ type, percent, ...rest }: Props) {

  const navigation = useNavigation()

  function handleNavigationStatistics() {
    navigation.navigate('statistics', { amountMeals: 109, healthyMeals: 99, unhealthyMeals: 10, sequenceFollowDiet: 22  })
  }

  return (
    <Container type={type} {...rest} onPress={handleNavigationStatistics}>
      <Icon 
        name="arrow-up-right"
        type={type}
      />
      <PercentText>{percent.toFixed(2).replace('.', ',')}%</PercentText>
      <PercentDescription>das refeições dentro da dieta</PercentDescription>
    </Container>
  )
}