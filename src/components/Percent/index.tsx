import { TouchableOpacityProps } from "react-native";
import { Container, PercentTypeStyleProps, PercentText, PercentDescription, Icon } from "./styles";

type Props = TouchableOpacityProps & {
  type: PercentTypeStyleProps
  percent: number
  onNavigationStatistics: () => void
}

export function Percent({ type, percent, onNavigationStatistics, ...rest }: Props) {
  return (
    <Container type={type} {...rest} onPress={onNavigationStatistics}>
      <Icon 
        name="arrow-up-right"
        type={type}
      />
      <PercentText>{percent.toFixed(2).replace('.', ',')}%</PercentText>
      <PercentDescription>das refeições dentro da dieta</PercentDescription>
    </Container>
  )
}