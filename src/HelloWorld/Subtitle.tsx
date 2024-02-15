import React from 'react';
import {useCurrentFrame} from 'remotion';
import Parser from 'srt-parser-2';
import {Title} from './Title';

const Subtitle: React.FC = () => {
	const frame = useCurrentFrame();

	let srt = `
2
00:00:28,040 --> 00:00:29,700
Hi everyone

3
00:00:29,700 --> 00:00:34,700
Welcome to our channel. You can call me A and the husband is now.

4
00:00:34,700 --> 00:00:41,700
The harsh realities of living in the Philippines that force us to leave our families, homes and friends.

5
00:00:41,700 --> 00:00:48,700
Migrating first to Singapore and then finally to Australia.

6
00:00:48,700 --> 00:00:55,700
Last year, 2022, we lost one of our family members.

7
00:00:56,700 --> 00:00:59,700
And that journey wasn't easy.

8
00:00:59,700 --> 00:01:05,700
It was emotionally, mentally, physically challenging.

9
00:01:05,700 --> 00:01:14,700
And that experience took a toll on our health as well and made us realize how short life truly is.

10
00:01:14,700 --> 00:01:25,700
This experience gave us a push to become a full-time nomads, travel the world and fully experience what life has to offer.

11
00:01:25,700 --> 00:01:32,700
Halfway through this year of 2023, a new journey began for me and my husband.

12
00:01:32,700 --> 00:01:38,700
We decided to document and share it on YouTube.

13
00:01:38,700 --> 00:01:53,700
Join us on to our journey of self-discovery as we reinvent ourselves, explore new places, meet people from different cultures, try delicious food and relearn life again.

14
00:01:53,700 --> 00:02:00,700
Through our experiences, we hope to inspire you to embark on your own journey of self-discovery.

15
00:02:00,700 --> 00:02:04,700
Remember, there's no one size fits all formula for success.

16
00:02:04,700 --> 00:02:10,700
So be patient, be kind to yourself and enjoy the ride.

`;

	// Parse subtitle file content
	const subtitles = new Parser();
	const array = subtitles.fromSrt(srt);
	// Find the text to render based on current frame
	const textToRender = array.find(
		(text) => frame >= text.startSeconds * 30 && frame <= text.endSeconds * 30 // Assuming frame rate is 30 frames per second
	);

	// // Find the active subtitle for the current frame
	// const activeSubtitle = subtitles.find(
	// 	(subtitle) => frame >= subtitle.start && frame <= subtitle.end
	// );

	return (
		<div>
			{/* <div> Subtitle Here:</div> */}
			{/* {array && (
				<div>
					ss
					{JSON.stringify(array)} + {frame}
				</div>
			)} */}
			<Title titleText={textToRender?.text || ''} titleColor={'#ff0000'} />
			{/* <div> {textToRender?.text}</div> */}
		</div>
	);
};

export default Subtitle;
