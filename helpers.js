
// with callback
const loadImage = function(url, callback) {

  const imgElement = document.createElement('img');
  imgElement.src = url;

  imgElement.onload = function() {
    callback(null, imgElement);
  };

  imgElement.onerror = function() {
    const msg = `Could not load image at ${url}`;
    callback(new Error(msg), null);
  };
  
};





const addImg = function(imgEl) {
  document.body.appendChild(imgEl);
};

