function myFunction(imgs) {
    let expandImg = document.getElementById("expandedImg");
    let imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
  }

  /*Reference til https://www.w3schools.com/howto/howto_js_tab_img_gallery.asp?fbclid=IwAR3NmFxIdFjP17gwK9dVmiEaSiN0hgkKdJhtGlJAEawhdIsuwewt_TRbpRc*/