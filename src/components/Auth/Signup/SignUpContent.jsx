import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Div,
  Input,
  MainText,
  Subtitle,
  Wrapper,
  Button,
  Subsection,
  Options,
  Main,
  Label,
  Attention,
  Span,
  Form,
  EyeIcon,
  Valid,
  Des,
} from './SignUpContent.styled';

export const SignUpContent = ({ setStep, formik }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [validation, setValidation] = useState('');

  const onClickBtnNext = () => {
    setValidation('validation');
    if (
      formik.values.name !== '' &&
      formik.values.email !== '' &&
      formik.values.password !== '' &&
      !formik.errors.name &&
      !formik.errors.email &&
      !formik.errors.password
    ) {
      setStep((prevState) => (prevState += 1));
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Div>
        <MainText>Sign up</MainText>
        <Subtitle>You need to register to use the service</Subtitle>
        <Form>
          <Wrapper>
            <Label
              className={
                formik.errors.name && formik.touched.name ? 'input-error' : ''
              }
            >
              <Input
                className={
                  validation === 'validation'
                    ? formik.errors.name
                      ? 'error'
                      : 'correct'
                    : ''
                }
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                name="name"
                placeholder="Name"
                required
              />
            </Label>
            {formik.errors.name && formik.touched.name && (
              <Attention>{formik.errors.name}</Attention>
            )}
            <Label
              className={
                formik.errors.email && formik.touched.email ? 'input-error' : ''
              }
            >
              <Input
                className={
                  validation === 'validation'
                    ? formik.errors.name
                      ? 'error'
                      : 'correct'
                    : ''
                }
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                name="email"
                placeholder="E-mail"
                required
              />
            </Label>
            {formik.errors.email && formik.touched.email && (
              <Attention>{formik.errors.email}</Attention>
            )}

            <Label
              className={
                formik.errors.password && formik.touched.password
                  ? 'input-error'
                  : formik.touched.password
                    ? 'input-success'
                    : ''
              }
            >
              <Input
                className={
                  validation === 'validation'
                    ? formik.errors.name
                      ? 'error'
                      : 'correct'
                    : ''
                }
                type={showPassword ? 'text' : 'password'}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                name="password"
                placeholder="Password"
                required
                autoComplete="false"
              />

              <Span onClick={togglePasswordVisibility}>
                {showPassword ? (
                  <EyeIcon
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M0.666504 7.99996C0.666504 7.99996 3.33317 2.66663 7.99984 2.66663C12.6665 2.66663 15.3332 7.99996 15.3332 7.99996C15.3332 7.99996 12.6665 13.3333 7.99984 13.3333C3.33317 13.3333 0.666504 7.99996 0.666504 7.99996Z"
                      stroke="white"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                      stroke="white"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </EyeIcon>
                ) : (
                  <EyeIcon
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_283_2250)">
                      <path
                        d="M11.9601 11.96C10.8205 12.8286 9.43282 13.3099 8.00008 13.3333C3.33342 13.3333 0.666748 7.99998 0.666748 7.99998C1.49601 6.45457 2.64617 5.10438 4.04008 4.03998M6.60008 2.82664C7.05897 2.71923 7.52879 2.66554 8.00008 2.66664C12.6667 2.66664 15.3334 7.99998 15.3334 7.99998C14.9287 8.75705 14.4461 9.4698 13.8934 10.1266M9.41342 9.41331C9.23032 9.60981 9.00952 9.76741 8.76418 9.87672C8.51885 9.98604 8.25402 10.0448 7.98548 10.0496C7.71693 10.0543 7.45019 10.0049 7.20116 9.9043C6.95212 9.80371 6.7259 9.65399 6.53598 9.46408C6.34606 9.27416 6.19634 9.04794 6.09575 8.7989C5.99517 8.54987 5.94577 8.28312 5.9505 8.01458C5.95524 7.74604 6.01402 7.48121 6.12333 7.23587C6.23264 6.99054 6.39025 6.76974 6.58675 6.58664"
                        stroke="white"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M0.666748 0.666626L15.3334 15.3333"
                        stroke="white"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_283_2250">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </EyeIcon>
                )}
              </Span>
              {formik.errors.password && formik.touched.password ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M0 8C0 3.58125 3.58125 0 8 0C12.4187 0 16 3.58125 16 8C16 12.4187 12.4187 16 8 16C3.58125 16 0 12.4187 0 8ZM5.46875 6.50313L6.94063 7.97188L5.46875 9.46875C5.17812 9.7625 5.17812 10.2375 5.46875 10.5031C5.7625 10.8219 6.2375 10.8219 6.50313 10.5031L7.97188 9.05937L9.46875 10.5031C9.7625 10.8219 10.2375 10.8219 10.5031 10.5031C10.8219 10.2375 10.8219 9.7625 10.5031 9.46875L9.05937 7.97188L10.5031 6.50313C10.8219 6.2375 10.8219 5.7625 10.5031 5.46875C10.2375 5.17812 9.7625 5.17812 9.46875 5.46875L7.97188 6.94063L6.50313 5.46875C6.2375 5.17812 5.7625 5.17812 5.46875 5.46875C5.17812 5.7625 5.17812 6.2375 5.46875 6.50313Z"
                    fill="#E74A3B"
                  />
                </svg>
              ) : formik.touched.password ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M0 8C0 3.58125 3.58125 0 8 0C12.4187 0 16 3.58125 16 8C16 12.4187 12.4187 16 8 16C3.58125 16 0 12.4187 0 8ZM11.6187 6.61875C11.9594 6.27813 11.9594 5.72187 11.6187 5.38125C11.2781 5.04063 10.7219 5.04063 10.3813 5.38125L7 8.7625L5.61875 7.38125C5.27813 7.04063 4.72187 7.04063 4.38125 7.38125C4.04063 7.72187 4.04063 8.27812 4.38125 8.61875L6.38125 10.6187C6.72187 10.9594 7.27813 10.9594 7.61875 10.6187L11.6187 6.61875Z"
                    fill="#3CBC81"
                  />
                </svg>
              ) : (
                ''
              )}
            </Label>
            {formik.errors.password && formik.touched.password ? (
              <Attention>{formik.errors.password}</Attention>
            ) : formik.touched.password ? (
              <Valid>Password is secure</Valid>
            ) : (
              ''
            )}
          </Wrapper>
          <Main>
            <Button
              type="button"
              onClick={() => {
                onClickBtnNext();
              }}
            >
              Next
            </Button>
          </Main>
        </Form>
        <Options>
          <Subsection>Do you already have an account?</Subsection>
          <Link to="/signin">
            <Des>Sign in</Des>
          </Link>
        </Options>
      </Div>
    </>
  );
};
