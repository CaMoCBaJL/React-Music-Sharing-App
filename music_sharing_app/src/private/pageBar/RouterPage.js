import React, {useReducer} from 'react';
import PageBar from './PageBar';
import {Dimensions, StyleSheet, View} from 'react-native';
import FeedPage from '../pages/FeedPage';
import HomePage from '../pages/HomePage';
import MixPage from '../pages/MixPage';
import MusicPage from '../pages/MusicPage';
import UserInfoPage from '../pages/UserInfoPage';
import SearchPage from '../pages/SearchPage';

const RouterPage: () => Node = () => {
  const reducer = (state, action) => {
    switch (action) {
      case 'FeedPage':
        return {...state, component: <FeedPage />};
      case 'HomePage':
        return {...state, component: <HomePage />};
      case 'MixPage':
        return {...state, component: <MixPage />};
      case 'MusicPage':
        return {...state, component: <MusicPage />};
      case 'UserInfoPage':
        return {...state, component: <UserInfoPage />};
      case 'SearchPage':
        return {...state, component: <SearchPage />};
      default:
        return null;
    }
  };

  const [page, dispatch] = useReducer(reducer);

  function handleTap(pageName) {
    dispatch(pageName);
  }

  return (
    <View>
      <View style={styles.barPosition}>
        <PageBar onTap={handleTap} />
      </View>
      {page.component}
    </View>
  );
};

const styles = StyleSheet.create({
  barPosition: {
    marginBottom: 10,
    flexDirection: 'row',
    top: Dimensions.get('window').height - 60,
  },
});

export default RouterPage;
