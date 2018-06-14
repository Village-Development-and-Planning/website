import React from 'react';

import ActionPanel from '../layout/ActionPanel';
import Responsive from '../layout/Responsive';
import download from '../images/download.png';
import upload from '../images/upload.png';
import validate from '../images/validate.png';
import visualization from '../images/visualization.png';
import exportImg from '../images/export.png';
import plan from '../images/plan.png';
import survey from '../images/survey.png';

export default () => <Responsive>
  <ActionPanel
    key="new-survey"
    to="/upload-survey"
    image={survey}
    text="Surveys"
  >
    <div>
      Create a new survey or view and edit existing surveys
    </div>
  </ActionPanel>

  <ActionPanel
    key="download-apps"
    to="/download?enabled=true"
    image={download}
    text="Download Survey Application"
  >
    <div>
      Download and install the survey application on your tablet or mobile device
    </div>
  </ActionPanel>

  <ActionPanel
    key="upload-app-data"
    to="/answers/new"
    image={upload}
    text="Upload Data"
  >
    <div>
      Sync data collected to the server
    </div>
  </ActionPanel>

  <ActionPanel
    to="/validation?enabled=true"
    key="validate-responses"
    image={validate}
    text="Validate Data"
  >
    <div>
      Check and monitor the quality of data collected
    </div>
  </ActionPanel>

  <ActionPanel
    to="/export?enabled=true"
    key="export-responses"
    image={exportImg}
    text="Export Data"
  >
    <div>
      Generate a CSV file that can be imported into various analytical tools
    </div>
  </ActionPanel>

  <ActionPanel
    to="/visualizations"
    image={visualization}
    key="visualization-responses"
    text="Visualizations"
  >
    <div>
      View pictorial representations of the data collected
    </div>
  </ActionPanel>

  <ActionPanel
    to="/plans?type=plan"
    image={plan}
    key="planning"
    text="Plans"
  >
    <div>
      Upload and view village development plans
    </div>
  </ActionPanel>
</Responsive>;
