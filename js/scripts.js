var wordReplace = function(sentence, wordFind, wordReplace) {
var s = sentence;
var wf = wordFind;
var wr = wordReplace;

var new_sen = s.replace(wf, wr);
return new_sen;
};


$(document).ready(function(){
  $("form#replacer").submit(function(event){
    alert("Got to beginning of form");
    var user_sentence_init = $("input#user_sentence").val();
    var user_word_init = $("input#find_word").val();
    var user_word_replace = $("input#replace_word").val();
    var new_string = wordReplace(user_sentence_init, user_word_init, user_word_replace);

      $("#result").show();
      $(".new_sentence").show();
      alert(new_string);
    event.preventDefault();
  });
});
