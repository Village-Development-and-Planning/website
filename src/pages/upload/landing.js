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
    altText="Create Survey"
    text="Create Survey"
  >
    <div>
      Create a new Survey from CSV file.
    </div>
  </ActionPanel>

  <ActionPanel
    to="/answers/new"
    image={upload}
    altText="Upload Responses"
    text="Upload Responses"    
  >
    <div>
      Upload responses from mobile app.
    </div>
  </ActionPanel>

  <ActionPanel
      to="/artifacts/new"
      image={img_upload}
      altText="Upload Artifacts"
      text="Upload Artifacts"
  >
      <div>
          Upload Artifacts.
      </div>
  </ActionPanel>

  <ActionPanel
      to="/upload/asdf"
      image={img_upload}
      altText="Upload Survey Support Data"
      text="Upload Support Data"
  >
      <div>
          Upload Support Data.
      </div>
  </ActionPanel>



</Responsive>;