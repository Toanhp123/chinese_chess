import './Button.css';

const Button = ({ image, text }) => {
    return (
        <div>
            <img src={image} alt={text} />
            {text}
        </div>
    );
};

export default Button;
