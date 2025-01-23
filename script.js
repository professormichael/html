const username = document.getElementById('username');
        const password = document.getElementById('password');
        const confirm_password = document.getElementById('confirm_password');
        const password_check = document.getElementById('password_pass_length');
        const password_check_upper = document.getElementById('password_pass_upper');
        const password_check_number = document.getElementById('password_pass_number');
        const password_check_symbol = document.getElementById('password_pass_symbol');
        const password_confirm = document.getElementById('confirm_pass_result');

        password_check.innerText = 'Your Password Must Have More Than 8 Letters';
        password_check_symbol.innerHTML = 'At Least One Symbol';
        password_check_number.innerHTML = 'At Least One Number';
        password_check_upper.innerHTML = 'At Least An UpperCase Letter';
        var num = [0,1,2,3,4,5,6,7,8,9]
        var alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
        var symbols = [':',';','<','>',',','.','/','?','|','[',']','{','}','-','_','+','+','`','~','!','@','#','$','%','^','&','*','(',')']
        var seca = '';
        var secb = '';
        var secc = '';
        var secd = '';

        
        function check_pass(){
            seca = 'false';
            secb = 'false';
            secc = 'false';
            secd = 'false';
            password_check.innerText = 'Your Password Must Have More Than 8 Letters';
            password_check_symbol.innerHTML = 'At Least One Symbol';
            password_check_symbol.style.color = 'red';
            password_check_number.innerHTML = 'At Least One Number';
            password_check_number.style.color = 'red';
            password_check_upper.innerHTML = 'At Least An UpperCase Letter';
            password_check_upper.style.color = 'red';
            if(password.value.length<=8){
                password_check.innerText = 'Your Password Must Have More Than 8 Letters';
                password_check.style.color = 'red';
            };
            if(password.value.length>8){
                password_check.innerHTML = 'Letter Confirmation : &#10003;';
                password_check.style.color = 'blue';
                seca = true;

            };
            for(var j = 0; j<alpha.length; j++){
                    if(password.value.includes(alpha[j])){
                    password_check_upper.innerHTML = 'UpperCase Confirmed: &#10003;';
                    password_check_upper.style.color = 'blue';}
                    secb = true;
            }
            for(var j = 0; j<num.length; j++){
                    if(password.value.includes(num[j])){
                        
                        password_check_number.innerHTML = 'Number Confirmation : &#10003;';
                        password_check_number.style.color = 'blue';
                        secc = true;
                    }
            }
            for(var j = 0; j<symbols.length; j++){
                    if(password.value.includes(symbols[j])){
                        
                        password_check_symbol.innerHTML = 'Symbol Confirmation : &#10003;';
                        password_check_symbol.style.color = 'blue';
                        secd = true;
                    }
            }
        }
        document.getElementById('button').addEventListener('click', function(){
            console.log(seca,secb,secc,secd,'jj')
            if(seca === true && secb === true && secc==true && secd ===true){
                alert('passoword allowed')
                    window.location.href = 'signin.html';
            }
        
        })
        
        function confirm_password1(){    
            if(password.value === confirm_password.value){
                password_confirm.innerHTML = 'Confirmed Password : &#10003;';
                password_confirm.style.color = 'blue';
            }
            else{
                password_confirm.innerText = 'Wrong Password';
                password_confirm.style.color = 'red';
            }
        }
    
       
