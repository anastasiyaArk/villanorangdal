// Dependencies
import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'

// Reducers
import AvailableLanguagesReducer from 'reducers/AvailableLanguagesReducer';
import MultilingualRoutesReducer from 'reducers/MultilingualRoutesReducer';
import SelectedLanguageKeyReducer from 'reducers/SelectedLanguageKeyReducer';

export default (history) => combineReducers({
  router: connectRouter(history),
  availableLanguages: AvailableLanguagesReducer,
  multilingualRoutes: MultilingualRoutesReducer,
  selectedLanguageKey: SelectedLanguageKeyReducer,
});
