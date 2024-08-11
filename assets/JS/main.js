// disabled right click
// document.addEventListener("contextmenu", function(e){
//     e.preventDefault()
// },false)





// cursor
function cursor() {
    var cursor1 = document.querySelector(".cursor-1");
    var cursor2 = document.querySelector(".cursor-2");
    document.addEventListener("mousemove", function (e) {
        cursor1.style.cssText = cursor2.style.cssText = "left: " + e.clientX
            + "px; top: " + e.clientY + "px;";
    })
}
cursor()





// loading
function loading() {
    var loader = document.querySelector('.loader');
    window.addEventListener("load", vanish);

    function vanish() {
        loader.classList.add("loader-hidden");
    }
}
loading()

// window.addEventListener("load", () =>{
//     const loader = document.querySelector('.loader');

//     loader.classList.add('loader-hidden');

//     loader.addEventListener("transitionend", () => {
//         document.body.removeChild('loader');
//     })
// })


// function headingAnimation(){
    // document.getElementById("heading-animation");
    // let element = document.querySelectorAll("#heading-animation");
    // element.toUpperCase();
// };
// headingAnimation();







// right menu
function openNav() {
    document.getElementById("mySidenav").style.width = "320px";
    document.getElementById("main").style.marginRight = "0";
    const show = document.getElementById('show');
    show.classList.toggle('show2');

    document.addEventListener('click', closeNavOutside);
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
    const show = document.getElementById('show');
    show.classList.remove('show2');

    document.removeEventListener('click', closeNavOutside);
}

function closeNavOutside(event) {
    const mySidenav = document.getElementById("main");
    if (!mySidenav.contains(event.target)) {
        closeNav();
    }
}






// left menu
function openLeftBar() {
    const openLeft = document.querySelector("#open-left-bar");
    const closeLeft = document.querySelector("#mySidenav2");

    openLeft.addEventListener('click', () => {
        openLeft.classList.toggle("active4");
        closeLeft.classList.toggle("active4");
        show.classList.toggle('show');
    });
}

function closeLeftBar() {
    const openLeft = document.querySelector("#open-left-bar");
    const closeLeft = document.querySelector("#mySidenav2");

    closeLeft.addEventListener('click', () => {
        openLeft.classList.remove("active4");
        closeLeft.classList.remove("active4");
        show.classList.remove('show');
    });
}

function closeLeftBarOnOutsideClick() {
    document.addEventListener('click', (event) => {
        const openLeft = document.querySelector("#open-left-bar");
        const closeLeft = document.querySelector("#mySidenav2");
        const leftBar = document.querySelector('#open-left-bar');

        if (event.target !== openLeft && event.target !== closeLeft && !leftBar.contains(event.target)) {
            openLeft.classList.remove("active4");
            closeLeft.classList.remove("active4");
            show.classList.remove('show');
        }
    });
}

openLeftBar();
closeLeftBar();
closeLeftBarOnOutsideClick();





// open image
function openimg() {
    var openimage = document.getElementById('close-img');
    openimage.style.maxHeight = '100%';
}

function closeimg() {
    var closeimage = document.getElementById('close-img');
    let apps = document.getElementById('closebtn1-apps');
    apps.classList.remove('active');
    closeimage.style.maxHeight = '0%';
}





// swipper
function slider() {
    let swiper = new Swiper('.swiper', {
        loop: true,
        spaceBetween: 50,
        grabCursor: true,
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false,
        // },
        slidesPerView: 10,
        freeMode: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        keyboard: true,
        // mousewheel: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            350: {
                slidesPerView: 1,
            },
            375: {
                slidesPerView: 1,
            },
            425: {
                slidesPerView: 1,
            },
            600: {
                slidesPerView: 2,
            },
            968: {
                slidesPerView: 3,
            },
        },
    });
}
slider()





// open-theme
function openTheme() {
    let settingBtn = document.getElementById('open-theme');
    let color = document.getElementById('color-theme');
    let gear = document.getElementById('color');

    function toggleSettings() {
        gear.classList.toggle('white-color');
        color.classList.toggle('active');
    }

    settingBtn.onclick = function (event) {
        event.stopPropagation();
        toggleSettings();
    };

    document.addEventListener('click', function (event) {
        let isClickInside = settingBtn.contains(event.target) || color.contains(event.target) || gear.contains(event.target);
        if (!isClickInside) {
            gear.classList.remove('white-color');
            color.classList.remove('active');
        }
    });
}
openTheme();






