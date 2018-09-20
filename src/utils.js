export function formatDate(date) {
    const year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();

    if (day < 10) {
        day = `0${day}`;
    }
    if (month < 10) {
        month = `0${month}`;
    }

    return `${month}/${day}/${year}`;
}