import styled from 'styled-components';
import { theme } from '../../../styles/index';

export const Title = styled.h2`
  color: ${theme.color.primaryWhite};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  margin-bottom: 6px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
  }
`;

export const DailyInfoCard = styled.div`
  padding: 16px 12px;
  width: 300px;
  border-radius: 12px;
  background-color: ${theme.color.primaryBlack2};

  color: ${theme.color.primaryWhite};
  margin-bottom: 20px;

  @media screen and (min-width: 834px) {
    width: 380px;
    padding-bottom: 24px;
    padding-top: 24px;
    padding-left: 40px;
  }

  @media screen and (min-width: 1440px) {
    width: 328px;
    padding-bottom: 24px;
    padding-top: 24px;
    padding-left: 40px;
  }
`;

export const InfoCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 20px;

  @media screen and (min-width: 834px) {
    row-gap: 32px;
  }
`;

export const ItemGoal = styled.div`
  display: flex;
  gap: 20px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const InfoTitle = styled.p`
  color: ${theme.color.primaryGrey};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  padding-bottom: 4px;
`;

export const InfoAmount = styled.p`
  display: flex;
  align-items: center;
  color: ${theme.color.primaryWhite};
  font-size: 34px;
  font-weight: 600;
  line-height: 1.12;
`;

export const Span = styled.span`
  color: ${theme.color.primaryGrey};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
  margin-left: 4px;
`;
