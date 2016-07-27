function startApp(){
    stretchBody();
    
    var checkAppStatus = localStorage.getItem("appStatus");
    if(checkAppStatus == "registered"){
        ContBtnHandle("block");
        stabLogoHandle();
        stabRegFormHandle("none");
    }else{
        ContBtnHandle("none");
        stabRegFormHandle("block");
        regBtnHandle();
    }
    
    
}

function stretchBody(){
	var x = window.innerHeight;
	
	var bodyReg = document.querySelector("body");
	bodyReg.style.height = x + "px";
	
	//alert(x);

}

function stabLogoHandle(){
    var stabLogo = document.querySelector(".stabLogo");
    stabLogo.style.width = "70%";
    stabLogo.style.height = "400px";
}

function stabRegFormHandle(formDisplay){
    var stabRegForm = document.querySelector(".stabRegForm");
    var theH3 = document.querySelector(".theH3");
    
    stabRegForm.style.display = formDisplay;
    theH3.style.display = formDisplay;
}


function ContBtnHandle(displayStatus){
    var continueBtn = document.querySelector(".continueBtn");
    continueBtn.style.display = displayStatus;
    continueBtn.onclick = openOS;
}

function openOS(){
    window.location.assign("main.html");
}

function regBtnHandle(){
    var regBtn = document.querySelector(".regBtn");
    regBtn.onclick = checkFields;
}


function checkFields(){
	var stdFullName = document.querySelector(".stdFullName");
	var stdClass = document.querySelector(".stdClass");
	var stdParPhone = document.querySelector(".stdParPhone");
	var stdParEmail = document.querySelector(".stdParEmail");
	
	if(stdFullName.value == "" || stdFullName.value == null){
		alert("Student Name Field is empty!");
	}else if(stdClass.value == "" || stdClass.value == null){
		alert("Class Field is empty!");
	}else if(stdParPhone.value == "" || stdParPhone.value == null){
		alert("Parent's Phone Field is empty!");
	}else if(stdParEmail.value == "" || stdParEmail.value == null){
		alert("Parent's Email Field is empty!");
	}else{
		var connStatus1 = localStorage.getItem("connStatus");
        alert(connStatus1);
        if(connStatus1 == "connected"){
            saveDetails();
            
        }else{
           // alert("Please turn on your internet connection to register!");
              saveDetails();
        }
        
	}
	
	function saveDetails(){
	
		$.ajax
		({type:"POST",
		  url: "http://www.chroniclesoft.com/stabRegistration.php", 
		  data:$(".stabRegForm").serialize(), 

			dataType: "json",
			  complete: function(){
				//alert("Success");
                alert("Registration Successful!");
                stabLogoHandle();
                ContBtnHandle("block");
                stabRegFormHandle("none");
				localStorage.setItem("appStatus", "registered");
			},

			success: function(response) {
				//alert("Success");
		}});
	}
 
    
}


window.onload = startApp;