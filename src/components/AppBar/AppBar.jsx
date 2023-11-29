
import AuthMenu from 'components/AuthMenu';
import  UserMenu  from '../UserMenu/UserMenu';

import { Navigation } from 'components/Navigation/Navigation';
import { useSelector } from 'react-redux';
import { selectRegistrated } from 'redux/selectors';
import { StyledHeader } from './AaaBar.styled';


export const AppBar = () => {
  const registrated = useSelector(selectRegistrated);

  return (
    <StyledHeader>
      <Navigation />
      {registrated ? <UserMenu /> : <AuthMenu />}
    </StyledHeader>
  );
};
