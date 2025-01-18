const SidebarLink = ({ text, onClick }) => {
    return (
      <button
        onClick={onClick}
        className="text-gray1 font-bold leading-normal border-none outline-none"
      >
        {text}
      </button>
    );
  };
  
  export default SidebarLink;
  