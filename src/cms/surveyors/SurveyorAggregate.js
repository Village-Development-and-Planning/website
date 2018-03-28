import React, {Component} from 'react';

import Responsive from '../../layout/Responsive';
import {ListStyles} from '../../styles/ListStyles.scss';
import {Progress} from '../../styles/Progress.scss';
import { get as _get} from 'lodash';


export default class SurveyorAggregate extends Component{




    render() {
        let answeredSurveys = _get(this.props.aggregate,"numAnswered.value",0);
        let totalSurveys =  _get(this.props.aggregate,"numSurveys.value",0);
	    let totalUnAnsweredSurveys =  totalSurveys - answeredSurveys;

        let answeredPercentage = totalSurveys !== 0 ? Math.round(answeredSurveys/totalSurveys*100) : 0;
        let unAnsweredPercentage = 100 - answeredPercentage;

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
                        <span>{_get(this.props.aggregate,"numNotWilling.value",0)}</span>

                    </li>
                    <li>
                        <label>No. of Households reported 'not there'</label>
                        <span>{_get(this.props.aggregate,"numNotHere.value",0)}</span>

                    </li>
                    <li>
                        <label>No. of Households reported 'dead'</label>
                        <span>{_get(this.props.aggregate,"numNotAlive.value",0)}</span>
                    </li>
                    <li>
                        <label>Total</label>
                        <span>{totalUnAnsweredSurveys}</span>

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