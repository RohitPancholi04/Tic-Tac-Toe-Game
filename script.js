document.addEventListener("DOMContentLoaded",function(){

    const allBoxes = document.querySelectorAll(".box");
    const winClass = document.querySelector(".win-class");
    const winPara = document.querySelector("#win-para");
    const resetButton = document.querySelector("#reset-button");
    const winButton = document.querySelector("#win-button");

 

    let turnX = true;

    let array = [[0,1,2] , [0,3,6] , [0,4,8] , [1,4,7] , [2,5,8] , [2,4,6] , [3,4,5] , [6,7,8] ];

    let countDraw = 0;
    
    allBoxes.forEach((box) => {
        box.addEventListener("click" , () => {
        if(turnX){
            box.innerText = 'X';
            box.style.color = "blue";
            turnX = false;
        }
        else{
            box.innerText = 'O';
            box.style.color = "red";
            turnX = true;  
        }
   
        countDraw++;
        if(countDraw == 9){
            winClass.style.display = "block";
            winPara.innerText = "Sorry,It is Draw:";
        }

        box.disabled = true;

        checkWinner();
       
        })

       

        function showWinner(winner){
          winClass.style.display = "block";
          winPara.innerText = `congratulations,winner is:  ${winner}`;
          turnX = true;
          disable();
        }


        function disable(){
            allBoxes.forEach((box) => {
                box.disabled = true;
           })
        }




       function checkWinner(){
        for(let arr of array){
            let pos1 = allBoxes[arr[0]].innerText;
            let pos2 = allBoxes[arr[1]].innerText;
            let pos3 = allBoxes[arr[2]].innerText;
  
            if(pos1 != "" && pos2 != ""  && pos3 != "" ){
              if(pos1 === pos2  && pos2 === pos3){
                //   console.log("winner is:" , pos1);
                  showWinner(pos1);
              }
            }
          }
        }



        resetButton.addEventListener("click" , function(){
            box.innerText = "";
            box.disabled = false;
        })


        winButton.addEventListener("click" , function(){
            box.innerText = "";
            box.disabled = false;
            winClass.style.display = "none";
        })

    })

})