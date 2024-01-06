import { useMediaQuery } from 'react-responsive';
import {
  UserMode,
  UserSet,
  Pictogram,
  SelectGoals,
  GoalPic,
  GoalSelection,
  Goal,
  LoseFat,
  GoalBtn,
  SettingBtn,
  SelectWeight,
  WeightPic,
  WeightSelection,
  Weight,
  SetBtn,
  NumKg,
  Kg,
  WeightBtn,
  PictogramBlock,
  PictogramOpen,
} from './../header.styled.js';
import icon from './../../../../assets/sprite.svg';
import pict from './../../../../assets/images/goals/Lose fat image men.png';
import png from './../../../../assets/images/goals/Waight image.png';
import { TargetSelection } from '../../../HeaderModals/ModalTargetSelection/TargetSelection.jsx';
import { WeightSelectionModal } from '../../../HeaderModals/WeightSelection.jsx';
import { ModalMenu } from './../../../HeaderModals/menuModal/menuModal.jsx';
import { useSelector } from 'react-redux';
import { selectUser } from './../../../../Redux/userAuth/selector.js';

export const UserSettings = ({
  isModalOpenGoal,
  isModalOpenWeight,
  isModalOpenMenu,
  handleOpenModal,
  handleOpenModalWeight,
  handleOpenModalMenu,
}) => {
  const isMobile = useMediaQuery({ query: '(max-width:833px)' });

  const user = useSelector(selectUser);

  const goal = user.goal;

  return (
    <UserMode>
      {isMobile ? (
        <>
          <PictogramBlock onClick={handleOpenModalMenu}>
            {isModalOpenMenu ? (
              <Pictogram>
                <svg>
                  <use href={icon + '#icon-menu'}></use>
                </svg>
              </Pictogram>
            ) : (
              <PictogramOpen>
                <svg>
                  <use href={icon + '#icon-menu'}></use>
                </svg>
              </PictogramOpen>
            )}
          </PictogramBlock>

          {isModalOpenMenu && <ModalMenu onClose={handleOpenModalMenu} />}
        </>
      ) : (
        <UserSet>
          <SelectGoals>
            <GoalPic>
              <img src={pict} alt="running man" />
            </GoalPic>

            <GoalSelection>
              <Goal>Goal</Goal>

              <SettingBtn onClick={handleOpenModal}>
                <LoseFat>{goal || 'No goal'}</LoseFat>

                <GoalBtn type="button">
                  <svg>
                    <use href={icon + '#icon-arrow-down'}></use>
                  </svg>
                </GoalBtn>
              </SettingBtn>
            </GoalSelection>
          </SelectGoals>

          {isModalOpenGoal && <TargetSelection onClose={handleOpenModal} />}

          <SelectWeight>
            <WeightPic>
              <img src={png} alt="weight" />
            </WeightPic>

            <WeightSelection>
              <Weight>Weight</Weight>
              <SetBtn onClick={handleOpenModalWeight}>
                <NumKg>
                  {user.currentWeight || 0}
                  <Kg>kg</Kg>
                </NumKg>
                <WeightBtn type="button">
                  <svg>
                    <use href={icon + '#icon-edit-weight'}></use>
                  </svg>
                </WeightBtn>
              </SetBtn>
            </WeightSelection>
          </SelectWeight>

          {isModalOpenWeight && (
            <WeightSelectionModal onClose={handleOpenModalWeight} />
          )}
        </UserSet>
      )}
    </UserMode>
  );
};
