import AuthForm from '../components/AuthForm';

const Login = () => (
  <AuthForm
    title="Login"
    subtitle="Please log in to book appointment"
    fields={['email', 'password']}
    buttonText="Login"
    footer={{ text: 'Create a new account?', linkTo: '/register', linkLabel: 'Click here' }}
  />
);

export default Login;