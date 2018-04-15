import React from 'react';

import Responsive from '../../layout/Responsive';
import ActionPanel from '../../layout/ActionPanel';
import upload from '../../images/upload.png';
// import img_upload from '../../images/img_upload.png';
// import plan from '../../images/plan.png';

export default () => <Responsive>
  <ActionPanel
    key="upload-data"
    to="/answers/new"
    image={upload}
    text="Upload data"
  >
    <div>
      Sync the data collected to the server
    </div>
  </ActionPanel>

  <ActionPanel
    key="new-survey"
    to="/upload"
    image={upload}
    text="Create Surveys"
  >
    <div>
      Upload your survey, survey images, surveyors, and geographic area to be covered
    </div>
  </ActionPanel>


</Responsive>;