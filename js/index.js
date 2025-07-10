function change_question( current_question ){
    //Reset progress bar
    $("#progress_bar h4").css("color", "#B6B6B6").css("font-weight", "normal");
    $(".progress_bar_rectangle").css("background-color", "#F0F2DD");
    if ( current_question == 1 ){
        $("#more_information_title").fadeOut(200, function(){

            //Change the text here to change the question for Question 1
            $("#more_information_title").text( "What is the purpose of this website?")

        }).fadeIn(200);
        $("#first_p").fadeOut(200, function(){

            //Change the text here to change the text in the first column of Question 1
            $("#first_p").text("Canada’s population is continuing to age.  As more people grow older, there will be more cases of missing persons among those living with dementia. This website offers strategies that: 1) promote safe wandering and, 2) prevent individuals from getting lost.")

        }).fadeIn(200);
        $("#second_p").fadeOut(200, function(){

            //Change the text here to change the text in the second column of Question 1
            $("#second_p").text("")

        }).fadeIn(200);
        
        //Changing progress bar
        $("#mobile_progress").text("1 of 7");
        $("#progress_bar h2").text("1 of 7");
        $("#question_1").css("color", "#848F17").css("font-weight", 800);
        $("#question_2").css("font-weight", "bold");
        $("#question_1_bar").css("background-color", "#848F17");
        $("#pointer").css("grid-area", "arrow_1");

    } else if (current_question == 2){
        $("#more_information_title").fadeOut(200, function(){

            //Change the text here to change the question for Question 2
            $("#more_information_title").text("What is safe wandering?")

        }).fadeIn(200);
        $("#first_p").fadeOut(200, function(){

            //Change the text here to change the text in the first column of Question 2
            $("#first_p").text("People think of wandering as “aimless” walking. It is commonly believed that wandering applies only to people in the later stage of dementia. But, to quote Tolkien, “Not all who wander are lost”. Wandering can be safe and a healthy way to be active in our communities. The activity of wandering can be relaxing, enjoyable, and a way to exercise.")

        }).fadeIn(200);
        $("#second_p").fadeOut(200, function(){

            //Change the text here to change the text in the second column of Question 2
            $("#second_p").text("For people living with dementia, it can also be a way to communicate to their care partner that they are restless or can simply be a way to engage in meaningful activities. For example, a person with dementia who is hungry may wander into the kitchen.")

        }).fadeIn(200);

        //Changing progress bar
        $("#mobile_progress").text("2 of 7");
        $("#progress_bar h2").text("2 of 7");
        $("#question_2").css("color", "#848F17").css("font-weight", 800);
        $("#question_3").css("font-weight", "bold");
        $("#question_1_bar, #question_2_bar").css("background-color", "#848F17");
        $("#pointer").css("grid-area", "arrow_2");
    } else if (current_question == 3){

        //Change the text here to change the question for Question 3
        $("#more_information_title").fadeOut(200, function(){
            $("#more_information_title").text("What are the risks of wandering?")

        }).fadeIn(200);
        $("#first_p").fadeOut(200, function(){

            //Change the text here to change the text in the first column of Question 3
            $("#first_p").text("Intentional wandering has low risk. But the risk is higher if a person living with dementia is alone, becomes lost, and when the environment is challenging. For example, the weather could be too cold or too hot, or the noise level is too loud, or visual cues are complicated. One example of this is walking outside when not prepared for the weather.")

        }).fadeIn(200);
        $("#second_p").fadeOut(200, function(){

            //Change the text here to change the text in the second column of Question 3
            $("#second_p").text("Another example is walking along a busy street with poorly marked crosswalks where the person may walk into traffic. Both cases may increase the risk of physical harm to a vunerable older adult. This physical harm could include hypothermia or an injury.")

        }).fadeIn(200);

        //Changing progress bar
        $("#mobile_progress").text("3 of 7");
        $("#progress_bar h2").text("3 of 7");
        $("#question_3").css("color", "#848F17").css("font-weight", 800);
        $("#question_4").css("font-weight", "bold");
        $("#question_1_bar, #question_2_bar, #question_3_bar").css("background-color", "#848F17");
        $("#pointer").css("grid-area", "arrow_3");

    } else if (current_question == 4){

        //Change the text here to change the question for Question 4
        $("#more_information_title").fadeOut(200, function(){
            $("#more_information_title").text("Is it a good idea for people living with dementia to wander?")
        }).fadeIn(200);
        $("#first_p").fadeOut(200, function(){

            //Change the text here to change the text in the first column of Question 4
            $("#first_p").text("Like all people, individuals living with dementia enjoy the ability to move out and about within their community freely. However, a person with memory loss may not be able to wander safely. Safe wandering is when a person with dementia is out and about the community but has a strategy in case the person gets lost.")

        }).fadeIn(200);
        $("#second_p").fadeOut(200, function(){

            //Change the text here to change the text in the second column of Question 4
            $("#second_p").text("The strategy can be wearing a locator device, or carrying one’s name and home address handy in a wallet. These strategies can become habits if practiced daily.")

        }).fadeIn(200);

        //Change progress bar
        $("#mobile_progress").text("4 of 7");
        $("#progress_bar h2").text("4 of 7");
        $("#question_4").css("color", "#848F17").css("font-weight", 800);
        $("#question_5").css("font-weight", "bold");
        $("#question_1_bar, #question_2_bar, #question_3_bar, #question_4_bar").css("background-color", "#848F17");
        $("#pointer").css("grid-area", "arrow_4");

    } else if (current_question == 5){

        //Change the text here to change the question for Question 5
        $("#more_information_title").fadeOut(200, function(){
            $("#more_information_title").text("Why are prevention strategies important?")

        }).fadeIn(200);
        $("#first_p").fadeOut(200, function(){

            //Change the text here to change the text in the first column of Question 5
            $("#first_p").text("Sometimes, we wait until someone with dementia gets lost before looking at ways to keep the person safe. In some cases, the first-time someone living with dementia becomes lost may be the last time they are seen. For example, Shin Noh went missing in 2013 in Coquitlam, British Columbia, and has yet to be found. You may be at a low risk for getting lost now, but this does not mean that you will remain in that risk level for long.")

        }).fadeIn(200);
        $("#second_p").fadeOut(200, function(){
            
            //Change the text here to change the text in the second column of Question 5
            $("#second_p").text("A proactive strategy is to create a plan before a missing incident. Just because you are at a low risk for getting lost now does not mean that you will remain in that risk level for long. Your risk level may change quickly. A safety plan could prepare you for a rapid change in risk level.")

        }).fadeIn(200);

        //Change progress bar
        $("#mobile_progress").text("5 of 7");
        $("#progress_bar h2").text("5 of 7");
        $("#question_5").css("color", "#848F17").css("font-weight", 800);
        $("#question_6").css("font-weight", "bold");
        $("#question_1_bar, #question_2_bar, #question_3_bar, #question_4_bar, #question_5_bar").css("background-color", "#848F17");
        $("#pointer").css("grid-area", "arrow_5");

    } else if (current_question == 6){
        
        $("#more_information_title").fadeOut(200, function(){

            //Change the text here to change the question for Question 6
            $("#more_information_title").text("What kind of research went into creating this website?")

        }).fadeIn(200);
        $("#first_p").fadeOut(200, function(){

            //Change the text here to change the text in the first column of Question 6
            $("#first_p").text("Researchers from the University of Waterloo’s Aging and Research Innovation Program (AIRP) have created the Canadian Guideline for Safe Wandering to help keep persons living with dementia safe while they are out in their community. This interactive website was based on feedback from persons living with dementia.")

        }).fadeIn(200);
        $("#second_p").fadeOut(200, function(){

            //Change the text here to change the text in the second column of Question 6
            $("#second_p").text("This website shares a positive perspective of wandering. The quiz on this website is engaging and educational. Any person with beginner-level computer skills can use the website.")

        }).fadeIn(200);

        //Change progress bar
        $("#mobile_progress").text("6 of 7");
        $("#progress_bar h2").text("6 of 7");
        $("#question_6").css("color", "#848F17").css("font-weight", 800);
        $("#question_7").css("font-weight", "bold");
        $("#question_1_bar, #question_2_bar, #question_3_bar, #question_4_bar, #question_5_bar, #question_6_bar").css("background-color", "#848F17");
        $("#pointer").css("grid-area", "arrow_6");

    } else {
        
        $("#more_information_title").fadeOut(200, function(){

            //Change the text here to change the question for Question 7
            $("#more_information_title").text("Why should persons living with dementia use this website?")

        }).fadeIn(200);
        $("#first_p").fadeOut(200, function(){

            //Change the text here to change the text in the first column of Question 7
            $("#first_p").text("This website provides suggestions for persons with dementia based on their risk level: low, medium, or high. The strategies are easy to put into practice and can be customized to meet your needs.")

        }).fadeIn(200);
        $("#second_p").fadeOut(200, function(){

            //Change the text here to change the text in the second column of Question 7
            $("#second_p").text("")

        }).fadeIn(200);

        //Change progress bar
        $("#mobile_progress").text("7 of 7");
        $("#progress_bar h2").text("7 of 7");
        $("#question_7").css("color", "#848F17").css("font-weight", 800);
        $("#question_1_bar, #question_2_bar, #question_3_bar, #question_4_bar, #question_5_bar, #question_6_bar, #question_7_bar").css("background-color", "#848F17");
        $("#pointer").css("grid-area", "arrow_7");
    }

}

