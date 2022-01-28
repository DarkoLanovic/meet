import { mockData } from './mock-data';
import axios from 'axios';
import NProgress from 'nprogress';  

// use this to handle your API calls

/**
 * @param {*} events:
 * The following function should be in the “api.js” file.
 * This function takes an events array, then uses map to create a new array with only locations.
 * It will also remove all duplicates by creating another new array using the spread operator and spreading a Set.
 * The Set will remove all duplicates from the array.
 */

export const extractLocations = (events) => {
  var extractLocations = events.map((event) => event.location);
  var locations = [...new Set(extractLocations)];
    return locations;
};


export const getEvents = async () => {
  NProgress.start();
  
  // return the mock data to localhost
  if (window.location.href.startsWith('http://localhost')) {
    return mockData;
  }
  const token = await getAccessToken();
  if (token) {
    removeQuery();
    const url = `https://06oxy5ugn2.execute-api.us-east-1.amazonaws.com/dev/api/get-events/${token}`;   
    const result = await axios.get(url);
    if (result.data) {
      var locations = extractLocations(result.data.events);
      localStorage.setItem("lastEvents", JSON.stringify(result.data));
      localStorage.setItem("locations", JSON.stringify(locations));
    }
    
    NProgress.done();
    
    return result.data.events;
  }
};


// This is the function that will remove the code from the URL once you’re finished with it
const removeQuery = () => {
  if (window.history.pushState && window.location.pathname)
  {
    // checks is there a paht and then build the URL with curent path
    var newurl = window.location.protocol + 
    "//" + 
    window.location.host + 
    window.location.pathname;
    window.history.pushState("", "", newurl);
  } else {
    // build the URL without a path using "window.history.pushState()"
    newurl = window.location.protocol + "//" + window.location.host;
    window.history.pushState("", "", newurl);
  }
};


// This function takes the "accessToken" you found and checks whether it’s a valid token or not
const checkToken = async (accessToken) => {
  const result = await fetch(
    `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`
  )
    .then((res) => res.json())
    .catch((error) => error.json());

  return result;
};


// This function takes your code and encodes it using "encodeURIComponent 
// then uses the encoded code to get your token.
const getToken = async (code) => {
  const encodeCode = encodeURIComponent(code);
  const { access_token } = await fetch(
    `https://06oxy5ugn2.execute-api.us-east-1.amazonaws.com/dev/api/token/${encodeCode}`
    )
    .then((res) => {
      return res.json();
    })
    .catch((error) => error);

  access_token && localStorage.setItem("access_token", access_token);

  return access_token;

}


export const getAccessToken = async () => {
  // trying to retrive access token by looking in the localStorage
  const accessToken = localStorage.getItem('access_token');
  // checking whether an access-token was found.
  const tokenCheck = accessToken && (await checkToken(accessToken));
  if (!accessToken || tokenCheck.error) {
    await localStorage.removeItem("access_token");
    const searchParams = new URLSearchParams(window.location.search);
    const code = await searchParams.get("code");
    if (!code) {
      // user is automatically redirected to the Google Authorization screen
      // where they can sign in and receive their code
      const results = await axios.get(
        "https://06oxy5ugn2.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url"
        );
        const { authUrl } = results.data;
        return (window.location.href = authUrl);
      }
      return code && getToken(code);
    }
    return accessToken;
}



