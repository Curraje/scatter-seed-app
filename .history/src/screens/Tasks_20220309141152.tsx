

function TasksPage({navigation}: any) {
  
    const onPressHandler = () => {
      navigation.navigate("Home");
    };
  
    return(
      <View style={styles.container}>
        <Text>Tasks!</Text>
        <StatusBar style="auto" />
        <Pressable
          onPress={ onPressHandler }
          style={({pressed}) => ({backgroundColor: pressed ? "#555" : "#ddd"})}
        >
          <Text style={styles.text}>Home</Text>
        </Pressable>
      </View>
  
    );
  }