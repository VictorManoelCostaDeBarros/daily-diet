import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons'

export type PercentTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = {
  type: PercentTypeStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  padding: 20px 16px;
  align-items: center;
  justify-content: center;
  gap: 2px;
  border-radius: 8px;

  margin-top: 32px;

  background-color: ${({ theme, type }) => type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};

  position: relative;
`;

export const PercentText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE["2XL"]}px;
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const PercentDescription = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_600};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`;

export const Icon = styled(Feather).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
}))`
  position: absolute;
  top: 8px;
  right: 8px;
`;