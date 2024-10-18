import { formatTime } from './formatTime';

export const generateHourMarkers = (currentTime) => {
    const markers = [];
    let startHour = new Date(currentTime);
    startHour.setMinutes(0, 0, 0);
  
    for (let i = 0; i < 25; i++) {
      const hour = new Date(startHour);
      hour.setHours(startHour.getHours() + i);
      markers.push(formatTime(hour.getTime() / 1000));
    }
    return markers;
};