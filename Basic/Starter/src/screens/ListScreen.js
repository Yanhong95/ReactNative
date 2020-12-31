import React from "react";
import { Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: 'Friend #1' },
    { name: 'Friend #2' },
    { name: 'Friend #3' },
    { name: 'Friend #4' },
    { name: 'Friend #5' },
    { name: 'Friend #6' },
    { name: 'Friend #7' },
    { name: 'Friend #8' },
    { name: 'Friend #9' },
  ];

  return (
    <FlatList data={friends}
      // 所有的item水平放置, 成为一行:
      horizontal={true}
      // 移除水平移动下面的scrollBar
      showsHorizontalScrollIndicator={false}
      // element === { item: { name: 'Friend #1'}, index: 0 }
      // 为每个item提供一个key, 这样在移除移动其中一个一个的时候RN可以根据key来找, 
      // 而不是删除全部然后重建.
      keyExtractor={friend => friend.name}
      renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{item.name}</Text>
      }} />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});

export default ListScreen;
