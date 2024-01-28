import { getStatusBarHeight } from "react-native-status-bar-height";
import styled, { css } from "styled-components/native";
import { Feather } from '@expo/vector-icons'

type Props = {
  type: 'healthy' | 'unhealthy'
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

const statusBarHeight = getStatusBarHeight();
const headerMarginTop = statusBarHeight + 24;

export const Header = styled.View<Props>`
  padding: 24px 24px 48px;
  padding-top: ${headerMarginTop}px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme, type }) => type === 'healthy' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const HeaderTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const Content = styled.View`
  margin-top: -20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};

  flex: 1;

  padding: 40px 24px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};

  margin-bottom: 8px;
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_600};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};

  margin-bottom: 24px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};

  margin-bottom: 8px;
`;

export const DateTime = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_600};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};

  margin-bottom: 24px;
`;

export const Tag = styled.View`
  padding: 8px 16px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_200};

  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;

  border-radius: 9999px;
  align-self: flex-start;
`;

export const TagText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`;

export const TagStatus = styled.View<Props>`
  width: 14px;
  height: 14px;

  border-radius: 7px;

  background-color: ${({ theme, type }) => type === 'healthy' ?  theme.COLORS.GREEN : theme.COLORS.RED};
`;

export const Footer = styled.View`
  padding: 40px 24px;
  gap: 9px;
`;

export const Icon = styled(Feather).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_700,
}))``;
