import React, {useState} from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import Parser from 'srt-parser-2';
import {useEffect} from 'react';
import {Title} from './Title';
import {z} from 'zod';

export const subtitleProps = z.object({
	isShortForm: z.boolean(),
});

const Subtitle: React.FC<z.infer<typeof subtitleProps>> = ({isShortForm}) => {
	const [srt, setSrt] = useState('');
	const frame = useCurrentFrame();

	const test = staticFile('/sample.srt');
	console.log(test);

	useEffect(() => {
		const fetchSrt = async () => {
			try {
				const response = await fetch(test);
				if (!response.ok) {
					throw new Error('Failed to fetch SRT file');
				}
				const srtContent = await response.text();
				setSrt(srtContent);
				console.log(srtContent);
			} catch (error) {
				console.error('Error fetching SRT file:', error);
				setSrt('Subtitle not found');
			}
		};

		fetchSrt();
	}, []);
	const subtitles = new Parser();
	const array = subtitles.fromSrt(srt);

	const textToRender = array.find(
		(text) => frame >= text.startSeconds * 30 && frame <= text.endSeconds * 30 // Assuming frame rate is 30 frames per second
	);

	return (
		<div>
			<Title
				titleText={textToRender?.text || ''}
				titleColor={'#ffffff'}
				isShortForm={isShortForm}
			/>
		</div>
	);
};

export default Subtitle;
