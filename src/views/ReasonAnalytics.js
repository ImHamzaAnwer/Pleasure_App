import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Input, Container, Col, Row, Button } from 'reactstrap';
import InformationBox from '../components/InformationBox';
import * as firebase from 'firebase';



export default class ReasonAnalytics extends Component {
  constructor() {
    super();
    this.state = {
      location: 'tariq-road',
      acount: null,
      ecount: null,
      wcount: null
    }
  }

  componentWillMount() {
    const AttRef = firebase.database().ref().child(this.state.location).child('angry').child('{pushId}').child('reason');
    AttRef.orderByChild('timeStamp').startAt(new Date().setHours(0,0,0,0)).on('value', snap => {
      this.setState({
        acount: snap.numChildren()
      })
    })

    const EnvRef = firebase.database().ref().child(this.state.location).child('angry');
    EnvRef.orderByChild('timeStamp').startAt(new Date().setHours(0,0,0,0)).on('value', snap => {
      this.setState({
        ecount: snap.numChildren()
      })
    })

    const WaitingRef = firebase.database().ref().child(this.state.location).child('dissatisfied');
    WaitingRef.orderByChild('timeStamp').startAt(new Date().setHours(0,0,0,0)).on('value', snap => {
      this.setState({
        wcount: snap.numChildren()
      })
    })
  }

  render() {
    let messages = []
    const happyRef = firebase.database().ref().child(this.state.location).child('angry');
    happyRef.on('value', snap => {
      snap.forEach(childSnap => {
        if (childSnap.val().comment !== undefined) {
          messages.push({
            comment: childSnap.val().comment,
            time: childSnap.val().comment
          })
        }
      })
    })

    const Message = ({ mesg, date }) => {
      return (
        <div>
          <div>{mesg}</div>
        </div>
      )
    }
    return (
      <Container className="animated fadeIn">
      <Row>
        
      </Row>
        <Row>
          <Col xs="12" sm="6" md="3">
            <Row>
              <InformationBox
                title="Bad Attitude"
                numbers={this.state.acount}
                iconURL={require('../assets/attitude.png')}
              />
            </Row>
            <Row>
              <InformationBox
                title="Environment"
                numbers={this.state.ecount}
                iconURL={require('../assets/environment.png')}
              />
            </Row>
            <Row>
              <InformationBox
                title="Waiting Time"
                numbers={this.state.wcount}
                iconURL={require('../assets/waiting-time.png')}
              />
            </Row>
          </Col>
          <Col xl="6" md="6" xs="12">
            <Row>
              <Container>
                {messages.map(({ comment, time }) => <Message mesg={comment} date={time} />)}
              </Container>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}
