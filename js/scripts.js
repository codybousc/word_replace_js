function capitalize(s)
{
    return s[0].toUpperCase() + s.slice(1);
};


var wordReplace = function(sentence, wordFind, wordReplace) {
var s = sentence.toLowerCase();
var wf = wordFind.toLowerCase();
var wr = wordReplace;

var new_sen = s.replace(wf, wr);
var final_sen = capitalize(new_sen);
return final_sen;
};




$(document).ready(function(){
  $("form#replacer").submit(function(event){
    var user_sentence_init = $("input#user_sentence").val();
    var user_word_init = $("input#find_word").val();
    var user_word_replace = $("input#replace_word").val();
    var new_string = wordReplace(user_sentence_init, user_word_init, user_word_replace);




    $(".new_sentence").text(new_string);
    $("#result").show();

    event.preventDefault();
  });
});
