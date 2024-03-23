import imgUrl from './swimming_pool.webp'

const addWebpFile = () => {
    const el = document.createElement('img');
    el.src = imgUrl;
    const body = document.body;
    body.appendChild(el);
}

export default addWebpFile;