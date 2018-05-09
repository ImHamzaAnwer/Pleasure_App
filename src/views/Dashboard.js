import React, { Component } from 'react';
import { Container, Row, Col, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import DoughnutChart from '../components/Doughnut';
import LineChart from '../components/LineChart';
import BarChart from '../components/BarChart';
import InformationBox from '../components/InformationBox';
import * as firebase from 'firebase';


class Dashboard extends Component {
  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      location: 'tariq-road',
      date: new Date().setHours(0, 0, 0, 0),
      hcount: null,
      scount: null,
      dcount: null,
      acount: null,
    }
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  componentWillMount() {
    console.log('date: ', this.state.date)
    const happyRef = firebase.database().ref().child(this.state.location).child('happy');
    happyRef.orderByChild('timeStamp').startAt(this.state.date).on('value', snap => {
      this.setState({
        hcount: snap.numChildren()
      })
    })

    const satisfiedRef = firebase.database().ref().child(this.state.location).child('satisfied');
    satisfiedRef.orderByChild('timeStamp').startAt(this.state.date).on('value', snap => {
      this.setState({
        scount: snap.numChildren()
      })
    })

    const dissatisfiedRef = firebase.database().ref().child(this.state.location).child('dissatisfied');
    dissatisfiedRef.orderByChild('timeStamp').startAt(this.state.date).on('value', snap => {
      this.setState({
        dcount: snap.numChildren()
      })
    })

    const angryRef = firebase.database().ref().child(this.state.location).child('angry');
    angryRef.orderByChild('timeStamp').startAt(this.state.date).on('value', snap => {
      this.setState({
        acount: snap.numChildren()
      })
    })
  }

  render() {
    return (
      <div>
        <div style={styles.dropdownRow}>
          <Container>
            <Row>
              <Col xs="12" style={{flexDirection:"row", display:"flex", alignItems:"center"}}>
              <h6 style={{paddingRight: 20}}>Filter by:</h6>
                <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                  <DropdownToggle color="primary" caret>
                    Location
                </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Location 1</DropdownItem>
                    <DropdownItem>Location 2</DropdownItem>
                    <DropdownItem>Location 3</DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
              </Col>
            </Row>
          </Container>
        </div>

        <Container className="animated fadeIn">
          <Row>
            <Col xs="12" sm="6" md="3">
              <InformationBox
                title="Happy Clicks"
                numbers={this.state.hcount}
                iconURL={require('../assets/veryHappy.gif')}
              />
            </Col>
            <Col xs="12" sm="6" md="3">
              <InformationBox
                title="Not Happy Clicks"
                numbers={this.state.scount}
                iconURL={require('../assets/happy.gif')}
              />
            </Col>
            <Col xs="12" sm="6" md="3">
              <InformationBox
                title="Angry Clicks"
                numbers={this.state.dcount}
                iconURL={require('../assets/angry.gif')}
              />
            </Col>
            <Col xs="12" sm="6" md="3">
              <InformationBox
                title="Very Angry Clicks"
                numbers={this.state.acount}
                iconURL={require('../assets/veryAngry.gif')}
              />
            </Col>
          </Row>

          <Row>
            <Col xl="6" md="6" xs="12">
              <DoughnutChart
                title="Monthly Report"
                hcount={this.state.hcount}
                scount={this.state.scount}
                dcount={this.state.dcount}
                acount={this.state.acount}
              />
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
      </div>
    )
  }
}

const styles = {
  dropdownRow: {
    backgroundColor: "#fff",
    padding: 20
  }
}
export default Dashboard;
