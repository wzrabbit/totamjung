function getAlgorithmList() {
    const parsed = document.getElementsByClassName('spoiler-link');
    let result = [];

    for (let i = 0; i < parsed.length; i++)
        result.push({ 'name': parsed[i].innerText, 'link': parsed[i].href });

    return result;
}

function createMenu(data) {
    if (data.length === 0) return;

    const hideA = document.getElementsByClassName('show-spoiler')[0];
    const hideB = document.getElementsByClassName('spoiler')[0];
    let menuPrinter = '';
    let isSolved = true;

    if (hideA !== undefined) {
        hideA.remove();
        isSolved = false;
        menuPrinter += `<a class="totamjung-menu" id="totamjung-a">
                            πλ΄κ° μκ³  μλ μκ³ λ¦¬μ¦μΌλ‘ ν μ μλμ§ νμΈνκΈ°
                        </a>
                        <ul class="totamjung-text">
                            <li>βοΈ "ν μ μμ΅λλ€!" νμ΄μ λΉλλ€!</li>
                        </ul>`;
    }

    if (1 === 1) {
        console.log(hideB);
        hideB.innerHTML = '';
        menuPrinter += '<a class="totamjung-menu" id="totamjung-b">ποΈμκ³ λ¦¬μ¦ λΆλ₯ κ³΅κ°νκΈ°</a>';
    }

    hideB.innerHTML = menuPrinter;
    hideB.style.display = 'block';
}

window.onload = () => {
    const menuA = document.getElementById('totamjung-a');
    menuA.addEventListener('click', () => {
        menuA.classList.toggle('open');
    });

    const menuB = document.getElementById('totamjung-b');
    menuB.addEventListener('click', () => {
        menuB.classList.toggle('open');
    });
}

const data = getAlgorithmList();
createMenu(data);
