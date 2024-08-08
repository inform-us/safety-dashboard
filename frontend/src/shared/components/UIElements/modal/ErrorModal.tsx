import Modal from './Modal';
import Button from '../Button';

type Props = {
  onClear: () => void;
  error: string | null;
};

const ErrorModal = (props: Props) => {
  return (
    <Modal
      onCancel={props.onClear}
      header="Something went wrong!"
      show={!!props.error}
      footer={<Button onClick={props.onClear}> Okay </Button>}
    >
      <p>{props.error}</p>
    </Modal>
  );
};

export default ErrorModal;
