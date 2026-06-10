const likeBtn = document.getElementById("likeBtn");
const likeIcon = document.getElementById("likeIcon");
const colorBtn = document.getElementById("colorBtn");

let liked = false;

likeBtn.addEventListener("click", () => {
    liked = !liked;

    if (liked) {
        likeIcon.classList.add("active");
        likeBtn.classList.add("active-btn");
        likeBtn.textContent = "Liked";
    } else {
        likeIcon.classList.remove("active");
        likeBtn.classList.remove("active-btn");
        likeBtn.textContent = "Like";
    }
});

colorBtn.addEventListener("click", () => {
    document.body.style.backgroundColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
});