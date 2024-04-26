import { Avatar, Button, Menu, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import {
  HomeOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
  CloseOutlined,
} from '@ant-design/icons';
import icon from '../images/cryptocurrency.png';
const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handelResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handelResize);

    handelResize();
    //cleanup
    return () => window.removeEventListener('resize', handelResize);
  }, []);

  useEffect(() => {
    if (screenSize < 768) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <nav className='nav-container'>
      <div className='logo-container'>
        <Avatar src={icon} size={'large'} />

        <Typography.Title
          level={2}
          className='
        logo'
        >
          <Link to='/'>Cryptoverse</Link>
        </Typography.Title>

        {!activeMenu ? (
          <Button
            className='menu-control-container'
            onClick={() => setActiveMenu(!activeMenu)}
          >
            <MenuOutlined />
          </Button>
        ) : (
          <Button
            className='menu-control-container'
            onClick={() => setActiveMenu(!activeMenu)}
          >
            <CloseOutlined />
          </Button>
        )}
      </div>

      {activeMenu && (
        <Menu theme='dark'>
          <Menu.Item icon={<HomeOutlined />}>
            <Link to={'/'}>Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />}>
            <Link to={'/cryptocurrencies'}>Cryptocurrencies</Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />}>
            <Link to={'/news'}>News</Link>
          </Menu.Item>
        </Menu>
      )}
    </nav>
  );
};
export default Navbar;
