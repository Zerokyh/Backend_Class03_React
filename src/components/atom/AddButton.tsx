type AddButton = {
  handleClick?: () => void;
};

const AddButton = ({ handleClick }: AddButton) => {
  return (
    <button
      onClick={handleClick}
      className="py-5 px-8 rounded-3xl bg-purple-500 text-white font-bold text-lg"
    >
      + New Task
    </button>
  );
};

export default AddButton;