// open-apps
function openApps() {
    let btnApps = document.getElementById('closebtn1');
    let apps = document.getElementById('closebtn1-apps');
    let appColor = document.getElementById('color-2');

    function toggleApps() {
        appColor.classList.toggle('white-color');
        apps.classList.toggle('active');
    }

    btnApps.onclick = function (event) {
        event.stopPropagation();
        toggleApps();
    };

    document.body.addEventListener('click', function (event) {
        if (!apps.contains(event.target) && event.target !== btnApps) {
            appColor.classList.remove('white-color');
            apps.classList.remove('active');
        }
    });
}
openApps();






// auto typer
function autoTyper() {
    const typed = new Typed('.auto-type', {
        strings: ['Hafiz Abdullah.', 'a Web Developer.', 'a Programmer.', 'a Web Designer.', 'a UI Designer'],
        typeSpeed: 80,
        backSpeed: 25,
        loop: true
    });
}
autoTyper()





// auto number
function autoNumber() {
    let valueDisplays = document.querySelectorAll(".auto-number");
    let interval = 4000;

    valueDisplays.forEach((valueDisplays) => {
        let startValue = 0;
        let endValue = parseInt(valueDisplays.getAttribute
            ("data-val"));
        let duration = Math.floor(interval / endValue);
        let counter = setInterval(function () {
            startValue += 1;
            valueDisplays.textContent = startValue;
            if (startValue == endValue) {
                clearInterval(counter);
            }
        }, duration);
    });
}
autoNumber()





// nav tabs
function navTabs() {
    const tabs = document.querySelectorAll(".nav-bar");
    const all_contents = document.querySelectorAll("#main-section-1");

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            tabs.forEach(tab => { tab.classList.remove('active2') })
            tab.classList.add('active2');

            all_contents.forEach(content => { content.classList.remove('active2') });

            all_contents[index].classList.add('active2');
        })
    })
}
navTabs()





// service toggle
function toggleOne() {
    var blur1 = document.getElementById('blur');
    var popup1 = document.getElementById('popupOne');

    blur1.classList.toggle('active3');
    popup1.classList.toggle('active3');
}
document.addEventListener('click', function (event) {
    var popup1 = document.getElementById('popupOne');
    var blur1 = document.getElementById('blur');

    if (!popup1.contains(event.target) && !blur1.contains(event.target)) {

        popup1.classList.remove('active3');
        blur1.classList.remove('active3');
    }
});

function toggleTwo() {
    var blur2 = document.getElementById('blur');
    var popup2 = document.getElementById('popupTwo');

    blur2.classList.toggle('active3');
    popup2.classList.toggle('active3');
}
document.addEventListener('click', function (event) {
    var popup2 = document.getElementById('popupTwo');
    var blur2 = document.getElementById('blur');

    if (!popup2.contains(event.target) && !blur2.contains(event.target)) {

        popup2.classList.remove('active3');
        blur2.classList.remove('active3');
    }
});

function toggleThree() {
    var blur3 = document.getElementById('blur');
    var popup3 = document.getElementById('popupThree');

    blur3.classList.toggle('active3');
    popup3.classList.toggle('active3');
}
document.addEventListener('click', function (event) {
    var popup3 = document.getElementById('popupThree');
    var blur3 = document.getElementById('blur');

    if (!popup3.contains(event.target) && !blur3.contains(event.target)) {

        popup3.classList.remove('active3');
        blur3.classList.remove('active3');
    }
});

function toggleFour() {
    var blur4 = document.getElementById('blur');
    var popup4 = document.getElementById('popupFour');

    blur4.classList.toggle('active3');
    popup4.classList.toggle('active3');
}
document.addEventListener('click', function (event) {
    var popup4 = document.getElementById('popupFour');
    var blur4 = document.getElementById('blur');

    if (!popup4.contains(event.target) && !blur4.contains(event.target)) {

        popup4.classList.remove('active3');
        blur4.classList.remove('active3');
    }
});

function toggleFive() {
    var blur5 = document.getElementById('blur');
    var popup5 = document.getElementById('popupFive');

    blur5.classList.toggle('active3');
    popup5.classList.toggle('active3');
}
document.addEventListener('click', function (event) {
    var popup5 = document.getElementById('popupFive');
    var blur5 = document.getElementById('blur');

    if (!popup5.contains(event.target) && !blur5.contains(event.target)) {

        popup5.classList.remove('active3');
        blur5.classList.remove('active3');
    }
});

