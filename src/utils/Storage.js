import AsyncStorage from '@react-native-async-storage/async-storage'

class Storage {
    static instance = Storage()

    add = async (key, value) => {
        try {
            await AsyncStorage.setItem(key, value)
            return true
        } catch(error) {
            console.log('Storage setItem error', error)

            throw Error(error)
        }
    }

    get = async (key) => {
        try {
            return await AsyncStorage.getItem(key)
        } catch (error) {
            console.log('Storage get error', error)
            
            throw Error(error)
        }
    }

    remove = async () => {
        try {
            await AsyncStorage.removeItem(key)
            return true
        } catch (error) {
            console.log('Storage remove error', error)

            throw Error(error)
        }
    }

    multiGet = async () => {
        try {
            return await AsyncStorage.multiGet(keys)
        } catch (error) {
            console.log('Storage multiGet error', error)

            throw Error(error)
        }
    }

    getAllKeys = async () => {
        try {
            return await AsyncStorage.getAllKeys()
        } catch (error) {
            console.log('Storage getAllKeys error', error)
        }
    }
}

export default Storage