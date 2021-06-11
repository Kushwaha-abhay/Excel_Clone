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

  $(".input-cell").click(function(){
    $(".input-cell.selected").removeClass("selected");
    $(this).addClass("selected");
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


