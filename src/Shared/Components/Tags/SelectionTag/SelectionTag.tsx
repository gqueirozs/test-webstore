import './SelectionTag.scss'
import { CloseCircle } from "Shared/Assets/Icons";

const SelectionTag = ({ label, action }:{ label:string, action:VoidFunction }) => {
  return (
    <span className="SelectionTag">
      {label}
      <span
        className="Close"
        onClick={action}
      >
        <CloseCircle />
      </span>
    </span>
  );
};

export default SelectionTag;
