import React from 'react';
import { Row, Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../router';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

interface IComponentProps {}

const NavbarComponent: React.FC<IComponentProps> = () => {
  const { isAuth, user } = useTypedSelector(state => state.auth);
  const navigate = useNavigate();
  const { logout } = useActions();

  return (
    <Layout.Header>
      <Row justify="end">
        {isAuth
          ?
          <>
            <div style={{ color: 'white' }}>{user.username}</div>
            <Menu
              theme="dark"
              mode="horizontal"
              selectable={false}
              items={[
                {
                  key: 'logout',
                  label: 'Выйти',
                  onClick: logout,
                }
              ]}
            />
          </>
          :
          <Menu
            theme="dark"
            mode="horizontal"
            selectable={false}
            items={[
              {
                key: 'login',
                label: 'Логин',
                onClick: () => navigate(RouteNames.LOGIN),
              }
            ]}
          />
        }
      </Row>
    </Layout.Header>
  );
};

export const Navbar = NavbarComponent;
