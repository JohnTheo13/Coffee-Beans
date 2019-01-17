import {
  startFetchingItems,
  itemsFetched,
  failedFetch,
  countryChange,
  diseaseChange,
  clear,
  activeChanged
} from '../../reducers/itemsReducer/actions';

const mapStateToProps = ({ items }) => ({ items }),

  mapDispatchToProps = dispatch => ({
    startFetchingItems: () => dispatch(startFetchingItems()),
    itemsFetched: list => dispatch(itemsFetched(list)),
    failedFetch: () => dispatch(failedFetch()),
    diseaseChange: disease => dispatch(diseaseChange(disease)),
    countryChange: country => dispatch(countryChange(country)),
    clear: type => dispatch(clear(type)),
    activeChanged: name => dispatch(activeChanged(name))
  });

export { mapStateToProps, mapDispatchToProps };
