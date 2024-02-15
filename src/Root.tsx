import {Composition} from 'remotion';
import {HelloWorld, myCompSchema} from './HelloWorld';
import SubtitleFile from './sample.srt';
import {Logo, myCompSchema2} from './HelloWorld/Logo';
import {MyComp} from './HelloWorld/LocalVideo';

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="HelloWorld"
				component={HelloWorld}
				durationInFrames={2150}
				fps={30}
				width={1920}
				height={1080}
				schema={myCompSchema}
				defaultProps={{
					titleText: '',
					titleColor: '#ff0000',
					logoColor1: '#91EAE4',
					logoColor2: '#86A8E7',
				}}
			/>
		</>
	);
};
