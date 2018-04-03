import React from 'react';

import Responsive from '../../layout/Responsive';
import ActionPanel from '../../layout/ActionPanel';

import upload from '../../images/upload.png';
import img_upload from '../../images/img_upload.png';
import plan from '../../images/plan.png';

export default () => <Responsive>
  <ActionPanel
    to="/surveys/new"
    image={plan}
    text="Create Survey"
  >
    <div>
      Create a new Survey from CSV file.
    </div>
  </ActionPanel>

  <ActionPanel
    to="/surveys"
    image={plan}
    text="List Surveys"
  >
    <div>
      View / edit / delete surveys.
    </div>
  </ActionPanel>

  <ActionPanel
    to="/answers/new"
    image={upload}
    text="Upload Responses"    
  >
    <div>
      Upload responses from mobile app.
    </div>
  </ActionPanel>

  <ActionPanel
    to="/artifacts/new"
    image={img_upload}
    text="Upload Artifacts"
  >
    <div>
        Upload Artifacts.
    </div>
  </ActionPanel>

  <ActionPanel
    to="/artifacts"
    image={img_upload}
    text="List Artifacts"
  >
    <div>
      View / edit / delete Artifacts.
    </div>
  </ActionPanel>

  <ActionPanel
      to="/locations/new"
      image={img_upload}
      text="Upload Location Data"
  >
      <div>
          Upload Location Data.
      </div>
  </ActionPanel>

  <ActionPanel
    to="/locations"
    image={img_upload}
    text="List Locations"
  >
    <div>
      View / edit / delete Locations.
    </div>
  </ActionPanel>

  <ActionPanel
      to="/surveyors/new"
      image={img_upload}
      text="Upload Surveyors Data"
  >
      <div>
          Upload Surveyors Data.
      </div>
  </ActionPanel>
  
  <ActionPanel
    to="/surveyors"
    image={img_upload}
    text="List Surveyors"
  >
    <div>
      View / edit / delete Surveyors.
    </div>
  </ActionPanel>

</Responsive>;