if(PublicSacrificeDay()){
    document.getElementsByTagName("html")[0].setAttribute("style","filter:gray !important;filter:grayscale(100%);-webkit-filter:grayscale(100%);-moz-filter:grayscale(100%);-ms-filter:grayscale(100%);-o-filter:grayscale(100%);");
  }
  
  function PublicSacrificeDay(){
      var currentdate = new Date();
      if(currentdate.getMonth() == 12 && currentdate.getDate() == 13)
      {
        return true
      } 
      else 
      {
        return false
      }
  }