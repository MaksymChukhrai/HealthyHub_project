import Icon from '../../common/Icon';
import { theme } from '../../../styles/index';

import {
  InfoTitle,
  DailyInfoCard,
  Title,
  InfoCardWrapper,
  InfoAmount,
  Span,
  InfoWrapper,
  ItemGoal,
} from './DailyGoal.styled';
import { useSelector } from 'react-redux';
import {
  selectdailyGoalCalories,
  selectdailyGoalWater,
} from '../../../Redux/userAuth/selector';

export const DailyGoal = () => {
  const calories = useSelector(selectdailyGoalCalories);
  const water = useSelector(selectdailyGoalWater);

  return (
    <div>
      <Title>Daily goal</Title>
      <DailyInfoCard>
        <InfoCardWrapper>
          <ItemGoal>
            <Icon
              name={'icon-bubble'}
              width={'80px'}
              height={'80px'}
              fill={`${theme.color.primaryLiteGreen}`}
            />
            <InfoWrapper>
              <InfoTitle>Calories</InfoTitle>
              <InfoAmount>{calories}</InfoAmount>
            </InfoWrapper>
          </ItemGoal>
          <ItemGoal>
            <Icon
              name={'icon-milk'}
              width={'80px'}
              height={'80px'}
              fill={`${theme.color.primaryViolet}`}
            />
            <InfoWrapper>
              <InfoTitle>Water</InfoTitle>
              <InfoAmount>
                {water}
                <Span>ml</Span>
              </InfoAmount>
            </InfoWrapper>
          </ItemGoal>
        </InfoCardWrapper>
      </DailyInfoCard>
    </div>
  );
};
