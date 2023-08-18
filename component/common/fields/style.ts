import {StyleSheet} from 'react-native';
import {SCREEN_WIDTH} from '../hook';

export const selectStyles = StyleSheet.create({
  dropdown3BtnStyle: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 0,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#444',
  },
  dropdown3BtnChildStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 18,
    // width: SCREEN_WIDTH,
  },
  dropdown3BtnImage: {width: 45, height: 45, resizeMode: 'cover'},
  dropdown3BtnTxt: {
    color: '#000',
    textAlign: 'center',
    fontWeight: '300',
    fontSize: 16,
    marginHorizontal: 12,
  },
  dropdown3DropdownStyle: {
    backgroundColor: '#efefef',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  dropdown3RowStyle: {
    height: 40,
    width: SCREEN_WIDTH,
  },
  dropdown3RowChildStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  dropdownRowImage: {width: 45, height: 45, resizeMode: 'cover'},
  dropdown3RowTxt: {
    color: '#000',
    textAlign: 'center',
    fontSize: 18,
    marginHorizontal: 12,
  },
});
