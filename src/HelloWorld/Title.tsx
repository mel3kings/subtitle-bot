import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {FONT_FAMILY} from './constants';
import {loadFont} from '@remotion/google-fonts/Anton';
const {fontFamily} = loadFont(); // "Titan One"

const longForm: React.CSSProperties = {
	fontFamily: FONT_FAMILY,
	fontWeight: 'bold',
	fontSize: 72,
	textAlign: 'center',
	position: 'absolute',
	bottom: 100,
	left: 0,
	right: 0,
	margin: '0 auto',
	padding: '0 auto',
	textShadow: '0 0 10px black, 0 0 10px black, 0 0 10px black',
};

const shorts: React.CSSProperties = {
	fontFamily: FONT_FAMILY,
	fontWeight: 'bold',
	fontSize: 85,
	textAlign: 'center',
	position: 'absolute',
	bottom: 270,

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
	const frame = useCurrentFrame();
	const words = titleText.split(' ').filter((word) => word.trim() !== '');

	return (
		<div style={containerStyle}>
			<h1 style={isShortForm ? shorts : longForm}>
				{words.map((t, i) => {
					const delay = i * 5;
					const scale = spring({
						fps: 30,
						frame: frame - delay,
						config: {
							damping: 400,
						},
					});

					return (
						<span
							key={`${t}-${i}`}
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
