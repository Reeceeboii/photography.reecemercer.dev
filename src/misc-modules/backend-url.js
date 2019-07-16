// export the URL for the backend depending on if the app is in production
// or development.

let APIString = "";
if(process.env.NODE_ENV !== 'production'){
  APIString = "/photography";
}else{
  APIString = "https://rm-backend-services.herokuapp.com/photography";
}

module.exports = APIString;
