import { placements } from "../Data/Placements.js";
import { renderAddNewPositionForm } from "../Renders/Renders.js";

renderAddNewPositionForm(placements);

document.querySelector('.js-submit-button').addEventListener('click', async () => {
    const spot = document.querySelector('#placement-position').value;
    const positionName = document.querySelector('#placement-name').value;
    const info = document.querySelector('#small-info').value;
    const image = document.querySelector('#image').value;

    if (spot !== "" && positionName !== "" && image !== "") {
        await placements.splice(Number(spot)-1, 0, {
            spot: spot,
            positionName: positionName,
            info: info,
            image: image
        })
        localStorage.setItem('listPositions', JSON.stringify(placements));
    };
})