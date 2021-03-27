import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const App = () => {
  return (
    <View style={{flex: 1}}>
      {/* <Text style={styles.wellcome}>Wellcome Gojek App !</Text> */}
      <View style={{flex: 1, backgroundColor: 'blue'}}></View>

      <View
        style={{height: 54, flexDirection: 'row', backgroundColor: 'white'}}>
        
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Image
            style={{width: 26, height: 26}}
            source={require('./asset/icon/home-active.png')}
          />
          <Text style={{fontSize: 10, color: '#43AB4A', marginTop: 4}}>
            Home
          </Text>
        </View>
        
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Image
            style={{width: 26, height: 26}}
            source={require('./asset/icon/order.png')}
          />
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
            Orders
          </Text>
        </View>
        
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Image
            style={{width: 26, height: 26}}
            source={require('./asset/icon/help.png')}
          />
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
            Help
          </Text>
        </View>
        
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Image
            style={{width: 26, height: 26}}
            source={require('./asset/icon/inbox.png')}
          />
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
            Inbox
          </Text>
        </View>
        
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Image
            style={{width: 26, height: 26}}
            source={require('./asset/icon/account.png')}
          />
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
            Account
          </Text>
        </View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
