export const useGetIcon = (coinNameId) => {
    if(coinNameId) {
        return `https://c1.coinlore.com/img/25x25/${coinNameId}.png`
    } else {
        return 'No image'
    }
}