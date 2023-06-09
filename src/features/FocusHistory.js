import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

const FocusHistory = ({ history }) => {
  if (!history || !history.length) return <Text style={styles.title}>We haven't focused on anything yet!</Text>;

  const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we've been focused on</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: spacing.md,
  },
  item: {
    color: colors.white,
    fontSize: fontSizes.md,
    paddingTop:spacing.sm
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: 'bold',
  },
});

//  <View>
//     <Text style={styles.title}>Things we've been focused on</Text>
//     <Flatlist
//       data={history}
//       renderItem={renderItem}
//      />
//   </View>

export default FocusHistory;
