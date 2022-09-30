import React, {useCallback} from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import {User} from '../../GraphQl/Queries/userQuery';
import {CardItem} from '../card/CardItem';

interface ListItemProps {
  data: User[];
}

export const ListItemComponent = ({data}: ListItemProps) => {
  const renderList = useCallback(
    ({item}: {item: User}) => <CardItem user={item} />,
    [data],
  );

  return (
    <FlatList
      style={styles.listContainer}
      data={data}
      renderItem={renderList}
      keyExtractor={item => item.phoneNumber}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    margin: 10,
    display: 'flex',
    flex: 1,
    width: '100%',
  },
});
