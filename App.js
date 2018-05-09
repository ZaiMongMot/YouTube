/**
 * JYoutube
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Image,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

// import {StackNavigator} from 'react-navigation';
import YouTube from 'react-native-youtube';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import YouTubeVideo from './src/YouTubeVideo';

const apiKey = 'AIzaSyCgIeTOMVozORhVbEgwoC84mSat7cilBX4';
const channelId = 'UCQzdMyuz0Lf4zo4uGcEujFw';
const results = 30;

// export default screens = StackNavigator({
//   Home:{screen: App},
//   YouTubeVideo: {screen:YouTubeVideo}
// })
 type Props={};
export default class App extends Component<Props> {

  // static navigationOptions = {
  //   headerStyle:{
  //     backgroundColor: '#fff',
  //   },
  //   headerLeft:(
  //     <TouchableOpacity>
  //       <Image 
  //         style = {{height: 22, width:98, color:'#fff', marginLeft: 25}}
  //         source={ require('./images/YouTube_logo.png')}
  //       />
  //     </TouchableOpacity>
  //   ),
  //   headerRight:(
  //     <View style = {{flexDirection: 'row', marginRight: 20}}>
  //       <TouchableOpacity style={{paddingHorizontal:5}}>
  //         <Icon name = 'cast-connected' size={25} color = {'#555'}/>
  //       </TouchableOpacity>
  //       <TouchableOpacity style={{paddingHorizontal:5}}>
  //         <Icon name = 'videocam' size={25} color = {'#555'}/>
  //       </TouchableOpacity>
  //       <TouchableOpacity style={{paddingHorizontal:5}}>
  //         <Icon name = 'search' size={25} color = {'#555'}/>
  //       </TouchableOpacity>
  //       <TouchableOpacity style={{paddingHorizontal:5}}>
  //         <Icon name = 'account-circle' size={25} color = {'#555'}/>
  //       </TouchableOpacity>
  //     </View>
  //   ),
  // }

  constructor(props){
    super(props)
    this.state = {
      data:[]
    }
  }

  componentDidMount(){
    fetch(`https://www.googleapis.com/youtube/v3/search/?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${results}`)
    .then(res => res.json())
    .then(res => {
      const videoId = [];
      console.log(res);
      res.items.forEach(item => {
        videoId.push(item)
      });
      this.setState({
        data:videoId
      });
    })
    .catch(error =>{
      console.error(error);
    })
  }

  render() {
    //const{navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style = {styles.body}>
          {this.state.data.map((item, i) =>
            <TouchableHighlight
              key ={item.id.videoId}
              //onPress={()=> navigate ('YouTubeVideo', {youtubeId: item.id.videoId})} 
              >
              <View style = {styles.vids}>
                <Image 
                source = {{uri: item.snippet.thumbnails.medium.url}}
                style = {{width: 320, height:180}}/>
                <View style = {styles.vidItems}>
                  <Image 
                  source={require('./images/vids.jpg')}
                  style={{width:40, height:40, borderRadius:20, marginRight:5}}/>
                  <Text style={styles.vidText}>{item.snippet.title}</Text>
                  <Icon name='more-vert' size={20} color='#555'/>
                </View>
              </View>
            </TouchableHighlight>
          )}
          </View>
        </ScrollView>
        <View style = {styles.tabBar}>
          <TouchableOpacity style={styles.tabItems}>
            <Icon name = 'home' size={25} color = {'#444'}/>
            <Text>style ={styles.tabTitle}Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItems}>
            <Icon name = 'whatshot' size={25} color = {'#444'}/>
            <Text>style ={styles.tabTitle}Trending</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItems}>
            <Icon name = 'subscriptions' size={25} color = {'#444'}/>
            <Text>style ={styles.tabTitle}Subscriptions</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItems}>
            <Icon name = 'bookmark' size={25} color = {'#444'}/>
            <Text>style ={styles.tabTitle}Activity</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItems}>
            <Icon name = 'folder' size={25} color = {'#444'}/>
            <Text>style ={styles.tabTitle}Library</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    height: 70,
    flexDirection: 'row',
    justifyContent:'space-around',
    backgroundColor: '#fff',
    borderTopWidth: 0.5,
    borderColor: '#bbb',
  },
  tabItems: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 5,
  },
  tabTitle: {
    fontSize: 11,
    color:'#333',
    textDecorationLine: 'underline',
    paddingTop: 4,
  },
  body: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 30,
  },
  vids: {
    width: 320,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'center',
    borderBottomWidth: 0.6,
    borderColor: '#aaa',
    paddingBottom: 30,
  },
  vidItems: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-around',
    padding: 10,
  },
  vidText: {
    color:'#000',
    padding: 20,
  },
});
