import './Button.css';

type Props = React.ComponentProps<'button'> & {
  inverse?: boolean;
  danger?: boolean;
  size?: string;
  type?: string;
  name?: string;
  value?: string;
  onClick?: any; // any so that it can be a function that takes any arguments
  active?: boolean; // the spc chart buttons utilise this, but it doesnt look like its used here
};

const Button = (props: Props) => {
  return (
    <button
      className={`button ${`button--${props.size}`} ${props.inverse && 'button--inverse'} ${
        props.active && 'button--active'
      }
      }`}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
      name={props.name}
      value={props.value}
    >
      {props.children}
    </button>
  );
};

export default Button;
