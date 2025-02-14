let bigText = [
    { id: null, type: "bigText", text: "THE ALL-AMERICAN HAM" },
    { id: null, type: "bigText", text: "POWER PLANT" },
    { id: null, type: "bigText", text: "HOWARD LUCK GOSSAGE" },
    { id: null, type: "bigText", text: "A PORSCHE FOR ALL" },
    { id: null, type: "bigText", text: "WILL WORK FOR FREE" },
    { id: null, type: "bigText", text: "DEVIL'S MUSIC" },
    { id: null, type: "bigText", text: "IT COULD HAPPEN" },
    { id: null, type: "bigText", text: "TELL THE TRUTH" },
    { id: null, type: "bigText", text: "BIGMOUTH STRIKES AGAIN" },
    { id: null, type: "bigText", text: "DAMN STRAIGHT" },
    { id: null, type: "bigText", text: "SETTLING" },
    { id: null, type: "bigText", text: 'THE "HEY HONEY" TEST' },
    { id: null, type: "bigText", text: "RESPECT YOUR ROOTS" },
    { id: null, type: "bigText", text: "A BIG BANK JOB" },
    { id: null, type: "bigText", text: "COURAGE PERSONIFIED" },
    { id: null, type: "bigText", text: "PERSISTENCE OF VISION" },
    { id: null, type: "bigText", text: "EMPOWERED BIRDS" },
    { id: null, type: "bigText", text: "GARDEN GROWTH" },
    { id: null, type: "bigText", text: "A LITTLE HUMILITY" }
];

let smallText = [
    { id: null, type: "smallText", text: ["To win in the foodservice business,", "You've got to think like a consumer."] },
    { id: null, type: "smallText", text: ["Luck, unfortunately, does not", "count as financial planning."] },
    { id: null, type: "smallText", text: ["Every hit series", "has a blooper reel."] },
    { id: null, type: "smallText", text: ["Behold, the singular allure", "of the hourglass body."] },
    { id: null, type: "smallText", text: ["Find the needle.", "Then move it."] },
    { id: null, type: "smallText", text: ["How do you sell phones?", "Allow us to demonstrate."] },
    { id: null, type: "smallText", text: ["Funny is good. But smart", "& funny is so much better."] },
    { id: null, type: "smallText", text: ["Some of the best stories", "are told without words."] },
    { id: null, type: "smallText", text: ["People have a natural aversion to marketing,", "but a natural affection for storytelling."] }
];

let images = [
    { id: null, type: "img", src: "assets/images/Trademark200.png" },
    { id: null, type: "img", src: "assets/images/IDEASTHATWORK200.gif" },
    { id: null, type: "img", src: "assets/images/tractor200.gif" },
    { id: null, type: "img", src: "assets/images/GUITAR200.jpg" },
    { id: null, type: "img", src: "assets/images/Bird200.jpg" },
    { id: null, type: "img", src: "assets/images/ham200.jpg" },
    { id: null, type: "img", src: "assets/images/penny200.jpg" },
    { id: null, type: "img", src: "assets/images/bacon200.jpg" },
    { id: null, type: "img", src: "assets/images/chart200.gif" },
    { id: null, type: "img", src: "assets/images/head200.jpg" },
    { id: null, type: "img", src: "assets/images/olddrill200.jpg" },
    { id: null, type: "img", src: "assets/images/herobike200.jpg" },
    { id: null, type: "img", src: "assets/images/dynamite200.gif" },
    { id: null, type: "img", src: "assets/images/walken200.jpg" },
    { id: null, type: "img", src: "assets/images/Harmonica200.jpg" },
    { id: null, type: "img", src: "assets/images/lyricBillboard200.gif" },
    { id: null, type: "img", src: "assets/images/Redtail200.jpg" },
    { id: null, type: "img", src: "assets/images/pnuticon200.jpg" },
    { id: null, type: "img", src: "assets/images/shoe200.jpg" },
    { id: null, type: "img", src: "assets/images/MGMHAM200.jpg" },
    { id: null, type: "img", src: "assets/images/flytrap200.jpg" },
    { id: null, type: "img", src: "assets/images/NC200.gif" },
    { id: null, type: "img", src: "assets/images/Cameraicon200.gif" },
    { id: null, type: "img", src: "assets/images/Nickle200.jpg" }
];

let content = [...bigText, ...smallText, ...images];


content.forEach((item, index) => {
    item.id = index + 1;
    item.order = Math.floor(Math.random() * 10000);
});

let orderedContent = [...content].sort((a, b) => a.order - b.order);
function makeContentHTML() {
    let contentHTML = "";
    orderedContent.forEach(item => {
        let dividerElemntHTML = `<span class="divider">/</span>`
        let itemHTML = ``;
        if (item.type === "img") {
            itemHTML = `<div class="item" id="${item.id}"><img src="${item.src}" class="imageItem"></div>`
        } else if (item.type === "bigText") {
            itemHTML = `<div class="item" id="${item.id}"><span class="bigTextItem">${item.text}</span></div>`
        } else {
            let textLines = "";
            item.text.forEach(textSpan => {
                let textLine = `<span>${textSpan}</span>`
                textLines += textLine
            })
            itemHTML = `<div class="item" id="${item.id}"><div class="smallTextItem">${textLines}</div></div>`
        }

        contentHTML += dividerElemntHTML
        contentHTML += itemHTML
    })

    document.body.innerHTML = contentHTML
}
makeContentHTML()