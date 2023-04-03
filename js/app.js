window.onload = () => {
    const INFORMATIONBUTTON = document.getElementById(`information-button`);
    const CVBUTTON = document.getElementById(`cv-button`);
    const CONTACTBUTTON = document.getElementById(`contact-button`);

    const INFORMATIONBODY = document.getElementById(`information-container`);
    const CVBODY = document.getElementById(`cv-container`);
    const CONTACTBODY = document.getElementById(`contact-container`);

    let headerButtons = [INFORMATIONBUTTON, CVBUTTON, CONTACTBUTTON];

    headerButtons.forEach(element => {
        element.addEventListener(`click`, () =>{
            if (!element.classList.contains(`button-clicked`)) {
                changeButtons(element)
            } else {
                element.classList.add(`button-clicked`);
            };
        }, false);
    });

    let changeButtons = (element) => {
        headerButtons.forEach(button => {
            if (button.classList.contains(`button-clicked`)) {
                button.classList.remove(`button-clicked`);
            };
        });
        element.classList.add(`button-clicked`);
        displayCorrectBody(element)
    };
    
    let displayCorrectBody = (bodyType) => {
        switch(bodyType) {
            case INFORMATIONBUTTON:
                displayInformation();
                break;
            case CVBUTTON:
                displayCV();
                break;
            case CONTACTBUTTON:
                displayContact();
                break;
            default:
                displayInformation();
                break;
        }
    };

    let displayInformation = () => {
        CVBODY.classList.add(`hidden`);
        CONTACTBODY.classList.add(`hidden`);
        INFORMATIONBODY.classList.remove(`hidden`);
    };

    let displayCV = () => {
        INFORMATIONBODY.classList.add(`hidden`);
        CONTACTBODY.classList.add(`hidden`);
        CVBODY.classList.remove(`hidden`);
    };
    
    let displayContact = () => {
        CVBODY.classList.add(`hidden`);
        INFORMATIONBODY.classList.add(`hidden`);
        CONTACTBODY.classList.remove(`hidden`);
    };

    INFORMATIONBUTTON.click()
};
