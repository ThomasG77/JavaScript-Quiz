/** Simple JavaScript Quiz
 * version 0.1.0
 * http://journalism.berkeley.edu
 * created by: Jeremy Rue @jrue
 *
 * Copyright (c) 2013 The Regents of the University of California
 * Released under the GPL Version 2 license
 * http://www.opensource.org/licenses/gpl-2.0.php
 * This program is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 */

var quiztitle = require("./quiz_content").quiztitle;

/**
* Set the information about your questions here. The correct answer string needs to match
* the correct choice exactly, as it does string matching. (case sensitive)
*
*/
var quiz = require("./quiz_content").quiz;

var translate = require('./lang/ui_fr')

var $ = jQuery = require('jquery');

/******* No need to edit below this line *********/
var currentquestion = 0, score = 0, submt=true, picked;

jQuery(document).ready(function($){

    /**
     * HTML Encoding function for alt tags and attributes to prevent messy
     * data appearing inside tag attributes.
     */
    function htmlEncode(value){
      return $(document.createElement('div')).text(value).html();
    }

    /**
     * This will add the individual choices for each question to the ul#choice-block
     *
     * @param {choices} array The choices from each question
     */
    function addChoices(choices){
        if(typeof choices !== "undefined" && $.type(choices) == "array"){
            $('#choice-block').empty();
            for(var i=0;i<choices.length; i++){
                $(document.createElement('button'))
                  .addClass('pure-button choice choice-box pure-u-1')
                  .attr('data-index', i)
                  .text(choices[i])
                  .appendTo('#choice-block');                    
            }
        }
    }
    /**
     * Resets all of the fields to prepare for next question
     */
    function nextQuestion(){
        submt = true;
        $('#explanation').empty();
        $('#question').text(quiz[currentquestion]['question']);
        $('#pager').text('Question ' + Number(currentquestion + 1) + ' ' + translate.of + ' ' + quiz.length);
        if(quiz[currentquestion].hasOwnProperty('image') && quiz[currentquestion]['image'] != ""){
            if($('#question-image').length == 0){
                $(document.createElement('img')).addClass('question-image').attr('id', 'question-image').attr('src', quiz[currentquestion]['image']).attr('alt', htmlEncode(quiz[currentquestion]['question'])).insertAfter('#question');
            } else {
                $('#question-image').attr('src', quiz[currentquestion]['image']).attr('alt', htmlEncode(quiz[currentquestion]['question']));
            }
        } else {
            $('#question-image').remove();
        }
        addChoices(quiz[currentquestion]['choices']);
        setupButtons();
    }

    /**
     * After a selection is submitted, checks if its the right answer
     *
     * @param {choice} number The li zero-based index of the choice picked
     */
    function processQuestion(choice){
        if(quiz[currentquestion]['choices'][choice] == quiz[currentquestion]['correct']){
            $('.choice').eq(choice).css({'background-color':'#50D943'});
            $('#explanation').html('<strong>Correct!</strong> ' + htmlEncode(quiz[currentquestion]['explanation']));
            score++;
        } else {
            $('.choice').eq(choice).css({'background-color':'#D92623'});
            $('#explanation').html('<strong>Incorrect.</strong> ' + htmlEncode(quiz[currentquestion]['explanation']));
        }
        currentquestion++;
        $('#submitbutton').html(translate.next_question_label + ' &raquo;').on('click', function(){
            if(currentquestion == quiz.length){
                endQuiz();
            } else {
                $(this).text(translate.check_answer_label).css({'color':'#222'}).off('click');
                nextQuestion();
            }
        })
    }

    /**
     * Sets up the event listeners for each button.
     */
    function setupButtons(){
        $('.choice').on('click', function(){
            picked = $(this).attr('data-index');
            $('.choice').removeAttr('style').off('mouseout mouseover');
            $(this).css({'border-color':'#222','font-weight':700,'background-color':'#c1c1c1'});
            if(submt){
                submt=false;
                $('#submitbutton').css({'color':'#000'}).on('click', function(){
                    $('.choice').off('click');
                    $(this).off('click');
                    processQuestion(picked);
                });
            }
        })
    }
    
    /**
     * Quiz ends, display a message.
     */
    function endQuiz(){
        $('#explanation').empty();
        $('#question').empty();
        $('#choice-block').empty();
        $('#submitbutton').remove();
        $('#question').text(
            translate.result_sentence_1 + " " +
            score + " " + translate.result_sentence_2 + " " +
            quiz.length + " " + translate.result_sentence_3 + ".");
        $(document.createElement('h2'))
          .css({
            'text-align':'center',
            'font-size':'4em'
          })
          .text(Math.round(score/quiz.length * 100) + '%')
          .insertAfter('#question');
    }

    /**
     * Runs the first time and creates all of the elements for the quiz
     */
    function init(){
        //add title
        if(typeof quiztitle !== "undefined" && $.type(quiztitle) === "string"){
            $(document.createElement('h1')).html(quiztitle).appendTo('#frame');
        } else {
            $(document.createElement('h1')).text("Quiz").appendTo('#frame');
        }

        //add pager and questions
        if(typeof quiz !== "undefined" && $.type(quiz) === "array"){
            //add pager
            $(document.createElement('p'))
              .addClass('pager')
              .attr('id','pager')
              .text(translate.question_number + ' 1 ' + translate.of +' ' + quiz.length)
              .appendTo('#frame');
            //add first question
            $(document.createElement('h2'))
              .addClass('question')
              .attr('id', 'question')
              .text(quiz[0]['question'])
              .appendTo('#frame');
            //add image if present
            if(quiz[0].hasOwnProperty('image') && quiz[0]['image'] != ""){
                $(document.createElement('img'))
                  .addClass('pure-img question-image')
                  .attr('id', 'question-image')
                  .attr('src', quiz[0]['image'])
                  .attr('alt', htmlEncode(quiz[0]['question']))
                  .appendTo('#frame');
            }
            $(document.createElement('p'))
              .addClass('explanation')
              .attr('id','explanation')
              .html('&nbsp;')
              .appendTo('#frame');
        
            //questions holder
            $(document.createElement('div')).attr('id', 'choice-block').appendTo('#frame');
        
            //add choices
            addChoices(quiz[0]['choices']);
        
            //add submit button
            $(document.createElement('div'))
              .addClass('button-xlarge pure-button pure-u-1')
              .attr('id', 'submitbutton')
              .text(translate.check_answer_label)
              .css({
                'font-weight':700,
                'color':'#222',
                'padding':'15px 0'
              })
              .appendTo('#frame');
        
            setupButtons();
        }
    }
    
    init();
});