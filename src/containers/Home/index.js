// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './stateDispatch';
import api from '../../api';
import SelectsSection from './components/SelectsSection';
import { Border, Stepper, Icon, ReviewsStatic, SizeBar } from '../../components/UI';
import Card from '../../components/Card';
import { active } from './diseaeseList';


class Home extends Component {
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
    const { countryChange,
      diseaseChange,
      clear,
      activeChanged,
      items: {
      fetching, fetched, failedFetch, activeItem, countriesList
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
