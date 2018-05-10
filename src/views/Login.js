import React, { Component } from 'react';
import { Link} from 'react-router-dom'
import { Input, Container, Col, Row, Button } from 'reactstrap';
import * as firebase from 'firebase';

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  
  onSubmit(event){
    const {
      email,
      password,
    } = this.state;

    const { history} = this.props;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log(email, password, "asdasdasd")
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push('/dashboard');
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }






  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';
    return (
      <div style={styles.container}>
        <Container>
          <Row>
            <Col xs={12}>
              <img style={styles.logo} src={require('../assets/logo.png')} />

              <Input
                style={styles.input}
                value={email}
                onChange={event => this.setState(byPropKey('email', event.target.value))}
                type="email"
                name="email"
                placeholder="Email Address" />
             
              <Input
                style={styles.input}
                value={password}
                type="password"
                name="select"
                placeholder="Password"
                onChange={event => this.setState(byPropKey('password', event.target.value))}
              />

              
                <Button style={styles.btn} onClick={this.onSubmit.bind(this)} color="primary" size="lg">Login</Button>
              
              { error && <p>{error.message}</p> }
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    flex: 1,
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
    backgroundColor: '#efefef',
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: 300,
    padding: 10,
    borderWidth: 0,
    margin: "5px auto",
    outline: "none"
  },
  logo: {
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