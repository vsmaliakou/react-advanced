import { Button, Form, Input } from 'antd';
import React from 'react';
import { rules } from '../utils/rules';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IUser } from '../models/IUser';
import { useActions } from '../hooks/useActions';

const LoginFormComponent: React.FC = () => {
  const { isLoading, error } = useTypedSelector(state => state.auth);
  const { login } = useActions();

  const submit = (values: IUser) => {
    const { username, password } = values;
    login(username, password);
  };

  return (
    <Form
      onFinish={submit}
    >
      {error && <div style={{ color: 'red' }}>
        {error}
      </div>}
      <Form.Item
        label="Имя пользователя"
        name="username"
        rules={[rules.required('Пожалуйста, введите имя пользователя!')]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Пароль"
        name="password"
        rules={[rules.required('Пожалуйста, введите пароль!')]}
      >
        <Input type="password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};

export const LoginForm = LoginFormComponent;
