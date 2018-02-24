# Household Aggregate Components

## Household/Surveyor

  For UI, refer sheet for HH Village Level.  The component is the building blocks, which we'll list for the UI.

  Usage:

  ````html
  <SurveyorAggregate 
    surveyor={surveyorObj} 
    aggregate={aggregateObj}
  />
  ````

  Surveyor JSON (only relvant fields shown):
  ````json
  {
    "username": "09082404",
    "name": "M.DEIVANAI",
    "payload": {
      "PANCHAYAT_NAME": "P.CHETTIHALLI",
      "PANCHAYAT_CODE": "24",
      "BLOCK_NAME": "PALACODE",
      "BLOCK_CODE": "08",
      "DISTRICT_NAME": "DHARMAPURI",
      "DISTRICT_CODE": "09",
      "SURVEYOR_CODE": "09082404",
      "SURVEYOR_NAME": "M.DEIVANAI",
      "SURVEY": "Household",
      "HABITATION_NAME": [
        " GUNDANKOTTAI",
        " MUNUSAMY KOTTA",
        "AYYAR KOTTAI",
        "BATTRAHALLI",
        "BELRAMPATTY KOOT ROAD",
        "BETHANAHALLI",
        "BOYER KOTTAI",
        "GOWNUR",
        "JOHIPATTY",
        "KATTU KOTTAI",
        "KUMMANAICKENNAHALLI",
        "PARIYOUR",
        "PURATHUR",
        "PURATHUR COLONY (N)",
        "THEERTHARAHALLI",
        "P.SETTIHALLI"
      ]
    },
    "roles": [
      "SURVEYOR"
    ],
  }
  ````

  Aggregate Object:

  ````json
  {
    "key": "09082404",
    "type": "SurveyorAggregate/Household",
    "data": {
      "numNotAlive": {
        "value": 1,
        "count": 56
      },
      "numNotHere": {
        "value": 0,
        "count": 56
      },
      "numNotWilling": {
        "value": 0,
        "count": 56
      },
      "numAnswered": {
        "value": 55,
        "count": 56
      },
      "numSurveys": {
        "value": 56,
        "count": 56
      },
      "timeLesser15": {
        "value": 2,
        "count": 56
      },
      "timeLesser5": {
        "value": 1,
        "count": 56
      },
      "avgTime": {
        "value": 84000,
        "count": 56
      }
    },
  }
  ````

## Household/Location

  These components are used to provide location specific data on the surveying.  We need components for Panchayat, Block, and District.  These are shown in sheets:  HH Block, HH District, HH State, respectively (component will be used as a list.)  
  
  All three components have the same structure.  The aggregate, and the weekAggregates parameters change in structure.


  ````html
  <PanchayatAggregate
    location={locationObj} 
    aggregate={aggregateObj}
    weekAggregates={weekAggregates}
  />
  ````

### Location JSON

  The location JSON structure is the same for all locations, and is as follows:

  ````json
  {
    "type": "PANCHAYAT",
    "name": "KOOTHAPADI",
    "code": "12",
    "uid": "09/03/12",
    "payload": {
      "DISTRICT_CODE": "09",
      "DISTRICT_NAME": "DHARMAPURI",
      "BLOCK_CODE": "03",
      "BLOCK_NAME": "PENNAGARAM",
      "PANCHAYAT_CODE": "12",
      "PANCHAYAT_NAME": "KOOTHAPADI"
    },
    "children": [
      {
        "name": "BOOTHIPATTI",
        "code": "03",
        "uid": "09/03/12/03",
        "_id": "5a7f61598b4e5b145abaaac6"
      },
      {
        "name": "HALEPURAM",
        "code": "04",
        "uid": "09/03/12/04",
        "_id": "5a7f61598b4e5b145abaaac5"
      },
      ...
    ],
  }
  ````

### Aggregate Object

  The aggregate object contains the data for the survey answer stats, and the GPS stats.  The sample JSON for a Panchayat (also called Village) is shown below.  The structure is the same for Blocks and Districts, except the `type` changes accordingly.

  ````json
  {
    "key": "09082404",
    "type": "LocationAggregate/Household/PANCHAYAT",
    "data": {
      "numNotAlive": {
        "value": 1,
        "count": 56
      },
      "numNotHere": {
        "value": 0,
        "count": 56
      },
      "numNotWilling": {
        "value": 0,
        "count": 56
      },
      "numAnswered": {
        "value": 55,
        "count": 56
      },
      "numSurveys": {
        "value": 56,
        "count": 56
      },
      "avgTime": {
        "value": 84000,
        "count": 56
      },
      "gpsReadings": {
        "value": { 
          // Histogram style data
          "<lat1>,<long1>": 3, 
          "<lat2>,<long2>": 4,
          ...
         },
        "count": 56
      }
    },
  }
  ````

  