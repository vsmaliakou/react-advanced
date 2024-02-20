import React, { useEffect } from 'react';
import { Layout } from 'antd';
import { AppRouter } from './components/AppRouter';
import { Navbar } from './components/Navbar';
import './App.css';
import { useActions } from './hooks/useActions';
import { IUser } from './models/IUser';

function App() {
  const { setIsAuth, setUser } = useActions();

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
      setUser({ username: localStorage.getItem('username') } as IUser);
    }
  }, []);

  return (
    <Layout>
      <Navbar />
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
    </Layout>
  );
}

export default App;
