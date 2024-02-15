import {Composition} from 'remotion';
import {HelloWorld, myCompSchema} from './HelloWorld';

export const RemotionRoot: React.FC = () => {
	const isShortForm = false;
	const width = isShortForm ? 1080 : 1920;
	const height = isShortForm ? 1920 : 1080;

	return (
		<>
			<Composition
				id="HelloWorld"
				component={HelloWorld}
				durationInFrames={2150}
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
