import { formatTime } from "../services/formatTime";

export function Program({name, dateBegin, dateEnd, onMouseEnter}){
    
    const newDateBeginHour = formatTime(dateBegin);
    const newDateEndHour = formatTime(dateEnd);

    return(
        <div className='program' onMouseEnter={onMouseEnter}>
            <p className='text-white program-name'>{name}</p>
            <p className='text-white'>{newDateBeginHour + ` - ` + newDateEndHour}</p>
        </div>
    )
}