import {OffthreadVideo, staticFile} from 'remotion';
import {AbsoluteFill} from 'remotion';
import {z} from 'zod';
import {zColor} from '@remotion/zod-types';
import Subtitle from './HelloWorld/Subtitle';

export const myCompSchema = z.object({
	videoName: z.string(),
	isShortForm: z.boolean(),
});

export const HelloWorld: React.FC<z.infer<typeof myCompSchema>> = ({
	isShortForm,
	videoName,
}) => {
	// Conditionally render based on isShortForm prop
	if (isShortForm) {
		return (
			<AbsoluteFill style={{backgroundColor: 'white'}}>
				<AbsoluteFill>
					<div
						style={{
							position: 'relative',
							width: '100%',
							height: '100%',
							overflow: 'hidden',
							paddingTop: '177.77%', // This corresponds to a 9:16 aspect ratio (height:width = 16:9)
						}}
					>
						<div
							style={{
								position: 'absolute',
								top: '0',
								left: '0',
								width: '100%',
								height: '100%',
							}}
						>
							<OffthreadVideo
								src={staticFile(videoName)}
								style={{
									width: '100%',
									height: '100%',
									objectFit: 'cover', // Or adjust as necessary to maintain aspect ratio
								}}
							/>
						</div>
					</div>
				</AbsoluteFill>
				<AbsoluteFill>
					<Subtitle />
				</AbsoluteFill>
			</AbsoluteFill>
		);
	} else {
		return (
			<AbsoluteFill style={{backgroundColor: 'white'}}>
				<AbsoluteFill>
					<OffthreadVideo src={staticFile(videoName)} />;
				</AbsoluteFill>
				<AbsoluteFill>
					<Subtitle />
				</AbsoluteFill>
			</AbsoluteFill>
		);
	}
};
