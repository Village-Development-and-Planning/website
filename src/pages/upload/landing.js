import React from 'react';

import Responsive from '../../layout/Responsive';
import ActionPanel from '../../layout/ActionPanel';

import img_upload from '../../images/img_upload.png';
import plan from '../../images/plan.png';

export default () => <Responsive>
  <ActionPanel
    to="/surveys"
    image={plan}
    text="Surveys"
  >
    <div>
      Create or edit surveys
    </div>
  </ActionPanel>

  <ActionPanel
    to="/artifacts"
    image={img_upload}
    text="Artifacts"
  >
    <div>
      Create or edit images, etc.
    </div>
  </ActionPanel>

  <ActionPanel
    to="/locations"
    image={img_upload}
    text="Locations"
  >
    <div>
      View or update locations
    </div>
  </ActionPanel>
  
  <ActionPanel
    to="/surveyors"
    image={img_upload}
    text="Surveyors"
  >
    <div>
      View or update surveyors
    </div>
  </ActionPanel>

</Responsive>;