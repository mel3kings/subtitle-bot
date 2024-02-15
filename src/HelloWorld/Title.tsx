import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {FONT_FAMILY} from './constants';
import {loadFont} from '@remotion/google-fonts/Anton';
const {fontFamily} = loadFont(); // "Titan One"

const longForm: React.CSSProperties = {
	fontFamily: FONT_FAMILY,
	fontWeight: 'bold',
	fontSize: 96,
	textAlign: 'center',
	position: 'absolute',
	bottom: 0,
	textShadow: '0 0 10px black, 0 0 10px black, 0 0 10px black',
};

const shorts: React.CSSProperties = {
	fontFamily: FONT_FAMILY,
	fontWeight: 'bold',
	fontSize: 75,
	textAlign: 'center',
	position: 'absolute',
	bottom: 300,

	textShadow: '0 0 10px black, 0 0 10px black, 0 0 10px black',
};

const containerStyle: React.CSSProperties = {
	padding: '0 50px', // Adjust the padding value as needed
};

const word: React.CSSProperties = {
	marginLeft: 10,
	marginRight: 10,
	display: 'inline-block',
};

export const Title: React.FC<{
	titleText: string;
	titleColor: string;
	isShortForm: boolean;
}> = ({titleText, titleColor, isShortForm}) => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();

	const words = titleText.split(' ');

	return (
		<div style={containerStyle}>
			<h1 style={isShortForm ? shorts : longForm}>
				{words.map((t, i) => {
					const delay = i * 5;
					const scale = spring({
						fps: videoConfig.fps,
						frame: frame - delay,
						config: {
							damping: 200,
						},
					});

					return (
						<span
							key={t}
							style={{
								...word,
								color: titleColor,
								transform: `scale(${scale})`,
							}}
						>
							{t}
						</span>
					);
				})}
			</h1>
		</div>
	);
};
