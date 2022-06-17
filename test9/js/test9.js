function validateAll(frm){
	return validPass(frm)  && validLength(frm) && validType(frm);
}

function validPass(frm){
    var errMsg = "";
	var inputValue = frm.password.value.trim();
    var letters = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{1,}$/;
    if (inputValue.match(letters)){
        clearErr("passID","passErr");
        return true;
    }
    else{
        errMsg= "Password should include at least one Uppercase letter, one lowercase letter, and one digit. ";
        displayError("passID", "passErr", errMsg);
        return false;
    }
}

function validLength(frm){
    var errMsg = "";
	var inputValue = frm.password.value.trim();
    var letters = /^[a-zA-Z0-9]{8,16}$/;
    if (inputValue.match(letters)){
        clearErr("passID","passErr");
        return true;
    }
    else{
        errMsg= "Password must include 8 to 16 characters";
        displayError("passID", "passErr", errMsg);
        return false;
    }
}

function validType(frm){
    var radio_count = frm.type.length;
    var temp = false;

    for(var i = 0; i<radio_count; i++){
        if(frm.type[i].checked == true){
            temp = true;
        }
    }

    if(!temp){
        errMsg= "Please select atleast one option";
        displayError("typeID", "typeErr", errMsg);
        return false;
    }
    else{
        clearErr("typeID","typeErr");
        return true;
    }
}



function displayError(fieldId,errId, errMsg)
			{
			    /* get the field object with invalid input */
			    var fieldObj = document.getElementById(fieldId);
				
				/* hightlight the error field with red border */
				fieldObj.style.border="solid 1px red";
			    
				/* error field gets focus and selected, ready to reinput */
				fieldObj.focus();
				fieldObj.select();
				
				/* display error message beside the error field in red */
				var errObj = document.getElementById(errId);
				errObj.innerHTML = errMsg;
				errObj.style.color = "red";
				errObj.style.fontSize = "12px"; // 16px
				//  css: scalable 1em =16px, width: 60%// 667px
			}
			/* if valid, clear Error message, reset the focused field border */
			function clearErr(fieldId, errId)
			{
			   var fieldObj = document.getElementById(fieldId);
				fieldObj.style.border="";  // back to original setting
				
			   var errObj = document.getElementById(errId);
			   errObj.innerHTML = "";  // empty the error message
			}