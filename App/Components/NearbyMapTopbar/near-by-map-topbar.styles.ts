import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: 'red',
    // width: '100%',
    paddingTop: Platform.OS === 'android' ? 20 : 70,
    paddingLeft: 16,
    paddingRight: 16,
  },
  headerContainer: {
    // paddingHorizontal: 16,
    marginVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toggleBtn: {
    display: 'flex',
    flexDirection: 'row',
    width: 171,
    height: 48,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'rgba(0,0,0,0.08)',
    shadowOffset: { width: 10, height: 10 },
    shadowRadius: 8,
    shadowOpacity: 0.4,
    elevation: 7,
  },
  toggleBtnContainer: {
    marginLeft: 16,
    marginRight: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(1, 1, 1, 0.04)',
    gap: 8,
    borderColor: 'rgba(1,1,1,0.06)',
    shadowColor: 'rgba(0,0,0,0.08)',
    shadowOffset: { width: 10, height: 10 },
    shadowRadius: 8,
    shadowOpacity: 0.4,
    elevation: 7,
  },
});

export default styles;
