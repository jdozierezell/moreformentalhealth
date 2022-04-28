const CANVAS_SCALE = 1;
      const canvasInput = document.getElementById("canvas_holder");
      const canvas = document.getElementById("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = 1080 * CANVAS_SCALE;
      canvas.height = 1080 * CANVAS_SCALE;

      $("#project_button").on("click", function () {
      
      var myLineCount = 0;
      
        let canvasInputBox = canvasInput.getBoundingClientRect();

        let lines = [        
          document.getElementById("slogan_line1"),
          document.getElementById("line1"),
          document.getElementById("line2"),
          document.getElementById("line3"),
          document.getElementById("slogan_line2"),
          document.getElementById("canvas_footer1"),
          document.getElementById("canvas_footer2"),
          document.getElementById("canvas_footer3")
        ];

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = myBGcolor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = myDemandFontColor;
        ctx.fillRect(0, 948, canvas.width, 132);
        
        

        for (let line of lines) {
          if (line.innerText === "") continue;

          let canvasRender = document.createElement("canvas");
          canvasRender.id = "canvas-render";
          canvasRender.width = 1080 * CANVAS_SCALE;
          canvasRender.height = 1080 * CANVAS_SCALE;
          document.body.appendChild(canvasRender);
          let ctxRender = canvasRender.getContext("2d");

          ctxRender.clearRect(
            0,
            0,
            canvasRender.width * CANVAS_SCALE,
            canvasRender.height * CANVAS_SCALE
          );
          let lineStyle = window.getComputedStyle(line);
          let lineBox = line.getBoundingClientRect();
          var myLine = line.id; // Get the id
          var countbox = document.getElementById(myLine);

          canvasRender.style.fontVariationSettings =
            lineStyle.fontVariationSettings;
          ctxRender.font =
            parseInt(lineStyle.fontSize) * CANVAS_SCALE +
            "px/" +
            parseInt(lineStyle.lineHeight) * CANVAS_SCALE +
            "px" +
            " ABCGravityVariable";
          ctxRender.textAlign = "center";
          ctxRender.fillStyle = "white";
          
          if (myLine === "line1") {
          ctxRender.fillStyle = myDemandFontColor;          

            if (!countbox.classList.contains('hide_line')) {
              //console.log('Line 1 is visible');
              myLineCount = myLineCount + 1;
              //console.log(myLineCount)
            }        
          
          }
          
          else if (myLine === "line2") {          
          ctxRender.fillStyle = myDemandFontColor;
          
          if (!countbox.classList.contains('hide_line')) {
              //console.log('Line 2 is visible');
              myLineCount = myLineCount + 1;
              //console.log(myLineCount)
            } 
          
          }
          
          else if (myLine === "line3") {          
          ctxRender.fillStyle = myDemandFontColor;
          
            if (!countbox.classList.contains('hide_line')) {
              //console.log('Line 3 is visible');
              myLineCount = myLineCount + 1;
              //console.log(myLineCount)
            }           
          
          }
          
          

          
          
          
          var myBottomVar = 0;
          var myLeftVar = (1080 / 2) * CANVAS_SCALE;
          
          if (myLine === "slogan_line1") {
          myBottomVar = 128;
          ctxRender.fillStyle = mySloganFontColor;
          }
          
          else if (myLine === "slogan_line2") {
          myBottomVar = 924;
          ctxRender.fillStyle = mySloganFontColor;
          }
          
          else if (myLine === "canvas_footer1") {
          myBottomVar = 1012;
          myLeftVar = 36;
          ctxRender.font =  '36px PaulGroteskSoft-Bold';
          ctxRender.textAlign = "left";
          ctxRender.fillStyle = myBGcolor;
          }
          
          else if (myLine === "canvas_footer2") {
          myBottomVar = 1046;
          myLeftVar = 36;
          ctxRender.font =  '27px AvenirNextLTPro-Medium';
          ctxRender.textAlign = "left";
          ctxRender.fillStyle = myBGcolor;
          }
          
          else if (myLine === "canvas_footer3") {
          myBottomVar = 1012;
          myLeftVar = 1044;
          ctxRender.font =  '36px PaulGroteskSoft-Bold';
          ctxRender.textAlign = "right";
          ctxRender.fillStyle = myBGcolor;
          }
          
          
          
          else {
          
          if ($('#canvas_holder').hasClass("canvas_holder1")) {          
          myBottomVar = 815;
          
          }
          
          else if ($('#canvas_holder').hasClass("canvas_holder2")) { 
          
            if (myLineCount == 1) {
            myBottomVar = 470;
            }
            else {
            myBottomVar = 815;
            } 
             

          
          }  
          
          else if ($('#canvas_holder').hasClass("canvas_holder3")) { 
          
          
          
            if (myLineCount == 1) {
            myBottomVar = 356;
            }
            else if (myLineCount == 2) {
            myBottomVar = 585;
            }
            else {
            myBottomVar = 815;
            }
          
          


          
          }
          
          }
          
          
          
          
          
          
ctxRender.fillText(
            line.innerText,
            
            myLeftVar, myBottomVar
            
            //(1080 / 2) * CANVAS_SCALE, myBottomVar
            
            
            //(400 / 2) * CANVAS_SCALE,
            //400 * CANVAS_SCALE -
            //  (canvasInputBox.bottom - lineBox.bottom) * CANVAS_SCALE -
            //  20 * CANVAS_SCALE
          );

          ctx.drawImage(canvasRender, 0, 0);
          document.body.removeChild(canvasRender);
        }



  $('#canvas')[0].toBlob((blob) => {
    //jquery let me down.  only way i can get this to work is vanilla js -_-
    let URLObj = window.URL || window.webkitURL;
    let a = document.createElement("a");  
    a.href = URLObj.createObjectURL(blob);
    a.download = "MoreForMentalHealth.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
        
        
        /*
        var anchorTag = document.createElement("a");
        document.body.appendChild(anchorTag);
        anchorTag.download = "filename.png";
        anchorTag.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");;
        anchorTag.target = "_blank";
        anchorTag.click();
        */
        
        
        
      });