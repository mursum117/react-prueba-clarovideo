import { PIXELS_PER_HOUR } from './constants';

export const calculateProgramWidth = (start, end, currentTime) => {
    const formatCurrentTime = Math.floor(currentTime.setMinutes(0, 0, 0) / 1000);
    const endOfDay = formatCurrentTime + (24 * 3600); 
    let adjustedStart = start;
    let adjustedEnd = end;

    if (start < formatCurrentTime) {
        adjustedStart = formatCurrentTime;
    }

    if (end > endOfDay) {
        adjustedEnd = endOfDay;
    }
    const effectiveDuration = (adjustedEnd - adjustedStart) / 3600;
    const width = effectiveDuration * PIXELS_PER_HOUR;

    return width;
};