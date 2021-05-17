export const formatNumbers = value => {
    const format = new Intl.NumberFormat().format(value)
    return format
}