
// with callback
// const loadImage = function(url, callback) {

//   const imgElement = document.createElement('img');
//   imgElement.src = url;

//   imgElement.onload = function() {
//     callback(null, imgElement);
//   };

//   imgElement.onerror = function() {
//     const msg = `Could not load image at ${url}`;
//     callback(new Error(msg), null);
//   };
  
// };



// with promise
const loadImage = function(url) {

  return new Promise((resolve, reject) => {

    const imgEl = document.createElement('img');
    imgEl.src = url;

    imgEl.onload = function() {
      resolve(imgEl);
    };

    imgEl.onerror = function() {
      const msg = `Could not load image at ${url}`;
      reject(new Error(msg));
    };

  });

};




const addImg = function(imgEl) {
  document.body.appendChild(imgEl);
};

