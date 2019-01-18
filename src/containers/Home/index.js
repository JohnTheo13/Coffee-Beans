// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './stateDispatch';
import api from '../../api';
import SelectsSection from './components/SelectsSection';
import Card from '../../components/Card';
import { CoffeeType } from '../../types';

type Props = {
  startFetchingItems: Function,
  itemsFetched: Function,
  failedFetch: Function,
  countryChange: Function,
  diseaseChange: Function,
  activeChanged: Function,
  clear: Function,
  items: {
    fetched: boolean,
    activeItem?: CoffeeType,
    countriesList: Array<string> 
  }
}


class Home extends Component<Props, {}> {
  async componentDidMount() {
    const {
      startFetchingItems, itemsFetched, failedFetch,
    } = this.props;
    startFetchingItems();
    const list = await api.get('api');
    
    if (list.message) {
      failedFetch();
    } else {
      itemsFetched(list);
    }
  }

  render() { 
    const {
      countryChange,
      diseaseChange,
      clear,
      activeChanged,
      items: {
      fetched, activeItem, countriesList
    } } = this.props;

    return (
      <div>
        {fetched ?
          <SelectsSection
            countriesList={countriesList}
            countryChange={countryChange}
            diseaseChange={diseaseChange}
            activeChanged={activeChanged}
            clear={clear}
          />
          : 'Loading'
        }
        {activeItem &&<Card { ...activeItem } />}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
