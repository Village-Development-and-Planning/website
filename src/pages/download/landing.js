import React from 'react';

import Responsive from '../../layout/Responsive';
import ActionPanel from '../../layout/ActionPanel';

import download from '../../images/download.png';
//import mobileApp from '../../static/vdp-android.apk';

export default () => <Responsive>
  <ActionPanel
    href="/static/VDP-Android.apk"
    image={download}
    altText="Download App"
    text="Download Mobile App"
  >
    <div>
      Download Android Mobile App
    </div>
  </ActionPanel>

</Responsive>;