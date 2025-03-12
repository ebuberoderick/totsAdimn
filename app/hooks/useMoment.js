import dayjs from 'dayjs';

export const moment = (e) => {
    const date = dayjs(new Date());
    const diffInSeconds = Math.round(date.diff(e, "second", true));

    if (diffInSeconds < 60) {
        return `${diffInSeconds} seconds`;
    } else if (diffInSeconds < 3600) {
        const minutes = Math.floor(diffInSeconds / 60);
        return `${minutes} minutes`;
    } else if (diffInSeconds < 86400) {
        const hours = Math.floor(diffInSeconds / 3600);
        return `${hours} hours`;
    } else if (diffInSeconds < 2592000) {
        const days = Math.floor(diffInSeconds / 86400);
        return `${days} days`;
    } else {
        const months = Math.floor(diffInSeconds / 2592000);
        return `${months} months`;
    }
};

