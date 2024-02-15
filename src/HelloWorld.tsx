import {OffthreadVideo, spring, staticFile} from 'remotion';
import {
	AbsoluteFill,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {Logo} from './HelloWorld/Logo';

import {z} from 'zod';
import {zColor} from '@remotion/zod-types';
import Subtitle from './HelloWorld/Subtitle';

export const myCompSchema = z.object({
	titleText: z.string(),
	titleColor: zColor(),
	logoColor1: zColor(),
	logoColor2: zColor(),
});

export const HelloWorld: React.FC<z.infer<typeof myCompSchema>> = ({
	titleText: propOne,
	titleColor: propTwo,
	logoColor1,
	logoColor2,
}) => {
	// A <AbsoluteFill> is just a absolutely positioned <div>!
	return (
		<AbsoluteFill style={{backgroundColor: 'white'}}>
			<AbsoluteFill>
				<OffthreadVideo src={staticFile('sample.mp4')} />;
			</AbsoluteFill>
			<AbsoluteFill>
				<Subtitle />
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
