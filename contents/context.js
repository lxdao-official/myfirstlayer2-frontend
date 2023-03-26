import { createContext } from 'react';
export const ReadContext = createContext({counter: 13, unRead: 0, currentIndex: 0, actionFrom: 'null'});