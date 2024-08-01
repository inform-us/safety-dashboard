import './Button.css';

type Props = React.ComponentProps<'button'> & {
  inverse?: boolean;
  danger?: boolean;
  size?: string;
  type?: string;
  name?: string;
  value?: string;
  onClick?: any; // any so that it can be a function that takes any arguments
  active?: boolean; // the spc chart buttons utilize this, but it doesn't look like it's used here
};

const TileButton = (props: Props) => {
  return (
    <button
      className={`button--tile button ${props.size ? `button--${props.size}` : ''} ${props.inverse ? 'button--inverse' : ''} ${props.active ? 'button--active' : ''}`}
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

export default TileButton;
