console.log("Script is connected!!!")

setInterval(handleName, 100);

function validate_form(){
    var name = document.getElementById("name_form");
    var number = document.getElementById("number");
    var company_name = document.getElementById("company_name");

    var msg = ""
    if(name.value==""){
        msg = "Name cannot be empty";
    }
    else if (number.value == ""){
        msg = "Number cannot be empty";
    } else if (company_name.value == ""){
        msg = "Company Name cannot be empty"
    } else if (number.value.length != 10){
        msg = "Number should be of 10 digits"
    } else if ((parseInt(number.value) + "").length != number.value.length){
        msg = "Number should consist of all digits"
    } else {
        msg="***Name: " + name.value + "***Number: " + number.value + "***Company Name: " + company_name.value;
    }
    console.log(parseInt(number.value) + "");
    console.log(number.value.length);
    document.getElementById("success_message").innerHTML = msg;
}

function handleName(){
    name=document.getElementById("name_form");
    if(name.value=""){
        console.log("Name is empty");
    }
}