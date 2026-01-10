import { createComponentForStaticNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'fff',
    position: 'relative',
  },
  navGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 11,
  },
  largeText: {
    fontSize: 40,
    fontWeight: '700',
  },
  smallText: {
    fontSize: 12,
    color: '#7e7b7b',
  },
  placeholderText: {
    fontSize: 18,
    color: '#7E7B7B',
    marginBottom: 7,
  },
    inputField: {
        borderWidth: 1,
        borderRadius: 10,
        height: 50,
        borderColor: '#7E7B7B',
        paddingHorizontal: 10,
    },
    passwordGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        height: 50,
        borderColor: '#7e7b7b',
        paddingHorizontal: 10,
    },
    formGroup: {
        marginTop: 44,
    },
    forgotPasswordText: {
        fontSize: 17,
        color: '#34967c',
        textAlign: 'right',
        marginTop: 9,
        color: '#34967c',
    },
    button: {
        backgroundColor: '#34967c',
        borderRadius: 10,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
    },
    buttonText: {
        color: '#fff',
        fontSize: 17,
    },
    socialMediaButton: {
        borderWidth: 1,
        borderRadius: 10,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    socialMediaButtonText: {
        fontSize: 18,
        color: '#0D0D0D',
        fontWeight: '400',
    },
    socialMediaButtonGroup: {
        gap: 15,
        margin: 25,
    },
    dividerGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginTop: 29,
    },
    divider: {
        borderWidth: 0.5,
        borderColor: '#c2c2c2',
        flex: 1,
    },
    dividerText: {
        fontSize: 17,
        color: '#7e7b7b',
    },
    subTextGroup: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 33,
        left: 77,
        right: 76,
    },
    subText: {
        fontSize: 18,
        color: '#b5b5b5',
    },
    subTextJoin: {
        fontSize: 18,
        color: '#FFA800',
        fontWeight: 600,
    }
});
export default styles;