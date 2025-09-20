export function renderListPage(List){
    const listRange = 2;
    const html = document.querySelector('.js-positions');
    const listMaxRange = Number(new URL(window.location.href).searchParams.get('list'));
    let isLegacy = () => {
        if (listMaxRange === 2) return List.length
        else return listRange * (listMaxRange+1);
    }

    List.forEach((placement, index) => {
        placement.spot = index + 1;
    })

    List.slice(listRange * listMaxRange, isLegacy()).forEach((placement) => {
        html.innerHTML += `<li class="position">
        <section class="position-container">
            <div class="position-data" style="grid-area: data">
                <h2 class="position-name">#${placement.spot} - ${placement.positionName}</h2>
                <p class="position-info">${placement.info}</p>
            </div>    
            <img class="position-img" src="${placement.image}" alt="${placement.positionName}" style="grid-area: img">
        </section>
        </li>`;
    })

    document.querySelector('aside').innerHTML += `<h1 class="list-creator">List made by: </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim iusto modi nulla dolores repudiandae reprehenderit ducimus dolore quia ea ullam minus quo tempore quisquam, architecto maiores nihil totam non possimus.</p>`;

    document.querySelectorAll('.js-nav-link').forEach((link) => {
        const minRange = link.dataset.list;
        if (List.length > listRange * minRange){
            link.classList.remove('non-interactive');
        }
    })
}

export function renderAddNewPositionForm(List){
    document.querySelector('form').innerHTML += `<fieldset>
                <label for="placement-name">Placement Name: </label>
                <input type="text" id="placement-name" required>

                <label for="placement-position">Placement Position: </label>
                <input type="number" id="placement-position" min="1" max="${List.length + 1}" required>

                <label for="small-info">Small Info: </label>
                <textarea id="small-info"></textarea>

                <label for="big-info">Big Info: </label>
                <textarea id="big-info"></textarea>

                <label for="image">Submit an image: </label>
                <input type="url" id="image" required placeholder="Put an image link here">
            </fieldset>
            <button class="js-submit-button">Add</button>`;
}