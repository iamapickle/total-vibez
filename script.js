var name;
var sid;
var email;
createCookie = () => {
    name = document.getElementById("name").value;
    sid = document.getElementById("sid").value;
    email = document.getElementById("email").value;
    console.log(name, " ", sid, " ", email);

    var d = new Date();
    d.setTime(d.getTime() + (1 * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    var cookie = "name" + "=" + name + ";" + expires + ";path=/";
    var cookie2 = "sid" + "=" + sid + ";" + expires + ";path=/";
    var cookie3 = "email" + "=" + email + ";" + expires + ";path=/";
    console.log(cookie)
    document.cookie = cookie;
    document.cookie = cookie2;
    document.cookie = cookie3;
}