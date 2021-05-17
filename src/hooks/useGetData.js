import Http from '../utils/Http'

const useGetData = async (URL) => {
    try {
        const response = await Http.instance.get(URL)
        return response
    } catch(error) {
        return error
    }
}

export default useGetData