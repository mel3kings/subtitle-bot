import {Composition, delayRender, staticFile} from 'remotion';
import {HelloWorld, myCompSchema} from './HelloWorld';
import {getVideoMetadata} from '@remotion/media-utils';
import {useEffect, useState} from 'react';
import {continueRender} from 'remotion';

export const RemotionRoot: React.FC = () => {
	const [duration, setDuration] = useState(1);
	const [handle] = useState(() => delayRender());
	const isShortForm = true;
	const width = isShortForm ? 1080 : 1920;
	const height = isShortForm ? 1920 : 1080;

	useEffect(() => {
		const video = staticFile('/sample.mp4');
		getVideoMetadata(video)
			.then(({durationInSeconds}) => {
				setDuration(Math.round(durationInSeconds * 30) + 3);
				continueRender(handle);
			})
			.catch((err) => {
				console.log(`Error fetching metadata: ${err}`);
			});
	}, [handle]);

	return (
		<>
			<Composition
				id="HelloWorld"
				component={HelloWorld}
				durationInFrames={duration}
				fps={30}
				width={width}
				height={height}
				schema={myCompSchema}
				defaultProps={{
					videoName: 'sample.mp4',
					isShortForm: isShortForm,
				}}
			/>
		</>
	);
};
