function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

a = "your name is " + getCookie("name");
b = "your student id is " + getCookie("sid")
c = "your email id is " + getCookie("email")

repeat = (w) => {
    var x = "",
        i;
    for (i = 1; i <= 4; i++) {
        x = x + `<h6 margin-top:"-10%">" ` + w + `"</h6>`;
    }
    return x;
}

a = repeat(a);
b = repeat(b);
c = repeat(c);

console.log(a);
document.getElementById("cont-1").innerHTML = a;
document.getElementById("wavvy").innerHTML = b;
document.getElementById("cont-3").innerHTML = c;