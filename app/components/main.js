import React, { Component } from 'react';
import ListView from '../containers/list_view';
import ListItem from '../containers/list_item';
import { Row, Col } from 'react-bootstrap';

class Main extends Component {
    render() {
        return <Row>
            <Col md={10} mdOffset={1} className="main">
                <ListView />
                <ListItem />
            </Col>
        </Row>;
    }
}

export default Main;
