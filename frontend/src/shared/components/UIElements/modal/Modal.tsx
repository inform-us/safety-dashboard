import { CSSProperties, ReactElement } from 'react';
import ReactDOM from 'react-dom';
import Backdrop from './Backdrop';
import './Modal.css'; // Import the regular CSS file

type ModalOverlayProps = {
  className?: string;
  style?: CSSProperties | null | undefined;
  headerClass?: string;
  header?: string;
  onSubmit?: () => void | undefined;
  contentClass?: string;
  footerClass?: string;
  footer?: ReactElement;
  children?: ReactElement;
  show: boolean;
};

type ModalProps = ModalOverlayProps & {
  onCancel?: () => void | undefined;
};

const ModalOverlay = (props: ModalOverlayProps) => {
  const content = (
    <div
      className={`modal ${props.show ? 'show' : ''} ${props.className}`} // Use regular class names
      style={props.style || {}}
    >
      <header className={`modal__header ${props.headerClass}`}>
        <h2>{props.header}</h2>
      </header>

      <form onSubmit={props.onSubmit ? props.onSubmit : (event) => event.preventDefault()}>
        <div className={`modal__content ${props.contentClass}`}>
          {props.children}
        </div>

        <footer className={`modal__footer ${props.footerClass}`}>
          {props.footer}
        </footer>
      </form>
    </div>
  );
  
  return ReactDOM.createPortal(content, document.getElementById('modal-hook')!);
};

const Modal = (props: ModalProps) => {
  return (
    <>
      {props.show && <Backdrop show={props.show} onClick={props.onCancel!} />}
      {props.show && <ModalOverlay {...props} />}
    </>
  );
};

export default Modal;
