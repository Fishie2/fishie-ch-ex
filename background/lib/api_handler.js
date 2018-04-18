function generateRequest(resolveHandler, errorHandler){
  xhr = new XMLHttpRequest();   // new HttpRequest instance 
  xhr.onload = resolveHandler;
  xhr.onerror = errorHandler;
  return xhr;
}
function sendRequest(xhr, apiName, fieldName, data){
  let url = "http://45.55.37.15:5000/api/v0.1/";
  xhr.open("POST", url+apiName);
  let request = {};
  request[fieldName] = data; 
  xhr.send(JSON.stringify(request));
}
