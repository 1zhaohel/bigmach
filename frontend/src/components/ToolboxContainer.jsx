
const ToolboxContainer = ({ children }) => {
    const containerStyle = {
      width: '219px',
      height: '166px',
      flexShrink: 0,
      borderRadius: '15px',
      background: '#E1CCCF',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    };
  
    return <div style={containerStyle}>{children}</div>;
  };
  
  export default ToolboxContainer;
  