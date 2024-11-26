import './Button.css';

const Button = ({ image, text = '', onClick }) => {
    return (
        <div
            className={`chinese-chess__button ${text === '' ? '' : 'hover'}`}
            onClick={onClick}
        >
            <img src={image} alt={text} />
            {text}
        </div>
    );
};

export default Button;
