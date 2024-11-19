window.onscroll = function(){
    scrollupdate();
}

function scrollupdate(){
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    
   let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("progress").style.height = scrolled + "%";
}