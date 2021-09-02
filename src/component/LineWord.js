import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {connect} from 'react-redux';
import { toggleMemorized, toggleShow } from '../redux/actionCreators';

class LineWord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refresh: false
    }
  }

  render() {
    const textDecorationLine = this.props.item.memorized
      ? 'line-through'
      : 'none';

      const show=()=>{
        this.props.toggleShow(this.props.item.id)
        // this.setState({
        //   refresh:true,
        // })
      }

      const memorized=()=>{
        this.props.toggleMemorized(this.props.item.id)
        // this.setState({
        //   refresh:true,
        // })
      }
      
      
    return (
      <View style={styles.line}>
        <Text style={{...styles.textStyle,textDecorationLine}}>{this.props.item.en}</Text>
        <Text style={styles.textStyle}>{this.props.item.isShow? '-----' :this.props.item.vn}</Text>
        <View style={styles.action}>
          <TouchableOpacity style={styles.button} onPress={memorized}>
            <Text style={styles.text}>{this.props.item.memorized? 'Forgot':'Memorized'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={show}>
          <Text style={styles.text}>{this.props.item.isShow? 'Show':'Hide'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return { arrWordsReducer: state.arrWordsReducer };
}


export default connect(mapStateToProps, { toggleMemorized, toggleShow })(LineWord);

const styles = StyleSheet.create({
  line: {
    backgroundColor: 'gray',
    marginBottom: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  textStyle: {
    fontSize: 16,
    color: 'yellow',
    lineHeight: 40,
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
});
