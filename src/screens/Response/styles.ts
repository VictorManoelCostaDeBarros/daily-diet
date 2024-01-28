import styled, { css } from "styled-components/native";

type TitleProps = {
  type: 'success' | 'failure'
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Title = styled.Text<TitleProps>`
  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE['1XL']}px;
    color: ${ type === 'success' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
  text-align: center;

`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
  text-align: center;

`;

export const SubTitleBold = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
  text-align: center;
`;

export const Image = styled.Image`
  width: 224px;
  height: 288px;
  flex-shrink: 0;

  margin-top: 40px;
`;

export const Footer = styled.View`
  width: 200px;
  margin-top: 32px;
`;