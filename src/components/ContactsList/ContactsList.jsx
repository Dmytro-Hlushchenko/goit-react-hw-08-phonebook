import { getContacts, getError, getFilter, getLoading } from "redux/selectors";
import { StyledContactList, StyledContactItem, StyledDeleteBtn } from "./ContactList.styled"
import { useSelector, useDispatch } from "react-redux";
import { deleteContactThunk } from "redux/operations";


export default function ContactsList () {

    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const isLoading = useSelector(getLoading);
    const error = useSelector(getError);
    const dispatch = useDispatch();


    const filteredContacts = () => {
        const lowerCaseFilter = filter.toLocaleLowerCase();
        return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(lowerCaseFilter));
    };
    
return(
    <div>
        <StyledContactList>
            {isLoading && !error && <b>  Loading...</b>}
            {error && <p>{error.message}</p>}
            {filteredContacts().map(item => (
                <StyledContactItem key={item.id}>
                        <p>{item.name} {item.number} </p>
                        <StyledDeleteBtn 
                        onClick={() => dispatch(deleteContactThunk(item.id))}
                        >Delete
                        </StyledDeleteBtn>
                </StyledContactItem>
            ))}
        </StyledContactList>
    </div>
    )
};