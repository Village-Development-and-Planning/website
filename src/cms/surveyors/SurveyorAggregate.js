import React, {Component} from 'react';

import Responsive from '../../layout/Responsive';
import {ListStyles} from '../../styles/ListStyles.scss';
import {Progress} from '../../styles/Progress.scss';

export default class SurveyorAggregate extends Component{




    render() {
        let answeredSurveys = this.props.aggregate.data.numAnswered.value;
        let totalSurveys =  this.props.aggregate.data.numSurveys.value;

        let answeredPercentage = Math.round(answeredSurveys/totalSurveys*100);
        let unAnsweredPercentage = 100- answeredPercentage;

        return (
            <section className ={ListStyles} >
                <ul>
                    <li>
                        <label> CST Name</label>
                        <span>{this.props.surveyor.name}</span>
                    </li>
                    <li>
                        <label> CST Code/UserName</label>
                        <span>{this.props.surveyor.username}</span>
                    </li>
                </ul>
                <h4>Information about Household Confirmation:</h4>
                <Responsive>
                    <ul>
                        <li>
                            <label>Number of surveys answered</label>
                            <span>{answeredSurveys}</span>

                        </li>
                        <li>
                            <label>Total number of surveys completed</label>
                            <span >{totalSurveys}</span>
                        </li>
                    </ul>
                    <div className={Progress}>
                        <strong>{answeredPercentage+" %"}</strong>
                        <span>{unAnsweredPercentage+" %"}</span>
                        <progress value={answeredPercentage} max="100">{answeredPercentage+" %"}</progress>
                        <p>Surveys Complete<span>Surveys that reported as 'not willing', 'dead' or 'not there'</span></p>
                    </div>
                </Responsive>
                <ul>
                    <li>
                        <label>No. of Households reported 'not willing'</label>
                        <span>{this.props.aggregate.data.numNotWilling.value}</span>

                    </li>
                    <li>
                        <label>No. of Households reported 'not there'</label>
                        <span>{this.props.aggregate.data.numNotHere.value}</span>

                    </li>
                    <li>
                        <label>No. of Households reported 'dead'</label>
                        <span>{this.props.aggregate.data.numNotAlive.value}</span>
                    </li>
                    <li>
                        <label>Total</label>
                        <span>{unAnsweredPercentage}</span>

                    </li>
                </ul>
                <ul>
                    <li>
                        <label>No. of completed surveys done in less than 15 minutes</label>
                        <span>__</span>

                    </li>
                    <li>
                        <label>No. of completed surveys done in less than 5 minutes</label>
                        <span>__</span>

                    </li>
                    <li>
                        <label>Average time per survey</label>
                        <span>__</span>

                    </li>
                </ul>
            </section>
        );
    }
};