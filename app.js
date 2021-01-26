
loadImage('./images/cat1.jpg', (error, imgEl) => {
  if (error) {
    console.log(error.message);
    return;
  }
  addImg(imgEl);
  loadImage('./images/cat2.jpg', (error, imgEl) => {
    if (error) {
      console.log(error.message);
      return;
    }
    addImg(imgEl);
    loadImage('./images/cat3.jpg', (error, imgEl) => {
      if (error) {
        console.log(error.message);
        return;
      }
      addImg(imgEl);
    })
  });


});





  