"use client"
import classes from "./MyButton.module.scss";

type MyButtonProps = {
  handle: () => void;
  children: React.ReactNode;
  className: string;
};

const MyButton: React.FC<MyButtonProps> = ({ handle, children, className }) => {
  return (
    <button onClick={handle} className={`${classes.mybutton} ${className}`}>
      {children}
    </button>
  );
};

export default MyButton;
