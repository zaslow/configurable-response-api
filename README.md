# configurable-response-api
A sample application that returns a given JSON payload after a given amount of time

# Setup

## Install dependencies
```
$ npm install
```

## Configuration (optional)
Add a `.env` file that uses one or more of the following options:
```
# Number of seconds the API takes to respond (Default: 3)
DELAY

# Path to a local JSON file to be used as the response (Default: ./data.json)
LOCAL_DATA_PATH

# Port the API runs on (Default: 3000)
PORT

# URL that returns a JSON response; takes precendent over LOCAL_DATA_PATH (Default: null)
REMOTE_DATA_PATH

# Path for the response endpoint (Default: /sample)
ROUTE
```
e.g.
```
DELAY=5
REMOTE_DATA_PATH=http://httpbin.org/get
```

# Usage

## Start the app
```
npm start
```

## Get a reponse
```
curl -k http://localhost:3000/sample
```
