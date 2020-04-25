var regExp = /\{([^\}]+)\}/g;
var storyint = 2; //Math.floor(Math.random() * STORIES.length);
var storydef = STORIES[storyint];
var story = storydef[1];
var heading = storydef[0];

function myPrompt (e = ''){}

document.querySelector('#heading').innerHTML = heading;

var matches = story.matchAll(regExp);

let obj = {};

story = story.replace('\n', '<br>');

for (let match of matches) {
	obj[match[1]] = prompt(match[1]);
	story = story.replace(
		'{' + match[1] + '}',
		'<b>' + obj[match[1]] + '</b>',
	);
}

document.querySelector('#text').innerHTML = story;
