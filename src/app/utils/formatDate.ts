export const formatDate = (date: Date | string): string => {
    const dateObj = typeof date === "string" ? new Date(date) : date;

    if (isNaN(dateObj.getTime())) return "Invalid Date";

    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    return dateObj.toLocaleDateString(undefined, options);
};

// console.log(formatDate("1990-05-21"));
// console.log(formatDate(new Date()));
