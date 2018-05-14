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
    key="list-survey"
    to="/surveys"
    image={upload}
    text="List surveys"
  >
    <div>
      View existing surveys
    </div>
  </ActionPanel>

  <ActionPanel
    key="new-artifact"
    to="/artifacts"
    image={upload}
    text="Images &amp; other Artifacts"
  >
    <div>
      View / edit / update images used in surveys
    </div>
  </ActionPanel>

  <ActionPanel
    key="new-geographic"
    to="/locations?type=DISTRICT"
    image={upload}
    text="Locations Data"
  >
    <div>
      View / edit / update locations
    </div>
  </ActionPanel>

  <ActionPanel
    key="new-surveyor"
    to="/surveyors"
    image={upload}
    text="Surveyors Data"
  >
    <div>
      View / edit / update surveyors
    </div>
  </ActionPanel>

</Responsive>;