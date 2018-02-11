import React from 'react';

import ActionPanel from '../layout/ActionPanel';
import Responsive from '../layout/Responsive';

import download from '../images/download.png';
import upload from '../images/upload.png';
import validate from '../images/validate.png';
import visualization from '../images/visualization.png';
import exportImg from '../images/export.png';
import plan from '../images/plan.png';

export default () => <Responsive>
  <ActionPanel
    key="new-survey"
    to="/upload"
    image={upload}
    altText="Create Survey"
    text="Upload Survey & Related Data"
  >
    <div>
      Create surveys, Upload survey response data
    </div>
  </ActionPanel>

  <ActionPanel
    key="download-apps"
    to="/download"
    image={download}
    altText="Download Survey Applications"
    text="Download Survey Applications"
  >
    <div>
      Download mobile and 
      connector applications.
    </div>
  </ActionPanel>

  <ActionPanel
    to="/surveys/new"
    key="validate-responses"
    image={validate}
    altText="Validate Survey Data"
    text="Validate Survey Data"
  >
    <div>
      Perform validations.
    </div>
  </ActionPanel>

  <ActionPanel
    to="/surveys/new"
    key="export-responses"
    image={exportImg}
    altText="Export Survey Data"
    text="Export Survey Responses"
  >
    <div>
      Export Survey Responses
    </div>
  </ActionPanel>

  <ActionPanel
    to="/surveys/new"
    image={visualization}
    key="visualization-responses"
    altText="Visualizations"
    text="Visualize Survey Data"
  >
    <div>
      Visualize survey data.
    </div>
  </ActionPanel>

  <ActionPanel
    to="/surveys/new"
    image={plan}
    key="planning"
    altText="Planning and Action"
    text="Planning"
  >
    <div>
      View and modify action plan.
    </div>
  </ActionPanel>
</Responsive>;
