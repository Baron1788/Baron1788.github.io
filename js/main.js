$("#addContact").click(function () {
  //輸入姓名的input的值
  var nameVal = $("#name").val();
  //輸入電話的input的值
  var phoneVal = $("#phone").val();
  var temp =
    '<div class="contact"><p>' +
    nameVal +
    "</p><p>" +
    phoneVal +
    '</p><span class="material-symbols-outlined">cancel</span></div>';
  //if input value是空的''，要跳alert；都有填資料寫回appendArea裡面
  if (nameVal == "") {
    alert("姓名不能為空白");
  } else if (phoneVal == "") {
    alert("電話不能為空白");
  } else {
    $(".appendArea").append(temp);
  }
});

//append的元件要可以點擊時，要使用on
$(document).on("click", ".material-symbols-outlined", function () {
  $(this).parents(".contact").html("");
});

//當按鍵是data="add"時，數字增加；當按鍵是data="minus"時，數字減少
$(".count-btn").click(function () {
  //.attr()=>屬性，點擊時判斷data是什麼
  var btnType = $(this).attr("data");
  //取input的舊的值，以方便做運算
  var inputVal = $("#addResult").val();
  console.log(inputVal);
  //if點下去的按鍵data="add"=>數字＋1
  if (btnType == "add") {
    //input id="addResult"的value要加1
    $("#addResult").val(parseInt(inputVal) + 1);
  } else if (btnType == "minus" && inputVal > 1) {
    $("#addResult").val(parseInt(inputVal) - 1);
  }
});

//array(陣列)通常使用中括號
var newArray = ["基隆市", "台北市", "新竹市", "桃園市"];
console.log(newArray);
