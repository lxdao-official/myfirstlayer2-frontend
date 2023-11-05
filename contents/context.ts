import { createContext } from 'react'
// import { useState } from 'react'
// const [readData, setReadData] = useState<ReadDateType>({
// 	counter: 0,
// 	read: 1,
// 	currentIndex: 0
// })
// 定义上下文对象的类型
interface ReadDateType {
	counter: number;
	read: number;
	currentIndex: number;
	actionFrom?: string;
}

interface ReadContextType {
	readData: ReadDateType;
	setReadData: React.Dispatch<React.SetStateAction<ReadDateType>>;
}

// 创建上下文对象
export const ReadContext = createContext<ReadContextType|null>(null);
