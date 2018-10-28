import React, { Component } from 'react';
import {
    Grid, Row, Col,
    Table
} from 'react-bootstrap';

import Card from 'components/Card/Card.jsx';

import CatService from 'services/CatService.jsx';

class Results extends Component {
    constructor(props) {
        super(props);
        this.catService = new CatService();
        this.state = {
            cats: []
        }
    }
    componentDidMount() {
        this.getCatsByRanking().then(res => {
            this.setState({ cats: res.data });
        })
    }
    getCatsByRanking() {
        return this.catService.getCatsByRanking();
    }
    render() {
        return (
            <div className="main-content">
                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            <Card
                                textCenter
                                title="Which cat is the cutest?"
                                tableFullWidth
                                content={
                                    <Table responsive className="table-bigboy">
                                        <thead>
                                            <tr>
                                                <th>Ranking</th>
                                                <th className="text-center">Image</th>
                                                <th className="text-right">Number of contest</th>
                                                <th className="text-right">Highest Elo Ranking</th>
                                                <th className="text-right">Elo Ranking</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.cats.map((prop, key) => {
                                                    return (
                                                        <tr key={key}>
                                                            <td>{key+1}</td>
                                                            <td>
                                                                <div className="img-container">
                                                                    <img alt={`${key.id}`} src={prop.url} />
                                                                </div>
                                                            </td>
                                                            <td className="td-number">
                                                                {Math.round(prop.numberofgamesplayed || 0 )}
                                                            </td>
                                                            <td className="td-number">
                                                                {Math.round(prop.highestrating || 0)}
                                                            </td>
                                                            <td className="td-number">
                                                                {Math.round(prop.rating)}
                                                            </td>
                                                        </tr>
                                                    );
                                                })
                                            }

                                        </tbody>
                                    </Table>
                                }
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Results;
