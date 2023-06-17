import ContactItem from "./ContactItem/ContactItem";
import PropTypes from 'prop-types';
import css from './contactList.module.css';

const ConractList = ({ arr, onDeletContact }) => (
    <>
    <ul className={css['list']}>
        {arr.map(({ id, name, number }) => (
            <ContactItem key={id}
                name={name}
                number={number}
                onDeletContact={onDeletContact}
            />))}
    </ul>
        
    </>
)

export default ConractList

ConractList.prototype = {
  arr: PropTypes.array,
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
  onDeletContact: PropTypes.func
}