import PropTypes from 'prop-types';

const Alert = ({ message, type }) => {
  const alertColor = type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
  
  return (
    <div className={`p-4 mb-4 rounded ${alertColor}`}>
      <span>{message}</span>
    </div>
  );
};


Alert.propTypes = {
  message: PropTypes.string.isRequired, 
  type: PropTypes.oneOf(['success', 'danger']).isRequired
};

export default Alert;
