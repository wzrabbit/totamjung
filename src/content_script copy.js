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
                            🔎내가 알고 있는 알고리즘으로 풀 수 있는지 확인하기
                        </a>
                        <ul class="totamjung-text">
                            <li>✔️ "풀 수 있습니다!" 행운을 빕니다!</li>
                        </ul>`;
    }

    if (1 === 1) {
        console.log(hideB);
        hideB.innerHTML = '';
        menuPrinter += '<a class="totamjung-menu" id="totamjung-b">🗝️알고리즘 분류 공개하기</a>';
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
