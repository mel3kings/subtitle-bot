import {OffthreadVideo, staticFile} from 'remotion';
export const MyComp: React.FC = () => {
	return <OffthreadVideo src={staticFile('sample.mp4')} />;
};
