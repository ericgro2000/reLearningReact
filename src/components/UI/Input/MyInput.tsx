import classes from "./MyInput.module.css";

interface MyInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const MyInput: React.FC<MyInputProps> = (props) => {
  return <input className={classes.myInput} {...props} />;
};

export default MyInput;
