import React from 'react';

import Responsive from '../../layout/Responsive';
import ActionPanel from '../../layout/ActionPanel';

import upload from '../../images/upload.png';
import plan from '../../images/plan.png';

export default () => <Responsive>
  <ActionPanel
    to="/surveys/new"
    image={plan}
    altText="Create Survey"
    text="Create Survey"
  >
    <div>
      Create a new Survey using CSV file.
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
</Responsive>;