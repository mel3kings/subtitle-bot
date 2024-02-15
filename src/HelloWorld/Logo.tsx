import {
	AbsoluteFill,
	OffthreadVideo,
	interpolate,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {Arc} from './Arc';
import {Atom} from './Atom';
import {z} from 'zod';
import {zColor} from '@remotion/zod-types';
import Subtitle from './Subtitle';

export const myCompSchema2 = z.object({
	logoColor1: zColor(),
	logoColor2: zColor(),
});

export const Logo: React.FC<z.infer<typeof myCompSchema2>> = ({
	logoColor1: color1,
	logoColor2: color2,
}) => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();

	const development = spring({
		config: {
			damping: 100,
			mass: 0.5,
		},
		fps: videoConfig.fps,
		frame,
	});

	const rotationDevelopment = spring({
		config: {
			damping: 100,
			mass: 0.5,
		},
		fps: videoConfig.fps,
		frame,
	});

	const scale = spring({
		frame,
		config: {
			mass: 0.5,
		},
		fps: videoConfig.fps,
	});

	const logoRotation = interpolate(
		frame,
		[0, videoConfig.durationInFrames],
		[0, 360]
	);

	return (
		<div>
			<OffthreadVideo src={staticFile('sample.mp4')} />;
			{/* <div>Hello, Google Fonts</div>; */}
			<Subtitle />
		</div>
	);
};
