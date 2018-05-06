import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import DoughnutChart from '../components/Doughnut';
import LineChart from '../components/LineChart';
import BarChart from '../components/BarChart';
import InformationBox from '../components/InformationBox';


class Dashboard extends Component {

  render() {
    return (
      <Container className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" md="3">
            <InformationBox
              title="Happy Clicks"
              numbers="233"
              iconURL={require('../assets/veryHappy.gif')}
            />
          </Col>
          <Col xs="12" sm="6" md="3">
            <InformationBox
              title="Not Happy Clicks"
              numbers="233"
              iconURL={require('../assets/happy.gif')}
            />
          </Col>
          <Col xs="12" sm="6" md="3">
            <InformationBox
              title="Angry Clicks"
              numbers="233"
              iconURL={require('../assets/angry.gif')}
            />
          </Col>
          <Col xs="12" sm="6" md="3">
            <InformationBox
              title="Very Angry Clicks"
              numbers="233"
              iconURL={require('../assets/veryAngry.gif')}
            />
          </Col>
        </Row>

        <Row>
          <Col xl="6" md="6" xs="12">
            <DoughnutChart title="Monthly Report" />
          </Col>
          <Col xl="6" md="6" xs="12">
            <BarChart title="Daily Report" />
          </Col>

        </Row>

        <Row>
          <Col xs={12}>
            <LineChart title="Hourly Report" />
          </Col>
        </Row>
      </Container>
    )
  }
}
export default Dashboard;
