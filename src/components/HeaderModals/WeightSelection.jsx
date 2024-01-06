import ReactDOM from 'react-dom';
import icon from './../../assets/sprite.svg';
import {
  Modal,
  ModalWrapper,
  CloseBtn,
  Title,
  WeightDescription,
  DateWrapper,
  DateText,
  Date,
  FormWeight,
  Input,
  ConfirmBtn,
  CancelBtn,
  ModalContainer,
} from './weightSelection.styled';
import { useDispatch } from 'react-redux';
import { date } from './../../utils/dateToday';

import { Formik } from 'formik';
import { useSelector } from 'react-redux';
import { updateWeight } from '../../Redux/userAuth/operations';
import { selectCurrentWeight } from '../../Redux/userAuth/selector';

export const WeightSelectionModal = ({ onClose }) => {
  const userCurrentWeight = useSelector(selectCurrentWeight);
  const dispatch = useDispatch();

  return ReactDOM.createPortal(
    <Modal
      $height={document.body.clientHeight}
      onClick={(e) => {
        e.stopPropagation();
        if (e.currentTarget == e.target) {
          onClose();
        }
      }}
    >
      <ModalContainer>
        <ModalWrapper>
          <CloseBtn type="button" onClick={onClose}>
            <svg>
              <use href={icon + '#icon-close-circle'}></use>
            </svg>
          </CloseBtn>

          <Title>Enter your current weight</Title>
          <WeightDescription>
            You can record your weight once a day
          </WeightDescription>
          <DateWrapper>
            <DateText>Today</DateText>
            <Date>{date}</Date>
          </DateWrapper>

          <Formik
            initialValues={{ currentWeight: userCurrentWeight }}
            onSubmit={(values, { resetForm }) => {
              const data = {
                date,
                currentWeight: Number(values.currentWeight),
              };

              dispatch(updateWeight(data));
              resetForm();
              onClose();
            }}
          >
            <FormWeight>
              <Input name="currentWeight" placeholder="Enter your weight" />
              <ConfirmBtn type="submit">Confirm</ConfirmBtn>
            </FormWeight>
          </Formik>
        </ModalWrapper>

        <CancelBtn type="button" onClick={onClose}>
          Cancel
        </CancelBtn>
      </ModalContainer>
    </Modal>,
    document.getElementById('modal-root')
  );
};
