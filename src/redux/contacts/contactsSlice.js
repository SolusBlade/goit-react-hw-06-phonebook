import { createSlice } from '@reduxjs/toolkit';
import contactsList from '../../data/contacts';

const contactsSlice = createSlice({
  name: 'contacts',

  initialState: {
    items: contactsList,
    filter: '',
  },
  
  reducers: {
    add(state, { payload }) {
      return {
        ...state,
        items: [...state.items, payload],
      };
    },
    remove(state, { payload }) {
      return {
        ...state,
        items: state.items.filter(el => el.id !== payload),
      };
    },
    changeFilter: {
      reducer(state, { payload }) {
        return {
          ...state,
          filter: payload,
        };
      },
      prepare(value) {
        return {
          payload: value.toLowerCase(),
        };
      },
    },
  },
});

export const {add, remove, changeFilter} = contactsSlice.actions;
export default contactsSlice.reducer;

