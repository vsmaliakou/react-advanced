import { Card, Layout, Row } from 'antd';
import React from 'react';
import { LoginForm } from '../components/LoginForm';

const LoginComponent: React.FC = () => {
  return (
    <Layout>
      <Row justify="center" align="middle" className="h100">
        <Card>
          <LoginForm />
        </Card>
      </Row>
    </Layout>
  );
};

export const Login = LoginComponent;
