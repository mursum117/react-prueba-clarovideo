import { formatTime } from '../services/formatTime';

export function Program({name, dateBegin, dateEnd, onMouseEnter ,style}){
    
    const newDateBeginHour = formatTime(dateBegin);
    const newDateEndHour = formatTime(dateEnd);

    return(
        <div className='program' style={style} onMouseEnter={onMouseEnter}>
            <p className='text-white program-name'>{name}</p>
            <p className='text-white program-name'>{newDateBeginHour + ` - ` + newDateEndHour}</p>
        </div>
    )
}