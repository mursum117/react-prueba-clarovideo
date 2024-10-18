import { useState, useEffect } from 'react';
import { getData } from '../services/getData';

export function useGetEGP () {
    const [channels, setChannels] = useState('')
    const getChannels = () => {
      getData().then(setChannels)
    }
    useEffect(getChannels, [])
    return { channels, getChannels }
}