import styled from 'styled-components';
import { theme } from '../../styles/index';
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media screen and (min-width: 834px) {
    align-items: center;
  }
  @media screen and (min-width: 1440px) {
    align-items: flex-start;
    margin: auto;
  }
`;
export const MainText = styled.h1`
  padding-top: 24px;
  padding-bottom: 16px;
  text-align: center;
  color: ${theme.color.primaryWhite};
  font-family: Poppins;
  font-size: 24px;
  text-align: left;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  @media screen and (min-width: 834px) {
    padding-top: 80px;
    text-align: center;
    font-size: 30px;
    line-height: 36px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 0px;
    text-align: left;
  }
`;
export const Subtitle = styled.h3`
  color: ${theme.color.primaryGrey};
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  @media screen and (min-width: 834px) {
    text-align: center;
  }
  @media screen and (min-width: 1440px) {
    text-align: left;
  }
`;
export const SubmitButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding-top: 24px;
  padding-bottom: 40px;
  @media screen and (min-width: 834px) {
    align-items: center;
    justify-content: center;
    display: flex;
  }
`;

export const SignInButton = styled.button`
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  color: ${theme.color.primaryBlack2};
  text-align: center;
  padding: 8px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background: ${theme.color.primaryGreenLite};
  border: 1px solid transparent;
  // transition: all 0.3s ease-in-out;
  transition: ${theme.transition.main};
  width: 142px;
  &:hover {
    cursor: pointer;
    border: 1px solid transparent;
    animation: 1s ease-in-out infinite;
    background-color: transparent;
    color: ${theme.color.primaryWhite};
    border: 1px solid ${theme.color.primaryGreenLite};
  }
  &:focus {
    background-color: ${theme.color.primaryGreenLite};
    border: 1px solid transparent;
    color: ${theme.color.primaryBlack};
  }
  @media screen and (min-width: 834px) {
    width: 192px;
  }
`;
export const SignUpButton = styled.button`
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  color: ${theme.color.primaryWhite};
  text-align: center;
  padding: 8px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background: ${theme.color.primaryGreenLite};
  width: 142px;
  background-color: transparent;
  transition: ${theme.transition.main};
  // transition: all 0.3s ease-in-out;
  border: 1px solid transparent;
  &:hover {
    cursor: pointer;
    border: 1px solid ${theme.color.primaryGreenLite};
    animation: 1s ease-in-out infinite;
  }
  &:focus {
    background-color: ${theme.color.primaryGreenLite};
    border: 1px solid ${theme.color.primaryBlack2};
    color: ${theme.color.primaryBlack2};
  }
  @media screen and (min-width: 834px) {
    width: 192px;
  }
`;
export const BtnWrapper = styled.div``;
export const BenefitsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  @media screen and (min-width: 834px) {
    justify-content: space-between;
    width: 444px;
    flex-direction: row;
    align-items: baseline;
    flex-wrap: wrap;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;
export const DescriptionItem = styled.li`
  color: ${theme.color.primaryWhite};
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  & span {
    margin-right: 10px;
  }
`;

export const Dot = styled.span``;
