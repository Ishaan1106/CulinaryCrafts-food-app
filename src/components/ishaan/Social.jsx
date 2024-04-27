import React, { useState } from 'react';
import s from './Social.module.css';

//importing icons
import gif_icon from './icons/gif.png'
import upload_icon from './icons/upload.png'

//importing profile pictures
import pfp1 from './pfp/pfp1.jpg'

function Social() {
const emojis = ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚', '😋', '😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓', '😎', '🤩', '🥳', '😏', '😒', '😞', '😔', '😟', '😕', '🙁', '☹️', '😣', '😖', '😫', '😩', '🥺', '😢', '😭', '😤', '😠', '😡', '🤬', '🤯', '😳', '🥵', '🥶', '😱', '😨', '😰', '😥', '😓', '🤗', '🤔', '🤭', '🤫', '🤥', '😶', '😐', '😑', '😬', '🙄', '😯', '😦', '😧', '😮', '😲', '🥱', '😴', '🤤', '😪', '😵', '🤐', '🥴', '🤢', '🤮', '🤧', '😷', '🤒', '🤕', '🤑', '🤠', '😈', '👿', '👹', '👺', '🤡', '👻', '💀', '☠️'];

const getRandomEmoji = () => {
const randomIndex = Math.floor(Math.random() * emojis.length);
return emojis[randomIndex];
};

const [currentEmoji, setCurrentEmoji] = useState(getRandomEmoji());

const changeEmoji = () => {
setCurrentEmoji(getRandomEmoji());
};

return (
<div id={s.main}>
	{/* sidebar */}
	<div className={`${s.main1}`}>
		<header id={`${s.head}`}>
			People
		</header>
		<hr style={{border: 'none', borderTop: '2px solid black', width: '103%',margin: `0 -3%`}} />

		{/* people  */}
		<div id={s.profiles}>
			<div className={s.profile}>
				<img src={pfp1} alt="profile" className={`${s.profile_picture}`}/>
				<p className={s.profile_name}>Shunsuke</p>
			</div>
		</div>

	</div>

	{/* chatting area  */}
	<div className={`${s.main2}`}>
	<div className={`${s.chat}`}>
		<p></p>
	</div>

	{/* textingbar */}
	<div id={s.bottom}>
		<img src={upload_icon} alt="upload_icon" className={` ${s.bottom_icon}`}/>
		<input id={s.enter_text} placeholder="text here" />
		<div className={`${s.right}`}>
		<img src={gif_icon} alt="gif_icon" className={`${s.bottom_icon}`}/>
		<div className={`${s.bottom_icon} ${s.emoji}`} onMouseEnter={changeEmoji}>{currentEmoji}</div>
		</div>
	</div>
	</div>
</div>
)
}

export default Social;