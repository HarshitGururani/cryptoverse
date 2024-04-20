import { Avatar, Button, Menu, Typography } from 'antd';
import { Link } from 'react-router-dom';
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import icon from '../images/cryptocurrency.png';
import { Line } from 'react-chartjs-2';
const Navbar = () => {
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
      </div>
      <Menu theme='dark'>
        <Menu.Item icon={<HomeOutlined />}>
          <Link to={'/'}>Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined />}>
          <Link to={'/cryptocurrencies'}>Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item icon={<MoneyCollectOutlined />}>
          <Link to={'/exchanges'}>Exchanges</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined />}>
          <Link to={'/news'}>News</Link>
        </Menu.Item>
      </Menu>
    </nav>
  );
};
export default Navbar;