;(
  function () {
    var header,
        headerRec,
        about,
        aboutRec,
        aboutInfo,
        aboutInfoRec;
    // prevent js from loading too early
    document.addEventListener("load", mainFunction());
    // assign vars with correct element dimentions and create scroll event
    function mainFunction() {
      header          = document.getElementById("header");
      about           = document.getElementById("about");
      aboutInfo       = document.getElementById("about-info");
      aboutInfoSub    = document.getElementById("about-info-sub");
      window.addEventListener("scroll", changeClass);
    }
    function changeClass() {
      headerRec      = header.getBoundingClientRect();
      aboutRec       = about.getBoundingClientRect();
      aboutInfoRec   = aboutInfo.getBoundingClientRect();

      if (headerRec.bottom >= aboutRec.bottom) {
        header.className = "header header-background";
      } else {
        header.className = "header";
      }

      if (aboutInfoRec.top <= headerRec.bottom || aboutInfoRec.top <= 40) {
        aboutInfo.className     = "about-info about-left";
        aboutInfoSub.className  = "about-info about-right";
      } else {
        aboutInfo.className     = "about-info";
        aboutInfoSub.className  = "about-info";
      }
    }
  }
());
