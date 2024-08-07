import ReactDOM from 'react-dom';
import './Backdrop.css'; 

type Props = {
  onClick: () => void;
  show?: boolean;
};

const Backdrop = (props: Props) => {
  return ReactDOM.createPortal(
    <div
      className={`backdrop ${props.show ? 'show' : ''}`}
      onClick={props.onClick}
    ></div>,
    document.getElementById('backdrop-hook')!
  );
};

export default Backdrop;
