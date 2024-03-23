import svgfile from './student_study_table.svg';

const AddSvgFile = () => {
    const el = document.createElement('img');
    el.src = svgfile;
    const body = document.body;
    body.appendChild(el);
}

export default AddSvgFile;