import './button.css';

const Button = ({ submitHandler }) => {
    return <button onClick={submitHandler}>Find</button>;
};

export default Button;
