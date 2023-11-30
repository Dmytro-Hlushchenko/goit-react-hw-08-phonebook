export const getFilter = state => state.filter.filter;

export const getContacts = state => state.contact.contacts;
export const getLoading = state => state.contact.isLoading;
export const getError = state => state.contact.error;

export const selectToken = state => state.auth.token;
export const selectRegistrated = state => state.auth.registrated;
export const selectUser = state => state.auth.user;
export const selectIsRefreshing = state => state.auth.isRefreshing;