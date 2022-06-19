function validateAll(frm1)
{
	return validName(frm1) && validCaps(frm1) && validPhone(frm1) && validComment(frm1);
}
			function validName(frm1)
			{
				var errMsg = "";
				var inputValue = frm1.username.value.trim();
				var letters = /^[A-Za-z]+$/;
                if(inputValue.match(letters))
                {
                    clearErr("userID","usernameErr");
                    return true;
                }
                else
                {
                    errMsg= "Please enter only alphabets!";
                    displayError("userID", "usernameErr", errMsg);
                    return false;
                }
			}

            function validCaps(frm1){
                var errMsg = "";
				var inputValue = frm1.username.value.trim();
                if(inputValue.charAt(0) === inputValue.charAt(0).toUpperCase()){
                    clearErr("userID","usernameErr");
                    return true;
                }
                else{
                    errMsg= "Please enter the first letter in Caps!";
                    displayError("userID", "usernameErr", errMsg);
                    return false;
                }
            }

			function validPhone(frm1)
			{
			    var errMsg = "";
			    var inputValue = frm1.phone.value;
                var letters = /^\((\d{3})\)(\d{3})-(\d{4})$/;
                if(inputValue.match(letters))
                {
                    clearErr("phoneID","phoneErr");
                    return true;
                }
                else
                {
                    errMsg= "Display phone number in the format: (NNN)NNN-NNNN. E.g., (416)111-2222!";
                    displayError("phoneID", "phoneErr", errMsg);
                    return false;
                }
			 
            }

            function validComment(frm1){
                var errMsg = "";
			    var inputValue = frm1.comment.value;
                if(inputValue===null || inputValue===""|| inputValue===" "){
                    errMsg= "Comment cannot be empty or only whitespace!";
                    displayError("commentID", "commentErr", errMsg);
                    return false;
                }
                else{
                    clearErr("commentID", "commentErr");
                    return true;
                }

            }
			/* highlight the error field, display error message */
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
            