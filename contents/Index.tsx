import Container from '../components/Container'
import Diploma from '../components/Diploma'
import EditChapter from '../components/EditChapter'
import GithubAvatar from '../components/GithubAvatar'
import MintBadge from '../components/MintBadge'
import ZksyncSwap from '../components/ZksyncSwap'
import CompressText from '../components/animation/CompressText'
import { formatChapterTitle } from '../utils'
import { chapterType, MobileDirectory, PcDirectory } from './Directory'
import Loading from './Loading'
import MdxImg from './MdxImg'
import Progress from './Progress'
import TabChapter from './TabChapter'
import { ReadContext } from './context'
import mdxStyle from './mdx.module.css'
import { getStorage, setStorage } from './storage'
// import { Affix } from 'antd';
import {
	Box,
	Hidden,
	Link,
	Skeleton,
	Typography,
	useMediaQuery,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

const ImpossibleTriangle = dynamic(
	() => import('../components/ImpossibleTriangle'),
	{ ssr: false }
)

export default function Content(props: { md: any }) {
	const { md } = props
	const chapterCount = md.props.file.length - 4
	const [name, setName] = useState(md.props.file[0]?.text)
	const [readData, setReadData] = useState({
		counter: chapterCount,
		read: 1,
		currentIndex: 0,
	})
	const [mdxSource, setMdxSource] = useState('')
	const [ready, setReady] = useState(false)
	const [directory, setDirectory] = useState(md.props.file)
	const [readStatus, setReadStatus] = useState([true])
	const [selectedIndex, setSelectedIndex] = useState(0)
	const [chapterData, setChapterData] = useState({
		current: directory[0].text,
		last: '',
		next: directory[2].text,
	})
	const [isLoading, setLoading] = useState(false)
	const { ref, inView, entry } = useInView({
		threshold: 0,
	})

	const locale = useLocale()

	useEffect(() => {
		requestMdxSource(name)
	}, [name, locale])

	const requestMdxSource = (name: string) => {
		setLoading(true)

		fetch(`/api/getFile/${name}`)
			.then((response) => response.json())
			.then((data) => {
				if (data?.mdxSource) {
					setMdxSource(data.mdxSource)
				}
				setTimeout(() => setLoading(false), 800)
			})
			.catch((error) => console.error('[request mdx err]', error))
	}

	const computeReadCount = (arr: Array<chapterType | boolean>) => {
		if (!arr) return 0
		let count = 0
		const isChapterTypeArray = arr.every((item): item is chapterType => {
			return typeof item !== "boolean";
		});
		if (isChapterTypeArray) {
			for (let index in arr) {
				if (
					(!arr[index].main && arr[index]?.status) ||
					(arr[index].main &&
						(+index === 0 || +index === arr.length - 1) &&
						arr[index]?.status)
				) {
					count++
				}
			}
		}

		return count
	}
	const handleTabChapter = (action: string, chapter: chapterType) => {
		// console.log('[current chapter data]', chapter);
		const mainArr = [1, 5, 10, 18]

		if (!action) {
			return
		}
		const targetElement = document.getElementById('root') as HTMLElement
		targetElement.scrollIntoView({ behavior: 'smooth' })

		let readStatusStore = readStatus

		if (action === 'last') {
			if (selectedIndex === 0) {
				return
			}

			if (readStatusStore[readData?.currentIndex - 1] !== true) {
				readStatusStore[readData?.currentIndex - 1] = true
				setReadStatus(readStatusStore)
				computeReadCount(readStatusStore)
			}

			let newState = directory

			if (mainArr.includes(selectedIndex - 1)) {
				newState[selectedIndex - 1] = {
					text: newState[selectedIndex - 1]?.text,
					main: newState[selectedIndex - 1]?.main,
					index: selectedIndex - 1,
					status: true,
				}

				newState[selectedIndex - 2] = {
					text: newState[selectedIndex - 2]?.text,
					main: newState[selectedIndex - 2]?.main,
					index: selectedIndex - 2,
					status: true,
				}

				setChapterData({
					current: directory[selectedIndex - 2]?.text,
					last: mainArr.includes(selectedIndex - 1)
						? directory[selectedIndex - 3]?.text
						: directory[selectedIndex - 2]?.text,
					next: directory[selectedIndex]?.text,
				})
				setSelectedIndex(selectedIndex - 2)
				router.push(`#${directory[selectedIndex - 2].text}`)

				setName(newState[selectedIndex - 2]?.text)
			} else {
				setChapterData({
					current: directory[selectedIndex - 1]?.text,
					last:
						selectedIndex - 2 === 0
							? ''
							: mainArr.includes(selectedIndex - 2)
								? directory[selectedIndex - 3]?.text
								: directory[selectedIndex - 2]?.text,
					next: directory[selectedIndex]?.text,
				})
				newState[selectedIndex - 1] = {
					text: newState[selectedIndex - 1]?.text,
					main: newState[selectedIndex - 1]?.main,
					index: selectedIndex - 1,
					status: true,
				}
				setSelectedIndex(selectedIndex - 1)
				router.push(`#${directory[selectedIndex - 1].text}`)

				setName(newState[selectedIndex - 1]?.text)
			}

			setDirectory(newState)
			setReadData({
				counter: chapterCount,
				read: computeReadCount(newState),
				currentIndex: readData?.currentIndex - 1,
			})
		}
		if (action === 'next') {
			if (selectedIndex === chapterCount + 3) {
				return
			}
			if (readStatusStore[readData?.currentIndex + 1] !== true) {
				readStatusStore[readData?.currentIndex + 1] = true
				setReadStatus(readStatusStore)
				computeReadCount(readStatusStore)
			}
			let newState = directory
			if (mainArr.includes(selectedIndex + 1)) {
				newState[selectedIndex + 1] = {
					text: newState[selectedIndex + 1]?.text,
					main: newState[selectedIndex + 1]?.main,
					index: selectedIndex + 1,
					status: true,
				}

				newState[selectedIndex + 2] = {
					text: newState[selectedIndex + 2]?.text,
					main: newState[selectedIndex + 2]?.main,
					index: selectedIndex + 2,
					status: true,
				}

				setChapterData({
					current: directory[selectedIndex + 2]?.text,
					last:
						selectedIndex !== 1
							? directory[selectedIndex]?.text
							: '',
					next:
						selectedIndex !== chapterCount
							? directory[selectedIndex + 3]?.text
							: '',
				})
				setSelectedIndex(selectedIndex + 2)
				router.push(`#${directory[selectedIndex + 2].text}`)

				setName(newState[selectedIndex + 2]?.text)
			} else {
				setChapterData({
					current: directory[selectedIndex + 1]?.text,
					last: directory[selectedIndex]?.text,
					next: mainArr.includes(selectedIndex + 2)
						? directory[selectedIndex + 3]?.text
						: directory[selectedIndex + 2]?.text,
				})

				newState[selectedIndex + 1] = {
					text: newState[selectedIndex + 1]?.text,
					main: newState[selectedIndex + 1]?.main,
					index: selectedIndex + 1,
					status: true,
				}
				setSelectedIndex(selectedIndex + 1)
				router.push(`#${directory[selectedIndex + 1].text}`)

				setName(newState[selectedIndex + 1]?.text)
			}

			setDirectory(newState)
			setReadData({
				counter: chapterCount,
				read: computeReadCount(newState),
				currentIndex: mainArr.includes(selectedIndex + 1)
					? selectedIndex + 2
					: selectedIndex + 1,
			})
		}
		if (action === 'lastOrNext') {
			let newState = directory
			if (mainArr.includes(chapter?.index)) {
				if (!chapter?.status) {
					newState[chapter.index + 1] = {
						text: newState[chapter.index + 1]?.text,
						main: newState[chapter.index + 1]?.main,
						index: chapter.index + 1,
						status: true,
					}
				}
				setChapterData({
					current: newState[chapter?.index + 1].text,
					last:
						chapter?.index === 0
							? ''
							: newState[chapter.index - 1].text,
					next: newState[chapter.index + 2].text,
				})
				setSelectedIndex(chapter?.index + 1)
				router.push(`#${directory[chapter?.index + 1].text}`)

				setName(newState[chapter.index + 1]?.text)
			} else if (chapter.index === 0) {
				setChapterData({
					current: newState[chapter?.index].text,
					last: '',
					next: newState[chapter.index + 2].text,
				})
				setSelectedIndex(chapter?.index)
				router.push(`#${directory[chapter?.index].text}`)

				setName(newState[chapter.index]?.text)
			} else {
				if (!chapter?.status) {
					if (
						chapter?.index > mainArr[1] &&
						chapter?.index < mainArr[2]
					) {
						newState[mainArr[1]] = {
							...newState[mainArr[1]],
							status: true,
						}
					}

					if (
						chapter?.index > mainArr[2] &&
						chapter?.index < mainArr[3]
					) {
						newState[mainArr[2]] = {
							...newState[mainArr[2]],
							status: true,
						}
					}

					if (chapter?.index > mainArr[3]) {
						newState[mainArr[3]] = {
							...newState[mainArr[3]],
							status: true,
						}
					}

					if (chapter?.index === directory.length - 1) {
						newState[chapter?.index] = {
							...newState[chapter?.index],
							status: true,
						}
					}
				}

				setChapterData({
					current: newState[chapter?.index].text,
					last:
						chapter?.index - 1 === 0
							? ''
							: mainArr.includes(chapter?.index - 1)
								? newState[chapter.index - 2].text
								: newState[chapter.index - 1].text,
					next:
						chapter?.index !== chapterCount + 3 &&
						newState[chapter.index + 1].text,
				})
				setSelectedIndex(chapter?.index)
				// console.log(directory)
				router.push(`#${directory[chapter?.index].text}`)

				setName(newState[chapter.index]?.text)
			}

			if (!chapter?.status) {
				newState[chapter.index] = {
					...chapter,
					status: true,
				}

				setDirectory(newState)
			}

			setReadData({
				counter: chapterCount,
				read: computeReadCount(newState),
				currentIndex: mainArr.includes(chapter?.index)
					? chapter?.index + 1
					: chapter?.index,
			})
		}
	}

	const components = {
		Diploma,
		CompressText,
		ZksyncSwap,
		ImpossibleTriangle,
		MintBadge,
		GithubAvatar,
		EditChapter,
		MdxImg,
	}

	const theme = useTheme()
	// console.log('theme.palette?.mode', theme.palette?.mode);
	const mdScreen = useMediaQuery(theme.breakpoints.up('md'))

	// console.log('mdScreen', mdScreen);

	useEffect(() => {
		const readed = directory.reduce((acc: number, cur: chapterType) => {
			// acc += cur.status
			if (cur.status) {
				acc += 1
			}
			return acc
		}, 0)
		// console.log(readed);
		if (readed > 2) {
			setStorage('directoryStatus', JSON.stringify({ data: directory }))
		}
		if (selectedIndex > 0) {
			setStorage('selectedIndex', JSON.stringify({ data: selectedIndex }))
		}
	}, [directory, selectedIndex])
	const router = useRouter()

	useEffect(() => {
		setReady(false)
		const directoryStatus = getStorage('directoryStatus')
		const selectedIndexStore = getStorage('selectedIndex')
		const jsonDirectory = JSON.parse(directoryStatus as string)?.data
		let jsonSelect = JSON.parse(selectedIndexStore as string)?.data
		const aspath = router.asPath.split('#')[1]

		if (directoryStatus) {
			setDirectory(JSON.parse(directoryStatus).data)
		}
		if (selectedIndexStore) {
			if (jsonDirectory) {
				for (let i = 0; i < jsonDirectory.length; i++) {
					if (directory[i].text == aspath) {
						jsonSelect = i
						break
					}
				}
				setName(jsonDirectory[jsonSelect]?.text)
				// setName(jsonDirectory[jsonSelect]?.text);
			}
			setSelectedIndex(jsonSelect)
			setReadData({
				counter: chapterCount,
				read: computeReadCount(jsonDirectory),
				currentIndex: jsonSelect,
			})
			setChapterData({
				current: jsonDirectory[jsonSelect]?.text,
				last:
					jsonSelect === 0 ? '' : jsonDirectory[jsonSelect - 1]?.text,
				next:
					jsonSelect === chapterCount + 4
						? ''
						: jsonDirectory[jsonSelect + 1]?.text,
			})
		}
		setReady(true)
	}, [])
	const t = useTranslations('Directory')
	return (
		<>
			<Head>
				<title>
					{ready && t(formatChapterTitle(name)) + ' - '}My First
					Layer2 - An education project for newbies to learn and
					interact with Layer2
				</title>
			</Head>
			<Link id="content" sx={{ position: 'relative' }}></Link>
			<Typography id={'root'}></Typography>
			<ReadContext.Provider value={{ readData, setReadData }}>
				<Container paddingX={2}>
					<Box
						ref={ref}
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							height: '100%',
						}}
					>
						<Hidden mdDown>
							<Box
								sx={{
									top: 0,
								}}
							>
								<PcDirectory
									directory={directory}
									readStatus={readStatus}
									selectedIndex={selectedIndex}
									onTabChapter={handleTabChapter}
								></PcDirectory>
							</Box>
						</Hidden>

						{isLoading ? (
							<Skeleton
								animation="wave"
								// variant="rect"
								width={mdScreen ? '1200px' : '100vw'}
								sx={{
									height: '400vh',
									marginLeft: mdScreen ? '32px' : 0,
								}}
							>
								<Box
									className={mdxStyle.root}
								// textDecoration={'none'}
								>
									{mdxSource && (
										<MDXRemote
											components={components}			
											{...mdxSource as any}
										></MDXRemote>
									)}
								</Box>
							</Skeleton>
						) : (
							<Box
								sx={{
									flexGrow: 1,
									marginLeft: mdScreen ? '32px' : 0,
								}}
							>
								<Box
									sx={{
										display: 'flex',
										backgroundColor:
											theme.palette?.mode === 'dark'
												? '#0F0F0F'
												: '#fff',
										maxWidth: mdScreen ? '1200px' : '100vw',
										color:
											theme.palette?.mode === 'dark'
												? '#fff'
												: '#000',
										mt: { xs: '20px', md: '0' },
									}}
									borderRadius={2}
									padding={{
										xs: 2,
										sm: 8,
									}}
								>
									<Box
										className={mdxStyle.root}
									// textDecoration={'none'}
									>
										{mdxSource && (
											<MDXRemote
												components={components}										
												{...mdxSource as any}
											></MDXRemote>
										)}
									</Box>
								</Box>
								<TabChapter
									// marginTop={{ xs: '15px', sm: '32px' }}
									chapterData={{
										...chapterData,
										currentIndex: readData?.currentIndex,
										read: readData?.read,
										counter: readData?.counter,
									}}
									onTabChapter={handleTabChapter}
								></TabChapter>
							</Box>
						)}
					</Box>
				</Container>
				{inView && (
					<Hidden mdUp>
						<Box
							sx={{
								position: 'fixed',
								bottom: 0,
								top: 'auto',
								width: '100vw',
								zIndex: 100,
								boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 1)',
							}}
							// backgroundColor="#FFFFFF"
							display="flex"
							height={80}
							alignItems="center"
							justifyContent="space-around"
							marginTop={4}
							paddingX={2}
						>
							<Box>
								<ConnectButton />
							</Box>
							<Box flexGrow={2} marginX="20px">
								<Progress />
							</Box>
							<Hidden mdUp>
								<MobileDirectory
									directory={directory}
									readStatus={readStatus}
									selectedIndex={selectedIndex}
									onTabChapter={handleTabChapter}
								></MobileDirectory>
							</Hidden>
						</Box>
					</Hidden>
				)}
			</ReadContext.Provider>
		</>
	)
}
