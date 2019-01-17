// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './stateDispatch';
import api from '../../api';
import SelectsSection from './SelectsSection';
import { Border, Stepper, Icon } from '../../components/ui';
import Card from '../../components/Card';


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
        {activeItem &&
          <Card { ...activeItem } />
        }
        <Stepper steps={[true, true, false]} backolor='green' />
        <Icon name="igloo" colorName="primary"/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
