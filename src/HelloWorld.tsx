import {OffthreadVideo, staticFile} from 'remotion';
import {AbsoluteFill} from 'remotion';
import {z} from 'zod';
import Subtitle from './HelloWorld/Subtitle';

export const myCompSchema = z.object({
	videoName: z.string(),
	isShortForm: z.boolean(),
});

export const HelloWorld: React.FC<z.infer<typeof myCompSchema>> = ({
	isShortForm,
	videoName,
}) => {
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
							paddingTop: '177.77%',
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
									objectFit: 'cover',
								}}
							/>
						</div>
					</div>
				</AbsoluteFill>
				<AbsoluteFill>
					<Subtitle isShortForm={isShortForm} />
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
					<Subtitle isShortForm={isShortForm} />
				</AbsoluteFill>
			</AbsoluteFill>
		);
	}
};
