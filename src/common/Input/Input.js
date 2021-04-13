import './input.css';

const Input = ({ input, inputHandler }) => {
    return (
        <input
            value={input}
            placeholder="username"
            name="user"
            onChange={inputHandler}
        />
    );
};

export default Input;
