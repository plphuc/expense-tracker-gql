/**
 * Convert timestamp to "MMM dd, YYYY"
 *
 * @param   timestamp  1724889600000
 * @returns formatted date "Aug 29, 2024"
 */
const formatDate = (timestamp) => {
    const date = new Date(parseInt(timestamp)) // Parse the timestamp to ensure it's an integer representing
    const options = { day: '2-digit', month: 'short', year: 'numeric' }
    return date.toLocaleDateString('en-US', options)
}

export default formatDate
