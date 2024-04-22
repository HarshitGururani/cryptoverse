/* eslint-disable react/no-string-refs */

import { Select, Typography, Card, Row, Col } from 'antd';
import moment from 'moment';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
const { Text, Title } = Typography;
const { Option } = Select;

const demoImage =
  'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const News = () => {
  const { data: cryptoNews } = useGetCryptoNewsQuery();

  const news = cryptoNews?.data;
  const limitedArray = news?.map((element, index) => {
    if (index < 10) {
      return element;
    }
  });
  console.log(limitedArray);

  if (!cryptoNews) return 'loading...';
  console.log(news);
  return (
    <Row gutter={[24, 24]}>
      {news?.map((news, id) => (
        <Col key={id} xs={24} lg={8}>
          <Card hoverable className='news-card'>
            <a href={news?.url} target='_blank' rel='noreferrer'>
              <div className='news-image-container'>
                <Title className='news-title' level={5}>
                  {news?.title}
                </Title>
                <img src={news?.thumbnail || demoImage} alt={news?.title} />
              </div>
              {news?.description && (
                <p>{`${news?.description?.substring(0, 100)}...`}</p>
              )}
              <div className='provider-container'>
                <div>
                  <Text>{moment(news.createdAt).startOf('ss').from()}</Text>
                </div>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
export default News;
