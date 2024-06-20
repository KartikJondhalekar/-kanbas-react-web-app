import React from 'react';

const parseDateString = (dateString: string): Date | null => {
    const datePattern = /^(\w+) (\d{1,2}), (\d{4}) (\d{1,2}):(\d{2})(am|pm)$/i;
    const match = dateString.match(datePattern);

    if (!match) {
        return null;
    }

    const [ , monthName, day, year, hours, minutes, period ] = match;
    const monthIndex = new Date(`${monthName} 1`).getMonth();
    const adjustedHours = period.toLowerCase() === 'pm' && hours !== '12'
        ? parseInt(hours, 10) + 12
        : period.toLowerCase() === 'am' && hours === '12'
        ? 0
        : parseInt(hours, 10);

    return new Date(parseInt(year, 10), monthIndex, parseInt(day, 10), adjustedHours, parseInt(minutes, 10));
};

const ConvertStringToDate = ({ dateString }: { dateString: string }) => {
    const dateObject = parseDateString(dateString);

    const isValidDate = dateObject !== null && !isNaN(dateObject.getTime());

    const formattedDate = isValidDate
        ? `${dateObject.getFullYear()}-${String(dateObject.getMonth() + 1).padStart(2, '0')}-${String(dateObject.getDate()).padStart(2, '0')}`
        : "";

    return (
        <div>
            <input type="date" value={formattedDate} id="wd-available-from" className="form-control" />
        </div>
    );
};

export default ConvertStringToDate;
