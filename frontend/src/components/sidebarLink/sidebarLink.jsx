const SidebarLink = ({ text, onClick }) => {
    return (
      <button
        onClick={onClick}
        className="text-mediumGray font-gotham text-sm font-bold leading-normal border-none outline-none"
      >
        {text}
      </button>
    );
  };
  
  export default SidebarLink;
  