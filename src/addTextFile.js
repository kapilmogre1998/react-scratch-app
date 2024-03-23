import simpleTxt from './example.txt'

const addTextFile = () => {
    const el = document.createElement('div');
    el.innerHTML = simpleTxt;
    const body = document.body;
    body.appendChild(el);
}

export default addTextFile;