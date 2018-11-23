# LabFolderELN Frontend

The repo is Front-end to acess Back-end API using React 

## Getting Started

The Front-end project is made using React's create-reat-app. The REST API deployed on Google cloud while Front end on Heroku. 
 [Live Demo](http://labfolderfronttest.herokuapp.com/index.html)
 [REST API Repo](https://github.com/luqmanulkhair/labfolderBackend)
 
### Prerequisites

You must have Node and npm avaliable on your local machine plus to deal with CORS problem install [CORS extension](https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc)  for chrome. Provide the following configration in CORS extension.
#### Request Headers:
[Origin:](https://www.moesif.com/blog/technical/cors/Authoritative-Guide-to-CORS-Cross-Origin-Resource-Sharing-for-REST-APIs/#how-is-origin-defined)
```
http://35.244.162.226/:80
```
#### Response Headers:
[Access-Control-Allow-Headers](https://www.moesif.com/blog/technical/cors/Authoritative-Guide-to-CORS-Cross-Origin-Resource-Sharing-for-REST-APIs/#response-headers):
```
Content-Type
```
## Installing
After cloning please run ``` npm install``` which will install required modules.
Once all modules installed than run ``` npm start``` 

## Deployment

For deployment ``` npm run build``` build is used.
## Know Issues
In production should be deployed using SSL/TLS for security. Access front-end using http only otherwise mixed-content error will be thrown by browser. 
Use CORS browser plugin if testing Front-end locally while accessing Back-end on different Origin.  
