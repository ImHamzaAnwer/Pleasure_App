import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Input, Container, Col, Row, Button, Card, CardBody, CardTitle, CardSubtitle, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import InformationBox from '../components/InformationBox';
import * as firebase from 'firebase';



export default class ReasonAnalytics extends Component {
  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.state = {
      dropdownOpen: false,
      dropdownOpen2: false,
      location: 'tariq-road',
      review:'angry',
      acount: null,
      ecount: null,
      wcount: null
    }
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  toggle2() {
    this.setState({
      dropdownOpen2: !this.state.dropdownOpen2
    });
  }
  handleChange(e){
    console.log('changes')
    this.setState({
      location: e.currentTarget.textContent
    })
    setTimeout(()=>{
      this.componentWillMount();
    },1000)
    
  }
  handleChange2(e){
    console.log('changes')
    this.setState({
      review: e.currentTarget.textContent
    })
    setTimeout(()=>{
      this.componentWillMount();
    },1000)
    
  }
  componentWillMount() {
    const AttRef = firebase.database().ref().child(this.state.location).child(this.state.review);
    AttRef.orderByChild('timeStamp').startAt(new Date().setHours(0, 0, 0, 0)).on('value', snap => {
      this.setState({
        acount: snap.numChildren()
      })
    })

    const EnvRef = firebase.database().ref().child(this.state.location).child(this.state.review);
    EnvRef.orderByChild('timeStamp').startAt(new Date().setHours(0, 0, 0, 0)).on('value', snap => {
      this.setState({
        ecount: snap.numChildren()
      })
    })

    const WaitingRef = firebase.database().ref().child(this.state.location).child(this.state.review);
    WaitingRef.orderByChild('timeStamp').startAt(new Date().setHours(0, 0, 0, 0)).on('value', snap => {
      this.setState({
        wcount: snap.numChildren()
      })
    })
  }

  render() {
    let messages = []
    const happyRef = firebase.database().ref().child(this.state.location).child(this.state.review);
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
            {/* <CardSubtitle style={{ color: "#9d9d9c" }}>{date}</CardSubtitle> */}
          </CardBody>
        </Card>
      )
    }
    return (
      <div>
        <div style={styles.dropdownRow}>
          <Container>
            <Row>
              <Col xs="6" style={{ flexDirection: "col", display: "flex", alignItems: "center" }}>
                <h6 style={{ paddingRight: 20 }}>Select Location</h6>
                <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                  <DropdownToggle color="primary" caret>
                    {this.state.location}
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem ><div onClick={this.handleChange.bind(this)}>askari</div></DropdownItem>
                    <DropdownItem ><div onClick={this.handleChange.bind(this)}>gulshan-e-iqbal</div></DropdownItem>
                    <DropdownItem ><div onClick={this.handleChange.bind(this)}>nazimabad</div></DropdownItem>
                    <DropdownItem ><div onClick={this.handleChange.bind(this)}>tariq-road</div></DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
              </Col>

            <Col xs="6" style={{ flexDirection: "col", display: "flex", alignItems: "center" }}>
                <h6 style={{ paddingRight: 20 }}>Select Review Type</h6>
                <ButtonDropdown isOpen={this.state.dropdownOpen2} toggle={this.toggle2}>
                  <DropdownToggle color="primary" caret>
                    {this.state.review}
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem ><div onClick={this.handleChange2.bind(this)}>angry</div></DropdownItem>
                    <DropdownItem ><div onClick={this.handleChange2.bind(this)}>dissatisfied</div></DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
              </Col>

            </Row>
          </Container>
        </div>

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
          <Row>

            <h3 style={styles.title}>Customer's Feedback</h3>
          </Row>


          <div style={{ height: '100px', borderColor: 'black', borderWidth: '4' }}>
            {
              messages.map(({ comment, time }) => <Message mesg={comment} date={time} />)
            }

          </div>

        </Container>
      </div>
    )
  }
}

const styles = {
  messageCard: {
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
  },
  dropdownRow: {
    backgroundColor: "#fff",
    padding: 20
  }
}
