import React from 'react';

import Responsive from '../../layout/Responsive';
import ActionPanel from '../../layout/ActionPanel';
import {t} from '../../translations';

import upload from '../../images/upload.png';
import survey from '../../images/survey.png';

export default () => <Responsive>
  <ActionPanel
    to="/upload-survey"
    image={survey}
    text="Surveys"
  >
    <div>
      {t('Create a new survey or view and edit existing surveys')}
    </div>
  </ActionPanel>

  <ActionPanel
    key="upload-data"
    to="/answers/new"
    image={upload}
    text="Upload data"
  >
    <div>
      {t('Sync data collected to the server')}
    </div>
  </ActionPanel>


</Responsive>;