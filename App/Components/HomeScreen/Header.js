import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Header, Left, Body, sButton, Icon } from 'native-base';
import { View, Text } from 'react-native'
import styles from '../Styles/HeaderStyle'

export default class Header extends Component {
  // // Prop type warnings
  static propTypes = {
    navigation: PropTypes.object,
    toggleMenu: PropTypes.func,
  }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  constructor(props){
    super(props)
  }

  render () {
    return (
      <Header style={styles.border}>
        <Left style={styles.container}>
          <Button
            transparent
            onPress={() => this.props.navigation.navigate('DrawerOpen')}>
            <Icon name='menu'/>
          </Button>
        </Left>
        <Body style={{alignItems: 'center'}}>
          <Title style={{width: 200}}>
            Waddddup
          </Title>
        </Body>
      </Header>
    )
  }
}
