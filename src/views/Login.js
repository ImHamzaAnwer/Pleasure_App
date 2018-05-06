import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Input, Container, Col, Row, Button } from 'reactstrap';

export default class Login extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Container>
          <Row>
            <Col xs={12}>
              <img style={styles.logo} src={require('../assets/logo.png')} />

              <Input style={styles.input} type="email" name="email" placeholder="with a placeholder" />
              <Input style={styles.input} type="password" name="select" id="exampleSelect" />

              <Link to="/dashboard">
                <Button style={styles.btn} color="primary" size="lg">Login</Button>
              </Link>
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