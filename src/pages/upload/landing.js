import React from 'react';

import Responsive from '../../layout/Responsive';
import ActionPanel from '../../layout/ActionPanel';

// import img_upload from '../../images/img_upload.png';
import plan from '../../images/plan.png';
import upload from '../../images/upload.png';

export default () => <Responsive>
  <ActionPanel
    to="/upload-survey"
    image={plan}
    text="Surveys"
  >
    <div>
      Create or edit surveys
    </div>
  </ActionPanel>

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


</Responsive>;