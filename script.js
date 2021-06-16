$(document).ready(function () {
    let cellContainer = $(".input-cell-container");

    for(let i=1;i<=100;i++){
  let ans = "";

  let n = i;

  while (n > 0) {
    let rem = n % 26;
    if (rem == 0) {
      ans = "Z" + ans;
      n = Math.floor(n / 26) - 1;
    } else {
      ans = String.fromCharCode(rem - 1 + 65) + ans;
      n = Math.floor(n / 26);
    }
  }
    
  let column = $('<div class="column-name colId-'+i+'" id="colCod-'+ans+' ">'+ans+'</div>');
  $(".column-name-container").append(column);

  let row = $('<div class="row-name" >'+i+'</div>');
  $(".row-name-container").append(row);
    }
  for(let i = 1;i<=30;i++)
  {
      let row = $('<div class="cell-row"></div>');
      for(let j = 1; j <=30;j++)
      {
           let colCode = $('.colId-'+j+'').attr("id").split("-")[1];
            let column = $('<div class="input-cell" contenteditable="false" id="row-'+i+'-col-'+j+'" data="code-'+colCode+'"></div>');
            //console.log(column);
            row.append(column);
      }
      $(".input-cell-container").append(row);
  }

  $(".align-icon").click(function(){
    $(".align-icon.selected").removeClass("selected");
    $(this).addClass("selected");
  });

  $(".style-icon").click(function(){
    $(this).toggleClass("selected");
  });

  $(".input-cell").click(function(e){
    if(e.ctrlKey){
      let [rowId,colId] = getRowCols(this);

      if(rowId > 1){
      let topCellSelected = $('#row-'+(rowId-1)+'-col-'+colId).hasClass("selected");
     // console.log("topCellSelected "+rowId+" "+colId);
      if(topCellSelected){
         $(this).addClass("top-cell-selected");
         $('#row-'+(rowId-1)+'-col-'+colId).addClass("bottom-cell-selected");
      }  
    }
    if(rowId < 50){
      let bottomCellSelected = $('#row-'+(rowId+1)+'-col-'+colId).hasClass("selected");
      //console.log("bottomCellSelected "+bottomCellSelected);
      if(bottomCellSelected){
         $(this).addClass("bottom-cell-selected");
         $('#row-'+(rowId+1)+'-col-'+colId).addClass("top-cell-selected");
      }
    }
    if(colId > 1){
      let leftCellSelected = $('#row-'+rowId+'-col-'+(colId-1)).hasClass("selected");
      //console.log("leftCellSelected "+leftCellSelected);
      if(leftCellSelected){
         $(this).addClass("left-cell-selected");
         $('#row-'+rowId+'-col-'+(colId-1)).addClass("right-cell-selected");
      }
    }
    if(colId < 50){
      let rightCellSelected = $('#row-'+rowId+'-col-'+(colId+1)).hasClass("selected");
      if(rightCellSelected){
         $(this).addClass("right-cell-selected");
         $('#row-'+rowId+'-col-'+(colId+1)).addClass("left-cell-selected");
      }
    }
    $(this).addClass("selected");
  }
    else {
    
    $(".input-cell").removeClass("right-cell-selected");
    $(".input-cell").removeClass("left-cell-selected");
    $(".input-cell").removeClass("top-cell-selected");
    $(".input-cell").removeClass("bottom-cell-selected");
    $(".input-cell.selected").removeClass("selected");
    $(this).addClass("selected");
    }
  });

  $(".input-cell").dblclick(function(){
    $(".input-cell.selected").removeClass("selected");
    $(this).addClass("selected");
    $(this).attr("contenteditable","true");
    $(this).focus();
  });

  $(".input-cell").blur(function(){
    $(".input-cell.selected").attr("contenteditable","false");
  })
  $(".input-cell-container").scroll(function(){
  
    $(".column-name-container").scrollLeft(this.scrollLeft);
    $(".row-name-container").scrollTop(this.scrollTop);
  });


 


});

function updateCell(property,value){
  $(".input-cell.selected").each(function(){
    $(this).css(property,value)
  })
}

$(".icon-bold").click(function(){
  console.log("dd");
  if($(this).hasClass("selected"))
  {
  updateCell("font-weight","");
  }
  else
  {
  updateCell("font-weight","bold");
  }
})

$(".icon-italic").click(function(){
  console.log("dd");
  if($(this).hasClass("selected"))
  {
  updateCell("font-style","");
  }
  else
  {
  updateCell("font-style","italic");
  }
})

$(".icon-underline").click(function(){
  console.log("dd");
  if($(this).hasClass("selected"))
  {
  updateCell("text-decoration","");
  }
  else
  {
  updateCell("text-decoration","underline");
  }
})

function getRowCols(ele)
{
  let ArrayId = $(ele).attr("id").split("-");
  let rowId = parseInt(ArrayId[1]);
  let colId = parseInt(ArrayId[3]);
  return [rowId,colId];
}


