import { updateByCountry, updateByDisease } from './helpers';
import {
  ITEMS_FETCHING,
  ITEMS_FETCHED,
  ACTIVE_ITEM_UPDATED,
  FAILED_FETCH,
  CLEAR_ACTIVE,
  CHANGE_COUNTRY,
  CHANGE_DISEASE,
  CLEAR_COUNTRY,
  CLEAR_DISEASE
} from './actionTypes';

/**
 * Our app's reducer
 * @params fetch... for ui usage
 * @param list the returned list
 * @param activeList the list of options to choice
 * @param activeItem the item chosen from activeList
 * @param ...Chosen to keep track of the filters
 */

const initialState = {
  fetching: false,
  fetched: false,
  failedFetch: false,
  list: [],
  activeList: [],
  activeItem: null,
  countyChosen: '',
  diseaseChosen: ''
};

export default (state = initialState, action) => {
  const { activeList, list, diseaseChosen, countyChosen } = state;
  switch (action.type) {
    case ITEMS_FETCHING:
      return { ...state, fetching: true };
    case ITEMS_FETCHED:
      return {
        ...state,
        fetched: true,
        fetching: false,
        ...action.payload,
      };
    case ACTIVE_ITEM_UPDATED:
      const activeItem = activeList.find(item => item.name === action.payload);
      return { ...state, activeItem };
    case FAILED_FETCH:
      return {
        ...state, failedFetch: true, fetching: false,
      };
    case CHANGE_COUNTRY:
      const active = diseaseChosen
        ? activeList.filter(updateByCountry(action.payload))
        : list.filter(updateByCountry(action.payload));
      return {
        ...state,
        activeList: [ ...active ],
        countyChosen: action.payload
      };
    case CHANGE_DISEASE:
      const updatedList = countyChosen
        ? activeList.filter(updateByDisease(action.payload))
        : list.filter(updateByDisease(action.payload));
      return {
        ...state,
        activeList: [ ...updatedList ],
        diseaseChosen: action.payload
      };
    case CLEAR_COUNTRY:
      const clearedCountryList = diseaseChosen
        ? list.filter(updateByDisease(diseaseChosen))
        : list;
      return {
        ...state,
        countyChosen: '',
        activeList: [ ...clearedCountryList ],
      };
    case CLEAR_DISEASE:
      const clearedDiseaseList = countyChosen
        ? list.filter(updateByCountry(countyChosen))
        : list;
      return {
        ...state,
        diseaseChosen: '',
        activeList: [ ...clearedDiseaseList ],
      };
    case CLEAR_ACTIVE:
      return { ...state, activeItem: null };
    default:
      return state;
  }
};

export { initialState };
