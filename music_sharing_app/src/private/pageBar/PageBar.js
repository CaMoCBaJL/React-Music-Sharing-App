import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';

const PageBar = props => {
  function clickToRedirect(component) {
    props.onTap(component);
  }

  const pages = [
    {key: 1, img: require('../../../images/feed.png'), component: 'FeedPage'},
    {key: 2, img: require('../../../images/home.png'), component: 'HomePage'},
    {key: 3, img: require('../../../images/mix.png'), component: 'MixPage'},
    {key: 4, img: require('../../../images/music.png'), component: 'MusicPage'},
    {
      key: 5,
      img: require('../../../images/user-info.png'),
      component: 'UserInfoPage',
    },
    {
      key: 6,
      img: require('../../../images/search.png'),
      component: 'SearchPage',
    },
  ];

  return pages.map(pageData => (
    <TouchableOpacity
      accessible={true}
      onPress={() => clickToRedirect(pageData.component)}>
      <Image style={styles.imageStyle} source={pageData.img} />
    </TouchableOpacity>
  ));
};

const styles = StyleSheet.create({
  imageStyle: {
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    width: 40,
    height: 40,
    marginRight: 15,
    marginLeft: 5,
    left: 15,
  },
});

export default PageBar;
