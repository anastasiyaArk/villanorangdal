import {UPDATE_MULTILINGUAL_ROUTES, UPDATE_SELECTED_LANGUAGE_KEY} from 'constants/types';

export const getLanguageSlug = (selectedLanguageKey) => (dispatch, getState) => {
  return getState().availableLanguages && getState().availableLanguages.hasOwnProperty(selectedLanguageKey)
    ? getState().availableLanguages[selectedLanguageKey].path
    : '';
}

export const updateMultilingualRoutes = (path) => (dispatch, getState) => {
  const appDomain = window.location.origin;
  let multilingualRoutes = {};
  if (getState().availableLanguages && Object.keys(getState().availableLanguages).length) {
    Object.keys(getState().availableLanguages).forEach(languageKey => {
      const languageSlug = dispatch(getLanguageSlug(languageKey));
      multilingualRoutes[languageKey] = {
        url: `${appDomain}/${languageSlug}${path}`,
        path: `/${languageSlug}${path}`
      }
    });
    dispatch({type: UPDATE_MULTILINGUAL_ROUTES, payload: multilingualRoutes});
  }
}

export const updateSelectedLanguageKey = (languageKey) => dispatch => {
  dispatch({type: UPDATE_SELECTED_LANGUAGE_KEY, payload: languageKey});
}
