const selectLoading = state => state.auth.loading;
const selectIsLoggedIn = state => state.auth.isLoggedIn;
const selectUser = state => state.auth.user;
const selectToken = state => state.auth.token;
const selectError = state => state.auth.error;
const selectIsError = state => state.auth.isError;
const selectIsRefreshing = state => state.auth.isRefreshing;
const selectIsLoading = state => state.auth.isLoading;
const selectAuth = state => state.auth;

export {
    selectAuth,
    selectError,
    selectIsError,
    selectIsLoading,
    selectIsLoggedIn,
    selectIsRefreshing,
    selectLoading,
    selectToken,
    selectUser
};