import React from 'react';
import EditPage from '../base/Edit';
import Form from '../../layout/AppForm';
import fetch from '../../utils/fetch';
import {t, T} from '../../translations';

export default class Edit extends EditPage {
  setupObject() {
    return fetch(`/cms/locations?type=PANCHAYAT`)
      .then((p) => this.panchayats = p.map(
        p => <option key={p.uid} value={p.uid}>
          {p.uid} - {p.name}
        </option>
      ))
      .then(() => fetch(`/cms/surveys?enabled=true`))
      .then((s) => this.surveys = s.map(
        s => <option key={s.name} value={s.name}>{s.name}</option>
      ))
      .then(() => super.setupObject());
  }
  render() {
    const entityId = this.props.match.params.entityId;
    const entity = this.state.entity;
    const payload = entity && entity.payload;
    const panchayatUID = this.state.panchayat || (
      payload
      && ('DISTRICT BLOCK PANCHAYAT').split(' ').map(k => payload[`${k}_CODE`]).join('/')
    );
    const survey = this.state.survey || (payload && payload.SURVEY);
    if (entity) {
      return <Form
        action={`/cms/surveyors/${entityId}`}
        actionName="Update"
        method="PATCH"
      >
        <h4 className="title"><T>Edit surveyor data</T></h4>
        <label>
          <p><T>Surveyor name</T></p>
          <input
            type="text" name="name"
            defaultValue={entity.name}
            placeholder={t("Enter name")}
          />
        </label>
        <label>
          <p><T>Surveyor code</T></p>
          <input
            type="text" name="username"
            defaultValue={entity.username}
            placeholder={t("Enter username")}
          />
        </label>
        <label>
          <p><T>Panchayat name</T></p>
          <select
            name="panchayat"
            onChange={({value}) => this.setState({panchayat: value})}
            defaultValue={panchayatUID}
          >{this.panchayats}</select>
        </label>
        <label>
          <p><T>Survey</T></p>
          <select
            name="survey"
            onChange={({value}) => this.setState({survey: value})}
            defaultValue={survey}
          >{this.surveys}</select>
        </label>
      </Form>;
    } else {
      return super.render();
    }
  }

};
Edit.entityName = 'Surveyor';
