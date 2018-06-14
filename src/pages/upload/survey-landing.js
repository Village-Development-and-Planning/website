import React from 'react';

import Responsive from '../../layout/Responsive';
import ActionPanel from '../../layout/ActionPanel';
import {t} from '../../translations';
import upload from '../../images/upload.png';
import geo from '../../images/geo.png';
import users from '../../images/users.png';
import survey from '../../images/survey.png';

export default () => <Responsive>
  <ActionPanel
    key="new-survey"
    to="/surveys/new"
    image={survey}
    text="New survey"
  >
    <div>
      {t('Create a new survey')}
    </div>
  </ActionPanel>

  <ActionPanel
    key="list-survey"
    to="/surveys"
    image={survey}
    text="Existing surveys"
  >
    <div>
      {t('View and edit existing surveys')}
    </div>
  </ActionPanel>

  <ActionPanel
    key="new-artifact"
    to="/artifacts?type=image"
    image={upload}
    text="Survey images and artifacts"
  >
    <div>
      {t('Upload and edit images that are part of your survey')}
    </div>
  </ActionPanel>

  <ActionPanel
    key="new-geographic"
    to="/locations?type=DISTRICT"
    image={geo}
    text="Geographic coverage"
  >
    <div>
      {t('Upload or edit geographic data that specifies what area the survey will cover')}
    </div>
  </ActionPanel>

  <ActionPanel
    key="new-surveyor"
    to="/surveyors"
    image={users}
    text="Surveyor data"
  >
    <div>
      {t('Upload and edit data regarding surveyor.')}
    </div>
  </ActionPanel>

</Responsive>;