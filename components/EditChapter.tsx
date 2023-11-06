import { Box } from '@mui/material'
import { useTranslations } from 'next-intl'
import React from 'react'
interface EditChapterProps {
	url: string
}
const EditChapter: React.FC<EditChapterProps> = (props) => {
	const { url = '' } = props
	const t = useTranslations('EditChapter')

	return (
		<Box
			sx={{
				textAlign: 'right',
				marginTop: '20px',
				fontWeight: 700,
			}}
		>
			<a href={url}>{t('Edit-a-document')}</a>
		</Box>
	)
}
export default EditChapter