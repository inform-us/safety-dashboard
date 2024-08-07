import './Button.css';

type Props = React.ComponentProps<'button'> & {
  inverse?: boolean;
  danger?: boolean;
  size?: string;
  type?: string;
  name?: string;
  value?: string;
  onClick?: any;
  active?: boolean;
  href?: string;
};

const Button = (props: Props) => {
  if (props.href) {
    return (
      <a
        className={`button ${props.size ? `button--${props.size}` : ''} ${props.inverse ? 'button--inverse' : ''} ${props.active ? 'button--active' : ''}`}
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.children}
      </a>
    );
  }

  return (
    <button
      className={`button ${props.size ? `button--${props.size}` : ''} ${props.inverse ? 'button--inverse' : ''} ${props.active ? 'button--active' : ''}`}
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
