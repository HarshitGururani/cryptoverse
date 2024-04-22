import { Typography, Row, Col, Statistic } from 'antd';
import { useGetCryptosQuery } from '../services/cryptoApi';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Cryptocurrencies, News } from './index';

const { Title } = Typography;

const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isFetching) return 'loading....';
  return (
    <>
      <Title level={2} className='heading'>
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title='Total Cryptocurrencies' value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic
            title='Total Exchanges'
            value={millify(globalStats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title='Total market Cap'
            value={millify(globalStats.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title='Total 24h Volume'
            value={millify(globalStats.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title='Total Cryptocurrencies'
            value={millify(globalStats.totalMarkets)}
          />
        </Col>
      </Row>

      <div className='home-heading-container'>
        <Title level={2} className='home-title'>
          Top 10 Cryptocurrencies in the world
        </Title>
        <Title level={4} className='show-more'>
          <Link to={'/cryptocurrencies'}>Show more</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified={true} />

      <div className='home-heading-container'>
        <Title level={2} className='home-title'>
          Latest Crypto News
        </Title>
        <Title level={4} className='show-more'>
          <Link to={'/news'}>Show more</Link>
        </Title>
      </div>
      <News simplified={true} />
    </>
  );
};
export default HomePage;
