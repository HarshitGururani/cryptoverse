/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { useEffect, useState } from 'react';
import { Title } from 'chart.js';

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);
  const [searchItem, setSearchItem] = useState('');

  useEffect(() => {
    const filterData = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchItem.toLowerCase())
    );
    setCryptos(filterData);
  }, [cryptosList, searchItem]);

  if (isFetching) return 'Loading...';
  console.log(cryptos);
  return (
    <>
      {!simplified && (
        <div className='search-crypto'>
          <Input
            placeholder='Search Cryptocurrency'
            onChange={(e) => setSearchItem(e.target.value)}
          />
        </div>
      )}
      <Row gutter={[32, 32]} className='crypto-card-container '>
        {cryptos?.map((currency) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            key={currency.uuid}
            className='crypto-card'
          >
            <Link to={`/crypto/${currency.uuid}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className='crypto-image' src={currency.iconUrl} />}
                hoverable
              >
                <p>Price: {millify(currency.price)}</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};
export default Cryptocurrencies;
