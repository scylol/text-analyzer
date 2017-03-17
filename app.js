// your code here!

$(function() {
  
  $('.js-text-form').submit(function(event) {
  	event.preventDefault();

  	var myString = $(this).find('#user-text').val();
  	var onlyWords = myString.toLowerCase().replace(/[^\w\s]/g, "");
  	var wordArray = onlyWords.split(" ");

  	var totalWords = wordArray.length;

  	

  	var uniqueWords = [];
  	var totalCharacters = 0;

  	for (i=0; i<wordArray.length;i++) {
  		
  		totalCharacters += wordArray[i].length;

		if (!uniqueWords.includes(wordArray[i])) {
			uniqueWords.push(wordArray[i]);
		// 	continue;
		// }
		// else {
		// 	uniqueWordCount.push(wordArray[i]);
		}
		
	}



  	

  	// for (i=0; i<wordArray.length;i++) {
  	// 	totalCharacters += wordArray[i].length;
  	// }

  	var averageLength = totalCharacters / totalWords;

  	
  	var results = $('.js-text-report');

  	results.find('.js-word-count').text(totalWords);
  	results.find('.js-unique-word-count').text(uniqueWords.length);
  	results.find('.js-average-length').text(averageLength);

  });



});



