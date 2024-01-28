import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons'

type ButtonProps = {
  ghost: boolean;
}

export const Container = styled(TouchableOpacity)<ButtonProps>`
  width: 100%;
  padding: 16px 24px;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 12px;
  border-radius: 6px;

  background-color: ${({ theme, ghost }) => ghost ? theme.COLORS.GRAY_100 : theme.COLORS.GRAY_600};
  border-width: ${({ ghost }) => ghost ? 1 : 0}px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Title = styled.Text<ButtonProps>`
  ${({ theme, ghost }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${ghost ? theme.COLORS.GRAY_700 : theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const Icon = styled(MaterialIcons).attrs<ButtonProps>(({ theme, ghost }) => ({
  size: 18,
  color: ghost ? theme.COLORS.GRAY_700 : theme.COLORS.WHITE
}))``;

