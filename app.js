
// loadImage('./images/cat1.jpg', (error, imgEl) => {
//   if (error) {
//     console.log(error.message);
//     return;
//   }
//   addImg(imgEl);
//   loadImage('./images/cat2.jpg', (error, imgEl) => {
//     if (error) {
//       console.log(error.message);
//       return;
//     }
//     addImg(imgEl);
//     loadImage('./images/cat3.jpg', (error, imgEl) => {
//       if (error) {
//         console.log(error.message);
//         return;
//       }
//       addImg(imgEl);
//     })
//   });


// });



Promise.all([
  loadImage('./images/cat1.jpg'),
  loadImage('./images/cat2.jpg'),
  loadImage('./images/cat3.jpg')
])
.then(imgElements => {
  imgElements.forEach(imgElement => addImg(imgElement));
})
.catch(err => console.log(err.message));
  