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
    to="/upload-survey"
    image={plan}
    text="Surveys"
  >
    <div>
      Upload survey, survey images, surveyors, and geographic area to be covered
    </div>
  </ActionPanel>

  <ActionPanel
    key="download-apps"
    to="/download?enabled=true"
    image={download}
    text="Download Survey Application"
  >
    <div>
      Download and install application on your tablet or mobile device
    </div>
  </ActionPanel>

  <ActionPanel
    key="upload-app-data"
    to="/answers/new"
    image={upload}
    text="Upload Data"
  >
    <div>
      Sync the data collected to the server
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
    text="Visualize Data"
  >
    <div>
      View pictorial representations of the data collected
    </div>
  </ActionPanel>

  <ActionPanel
    to="/plans"
    image={plan}
    key="planning"
    text="Planning"
  >
    <div>
      Upload and view village action plans
    </div>
  </ActionPanel>
</Responsive>;