const facebookBtn = document.querySelector(".facebook-btn");
const twitterBtn = document.querySelector(".twitter-btn");
var current_question = 1;

var date = new Date();
var month = date.getMonth();

//Changing layout on portrait
window.onload = function(){
    if(window.innerHeight > window.innerWidth){
        $("#progress_bar").hide();
        $("#mobile_progress").show();
        $("ul").hide();
    }
    if(window.innerWidth > window.innerHeight){
        $("#progress_bar").show();
        $("#mobile_progress").hide();
        $("ul").show();
    }
}

//Changing picture based on season
if ( month >= 0 && month < 2 ){
    //Put the winter picture here by replacing Winter Picture.png with the name of the file
    $("#starting_img").attr("src","images/Winter Picture.png");
} else if ( month <= 4 ){
    //Put the spring picture here by replacing Spring Picture.png with the name of the file
    $("#starting_img").attr("src","images/Spring Picture.png");
} else if ( month <= 7 ) {
    //Put the summer picture here by replacing Summer Picture.png with the name of the file
    $("#starting_img").attr("src","images/Summer Picture.png");
} else if ( month <= 10 ) {
    //Put the fall picture here by replacing Fall Picture.png with the name of the file
    $("#starting_img").attr("src","images/Fall Picture.png");
} else {
    //Put the winter picture here by replacing Winter Picture.png with the name of the file
    $("#starting_img").attr("src","images/Winter Picture.png");
}

