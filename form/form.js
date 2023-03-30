const form = document.getElementById("form");
           const UserName = document.getElementById("username");
           const Email = document.getElementById("email");
           const Password = document.getElementById("Password");
           const Password2  = document.getElementById("Password2");

        form.addEventListener('submit', e =>{
            e.preventDefault();
            checkInput();
        });

        function checkInput(){
            const usernameValue = UserName.value.trim();
            const EmailValue = Email.value.trim();
            const PasswordValue = Password.value.trim();
            const Password2Value = Password2.value.trim();

            if(usernameValue === ''){
                setError(UserName, 'User Name Cannot be Blank');
            }else{
                setSuccess(UserName);
            }

            if(EmailValue === '')
            {
                setError(Email, 'Email Cannot be Blank');
            }else if(!isEmail(EmailValue))
            {
                setError(Email, 'Not a valid Format');
            }else
            {
                setSuccess(Email);
            }

            if(PasswordValue === '')
            {
                setError(Password, 'Password Cannot be Blank');
            }else{
                setSuccess(Password);
            }

            if(Password2Value === '')
            {
                setError(Password2, 'Password Cannot be Blank');
            }else if(PasswordValue !== Password2Value){
                setError(Password2, 'Password Does Not Match')
            }               
            else{
                setSuccess(Password2); 
            }function isEmail(Email){
                return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(email).toLowerCase());
            }      

            function setError(input, message){
                const formControl = input.parentElement;
                const small = formControl.querySelector('small');
                formControl.className = 'form-control error';
                small.innerText = message;
            }

            function setSuccess(input){
                const formControl = input.parentElement;
                formControl.className = 'form-control success';
            }
        }