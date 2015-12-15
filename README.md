# project3_canvas_master

----ATTENTION----
CANNOT UPLOAD SONGS USING SOUNDCLOUD URLs
ONLY THE ONE SONG I Was able to grab from SoundCloud Works
HAD TO REVERT TO A WORKING VERSION uploading SoundCloud URLs cross platform kept breaking the app when I got to a certain point. 
- More Shapes added with the reaction by sphere to the music.
- Mouse Functions still work properly when links are clicked. 
- Player is able to be hidden at the bottom.
- Animated text occurs when hovering Over About Links and when clicking on the Controls options at the top.
- Keyboard functions occurs when Space bar is pushed to pause and play music.(Code is present to cycle through Playlists using SoundCloud but non functional now)

---SOURCES---
http://webaudio.github.io/web-audio-api/
https://developers.soundcloud.com/docs/api/sdks#javascript
https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API
https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial
http://www.html5rocks.com/en/tutorials/webaudio/intro/
http://joshondesign.com/p/books/canvasdeepdive/chapter12.html
http://chimera.labs.oreilly.com/books/1234000001552/ch05.html




Updates for final
-- Main Issue is trying to figure out how to allow the user to upload their own music to the app. During lab learned issue could be
	resolved by hosting the app on a server so the uploads could be used in local storage link the Meme creator.
	--SoundCloud Looks to be the best work around for this. They provide the code that allows access to their server storage to grab files for user.
		--Still Allows for the customization to enhance the user experience.
		https://developers.soundcloud.com/docs/api/sdks#javascript
		



______________________________________________
Snowing Morphing Particle Sphere for Project 3
-- Had the snow working properly by itself & Sphere working well by itself.
-- However when trying to implement the two with the drop menu working properly the snow only fell inside of the drop menu.
-- Changed the CSS to allow snow to fall over entire canvas but stopped full functionality of header it still moves but text is always visible.---DeBug for Final.
Watch as the sphere of particles morph to form what seems like limitless amount of shapes using our favorite trig 
equations that haunts us from the past with a little bit of snow fall to add to the holiday spirit. The Snowfall
is fairly responsive and will try its best to move out of the way from the area the mouse pointer is located. 
For the final project I plan to add music and responsiveness from the sphere based on the rhythms in the music.
Currently researching how to pull music from soundcloud as well as allowing user to input their own .mp3 files.
Also researching how to pull frequencies from the music and convert that data into scaling numbers to affect sphere.
For the final I also plan on adding key functionality in order to change the color scheme for the user.
