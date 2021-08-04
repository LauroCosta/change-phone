import "./style.scss";

interface IButtonProps {
  actionDescription: string;
}
export const CancelButton: React.FC = ({ children }) => {
  return (
    <button>
      {children as React.ReactChildren}
    </button>
  );
}