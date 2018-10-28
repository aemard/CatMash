import React from 'react';
import { Grid, Col, Row } from 'react-bootstrap';

import CustomButton from 'components/CustomButton/CustomButton.jsx';
import CatService from 'services/CatService.jsx'
import MatchService from 'services/MatchService.jsx';
import Helix from "components/Loader/Helix.jsx";

class SelectCat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cats: null
        }
        this.catService = new CatService();
        this.matchService = new MatchService();

    }
    componentDidMount() {
        this.getTwoRandomCats();
    }
    getTwoRandomCats() {
        this.catService.getTwoRandomCats().then(res => {
            this.setState({ cats: res });
        });
    }
    handleMatch(win) {
        let cats = this.state.cats;
        this.setState({ cats: null })
        setTimeout(() => {
            this.matchService.match(cats[0].id, cats[1].id, win).then(res => {
                this.getTwoRandomCats();
            })
        }, 400);
    }
    handleSkip() {
        this.setState({ cats: null })
        this.getTwoRandomCats();
    }
    render() {
        return (
            <div className="main-content">
                <Grid fluid>
                    <div><h2>Which cat is the cutest?</h2></div>
                    {!this.state.cats ? (
                        <Row>
                            <div className="text-center">
                                <Helix />
                            </div>
                        </Row>
                    ) :
                        <div>
                            <Row>
                                <Col md={6} sm={12}>
                                    <div>
                                        <div className="img-contest">
                                            <button onClick={this.handleMatch.bind(this, 1)}>
                                                <img alt="first cat contest" src={this.state.cats[0].url} />
                                            </button>
                                        </div>

                                    </div>
                                </Col>
                                <Col md={6} sm={12}>
                                    <div className="img-contest">
                                        <button onClick={this.handleMatch.bind(this, 0)}>
                                            <img alt="second cat contest" src={this.state.cats[1].url} />
                                        </button>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12}>
                                    <div className="text-center">
                                        <CustomButton wd fill round bsStyle="primary" onClick={this.handleMatch.bind(this, 0.5)}>
                                            No One !
                                        </CustomButton>
                                        &nbsp;
                                        <CustomButton wd fill round bsStyle="default" onClick={this.handleSkip.bind(this)}>
                                            Skip&nbsp;
                                            <span className="btn-label">
                                                <i className="fa fa-fast-forward"></i>
                                            </span>
                                        </CustomButton>
                                    </div>
                                </Col>
                            </Row>
                        </div>}
                </Grid>
            </div>
        );
    }
}

export default SelectCat;
