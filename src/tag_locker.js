function getAlgorithmList() {
    const parsed = document.getElementsByClassName('spoiler-link');
    let result = [];

    for (let i = 0; i < parsed.length; i++)
        result.push({ 'name': parsed[i].innerText, 'link': parsed[i].href });

    return result;
}

const data = getAlgorithmList();
console.log(data);