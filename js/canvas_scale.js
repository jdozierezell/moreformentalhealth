let scaledWrapper = document.getElementsByClassName('scaled-wrapper')[0];

let applyScaling = scaledWrapper => {
  
  // Get the scaled content, and reset its scaling for an instant
  let scaledContent = scaledWrapper.getElementsByClassName('scaled-content')[0];
  scaledContent.style.transform = 'scale(1, 1)';
  
  let { width: cw, height: ch } = scaledContent.getBoundingClientRect();
  let { width: ww, height: wh } = scaledWrapper.getBoundingClientRect();
  
//  let scaleAmtX = ww / cw;
//  let scaleAmtY = wh / ch;
  let scaleAmtX = Math.min(ww / cw, wh / ch);
  let scaleAmtY = scaleAmtX;
  
  
  scaledContent.style.transform = `scale(${scaleAmtX}, ${scaleAmtY})`;
        
};



$(window).on("load resize scroll",function(e){
    applyScaling(scaledWrapper);
});


$('body').on('click', '.nav_open', function() {
    applyScaling(scaledWrapper);
});

$('body').on('click', '.nav_close', function() {
    applyScaling(scaledWrapper);
});