import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setNavbarSelectedValue } from '@/redux/actions';
import { navbarSelectedValueSelector } from '@/redux/selectors';
import { Layout, Menu } from 'antd';
import { MAIN, TRACK_SEARCH } from '@/constants/routes';
import st from './styles.module.scss';

const { Header, Content, Footer } = Layout;

// eslint-disable-next-line react/prop-types
export default function CustomLayout({ children }) {
  const dispatch = useDispatch();
  const selectedKeys = useSelector(navbarSelectedValueSelector);

  const handleFirstClick = () => {
    dispatch(setNavbarSelectedValue(['1']));
  };

  const handleSecondClick = () => {
    dispatch(setNavbarSelectedValue(['2']));
  };

  return (
    <Layout className={st.layout}>
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          selectedKeys={selectedKeys}
        >
          <Menu.Item key="1">
            <Link to={MAIN} onClick={handleFirstClick}>
              Main
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to={TRACK_SEARCH} onClick={handleSecondClick}>
              Search track
            </Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>{children}</Content>
      <Footer style={{ textAlign: 'center' }}>
        LastFm Test App ©2020 Created by Me
      </Footer>
    </Layout>
  );
}
