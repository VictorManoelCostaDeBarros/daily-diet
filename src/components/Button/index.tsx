import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'
import {  Container, Icon, Title } from "./styles";

type Props = TouchableOpacityProps & {
  icon?: keyof typeof MaterialIcons.glyphMap
  title: string
  ghost?: boolean;
}

export function Button({ icon, title, ghost = false, ...rest }: Props) {
  return (
    <Container {...rest} ghost={ghost}>
      {
        icon ? 
          <Icon 
            name={icon}
            ghost={ghost}
          /> : null
      }

      <Title ghost={ghost}>{title}</Title>
    </Container>
  )
}