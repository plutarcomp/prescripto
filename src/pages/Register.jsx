import AuthForm from '../components/AuthForm';

const Register = () => (
  <AuthForm
    title="Create Account"
    subtitle="Please sign up to book appointment"
    fields={['name', 'email', 'password']}
    buttonText="Register"
    footer={{ text: 'Already have an account?', linkTo: '/login', linkLabel: 'Login' }}
  />
);

export default Register;