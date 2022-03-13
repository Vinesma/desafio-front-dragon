export const datePrettifier = (timestamp: string) => {
    try {
        const date = new Date(timestamp);

        return date.toLocaleString();
    } catch (error) {
        return "";
    }
};
