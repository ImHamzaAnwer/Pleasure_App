import React, { Component } from 'react';
import { Container, Row, Col, Input, Button } from 'reactstrap';
import * as firebase from 'firebase';

export default class AddLocation extends Component {
    constructor() {
        super();
        this.state = {
            locationName: '',
            comment: ''
        }
    }

    setValue(field, event) {
        //If the input fields were directly within this
        //this component, we could use this.refs.[FIELD].value
        //Instead, we want to save the data for when the form is submitted
        var object = {};
        object[field] = event.target.value;
        this.setState(object);
    }

    addMessage(e) {
        e.preventDefault(); // <- prevent form submit from reloading the page
        /* Send the message to Firebase */
        firebase.database().ref('/Locations').push({
            branchName: this.state.locationName,
            description: this.state.comment
        })
        this.setState({
            locationName: '',
            comment: ''
        })
        // <- clear the input
    }

    render() {
        console.log(this.state.locationName)
        console.log("vj: ", this.state.comment)
        return (
            <div>
                <Container className="animated fadeIn">
                    <h3 style={{ marginTop: 40 }}>Add New Branch</h3>
                    <Row>
                        <Col xs={12}>
                            <Input
                                style={styles.input}
                                type="text"
                                name="locationName"
                                value={this.state.locationName}
                                placeholder="Enter Location Name"
                                onChange={this.setValue.bind(this, 'locationName')}
                            />
                            <textarea value={this.state.comment} rows={10} placeholder="Enter Description" style={styles.input} name="comment" form="usrform"
                                onChange={this.setValue.bind(this, 'comment')}
                            >
                            </textarea>
                        </Col>
                        <Row>
                            <Col>
                                <Button style={{ marginLeft: '15px' }} color="primary"
                                    onClick={this.addMessage.bind(this)}
                                >Save</Button>
                            </Col>
                        </Row>
                    </Row>
                </Container>
            </div>
        )
    }
}

const styles = {
    input: {
        width: 300,
        padding: 10,
        borderWidth: 0,
        margin: "5px auto",
        outline: "none",
        margin: "15px 0",
        fontSize: 14
    },
}