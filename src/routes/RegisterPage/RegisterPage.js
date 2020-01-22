import React from 'react';
import RegisterForm from '../../components/RegisterForm';

const RegisterPage = props => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}
    >
      <RegisterForm title='Register now!!' {...props} />
    </div>
  );
};

export default RegisterPage;
