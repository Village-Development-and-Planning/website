import React from 'react';

import Responsive from '../../layout/Responsive';
import ActionPanel from '../../layout/ActionPanel';
import {t} from '../../translations';
import upload from '../../images/upload.png';

export default () => <Responsive>
  <ActionPanel
    key="new-survey"
    to="/surveys/new"
    image={upload}
    text="New survey"
  >
    <div>
      {t('Create a new survey')}
    </div>
  </ActionPanel>

  <ActionPanel
    key="list-survey"
    to="/surveys"
    image={upload}
    text="Existing surveys"
  >
    <div>
      {('View and edit existing surveys')}
    </div>
  </ActionPanel>

  <ActionPanel
    key="new-artifact"
    to="/artifacts?type=image"
    image={upload}
    text="Survey images and artifacts"
  >
    <div>
      {('Upload and edit images that are part of your survey')}
    </div>
  </ActionPanel>

  <ActionPanel
    key="new-geographic"
    to="/locations?type=DISTRICT"
    image={upload}
    text="Geographic coverage"
  >
    <div>
      {('Upload or edit geographic data that specifies what area the survey will cover')}
    </div>
  </ActionPanel>

  <ActionPanel
    key="new-surveyor"
    to="/surveyors"
    image={upload}
    text="Surveyor data"
  >
    <div>
      {('Upload and edit data regarding surveyor.')}
    </div>
  </ActionPanel>

</Responsive>;