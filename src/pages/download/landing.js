import React from 'react';

import ActionPanel from '../../layout/ActionPanel';
import Responsive from '../../layout/Responsive';

import download from '../../images/download.png';
import SurveyList from '../../cms/surveys/List';
import {Instructions} from './style.scss';
import {T, getLanguage} from '../../translations';

export default (props) => <React.Fragment>
  <SurveyList
    location={props.location} disableActionBar={true}
    listMessage={'Download survey application'}
    columnsOrder={'name createdOn'.split(' ')}
  />
  <hr/>
  <Responsive>
    <div className={Instructions}><T>
      <h3>Download and install the survey application on your tablet or mobile device{":"}</h3>
      <ol>
        <li>Click the Download Application button. The survey app will be in .apk format.</li>
        <li>Save the VDP.apk file to your computer.</li>
        <li>Then copy the application file from your computer and paste into tablet drive.</li>
        <li>Then run the application file. Click the install button. The application will have a Government of Tamil Nadu logo in the name of “Village Development Plan”.</li>
        <li>Open the application to set up the survey.</li>
        <li>Enter the Surveyor Code and press Okay.</li>
        <li>Press the Download Survey button. This will automatically download the appropriate survey to the tablet. Return to the Home screen by pressing the Back button.</li>
        <li>To administer the survey press Proceed.</li>
        <li>Ensure the tablet is connected to the internet, select Upload to sync data collected to the server.</li>
        <li>After you press Upload and the data has synced, a summary page will show you details of data that has been synced to the server. Return to the Home screen by pressing the Back button.</li>
      </ol>
      {
        (getLanguage() === 'tamil')
        ?
        <p><em>
          குறிப்பு: நீங்கள் டேப்லெட் மற்றும் கணினியை தயார் செய்ய வேண்டும். கணினியை டேப்லெட்டில் இணைக்க நீங்கள் அந்த பிராண்டிற்கான டிரைவரை நிறுவ வேண்டும்.
          இதற்கான வழிமுறைகளை <a href="/static/Instructions_Tablet_Driver_Tamil.pdf">இங்கே</a> காணலாம்.
          நீங்கள் டேப்லெட்டில் மென்பொருள் பயன்படுத்துவதற்க்கு டேப்லெட்டை தயார் செய்ய வேண்டும்.
          இதற்கான வழிமுறைகளை <a href="/static/Instructions_Tablet_Preparation_Tamil.pdf">இங்கே</a> காணலாம்.
        </em></p>
        :
        <p><em>
          Note: You may have to prepare the tablet and computer.
          You will need to install the respective brand driver to connect the computer to the tablet.
          You can find the instructions for this <a href="/static/Instructions_Tablet_Driver_English.pdf">here</a>.
          You will also need to prepare the tablet for the application.
          You can find the instructions for this <a href="/static/Instructions_Tablet_Preparation_English.pdf">here</a>.
        </em></p>
      }

    </T></div>
    <ActionPanel
      key="download-apps"
      href="/static/VDP-Android.apk"
      image={download}
      text="Download application"
    >
      <div>
        Download and install the survey application on your tablet or mobile device
      </div>
    </ActionPanel>

  </Responsive>
</React.Fragment>;