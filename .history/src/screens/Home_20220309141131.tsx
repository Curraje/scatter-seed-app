function HomePage({navigation}: any) {
    const onPressHandler = () => {
      navigation.navigate("Tasks");
    };
  
    return(
      <View style={styles.container}>
        <Text>Welcome to the Home Page</Text>
        <StatusBar style="auto" />
        <Pressable
          onPress={ onPressHandler }
          style={({pressed}) => ({backgroundColor: pressed ? "#555" : "#ddd"})}
        >
          <Text style={styles.text}>Tasks</Text>
        </Pressable>
      </View>
  
    );
  }