import React,{Component} from 'react';
import {Container, Row,Col, Input} from 'reactstrap';
export default class AddLocation extends Component{
    render(){
        return(
            <div>
                <Container className="animated fadeIn">
                    <h3 style={{marginTop: 40}}>Add New Branch</h3>
                    <Row>
                        <Col xs={12}>
                            <Input style={styles.input} type="text" name="locationName" placeholder="Enter Location Name" />
                            <textarea rows={10} style={styles.input} name="comment" form="usrform">Enter Description.</textarea>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

const styles ={
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