import './style.css';

const addCSSFile = () => {
    const el = document.createElement('div');
    el.innerHTML = 'Importing CSS file'
    el.classList.add('text-color');
    const body = document.body;
    body.appendChild(el)
}

export default addCSSFile;