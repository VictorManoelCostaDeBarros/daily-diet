import { MealType } from "@components/DailyMeals/styles";
import styled, { css } from "styled-components/native";
import { Feather } from '@expo/vector-icons'
import { getStatusBarHeight } from 'react-native-status-bar-height';

type HeaderProps = {
  type: MealType
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

const statusBarHeight = getStatusBarHeight();
const headerMarginTop = statusBarHeight + 24;

export const Header = styled.View<HeaderProps>`
  padding: 24px;
  padding-top: ${headerMarginTop}px;

  background-color: ${({ theme, type }) => type === 'healthy' ?  theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const ButtonGoBack = styled.TouchableOpacity``;

export const HeaderContent = styled.View`
  align-items: center;
  justify-content: center;

  margin-bottom: 34px;
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

export const Content = styled.View`
  margin-top: -20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};

  align-items: center;

  flex: 1;

  padding: 32px 24px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};

  margin-bottom: 23px;
`;

export const FullCard = styled.View`
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

  border-radius: 8px;
  padding: 16px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_200};

  margin: 6px 0;
`;

export const CardTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE["1XL"]}px;
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

type HalfCardProps = {
  type: 'success' | 'fail'
}

export const HalfCardContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const HalfCard = styled.View<HalfCardProps>`
  flex: 1;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  justify-content: center;
  gap: 8px;

  border-radius: 8px;
  padding: 16px;

  background-color: ${({ theme, type }) => type === 'success' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};

  margin: 6px 0;
`;


export const Icon = styled(Feather).attrs<HeaderProps>(({ theme, type }) => ({
  size: 24,
  color: type === 'healthy' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))``;

