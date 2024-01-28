import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type MealType = 'healthy' | 'unhealthy'

type StatusProps = {
  status: MealType
}

export const Container = styled.View`
  margin-top: 32px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};

  margin-bottom: 8px;
`;

export const Meal = styled(TouchableOpacity)`
  padding: 14px 16px;
  flex-direction: row;
  align-items: center;
  gap: 12px;

  margin-bottom: 8px;

  border-radius: 6px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_300};
`;

export const Hour = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const Divider = styled.View`
  width: 1px;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const MealName = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_600};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};

  flex: 1;
`;

export const Status = styled.View<StatusProps>`
  width: 14px;
  height: 14px;

  border-radius: 7px;

  background-color: ${({ theme, status }) => status === 'healthy' ?  theme.COLORS.GREEN : theme.COLORS.RED};
`;