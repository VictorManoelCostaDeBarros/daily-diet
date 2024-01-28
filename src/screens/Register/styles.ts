import { getStatusBarHeight } from "react-native-status-bar-height";
import styled, { css } from "styled-components/native";
import { Feather } from '@expo/vector-icons'
import { ScrollView } from "react-native";


export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

const statusBarHeight = getStatusBarHeight();
const headerMarginTop = statusBarHeight + 24;

export const Header = styled.View`
  padding: 24px 24px 48px;
  padding-top: ${headerMarginTop}px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
`;

export const HeaderTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const Content = styled(ScrollView)`
  margin-top: -20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};

  flex: 1;

  padding: 40px 24px;
`;

export const FieldContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

type FieldProps = {
  size?: number
}

export const Field = styled.View<FieldProps>`
  width: ${({ size = 100 }) => size}%;
  margin-bottom: 24px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};

  margin-bottom: 4px;
`;

export const Input = styled.TextInput`
  width: 100%;
  padding: 14px;

  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_400};
  border-radius: 6px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`;

export const InputDateTime = styled.TouchableOpacity`
  width: 100%;
  padding: 14px;

  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_400};
  border-radius: 6px;
`;

export const InputDateTimeText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`;

export const TextArea = styled.TextInput`
  width: 100%;
  padding: 14px;
  height: 138px;

  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_400};
  border-radius: 6px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  gap: 8px;
`;

export const ButtonForm = styled.TouchableOpacity<Partial<ButtonStatusProps>>`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px;
  border-radius: 6px;
  background-color: ${({ theme, type }) => {
    if (type === 'success') {
      return theme.COLORS.GREEN_LIGHT
    } else if (type === 'fail') {
      return theme.COLORS.RED_LIGHT
    } else {
      return theme.COLORS.GRAY_200
    }
  }};
    ${({ theme, type }) => css`
      border-width: ${type ? 1 : 0}px;
      border-color: ${type === 'success' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  `};
`;

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

type ButtonStatusProps = {
  type: 'success' | 'fail'
}

export const ButtonStatus = styled.View<ButtonStatusProps>`
  width: 8px;
  height: 8px;
  border-radius: 4px;

  background-color: ${({ theme, type }) => type === 'success' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK} ;
`;  

export const Footer = styled.View`
  padding: 40px 24px;
`;

export const Icon = styled(Feather).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_700,
}))``;
