import { useState, useEffect } from 'react';
import { Channel } from './Channel'
import { Program } from './Program'
import { formatTime } from '../services/formatTime';

const EPG = ({channels}) => {
  const [hoveredProgram, setHoveredProgram] = useState(null);

  useEffect(() => {
    if (channels && channels.length > 0) {
      const firstProgram = channels[0].events[0];
      setHoveredProgram(firstProgram);
    }
  }, [channels]);

  

  return (
    <div className='epg-modal-container'>
        <div className='hover-info p-2'>
            {hoveredProgram && (
                <div>
                    <h2 className='text-white'>{hoveredProgram.name || ""}</h2>
                    <p className='text-white'>{formatTime(hoveredProgram.unix_begin)  + 'hs a ' + formatTime(hoveredProgram.unix_end) + 'hs ' + hoveredProgram.duration}</p>
                    <p className='text-white'>{hoveredProgram.description}</p>
                </div>
            )}
        </div>
        <div className="programs-scroll-container">
            <div className='channels-list'>
                {channels && channels.map((el) => (
                    <div key={el.id} className='channel-row'>
                        <div className='channels-container col-2 my-2'>
                        <Channel number={el.number} image={el.image} name={el.name} />
                        </div>
                        <div className='channel-programs col-10'>
                            <div className='programs-row'>
                                {el.events.map((program) => (
                                <Program
                                    key={program.id}
                                    name={program.name}
                                    description={program.description}
                                    dateBegin={program.unix_begin}
                                    dateEnd={program.unix_end}
                                    onMouseEnter={() => setHoveredProgram(program)}
                                />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
    </div>
    );
};

export default EPG;