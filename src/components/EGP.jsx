import { useState, useEffect, useCallback } from 'react';
import { Channel } from './Channel';
import { Program } from './Program';
import { Loader } from './Loader';
import { formatTime } from '../services/formatTime';
import { calculateProgramWidth } from '../services/calculateWidth';
import { generateHourMarkers } from '../services/generateMarkes';
import debounce from 'lodash.debounce';

const EPG = ({ channels = [] }) => {
  const [hoveredProgram, setHoveredProgram] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    if (channels?.length > 0 && channels[0]?.events?.length > 0) {
      const firstProgram = channels[0].events[0];
      setHoveredProgram(firstProgram);
    }
  }, [channels]);

  const updateCurrentTime = useCallback(() => {
    setCurrentTime(new Date());
  }, []);

  useEffect(() => {
    const interval = setInterval(updateCurrentTime, 60000);
    return () => clearInterval(interval);
  }, [updateCurrentTime]);

  const renderHourMarkers = () => (
    generateHourMarkers(currentTime).map((hour, index) => (
      <div key={index} className='hour-marker'>
        {hour}
      </div>
    ))
  );

  const handleMouseEnter = useCallback(debounce((program) => {
    setHoveredProgram(program);
  }, 200), []);
  

  const renderPrograms = (channel) => (
    <div key={channel.id} className='programs-row m-auto'>
      {channel.events.map((program) => {
        const programWidth = calculateProgramWidth(program.unix_begin, program.unix_end, currentTime);
        return (
          <Program
            key={program.id}
            name={program.name}
            description={program.description}
            dateBegin={program.unix_begin}
            dateEnd={program.unix_end}
            onMouseEnter={() => handleMouseEnter(program)}
            style={{ width: `${programWidth}px` }}
          />
        );
      })}
    </div>
  );

  return (
    <div className='epg-modal-container'>
      {!channels ? (
        <div className="loader-container">
          <Loader/>
        </div>
      ): (
        <>
          {hoveredProgram && (
            <div className='content-info'>
              <h2 className='text-white program-name'>{hoveredProgram.name || ''}</h2>
              <p className='text-white'>
                {formatTime(hoveredProgram.unix_begin) + 'hs a ' + formatTime(hoveredProgram.unix_end) + 'hs ' + hoveredProgram.duration}
              </p>
              <p className='text-white program-description'>{hoveredProgram.description}</p>
            </div>
          )}
          <div className='content-channnels'>
            <div className='channels-container col-4 col-lg-2'>
                <div className='time-bar'>
                  <p className='text-white text-center'>HOY</p>
                </div>
              {channels && channels.map((el) => (
                <div key={el.id} className='channel-row m-auto'>
                  <Channel number={el.number} image={el.image} name={el.name} />
                </div>
              ))}
            </div>
            <div className='programs-container col-8 col-lg-10'>
                <div className='time-bar'>
                  {renderHourMarkers()}
                </div>
                {channels && channels.map(renderPrograms)}
            </div>
          </div>
        </>
      )}
        
    </div>
  );
};

export default EPG;