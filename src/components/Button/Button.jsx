import './Button.css';

const Button = ({ image, text }) => {
    return (
        <div className="chinese-chess__button">
            <img src={image} alt={text} />
            {text}
        </div>
    );
};

export default Button;
