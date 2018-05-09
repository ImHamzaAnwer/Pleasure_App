import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Input, Container, Col, Row, Button, Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
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
    AttRef.orderByChild('timeStamp').startAt(new Date().setHours(0, 0, 0, 0)).on('value', snap => {
      this.setState({
        acount: snap.numChildren()
      })
    })

    const EnvRef = firebase.database().ref().child(this.state.location).child('angry');
    EnvRef.orderByChild('timeStamp').startAt(new Date().setHours(0, 0, 0, 0)).on('value', snap => {
      this.setState({
        ecount: snap.numChildren()
      })
    })

    const WaitingRef = firebase.database().ref().child(this.state.location).child('dissatisfied');
    WaitingRef.orderByChild('timeStamp').startAt(new Date().setHours(0, 0, 0, 0)).on('value', snap => {
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
        <Card style={styles.messageCard}>
          <CardBody>
            <CardTitle>{mesg}</CardTitle>
            <CardSubtitle style={{color: "#9d9d9c"}}>{date}</CardSubtitle>
          </CardBody>
        </Card>
      )
    }
    return (
      <Container className="animated fadeIn">
        <Row>
          <Col md="4" sm="4" xs="12">
            <InformationBox
              title="Bad Attitude"
              numbers={this.state.acount}
              iconURL={require('../assets/attitude.png')}
            />
          </Col>

          <Col md="4" sm="4" xs="12">
            <InformationBox
              title="Environment"
              numbers={this.state.ecount}
              iconURL={require('../assets/environment.png')}
            />
          </Col>

          <Col md="4" sm="4" xs="12">
            <InformationBox
              title="Waiting Time"
              numbers={this.state.wcount}
              iconURL={require('../assets/waiting-time.png')}
            />
          </Col>
        </Row>

            <h3 style={styles.title}>User's Feedback</h3>

            {
              messages.map(({ comment, time }) => <Message mesg={comment} date={time} />)
            }
      

      </Container>
    )
  }
}

const styles = {
  messageCard:{
    borderWidth: 0,
    borderRadius: 5
  },
  title: {
    textAlign: "center",
    marginTop: 40,
    marginBottom: 20,
  },
  container: {
    backgroundColor: '#efefef',
  },
  input: {
    width: 300,
    padding: 10,
    borderWidth: 0,
    margin: "5px auto",
    outline: "none"
  },
  logo: {
    marginTop: -150,
    display: "block",
    margin: "auto",
    width: "100%",
    maxWidth: 250,
    height: "auto",
    alignSelf: "center"
  },
  btn: {
    display: "block",
    margin: "20px auto",
    padding: "10px 50px",
  }
}