$(document).ready(function(){

    //Changing layout on orientation change
    $( window ).on( "orientationchange", function( event ) {
        if(window.innerHeight > window.innerWidth){
            $("#progress_bar").hide();
            $("#mobile_progress").show();
            $("ul").hide();
        }
        if(window.innerWidth > window.innerHeight){
            $("#progress_bar").show();
            $("#mobile_progress").hide();
            $("ul").show();
        }
    });

    //Changing layout on browser size change
    $(window).resize(function(){
        if ($(window).width() < 1000){
            $("#fb_icon").removeClass("fa-4x").addClass("fa-3x");
            $("#twitter_icon").removeClass("fa-4x").addClass("fa-3x");
        } else {
            $("#fb_icon").removeClass("fa-3x").addClass("fa-4x");
            $("#twitter_icon").removeClass("fa-3x").addClass("fa-4x");
        }
        if(window.innerHeight > window.innerWidth){
            $("#progress_bar").hide();
            $("#mobile_progress").show();
            $("ul").hide();
        }
        if(window.innerWidth > window.innerHeight){
            $("#progress_bar").show();
            $("#mobile_progress").hide();
            $("ul").show();
        }
    });

    //Sharing on social media function
    //share();

    //Disabling back button 
    $("#back").attr("disabled", true);
    
    //On next button click
    $("#next").click(function(){
        //Change question on click
        ++current_question;
        change_question(current_question);

        //Change next button to colours
        $(this).css("background-color", "#848F17").css("border", "1px solid #848F17");

        //Change back button to be clickable
        $("#back").css("color", "#848F17").css("border", "1px solid #848F17").attr("disabled", false);
        $("#back_icon").css("color", "#848F17");
         
        if ( current_question == 7 ){
            //Disabling next button for last question
            $(this).css("background-color", "#C4C4C4").css("border","1px solid #C4C4C4").attr("disabled", true);
        }
    });

    //Hover effect for next button
    $("#next").hover( function(){
        $(this).css("color","white").css("background-color", "#FF8500").css("border","none");
    }, function(){
        $(this).css("color","white").css("background-color", "#848F17").css("border","none");
        $("#next_icon").css("color", "white");  
    });

    //On back button click
    $("#back").click(function(){
        //Change question on click
        --current_question;
        change_question(current_question);

        //Change next button to be clickable
        $("#next").css("background-color", "#848F17").css("border", "1px solid #848F17").attr("disabled", false);

        //Change back button to be original colours on click
        $(this).css("color", "#848F17").css("border", "1px solid #848F17").css("background-color", "white").attr("disabled", false);
        $("#back_icon").css("color", "#848F17");
        
        if ( current_question == 1 ){
            //If it is the first question disable back button
            $(this).css("color", "#C4C4C4").css("border", "1px solid #C4C4C4").css("background-color", "white").attr("disabled", true);
            $("#back_icon").css("color", "#C4C4C4");
        }
    });

    //Hover effect for back button
    $("#back").hover( function(){
        $(this).css("color","white").css("background-color", "#FF8500").css("border","none");
        $("#back_icon").css("color", "white");
    }, function(){
         $(this).css("color","#848F17").css("background-color", "white").css("border","1px solid #848F17");
        $("#back_icon").css("color", "#848F17");
    });

});

//Share on social media function
/*function share(){
    let postUrl = encodeURI(document.location.href);
    let postTitle = encodeURI("Canadian Guideline for Safe Wandering");

    facebookBtn.setAttribute(
        "href", `https://www.facebook.com/sharer.php?u=${postUrl}`
    );

    twitterBtn.setAttribute(
        "href", `https://twitter.com/share?url=${postUrl}&text=${postTitle}`
    );
    
}*/