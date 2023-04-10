
import s from './Filter.module.css';
import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contacts/contactsSlice';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        className={s.input}
        type="text"
        name="filter"
        onChange={(e) => {
          dispatch(changeFilter(e.target.value));
        }}
      />
    </div>
  );
};


export default memo(Filter);
