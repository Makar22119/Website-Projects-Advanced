const gallery = document.querySelector('.js-gallery');

export function renderGallery(cats, isRemoveButShowing){
    gallery.innerHTML = '';
    if (cats.length > 0){
        gallery.classList.add('non-empty')
        cats.forEach(cat => {
            gallery.innerHTML += `<section class="cat-info">
                    <figure class="cat">
                        <img src="${cat.img}" alt="${cat.name}" class="${cat.img}">
                        <figcaption class="cat-name">${cat.name}</figcaption>
                    </figure>
                    <div class="about">
                        <p class="breed">Breed: ${cat.breed}</p>
                        <p class="age">Age: ${cat.age} ${cat.ageTime}</p>
                    </div>
                    <button class="about-but js-about-but">About</button>
                    <button class="remove-but js-remove-but remove-but-animation" style="display: ${isRemoveButShowing ? 'block' : 'none'}">Remove</button>
                </section>`
        });

        document.querySelectorAll('.js-about-but').forEach(but => {
            /* cat information page link here */
        });

        document.querySelectorAll('.js-remove-but').forEach((but, index) => {
            but.classList.remove("remove-but-animation");

            but.addEventListener("click", () => {
                cats.splice(index, 1);
                localStorage.setItem('Gallery', JSON.stringify(cats));
                renderGallery(cats, true);
            })
        });
    }
    else {
        gallery.classList.add('empty');
        gallery.innerHTML += `<section class="no-cats">
                <p>
                    <span class="nowrapper">You Have</span>
                    <span class="nowrapper">No Feeline</span>
                    <span class="nowrapper">Right Now :&lt;</span>
                </p>
            </section>
            <img class="no-cats-img" src="https://media.tenor.com/qJRMLPlR3_8AAAAj/maxwell-cat.gif" alt="sad-gato">`
    }
}

export function renderGalleryButtons(cats){
    const navRemoveButton = document.querySelector('.js-remove-nav-but');
    const navAddButton = document.querySelector('.js-add-nav-but');

    const blackScreen = document.querySelector('.js-black-screen');
    const form = document.querySelector('.js-add-cat-form');

    const cancelButton = document.querySelector('.js-cancel-submit-cat-but');
    const submitButton = document.querySelector('.js-submit-cat-but');
    const catAddedText = document.querySelector('.cat-added');

    const catDemoCard = document.querySelector('.cat-info-demo');
    let isFormOpen = false;

    const hideFormToggle = () => {
        blackScreen.classList.toggle('hide');
        form.classList.toggle('hide');
    }
    const buttonFreezeOnAnimation = () => {
        navAddButton.disabled = true;
        setTimeout(() => {
            navAddButton.disabled = false;
        }, 501)
    }
    const animations = () => {
        blackScreen.classList.toggle('added-black-screen');
        blackScreen.classList.toggle('removed-black-screen');
        form.classList.toggle('added-form');
        form.classList.toggle('removed-form');

        navRemoveButton.classList.toggle('inactive-nav-but');
        navAddButton.classList.toggle('active-add-nav-but');
    }

    navRemoveButton.addEventListener("click", () => {
        if (cats.length > 0){
            document.querySelectorAll('.js-remove-but').forEach((cat) => {
                if (cat.style.display === "block") cat.style.display = "none";
                else{
                    cat.style.display = "block"
                    cat.classList.add("remove-but-animation");
                };
            })
            navAddButton.classList.toggle('inactive-nav-but');
            navRemoveButton.classList.toggle('active-remove-nav-but');
        }
    });
    navAddButton.addEventListener("click", () => {
        !isFormOpen ? hideFormToggle() : setTimeout(hideFormToggle, 500);
        isFormOpen = !isFormOpen;

        buttonFreezeOnAnimation();
        animations();
    });

    cancelButton.addEventListener("click", () => {
        setTimeout(() => {
            hideFormToggle()
            isFormOpen = false;

            catDemoCard.innerHTML = `<figure class="cat cat-demo">
                            <img src="unknownCat.png" alt="Unnamed" class="no-image">
                            <figcaption class="cat-name">Unnamed</figcaption>
                        </figure>
                        <div class="about">
                            <p class="breed-demo">Breed: Not Specified</p>
                            <p class="age-demo">Age: Not Specified</p>
                        </div>
                        <button class="about-but" disabled>About</button>
                        <button class="remove-but" disabled>Remove</button>`;
        }, 500);
        buttonFreezeOnAnimation();
        animations();
    })
    submitButton.addEventListener("click", button => {
        const catDemoInfo = {
            img: document.querySelector('#image').value || "unknownCat.png",
            name: document.querySelector('#name').value || "Unnamed",
            breed: document.querySelector('#breed').value || "Not Specified",
            age: document.querySelector('#age').value || "Not Specified",
            ageTime: document.querySelector('#age').value !== "" ? document.querySelector('#age-time').value : ""
        };

        button.preventDefault();

        if (catDemoInfo.name !== "" && document.querySelector('#image').checkValidity()){
            cats.push(catDemoInfo);

            localStorage.setItem('Gallery', JSON.stringify(cats));
            renderGallery(cats, false);

            /* Just more animation stuff */
            gallery.lastElementChild.classList.add('last-cat-info'); /* Cat card added animation */
            catAddedText.classList.toggle('added-text'); /* "New cat was added" text animation */
            
            /* Button freeze */
            submitButton.disabled = true; 
            setTimeout(() =>{
                catAddedText.classList.toggle('added-text');
                submitButton.disabled = false;
            }, 1500)
        }
    })

    document.querySelectorAll('.js-input-field').forEach(inputField => {
        inputField.addEventListener('keyup', () => {
            catDemoCard.innerHTML = `<figure class="cat cat-demo">
                            <img src="${document.querySelector('#image').value || "unknownCat.png"}" alt="${document.querySelector('#name').value || "Unnamed"}" class="${document.querySelector('#image').value || "no-image"}">
                            <figcaption class="cat-name">${document.querySelector('#name').value || "Unnamed"}</figcaption>
                        </figure>
                        <div class="about">
                            <p class="breed-demo">Breed: ${document.querySelector('#breed').value || "Not Specified"}</p>
                            <p class="age-demo">Age: ${document.querySelector('#age').value || "Not Specified"} ${document.querySelector('#age').value !== "" ? document.querySelector('#age-time').value : ""}</p>
                        </div>
                        <button class="about-but" disabled>About</button>
                        <button class="remove-but" disabled>Remove</button>`;
        })
    })
    document.querySelector('.js-select-input-field').addEventListener("change", () => {
        document.querySelector('.age-demo').innerHTML = `Age: ${document.querySelector('#age').value || "Not Specified"} 
        ${document.querySelector('#age').value !== "" ? document.querySelector('#age-time').value : ""}`;
    })
}