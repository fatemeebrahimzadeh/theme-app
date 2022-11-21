import { createContext } from 'react';
import { Direction } from '../App';

export const DirectionContext = createContext({
  direction: '',
  setDirection: (direction: Direction) => { },
});
