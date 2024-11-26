import './Button.css';

const Button = ({ image, text = null, onClick, type = null }) => {
    return (
        <div
            className={`chinese-chess__button 
                    ${type && 'outline'} 
                    ${text === null ? '' : 'hover'} 
                `}
            onClick={onClick}
        >
            <img src={image} alt={text} />
            {text}
        </div>
    );
};

export default Button;
