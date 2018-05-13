import React from 'react';

import Responsive from '../../layout/Responsive';
import ActionPanel from '../../layout/ActionPanel';
import upload from '../../images/upload.png';
// import img_upload from '../../images/img_upload.png';
// import plan from '../../images/plan.png';

export default () => <Responsive>
  <ActionPanel
    key="new-survey"
    to="/surveys/new"
    image={upload}
    text="New Survey"
  >
    <div>
      Create new Survey
    </div>
  </ActionPanel>

  <ActionPanel
    key="new-geographic"
    to="/locations/new"
    image={upload}
    text="Upload Locations Data"
  >
    <div>
      Upload locations CSV
    </div>
  </ActionPanel>

  <ActionPanel
    key="new-surveyor"
    to="/surveyors/new"
    image={upload}
    text="Upload Surveyors Data"
  >
    <div>
      Upload surveyors CSV
    </div>
  </ActionPanel>

  <ActionPanel
    key="new-artifact"
    to="/artifacts/new"
    image={upload}
    text="Upload Images"
  >
    <div>
      Upload images to be used in surveys
    </div>
  </ActionPanel>

  <ActionPanel
    key="list-survey"
    to="/surveys"
    image={upload}
    text="List surveys"
  >
    <div>
      View existing surveys
    </div>
  </ActionPanel>

</Responsive>;