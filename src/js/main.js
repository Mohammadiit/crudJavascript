var modal=document.getElementById("myModal");
var btn=document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
var editFlag=0,editable;
function validateForm() {
  modal.style.display = "none";

  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
  var y = document.forms["myForm"]["lname"].value;
  if (y == "") {
    alert("Name must be filled out");
    return false;
  }
  // // var text="kkkkk";
  // var arr=[];
  // arr.push(x);
  // arr.push(y);
  //
  // localStorage.data=JSON.stringify(arr);
  // var arr1= JSON.parse(localStorage.getItem("arr"));
  // var t=x;
  //
  // localStorage.clear();
  if(editFlag==0) {
    var cars = [];
    if (typeof (Storage) !== "undefined") {
      var oldVer = JSON.parse(localStorage.getItem("savedData"));
      if (oldVer !== null)
        cars = oldVer;
    }
    var car = {
      name: x,
      age: y
    };
    cars.push(car);
    localStorage.setItem("savedData", JSON.stringify(cars));
    var objects = JSON.parse(localStorage.getItem("savedData"));
    // for
    var i;
    var text = "";
    for (i = 0; i < objects.length; ++i) {
      const temp = i;
      text += "<b>" + "Brand : " + "</b>" + objects[i].name + "<br>" + `<button onclick='editFunc(${temp})'>` + "edit" + "</button>"+  `<button onclick='deleteFunc(${temp})'>` + "delete" + "</button>";

      text += "<b>" + "Model : " + "</b>" + objects[i].age + "<br>" + "<br>";
    }
    // text+=car.name;
    // text+=car.age;
    // var comb=x+" "+y;
    // localStorage.t=comb;
    // // var arr1=
    // var i,text="";
    // for(i=0;i<localStorage.length;++i){
    //    var k=localStorage.key(i);
    //    var v=localStorage.getItem(k);
    //   document.getElementById("b").innerHTML+=`${key}:${value}<br>`;
    // }
    // // debugger;
    //
    document.getElementById("b").innerHTML = text;
  }
  else{
    var cars = [];
    if (typeof (Storage) !== "undefined") {
      var oldVer = JSON.parse(localStorage.getItem("savedData"));
      if (oldVer !== null)
        cars = oldVer;
    }
    var car = {
      name: x,
      age: y
    };
    // cars.push(car);
    cars[editable]=car;
    localStorage.setItem("savedData", JSON.stringify(cars));
    var objects = JSON.parse(localStorage.getItem("savedData"));
    // for
    var i;
    var text = "";
    for (i = 0; i < objects.length; ++i) {
      const temp = i;
      text += "<b>" + "Brand : " + "</b>" + objects[i].name + "<br>" + `<button onclick='editFunc(${temp})'>` + "edit" + "</button>"+ `<button onclick='deleteFunc(${temp})'>` + "delete" + "</button>";

      text += "<b>" + "Model : " + "</b>" + objects[i].age + "<br>" + "<br>";
    }
    // text+=car.name;
    // text+=car.age;
    // var comb=x+" "+y;
    // localStorage.t=comb;
    // // var arr1=
    // var i,text="";
    // for(i=0;i<localStorage.length;++i){
    //    var k=localStorage.key(i);
    //    var v=localStorage.getItem(k);
    //   document.getElementById("b").innerHTML+=`${key}:${value}<br>`;
    // }
    // // debugger;
    //
    document.getElementById("b").innerHTML = text;
    editFlag=0;


  }

}
function editFunc(i) {
  editFlag=1;
  editable=i;
  modal.style.display = "block";


}
function  deleteFunc(i) {
  var cars = [];
  if (typeof (Storage) !== "undefined") {
    var oldVer = JSON.parse(localStorage.getItem("savedData"));
    if (oldVer !== null)
      cars = oldVer;
  }
  cars.splice(i,1);
  localStorage.setItem("savedData", JSON.stringify(cars));
  var objects = JSON.parse(localStorage.getItem("savedData"));
  // for
  var i;
  var text = "";
  for (i = 0; i < objects.length; ++i) {
    const temp = i;
    text += "<b>" + "Brand : " + "</b>" + objects[i].name + "<br>" + `<button onclick='editFunc(${temp})'>` + "edit" + "</button>"+  `<button onclick='deleteFunc(${temp})'>` + "delete" + "</button>";

    text += "<b>" + "Model : " + "</b>" + objects[i].age + "<br>" + "<br>";
  }
  document.getElementById("b").innerHTML = text;

}
