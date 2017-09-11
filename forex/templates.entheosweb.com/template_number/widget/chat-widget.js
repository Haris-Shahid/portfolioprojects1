jQuery(document).ready(function() {
	$.tm.livechat({
		actionUrl:'widget/chat.php',
		affId:'entheos',
		presetCode:'6DIKO16rWJ73XgTMhA8Os61vh4h3wf', 
		productType:'',
		templateId:'',
		title: 'Live Chat', // title of dialog open button and dialog header
		startChatTitle: 'Start Chat', // title of "Start Chat" button
		content: '<p>Hi! Let me help you choose the right <b>premium</b> template.</p><p>What kind of website are you planning to make?<p>', // dialog text
		mainColor: '#C15252', // color for dialog header and "Start Chat" button
		secondaryColor: '#FF6552', // color of arrow, close button and "Start Chat" hover button
		bgColor: '#ffffff', // dialog background color
		textColor: '#333333', // dialog text color
		period: 7, // days
		minSteps: 10, // 
		openAfter: 7, // seconds
		dialogFloat: 'corner', // center/corner
		overlay: false, // yes/no
		blinkPeriod: 9, // seconds
		blinkFrequency: 200, // milliseconds
		blinkCount: 3, //
		init: function(e, data) {} // widget init event
	});
});