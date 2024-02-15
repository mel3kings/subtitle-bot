import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {FONT_FAMILY} from './constants';
import {loadFont} from '@remotion/google-fonts/Anton';
const {fontFamily} = loadFont(); // "Titan One"

const title: React.CSSProperties = {
	fontFamily: FONT_FAMILY,
	fontWeight: 'bold',
	fontSize: 100,
	textAlign: 'center',
	position: 'absolute',
	bottom: 0,
	left: 0,
	right: 0,
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
}> = ({titleText, titleColor}) => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();

	const words = titleText.split(' ');

	return (
		<div style={containerStyle}>
			<h1 style={title}>
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
