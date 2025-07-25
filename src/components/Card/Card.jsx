import './Card.css';

const Card = ({ title, description, image, onClick }) => {
    return (
        <div className="chinese-chess__card" onClick={onClick}>
            <img src={image} alt="title" />
            <div className="chinese-chess__card--text">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Card;