function toggleSix() {
    var blur6 = document.getElementById('blur');
    var popup6 = document.getElementById('popupSix');

    blur6.classList.toggle('active3');
    popup6.classList.toggle('active3');
}
document.addEventListener('click', function (event) {
    var popup6 = document.getElementById('popupSix');
    var blur6 = document.getElementById('blur');

    if (!popup6.contains(event.target) && !blur6.contains(event.target)) {

        popup6.classList.remove('active3');
        blur6.classList.remove('active3');
    }
});






// portfolio img
function portfolioImg() {
    $(document).ready(function () {
        $(".portfolio-head-name").click(function () {
            const value = $(this).attr('data-filter');
            if (value == 'All') {
                $('.itemBox').show('800');
            }
            else {
                $('.itemBox').not('.' + value).hide('100');
                $('.itemBox').filter('.' + value).show('100');
            }
        })

        $('.portfolio-head-name').click(function () {
            $(this).addClass('active').siblings().removeClass('active');
        })
    })
}
portfolioImg()





// contact
// function sendMail(){
//     let parms = {
//         name: document.getElementById('name').value,
//         email: document.getElementById('email').value,
//         number: document.getElementById('number').value,
//         subject: document.getElementById('subject').value,
//         message: document.getElementById('message').value
//     }
//     emailjs.send("service_mma8zhc","template_ziwgz79",parms).then(alert("Email sent!!"))
// }
// const form = document.querySelector("form");
// const fullName = document.querySelector("#name");
// const email = document.querySelector("#email");
// const number = document.querySelector("#number");
// const subject = document.querySelector("#subject");
// const message = document.querySelector("#message");

// function sendEmail() {
//     const bodyMessage = `Name: ${fullName.value} <br> Email: ${email.value} <br> Number: ${number.value} <br> Subject: ${subject.value} <br> Message: ${message.value}`;

//     Email.send({
//         Host: "smtp.elasticemail.com",
//         Username: "abdullahabbad916@gmail.com",
//         Password: "2B5BC94583546097538A4C8C06609A071915",
//         To: 'abdullahabbad916@gmail.com',
//         From: "abdullahabbad916@gmail.com",
//         Subject: subject.value,
//         // Body: bodyMessage
//     }).then(
//         message => { alert("OK");
// if (message == "OK") {
//     Swal.fire({
//         title: "Success",
//         text: "Message sent successfully!",
//         icon: "success"
//     });
// }
//         }
//     );
// }
// Function to send email using EmailJS
function sendMail() {
    let parms = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        number: document.getElementById('number').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    emailjs.send("service_mma8zhc", "template_ziwgz79", parms)
        .then(function (response) {
            alert("Email sent!!");
            console.log("EmailJS Response:", response);
        })
        .catch(function (error) {
            console.log('Error sending email via EmailJS:', error);
            alert("Error sending email. Please try again later.");
        });
}

// Function to send email using Elastic Email SMTP
function sendEmail() {
    const fullName = document.querySelector("#name").value;
    const userEmail = document.querySelector("#email").value;
    const userNumber = document.querySelector("#number").value;
    const emailSubject = document.querySelector("#subject").value;
    const userMessage = document.querySelector("#message").value;

    const bodyMessage = `Name: ${fullName}\nEmail: ${userEmail}\nNumber: ${userNumber}\nSubject: ${emailSubject}\nMessage: ${userMessage}`;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "abdullahabbad916@gmail.com",
        Password: "2B5BC94583546097538A4C8C06609A071915",
        To: 'abdullahabbad916@gmail.com',
        From: "abdullahabbad59@gmail.com",
        Subject: emailSubject,
        Body: bodyMessage
    }).then(
        message => {
            console.log("Elastic Email Response:", message);
            alert("Email sent successfully!");
        }
    ).catch(
        error => {
            console.log('Error sending email via Elastic Email:', error);
            alert("Error sending email. Please try again later.");
        }
    );
}

// Function to check form inputs for errors
function checkInput() {
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        if (item.value.trim() === "") { // Use trim() to remove whitespace
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }
    }
}

const form = document.querySelector("form");

// Event listener for form submission
form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInput();

    // Choose the email sending method (EmailJS or Elastic Email)
    sendMail(); // or sendEmail();
});






// onload password
// prompt("Please Enter Password");
// if (!(prompt == "abdullah")) {
//     document.querySelector('body').style.display = 'block';
// }
// else{
//     document.querySelector('body').style.display = 'none';
// }