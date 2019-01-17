import {
  ITEMS_FETCHING,
  ITEMS_FETCHED,
  ACTIVE_ITEM_UPDATED,
  FAILED_FETCH,
  CLEAR_,
  CHANGE_COUNTRY,
  CHANGE_DISEASE
} from './actionTypes';
import { countries } from './helpers';

const startFetchingItems = () => ({ type: ITEMS_FETCHING }),
  itemsFetched = list => ({
    type: ITEMS_FETCHED,
    payload: {
      list,
      activeList: list,
      countriesList: countries(list)
    }
  }),
  activeChanged = name => ({ type: ACTIVE_ITEM_UPDATED, payload: name }),
  clear = type => ({ type: CLEAR_[type] }),
  failedFetch = () => ({ type: FAILED_FETCH }),
  diseaseChange = disease => ({ type: CHANGE_DISEASE, payload: disease }),
  countryChange = country => ({ type: CHANGE_COUNTRY, payload: country });

export {
  startFetchingItems,
  itemsFetched,
  activeChanged,
  failedFetch,
  countryChange,
  diseaseChange,
  clear
};
