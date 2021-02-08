const prev = document.getElementById('prevBtn');
const next = document.getElementById('nextBtn');
const heroImg = document.getElementById('hero');
const heroTitle = document.getElementById('hero-description-title');
const heroText = document.getElementById('hero-description-text');
var i = 0;

const profiles = [
    one = {
        img: `./src/images/desktop-image-hero-1.jpg`,
        title: "Discover innovative ways to decorate",
        text: `We provide quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.`
    },
    two = {
        img: `./src/images/desktop-image-hero-2.jpg`,
        title: `We are available all across the globe`,
        text: `With stores all over the world, it's easy for you to find furniture for your home or place business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.`
    },
    three = {
        img: `./src/images/desktop-image-hero-3.jpg`,
        title: `Manufactured with the best materials`,
        text: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and consistent as possible. With three decades of experience in his industry, we understand what customers want for their home and office.`
    }
];


next.addEventListener('click', () => {
    function sum() {
        if (i < profiles.length) {
            i++;
        }
        if (i === profiles.length) {
            i = 0;
        }
    };
    sum();

    function profilesChange() {
        heroImg.setAttribute('src', `${profiles[i].img}`);
        heroTitle.innerHTML = `${profiles[i].title}`;
        heroText.innerHTML = `${profiles[i].text}`;
    };
    profilesChange();
});
prev.addEventListener('click', () => {
    function sub() {
        if (i > 0) {
            i--;
        } else if (i === 0) {
            i = profiles.length - 1;
        }
    };
    sub();

    function profilesChange() {
        heroImg.setAttribute('src', `${profiles[i].img}`);
        heroTitle.innerHTML = `${profiles[i].title}`;
        heroText.innerHTML = `${profiles[i].text}`;
    };
    profilesChange();
});



// next.addEventListener('click', () => {
//     var src = heroImg.getAttribute('src');
//     if(src === profiles[0].img) {
//         heroImg.setAttribute('src', `${profiles[1].img}`);
//         heroTitle.innerHTML = `${profiles[1].title}`;
//         heroText.innerHTML = `${profiles[1].text}`;
//     } else if(src === profiles[1].img) {
//         heroImg.setAttribute('src', `${profiles[2].img}`);
//         heroTitle.innerHTML = `${profiles[2].title}`;
//         heroText.innerHTML = `${profiles[2].text}`;
//     } else {
//         heroImg.setAttribute('src', `${profiles[0].img}`);
//         heroTitle.innerHTML = `${profiles[0].title}`;
//         heroText.innerHTML = `${profiles[0].text}`;
//     }
// });
// prev.addEventListener('click', () => {
//     var src = heroImg.getAttribute('src');
//     if(src === profiles[0].img) {
//         heroImg.setAttribute('src', `${profiles[2].img}`);
//         heroTitle.innerHTML = `${profiles[2].title}`;
//         heroText.innerHTML = `${profiles[2].text}`;
//     } else if(src === profiles[1].img) {
//         heroImg.setAttribute('src', `${profiles[0].img}`);
//         heroTitle.innerHTML = `${profiles[0].title}`;
//         heroText.innerHTML = `${profiles[0].text}`;
//     } else {
//         heroImg.setAttribute('src', `${profiles[1].img}`);
//         heroTitle.innerHTML = `${profiles[1].title}`;
//         heroText.innerHTML = `${profiles[1].text}`;
//     }
// });




