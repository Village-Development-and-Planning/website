import React from 'react';

import ActionPanel from '../layout/ActionPanel';
import Responsive from '../layout/Responsive';

import download from '../images/download.png';
import SurveyList from '../cms/surveys/List';

export default (props) => <React.Fragment>
  <SurveyList
    location={props.location} disableActionBar={true}
    listMessage={'Surveys Currently Live'}
    columnsOrder={'name createdOn'.split(' ')}
  />
  <Responsive>
    <ActionPanel
      key="download-apps"
      href="/static/VDP-Android.apk"
      image={download}
      text="Download Android Application"
    >
      <div>
        Download and install application on your Android tablet
      </div>
    </ActionPanel>

  </Responsive>
</React.Fragment>;