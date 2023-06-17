import PropTypes from 'prop-types';
import css from './contactItem.module.css'

const ContactItem = ({ id, name, number, onDeletContact }) => (
    <li key={id}>{name}: {number}<button className={css['btn-list']} type="button" onClick={() => onDeletContact(name)}>Delet</button></li>
    
)

export default ContactItem;

ContactItem.prototype = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
  onDeletContact: PropTypes.func
}