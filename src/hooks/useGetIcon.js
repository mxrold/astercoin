export const useGetIcon = (coinNameId) => {
    if(coinNameId) {
        return `https://c1.coinlore.com/img/45x45/${coinNameId}.png`
    } else {
        return 'No image'
    }
}