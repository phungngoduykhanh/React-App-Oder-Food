import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  PanResponder,
  Platform,
  StyleSheet,
  Dimensions,
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  Pressable,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("window");
const BOTTOM_SHEET_MAX_HEIGHT = WINDOW_HEIGHT * 0.96;
const BOTTOM_SHEET_MIN_HEIGHT = WINDOW_HEIGHT * 0.65;
const MAX_UPWARD_TRANSLATE_Y =
  BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT; // negative number;
const MAX_DOWNWARD_TRANSLATE_Y = 0;
const DRAG_THRESHOLD = 50;



const DetailMenu = () => {
  const [dataPopular, setDataPopular] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const IdPopulerItem = await AsyncStorage.getItem('IdPopulerItem');
        if (IdPopulerItem !== null) {
          const apiUrl = `https://656153d3dcd355c08323c1ac.mockapi.io/api/PopularMenu/${IdPopulerItem}`;
          const response = await axios.get(apiUrl);
          setDataPopular(response.data)
        } else {
          console.log('Không có ID trong Local Storage.');
        }
      } catch (error) {
        console.error('Lỗi khi đọc ID từ Local Storage:', error);
      }
    };
    fetchData()
  }, [])

  const handleAddToCart = () => {
    const fetchData = async () => {
      try {
        const IdPopulerItem = await AsyncStorage.getItem('IdPopulerItem');
        if (IdPopulerItem !== null) {
          var apiUrl = `https://656153d3dcd355c08323c1ac.mockapi.io/api/PopularMenu/${IdPopulerItem}`;
          var response = await axios.get(apiUrl);
          const dataPopular = response.data

        const newData = {
          ...dataPopular,
          quantity: 1
        }
        var apiUrl = `https://656153d3dcd355c08323c1ac.mockapi.io/api/Cart`;
        var response = await axios.post(apiUrl, newData);
        setTimeout(() => {
          alert("Add To Cart Success")

        }, 1300);
      }
      } catch (error) {
        console.error('Lỗi khi đọc ID từ Local Storage:', error);
      }
    };
    fetchData()
  }

  const listMenu = [
    {
      id: "0",
      image: require("../assets/ProfileMenu.png"),
      userName: "Dianne Russell",
      date: "12 April 2021",
    },
    {
      id: "1",
      image: require("../assets/ProfileMenu.png"),
      userName: "Dianne Russell",
      date: "11 April 2021",
    },
    {
      id: "2",
      image: require("../assets/ProfileMenu.png"),
      userName: "Dianne Russell",
      date: "10 April 2021",
    },
    {
      id: "2",
      image: require("../assets/ProfileMenu.png"),
      userName: "Dianne Russell",
      date: "9 April 2021",
    },
    {
      id: "2",
      image: require("../assets/ProfileMenu.png"),
      userName: "Dianne Russell",
      date: "8 April 2021",
    },
    {
      id: "2",
      image: require("../assets/ProfileMenu.png"),
      userName: "Dianne Russell",
      date: "7 April 2021",
    },
  ];
  const animatedValue = useRef(new Animated.Value(0)).current;
  const lastGestureDy = useRef(0);
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        animatedValue.setOffset(lastGestureDy.current);
      },
      onPanResponderMove: (e, gesture) => {
        animatedValue.setValue(gesture.dy);
      },
      onPanResponderRelease: (e, gesture) => {
        animatedValue.flattenOffset();
        lastGestureDy.current += gesture.dy;

        if (gesture.dy > 0) {
          // dragging down
          if (gesture.dy <= DRAG_THRESHOLD) {
            springAnimation("up");
          } else {
            springAnimation("down");
          }
        } else {
          // dragging up
          if (gesture.dy >= -DRAG_THRESHOLD) {
            springAnimation("down");
          } else {
            springAnimation("up");
          }
        }
      },
    })
  ).current;

  const springAnimation = (direction) => {
    console.log("direction", direction);
    lastGestureDy.current =
      direction === "down" ? MAX_DOWNWARD_TRANSLATE_Y : MAX_UPWARD_TRANSLATE_Y;
    Animated.spring(animatedValue, {
      toValue: lastGestureDy.current,
      useNativeDriver: true,
    }).start();
  };

  const bottomSheetAnimation = {
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [MAX_UPWARD_TRANSLATE_Y, MAX_DOWNWARD_TRANSLATE_Y],
          outputRange: [MAX_UPWARD_TRANSLATE_Y, MAX_DOWNWARD_TRANSLATE_Y],
          extrapolate: "clamp",
        }),
      },
    ],
  };

  return (
    <SafeAreaView style={styles.container}>
      {dataPopular && (
        <>
          <ImageBackground
            source={{ uri: dataPopular.img }}
            style={{
              width: "100%",
              height: "65%",
            }}
            resizeMode="cover"
          ></ImageBackground>
          <Animated.View style={[styles.bottomSheet, bottomSheetAnimation]}>
            <View style={styles.draggableArea} {...panResponder.panHandlers}>
              <View style={styles.dragHandle} />
            </View>
            <View
              style={{
                flexDirection: "row", // Sắp xếp chữ và ảnh cùng hàng
                alignItems: "center", // Canh giữa theo chiều dọc
              }}
            >
              <View
                style={{
                  marginHorizontal: 20,
                  paddingVertical: 8,
                  backgroundColor: "#e6fff0",
                  borderRadius: 23,
                  marginRight: 280,
                }}
              >
                <Text
                  style={{
                    color: "#6B50F6",
                    fontWeight: "500",
                  }}
                >
                  Popular
                </Text>
              </View>
              <Image
                style={styles.iconLocation}
                source={require("../assets/Location_Icon.png")}
              />
              <Image
                style={styles.iconHeart}
                source={require("../assets/Heart.png")}
              />
            </View>

            <View
              style={{
                marginHorizontal: 20,
                paddingTop: 15,

                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: "bold",
                }}
              >
                {dataPopular.name}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "600",
                }}
              >
                {dataPopular.subName}
              </Text>
            </View>
            <View style={styles.reView}>
              <View style={styles.starGroup}>
                <Image
                  style={styles.iconStar}
                  source={require("../assets/Icon_Star.png")}
                />
                <Text style={styles.textRe}>4,8 Rating</Text>
              </View>
              <View style={styles.shopGroup}>
                <Image
                  style={styles.iconBag}
                  source={require("../assets/Shopping_Bag.png")}
                />
                <Text style={styles.textRe}>2000+ Order</Text>
              </View>
            </View>
            <Text style={styles.desText}>
              {dataPopular.desc}
            </Text>

            <Text style={{ fontSize: 18, fontWeight: "700", marginHorizontal: 20 }}>
              Testimonials
            </Text>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{
                flexDirection: "column",
                marginHorizontal: 20,
                marginBottom: 70,
              }}
            >
              {listMenu.map((item, index) => (
                <View
                  key={index}
                  style={{
                    flexDirection: "row",
                    backgroundColor: "#ffffff",
                    marginVertical: 10,
                    borderRadius: 14,
                    alignItems: "center",
                    paddingVertical: 15,
                    paddingHorizontal: 15,
                  }}
                >
                  <Image
                    style={{ width: 70, height: 70, resizeMode: "contain" }}
                    source={item.image}
                  />
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: 200,
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "column",
                        justifyContent: "flex-start",
                      }}
                    >
                      <Text
                        style={{
                          textAlign: "center",
                          fontSize: 16,
                          fontWeight: "500",
                          fontWeight: "900",
                          marginLeft: 30,
                        }}
                      >
                        {item?.userName}
                      </Text>
                      <Text
                        style={{
                          marginTop: 3,
                          fontSize: 13,
                          fontWeight: "500",
                          lineHeight: 17,
                          color: "#BBBBBB",
                          marginLeft: 30,
                        }}
                      >
                        {item?.date}
                      </Text>
                    </View>
                    <Pressable
                      style={{
                        borderRadius: 17,
                        // backgroundColor: "#6B50F6",
                        backgroundColor: "rgba(107, 80, 246, 0)",
                        paddingVertical: 5,
                        paddingHorizontal: 11,
                        flexDirection: "row",
                        marginLeft: 100,
                        // opacity: 0.1, 
                      }}
                    >
                      <Image
                        style={styles.iconStar}
                        source={require("../assets/Star.png")}
                      />
                      <Text
                        style={{
                          color: "#6B50F6",
                          fontWeight: "500",
                          marginLeft: 5
                        }}
                      >
                        5
                      </Text>
                    </Pressable>
                  </View>
                </View>
              ))}
            </ScrollView>

          </Animated.View>
          <TouchableOpacity
            style={{
              backgroundColor: '#6B50F6',
              borderRadius: 15,
              paddingVertical: 10,
              paddingHorizontal: 20,
              marginTop: 200,
              width: 326,
              height: 57,
              marginLeft: "auto",
              marginRight: "auto",
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={handleAddToCart}
          >
            <Text style={{ color: '#fff', fontSize: 14, fontWeight: "bold" }} >Add to Cart</Text>
          </TouchableOpacity>
        </>
      )}

    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomSheet: {
    position: "absolute",
    width: "100%",
    height: BOTTOM_SHEET_MAX_HEIGHT,

    bottom: BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT,
    ...Platform.select({
      android: { elevation: 3 },
      ios: {
        shadowColor: "#a8bed2",
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowOffset: { width: 2, height: 2 },
      },
    }),
    backgroundColor: "#EEEEEE",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  draggableArea: {
    width: 132,
    height: 32,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  dragHandle: {
    width: 100,
    height: 6,
    backgroundColor: "#d3d3d3",
    borderRadius: 10,
  },
  iconLocation: {
    marginRight: 20,
  },
  reView: {
    flexDirection: "row",
  },
  starGroup: {
    flexDirection: "row",
    marginLeft: 34,
    marginTop: 24,
    marginBottom: 20,
  },
  shopGroup: {
    flexDirection: "row",
    marginLeft: 34,
    marginTop: 24,
    marginBottom: 20,
  },
  textRe: {
    opacity: 0.3,
  },
  desText: {
    width: 324,
    color: "#22242E",
    marginLeft: "auto",
    marginRight: "auto",
  },
  descText: {
    width: 324,
    color: "#22242E",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 20,
  },
  centerText: {
    marginLeft: 65,
    marginBottom: 10,
  },
});

export default DetailMenu;
