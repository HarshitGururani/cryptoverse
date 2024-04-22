import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';
const { Title, Text } = Typography;
const LineChart = ({ coinHistory, currentprice, coinName }) => {
  return (
    <>
      <Row className='chart-header'>
        <Title level={2} className='chart-title'>
          Price History
        </Title>
      </Row>
    </>
  );
};
export default LineChart;
