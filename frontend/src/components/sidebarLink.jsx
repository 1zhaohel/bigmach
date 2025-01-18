const SidebarLink = ({ text, onClick }) => {
    return (
      <button
        onClick={onClick}
        className="text-mediumGray bold text-sm font-bold leading-normal border-none outline-none"
      >
        {text}
      </button>
    );
  };
  
  export default SidebarLink;
  