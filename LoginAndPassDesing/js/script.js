function Checker() {
    var username = document.getElementById("username").value
    console.log("username")
    var pass = document.getElementById("pass").value
    
    
    if (username === "axmerov" && pass === "00000") {
        document.getElementById("tagP").innerHTML = "Вход выполнен!"
        document.getElementById("tagP").style.color = "green";   
    }
    else if (username === "" || pass == "" ) {
        document.getElementById("tagP").innerHTML = "Строка не может быть пустой!"
        document.getElementById("tagP").style.color = "red" 
     }
    else {
        document.getElementById("tagP").innerHTML = "Неправильный логин или пароль!"
        document.getElementById("tagP").style.color = "red"
    }


}
