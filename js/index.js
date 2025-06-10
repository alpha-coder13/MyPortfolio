
class Cards{
    #id;
    #property;
    #element;
    constructor(cardImageSrc, cardContentText, id , property, onclickHandler = ()=>{} ){
       const mainDiv = document.createElement('div');
       mainDiv.classList.add(...['cards','content-container-style']);
       const imageDiv = Cards.#createImageEle(cardImageSrc);
       mainDiv.appendChild(imageDiv);
       const contentDiv = document.createElement('div');
       contentDiv.classList.add(...['card-content']);
       const textSpan = Cards.#createTextSpan(cardContentText);
       const button = Cards.#createButton(id,property, onclickHandler);
       contentDiv.appendChild(textSpan);
       contentDiv.appendChild(button);
       mainDiv.appendChild(contentDiv);
       this.#element = mainDiv;
    }

    static #createImageEle(cardImageSrc){
        const imageDiv = document.createElement('div');
       imageDiv.classList.add(...["card-image"]);
       const imageEle = document.createElement('img');
       imageEle.src = cardImageSrc;
       imageEle.width = "100%";
       imageEle.height = "100%";
       imageEle.style= "border: 0px; border-top-right-radius: 16px;border-top-left-radius: 16px;"
       imageDiv.appendChild(imageEle);
       return imageDiv;
    }
    static #createTextSpan(cardContentText){
        const textSpan = document.createElement('span');
       textSpan.classList.add(...['card-content-text']);
       textSpan.innerText = cardContentText;
       return textSpan;
    }
    static #createButton(id, property, onclickHandler){
       const buttonCard = document.createElement('button');
       buttonCard.classList.add(...['card-button','cta-background-color','font-color']);
       buttonCard.innerText = "Know More →";
       buttonCard.setAttribute('id', id);
       buttonCard.setAttribute('property', property);
       buttonCard.addEventListener('onclick',(e)=>{e.preventDefault(), onclickHandler(e)})
       return buttonCard;
    }

    get(){
        return this.#element;
    }
}
document.getElementById('toggleBulb').addEventListener('click',(e)=>{
    let val = e.target.value;
    if(val){
        document.body.classList.remove('light')
        document.body.classList.add('dark');
    }else{
        document.body.classList.remove('dark')
         document.body.classList.add('light');
    }
    e.target.value = !val;
})
const experienceSection = document.querySelector('div.section-work .inner-container');
const projectSection = document.querySelector('div.section-projects .inner-container');

fetch('https://myportfolio-nu64.onrender.com/experience',{
    mode:'cors',
}).then(data => {
        return data.json();
}).then((data) => {
        
        const property = "Experience";
        experienceSection.innerHTML = "";
        if(typeof data.data !== 'string' || data.data.length !== 0){
            data.data.forEach((value, idx) => {
                const card = new Cards(value.src, value.intro,value.id, property);
                experienceSection.appendChild(card.get());
            })
        }
        
}).catch(e =>  console.log(e.message));

fetch('https://myportfolio-nu64.onrender.com/projects',{
    mode:'cors',
}).then(data => {
        return data.json();
}).then((data) => {
        
        const property = "Projects";
        projectSection.innerHTML = "";
        if(typeof data.data !== 'string' || data.data.length !== 0){
            data.data.forEach((value, idx) => {
                const card = new Cards(value.src, value.intro,value.id, property);
                projectSection.appendChild(card.get());
            })
        }else{
                projectSection.innerHTML("Nothing to Show Here");
        }
        
}).catch(e =>  console.log(e.message));




