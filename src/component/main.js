import React from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {connect} from 'react-redux';
import {showAll, showMemorized, showNeedPractices} from '../redux/actionCreators'

import LineWord from './LineWord';

class Main extends React.Component {
  render() {
    
    
    let data = this.props.filter.memorized ?  
            this.props.arrWordsReducer.filter(e => e.memorized === true) : 
            this.props.arrWordsReducer.filter(e => e.memorized === false);
    if(this.props.filter.showAll){
      data = this.props.arrWordsReducer;
    }

    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <FlatList
            data={data}
            renderItem={({item}) => {
              return <LineWord item={item} />;
            }}
            keyExtractor={item => item.id}></FlatList>
        </View>

        {/* bottom button */}
        <View style={styles.containerBtn}>
          <TouchableOpacity style={styles.button} onPress={()=>this.props.showAll()}>
            <Text style={{...styles.text,color:this.props.filter.showAll?'yellow':'white'}}>Show all</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={()=>this.props.showMemorized()}>
            <Text style={{...styles.text,color:this.props.filter.memorized?'yellow':'white'}}>Memddorized</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={()=>this.props.showNeedPractices()}>
            <Text style={{...styles.text,color:this.props.filter.needPractices?'yellow':'white'}}>Need practices</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    arrWordsReducer: state.arrWordsReducer, filter: state.filterReducer
  };
}

export default connect(mapStateToProps, {showAll, showMemorized, showNeedPractices})(Main);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerBtn: {
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
});
