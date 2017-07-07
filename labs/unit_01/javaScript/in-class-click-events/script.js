window.onload = function() {
    var button1 = document.getElementById('button1')
    var button1 = document.getElementById('button2')
    var button1 = document.getElementById('button3')
}
    var info = document.getElementById("information");

    button1.addEventListener("click", function(event) {
        alert('you have clicked button one');
    });

    button2.addEventListener("click", function(event) {
       var newPTag = document.createElement("p");

       newPTag.innerHTML = "A click event is essentially tying a function";
       info.appendChild(newPTag);
    });
