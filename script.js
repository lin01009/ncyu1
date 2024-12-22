// 認證功能
window.authenticate = function () {
    const code = document.getElementById("auth-code").value;
    const displayedCode = document.getElementById("auth-code-display").textContent;
    const feedback = document.getElementById("auth-feedback");
    const content = document.getElementById("content");
    const authContainer = document.getElementById("auth-container");

    if (code === displayedCode) {
        feedback.textContent = "認證成功！";
        feedback.style.color = "green";
        authContainer.style.display = "none";
        content.style.display = "block";
    } else {
        feedback.textContent = "認證失敗，請重新輸入！";
        feedback.style.color = "red";
    }
};

// 圖片輪播功能
const images = [
    "https://upload.wikimedia.org/wikipedia/zh/thumb/4/49/National_Chiayi_University_seal.svg/1200px-National_Chiayi_University_seal.svg.png",
    "https://www.ncyu.edu.tw/ncyu/ServerFile/GetByKindEditor/459f4bd3-ba75-4acd-a36b-ed775326fd8b?subjectId=74" ,
    "https://www.ncyu.edu.tw/Uploads/Icon/9a1327b4-6f82-43c1-b994-425704ae0fe8.png"
    
];
let currentImageIndex = 0;

window.startSlideshow = function () {
    const slideshowImg = document.getElementById("slideshow-img");
    if (slideshowImg) {
        setInterval(() => {
            slideshowImg.src = images[currentImageIndex];
            currentImageIndex = (currentImageIndex + 1) % images.length;
        }, 2000);
    }
};

// 留言功能
let comment = document.getElementById("comment");
let btn = document.getElementById("btn");
let list = document.getElementById("list");

btn.addEventListener("click", () => {
    const newComment = document.createElement("div");
    newComment.classList.add("message");

    newComment.innerHTML = `
        <p>${comment.value}</p>
        <hr>
    `;

    list.insertBefore(newComment, list.firstChild);

    comment.value = "";
});

// 添加圖片變換功能（旅遊回憶區域）
let travelImages = [
    { id: "travel1", hoverSrc: "images/travel1-1.jpg", defaultSrc: "images/travel1.jpg" },
    { id: "travel2", hoverSrc: "images/travel2-1.jpg", defaultSrc: "images/travel2.jpg" },
    { id: "travel3", hoverSrc: "images/travel3-1.jpg", defaultSrc: "images/travel3.jpg" },
    { id: "travel4", hoverSrc: "images/travel4-1.jpg", defaultSrc: "images/travel4.jpg" }
];

travelImages.forEach(img => {
    let element = document.getElementById(img.id);
    element.addEventListener("mouseover", function () {
        this.src = img.hoverSrc;
    });
    element.addEventListener("mouseout", function () {
        this.src = img.defaultSrc;
    });
});