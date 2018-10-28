let backendHost, hostnamefrontend;
const hostname = window && window.location && window.location.hostname;

if(hostname === 'localhost') {  
    backendHost = 'http://localhost:3000';
    hostnamefrontend = 'http://localhost:3000';
  }else {
    backendHost = 'https://api.blockproof.ca';
    hostnamefrontend = 'https://blockproof.ca';
  }


export const API_ROOT = backendHost;
export const DOMAIN_NAME_ROOT = hostnamefrontend;