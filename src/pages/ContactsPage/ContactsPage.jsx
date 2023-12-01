import ContactsList from "components/ContactsList";
import Filter from "components/Filter/";
import FormInput from "components/FormInput";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContactsThunk } from "redux/contacts/operations";
import { getFilter } from "redux/contacts/selectors";


export default function ContactsPage() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <div>
      <p>Phonebook</p>
      <FormInput />
      <p>Contacts</p>
      {<Filter filter={filter} />}
      <ContactsList />
    </div>
  )
};