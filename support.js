
 
        // When the user clicks on <div>, open the popup
        function myFunction() {
            var popup = document.getElementById("myPopup");
            popup.classList.toggle("show");
        }


var supporterRequest = new XMLHttpRequest();
supporterRequest.open("GET", "http://51.15.59.130:46260/support", true);
supporterRequest.send();
supporterRequest.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200)
    {
        var myObj = JSON.parse(this.responseText);
        document.getElementById("supporter-name").innerHTML = myObj.support.first + " " + myObj.support.last;
        document.getElementById("supporter-picture-link").src = myObj.support.picture; pictureSrc = myObj.support.picture;


    }
};