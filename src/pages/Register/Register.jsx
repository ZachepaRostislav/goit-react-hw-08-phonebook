import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operation';
import { LabelStyled, FormStyled, Button } from './Register.styled';

const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormStyled onSubmit={handleSubmit} autoComplete="off">
      <LabelStyled>
        Username
        <input type="text" name="name" required />
      </LabelStyled>
      <LabelStyled>
        Email
        <input type="email" name="email" required />
      </LabelStyled>
      <LabelStyled>
        Password
        <input type="password" name="password" required minLength={7} maxLength={20} />
      </LabelStyled>
      <Button type="submit">Register</Button>
    </FormStyled>
  );
};

export default Register;
