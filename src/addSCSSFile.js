import './style.scss';

const addSCSSFile = () => {
    const el = document.createElement('div');
    el.innerHTML = 'Importing SCSS file';
    el.classList.add('text-style');
    document.body.appendChild(el);
}

export default addSCSSFile;