var istatus = document.querySelector("h5")
var addFriend = document.querySelector("#add")
var group = document.querySelector("#card");
var love = document.querySelector("i");
var check = 0


addFriend.addEventListener("click", function () {
    if (check == 0) {
        addFriend.innerHTML = "Remove"
        istatus.innerHTML = "Request"
        istatus.style.color = "green"
        check = 1
    } else {
        addFriend.innerHTML = "Add Friend"
        istatus.innerHTML = "Stranger"
        istatus.style.color = "red"

        check = 0
    }
})


group.addEventListener("dblclick", function () {
    love.style.transform = "translate(-50%, -180%) scale(1)";
    love.style.opacity = 0.8;
    setTimeout(function () {
        love.style.opacity = 0;

    }, 1000);
    setTimeout(function () {
        love.style.transform = 'translate(-50%, -180%) scale(0)';

    }, 2000);
});
