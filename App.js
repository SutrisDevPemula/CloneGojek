import React from 'react';
import {StyleSheet, Text, View, Image, TextInput} from 'react-native';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        {/* search bar */}
        <View
          style={{marginHorizontal: 17, flexDirection: 'row', paddingTop: 15}}>
          <View style={{position: 'relative', flex: 1}}>
            <TextInput
              placeholder="What do you want to eat?"
              style={{
                borderWidth: 1,
                borderColor: '#C4C4C4',
                borderRadius: 25,
                height: 40,
                fontSize: 13,
                paddingLeft: 45,
                paddingRight: 20,
                backgroundColor: 'white',
                marginRight: 18,
              }}
            />
            <Image
              source={require('./asset/icon/search.png')}
              style={{position: 'absolute', top: 5, left: 12}}
            />
          </View>

          <View
            style={{width: 35, alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('./asset/icon/promo.png')} />
          </View>
        </View>

        {/* Gopay */}
        <View style={{marginHorizontal: 17, marginTop: 8}}>
          {/*Header */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: '#2C5FB8',
              padding: 14,
              borderTopLeftRadius: 4,
              borderTopRightRadius: 4,
            }}>
            <Image source={require('./asset/icon/gopay.png')} />
            <Text style={{color: 'white', fontSize: 17, fontWeight: 'bold'}}>
              Rp. 50.000
            </Text>
          </View>

          {/* Menu */}
          <View
            style={{
              flexDirection: 'row',
              paddingBottom: 14,
              paddingTop: 20,
              backgroundColor: '#2F65BD',
              borderBottomLeftRadius: 4,
              borderBottomRightRadius: 4,
            }}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
              }}>
              <Image source={require('./asset/icon/pay.png')} />
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 13,
                  color: 'white',
                  marginTop: 15,
                }}>
                Pay
              </Text>
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Image source={require('./asset/icon/nearby.png')} />
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 13,
                  color: 'white',
                  marginTop: 15,
                }}>
                Nearby
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
              }}>
              <Image source={require('./asset/icon/topup.png')} />
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 13,
                  color: 'white',
                  marginTop: 15,
                }}>
                Top Up
              </Text>
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Image source={require('./asset/icon/more.png')} />
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 13,
                  color: 'white',
                  marginTop: 15,
                }}>
                More
              </Text>
            </View>
          </View>
        </View>

        {/* main feature */}
        <View style={{marginTop: 18, flexWrap: 'wrap'}}>
          {/* top */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              marginBottom: 18,
            }}>
            <View style={{width: '25%', alignItems: 'center'}}>
              <View
                style={{
                  width: 58,
                  height: 58,
                  borderWidth: 1,
                  borderColor: '#EFEFEF',
                  borderRadius: 18,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <Image source={require('./asset/icon/go-ride.png')} />
                </View>
            <Text style={{marginTop: 6, fontSize: 11, fontWeight: 'bold', textAlign: 'center'}}>GO-RIDE</Text>
            </View>
            <View style={{width: '25%', alignItems: 'center'}}>
              <View
                style={{
                  width: 58,
                  height: 58,
                  borderWidth: 1,
                  borderColor: '#EFEFEF',
                  borderRadius: 18,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <Image source={require('./asset/icon/go-car.png')} />
                </View>
            <Text style={{marginTop: 6, fontSize: 11, fontWeight: 'bold', textAlign: 'center'}}>GO-CAR</Text>
            </View>
            <View style={{width: '25%', alignItems: 'center'}}>
              <View
                style={{
                  width: 58,
                  height: 58,
                  borderWidth: 1,
                  borderColor: '#EFEFEF',
                  borderRadius: 18,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <Image source={require('./asset/icon/go-bluebird.png')} />
                </View>
            <Text style={{marginTop: 6, fontSize: 11, fontWeight: 'bold', textAlign: 'center'}}>GO-BLUEBIRD</Text>
            </View>
            <View style={{width: '25%', alignItems: 'center'}}>
              <View
                style={{
                  width: 58,
                  height: 58,
                  borderWidth: 1,
                  borderColor: '#EFEFEF',
                  borderRadius: 18,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <Image source={require('./asset/icon/go-send.png')} />
                </View>
            <Text style={{marginTop: 6, fontSize: 11, fontWeight: 'bold', textAlign: 'center'}}>GO-SEND</Text>
            </View>
          </View>
          {/* bottom */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <View style={{width: '25%', alignItems: 'center'}}>
              <View
                style={{
                  width: 58,
                  height: 58,
                  borderWidth: 1,
                  borderColor: '#EFEFEF',
                  borderRadius: 18,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <Image source={require('./asset/icon/go-deals.png')} />
                </View>
            <Text style={{marginTop: 6, fontSize: 11, fontWeight: 'bold', textAlign: 'center'}}>GO-DEALS</Text>
            </View>
            <View style={{width: '25%', alignItems: 'center'}}>
              <View
                style={{
                  width: 58,
                  height: 58,
                  borderWidth: 1,
                  borderColor: '#EFEFEF',
                  borderRadius: 18,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <Image source={require('./asset/icon/go-pulsa.png')} />
                </View>
            <Text style={{marginTop: 6, fontSize: 11, fontWeight: 'bold', textAlign: 'center'}}>GO-PULSA</Text>
            </View>
            <View style={{width: '25%', alignItems: 'center'}}>
              <View
                style={{
                  width: 58,
                  height: 58,
                  borderWidth: 1,
                  borderColor: '#EFEFEF',
                  borderRadius: 18,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <Image source={require('./asset/icon/go-food.png')} />
                </View>
            <Text style={{marginTop: 6, fontSize: 11, fontWeight: 'bold', textAlign: 'center'}}>GO-FOOD</Text>
            </View>
            <View style={{width: '25%', alignItems: 'center'}}>
              <View
                style={{
                  width: 58,
                  height: 58,
                  borderWidth: 1,
                  borderColor: '#EFEFEF',
                  borderRadius: 18,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <Image source={require('./asset/icon/go-more.png')} />
                </View>
            <Text style={{marginTop: 6, fontSize: 11, fontWeight: 'bold', textAlign: 'center'}}>MORE</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Bottom Navigation */}
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
