const popupModal = document.getElementById('popup-modal');

class Cards {
    #id;
    #property;
    #element;
    constructor(cardImageSrc, cardContentText, id, property,onclickHandler) {
        const mainDiv = document.createElement('div');
        mainDiv.classList.add(...['cards', 'content-container-style']);
        const imageDiv = Cards.#createImageEle(cardImageSrc);
        mainDiv.appendChild(imageDiv);
        const contentDiv = document.createElement('div');
        contentDiv.classList.add(...['card-content']);
        const textSpan = Cards.#createTextSpan(cardContentText);
        const button = Cards.#createButton(id, property, onclickHandler);
        contentDiv.appendChild(textSpan);
        contentDiv.appendChild(button);
        mainDiv.appendChild(contentDiv);
        this.#element = mainDiv;
    }

    static #createImageEle(cardImageSrc) {
        const imageDiv = document.createElement('div');
        imageDiv.classList.add(...["card-image"]);
        const imageEle = document.createElement('img');
        imageEle.src = cardImageSrc;
        imageEle.width = "100%";
        imageEle.height = "100%";
        imageEle.style = "border: 0px; border-top-right-radius: 16px;border-top-left-radius: 16px;"
        imageDiv.appendChild(imageEle);
        return imageDiv;
    }
    static #createTextSpan(cardContentText) {
        const textSpan = document.createElement('span');
        textSpan.classList.add(...['card-content-text']);
        textSpan.innerText = cardContentText;
        return textSpan;
    }
    static #createButton(id, property, onclickHandler) {
        const buttonCard = document.createElement('button');
        buttonCard.classList.add(...['card-button', 'cta-background-color', 'font-color']);
        buttonCard.innerText = "Know More →";
        buttonCard.setAttribute('id', id);
        buttonCard.setAttribute('property', property);
        buttonCard.addEventListener('click', (e) => { e.preventDefault(), onclickHandler || Cards.#handleButtonClick(e) })
        return buttonCard;
    }

    get() {
        return this.#element;
    }

    static #handleButtonClick(e){
        let property = e.target.getAttribute('property');
        let id = e.target.id;
        console.log(property,id);
        const getUrl = `http://127.0.0.1:3000/${property.toLowerCase()}?id=${parseInt(id)}`;
        fetch(getUrl,{
            mode : 'cors',
        }).then((data) => data.json()).then((data)=>{
            data = data.data;
            const modal = new Modal(data.title,data.description , data.contributions);
            popupModal.appendChild(modal.get())
            popupModal.classList.add('display-popup');
        })

    }
}


class Modal {
    #id;
    #property;
    #element;

    constructor(headerText, modalContentDesc, modalContentContributions) {
        const mainDiv = document.createElement('div');
        mainDiv.classList.add("modal", "modal-bg");
        const header = Modal.#createHeader(headerText);
        mainDiv.appendChild(header);
        const content = Modal.#createContent(modalContentDesc, modalContentContributions);
        mainDiv.appendChild(content);
        this.#element = mainDiv;
    }
    static #createHeader(headerText) {
        const header = document.createElement('div');
        header.classList.add('modal-header');
        const headerTextele = document.createElement('div');
        headerTextele.classList.add('font-color', 'modal-header-text');
        headerTextele.innerText = headerText;
        const closeCTA = document.createElement('div');
        closeCTA.classList.add('close-cta', 'font-color');
        closeCTA.innerText = "X";
        closeCTA.addEventListener('click', Modal.#handleClose);
        header.appendChild(headerTextele);
        header.appendChild(closeCTA);
        return header;
    }

    static #createContent(modalContentDesc = null, modalContentContributions = null) {
        const content = document.createElement('div');
        content.classList.add('modal-body');
        if (modalContentDesc) {
            const headerText = document.createElement('h2');
            headerText.innerText = "Description";
            content.appendChild(headerText);

            const textSpan = document.createElement('span');
            textSpan.classList.add(...['card-content-text']);
            textSpan.innerText = modalContentDesc;

            content.appendChild(textSpan);
        }

        if (modalContentContributions && modalContentContributions.length) {
            const headerText = document.createElement('h2');
            headerText.innerText = "Contributions";
            content.appendChild(headerText);

            const list = document.createElement('ul');
            list.setAttribute('type', 'disc');

            for (let a in modalContentContributions) {
                const listItem = document.createElement('li');
                listItem.innerText = a;
                list.appendChild(listItem);
            }

            content.appendChild(list);
        }
        return content;
    }


    get() {
        return this.#element;
    }

    static #handleClose(e) {
        let popupModal = document.getElementById('popup-modal');
        popupModal.classList.remove('display-popup');
        popupModal.innerHTML = "";
        return;
    }
};

document.getElementById('toggleBulb').addEventListener('click', (e) => {
    let val = e.target.value;
    if (val) {
        document.body.classList.remove('light')
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark')
        document.body.classList.add('light');
    }
    e.target.value = !val;
})
}
// document.getElementById('toggleBulb').addEventListener('click',(e)=>{
//     let val = e.target.value;
//     if(val){
//         document.body.classList.remove('light')
//         document.body.classList.add('dark');
//     }else{
//         document.body.classList.remove('dark')
//          document.body.classList.add('light');
//     }
//     e.target.value = !val;
// })
const experienceSection = document.querySelector('div.section-work .inner-container');
const projectSection = document.querySelector('div.section-projects .inner-container');

fetch('https://myportfolio-nu64.onrender.com/experience', {
    mode: 'cors',
}).then(data => {
    return data.json();
}).then((data) => {

    const property = "Experience";
    experienceSection.innerHTML = "";
    if (typeof data.data !== 'string' || data.data.length !== 0) {
        data.data.forEach((value, idx) => {
            const card = new Cards(value.src, value.intro, value.id, property);
            experienceSection.appendChild(card.get());
        })
    }

}).catch(e => console.log(e.message));

fetch('http://127.0.0.1:3000/projects', {
    mode: 'cors',
}).then(data => {
    return data.json();
}).then((data) => {

    const property = "Projects";
    projectSection.innerHTML = "";
    if (typeof data.data !== 'string' || data.data.length !== 0) {
        data.data.forEach((value, idx) => {
            const card = new Cards(value.src, value.intro, value.id, property);
            projectSection.appendChild(card.get());
        })
    } else {
        projectSection.innerHTML("Nothing to Show Here");
    }

}).catch(e => console.log(e.message));


// const handleOnclick = () => {

// }



