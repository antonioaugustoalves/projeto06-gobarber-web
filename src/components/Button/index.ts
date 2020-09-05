import react, { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button:React.FC<ButtonProps> = (props) =>(

    <button type="button" {...props}>Clique aqui</button>;


);




export default Button;
