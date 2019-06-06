document.addEventListener("DOMContentLoaded", function (event) {
    var audio = document.getElementById("audio");
    audio.src = "";
    audio.src = "/detective/Audio.mp3";
    audio.load();
    try {
        audio.play();
    }
    catch {
        var container = document.getElementById("container");
        container.onclick = function () { audio.play(); };
    }
});


var output = document.getElementById("output");

var text = document.getElementById("myForm");

text.focus({
    preventScroll: true
});

var console = document.getElementById("console");

var scene = 0;
var rebecca = 0;
var tommy = 0;
var paper = false;

var img = document.getElementById("img");
img.src = "/detective/Capture.JPG";
img.classList.add("img");

function populate() {
    text.value = "";
    while (output.firstChild) {
        output.removeChild(output.firstChild);
    }
    switch (scene) {
        case 0:
            img.src = "/detective/Capture.JPG";
            var para1 = document.createElement("P");
            para1.textContent = "You drag your heavy legs home after a long day slaving away at the office. By the office, you mean the homicide sector of the Police Bureau. Many would assume to be a very interesting place to work, or at least something to be proud of, however at this point you find yourself so emotionally numb to the excitement and horror that clouded your vision as a young investigator. Either way, it's still really just an office.";
            var para2 = document.createElement("P");
            para2.textContent = "You push open the creaky front door to your humble abode, you've been thinking about getting that fixed however your work ethic that resembles that of a petulant child has prevented you from achieving anything truly important in your life. Well, you have a family. However your wife is usually absent and your two daughters seem to be going through a rather rough rebellious phase. At least you have Tommy, your youngest pride and joy. You brought him home a bag of Oddfellows, those are his favourites. His third birthday is coming up soon. Personally you find birthdays to be an irrelevant occasion especially your own, however little Tommy seems to enjoy having his friends over to swim in your outdoor pool.";
            var para3 = document.createElement("P");
            var para31 = document.createElement("div");
            para31.textContent = "<Tommy?";
            var para32 = document.createElement("div");
            para32.textContent = "You call out his name.";
            para3.appendChild(para31);
            para3.appendChild(para32);
            var para5 = document.createElement("P");
            para5.textContent = "You find yourself in your living room. You see your old tattered sofa and a glass of unusually white water resting on the coffee table. You hear a muffled choking sound from behind the sofa.";
            var para6 = document.createElement("P");
            var option1 = document.createElement("div");
            option1.textContent = "1- Inspect the liquid";
            var option2 = document.createElement("div");
            option2.textContent = "2- Inspect the sofa";
            var option3 = document.createElement("div");
            option3.textContent = "3- Inspect the sound";
            para6.appendChild(option1);
            para6.appendChild(option2);
            para6.appendChild(option3);
            output.appendChild(para1);
            output.appendChild(para2);
            output.appendChild(para3);
            output.appendChild(para5);
            output.appendChild(para6);
            break;
        case 1:
            var para1 = document.createElement("P");
            para1.textContent = "You pick up the glass of the strong-smelling liquid. It looks like water, but you aren't sure if it really is. The liquid has a sharp, choking smell that reminds you of bleach, but you know that you should always test a hypothesis rather than making assumptions.";
            var para2 = document.createElement("P");
            var option1 = document.createElement("div");
            option1.textContent = "1- Drink the liquid";
            var option2 = document.createElement("div");
            option2.textContent = "2- Put it down";
            var option3 = document.createElement("div");
            option3.textContent = "3- Test the liquid";
            para2.appendChild(option1);
            para2.appendChild(option2);
            para2.appendChild(option3);
            output.appendChild(para1);
            output.appendChild(para2);
            break;
        case 2:
            var para1 = document.createElement("P");
            para1.textContent = "You lift the glass to your lips. You take a sip, oh, or a gulp, wait, stop, that's too much, I know you had a long day and seem to be dehydrated but is that really safe? Did you really thing about the repercussions of this decision? God, you're an idiot. You feel a burning sensation in your oesophagus. You find yourself choking. This can't end well...";
            var para2 = document.createElement("P");
            para2.textContent = "END 1 - YOU DIED ALONGSIDE TOMMY";
            output.appendChild(para1);
            output.appendChild(para2);
            document.getElementById("console").style.display = "none";
            break;
        case 3:
            img.src = "/detective/Capture.JPG";

            var para0 = document.createElement("P");
            para0.textContent = "You put the liquid back on the table, careful not to breathe it in.";
            var para5 = document.createElement("P");
            para5.textContent = "You find yourself in your living room. You see your old tattered sofa and a glass of unusually white water resting on the coffee table. You hear a muffled choking sound from behind the sofa.";
            var para6 = document.createElement("P");
            var option1 = document.createElement("div");
            option1.textContent = "1- Inspect the liquid";
            var option2 = document.createElement("div");
            option2.textContent = "2- Inspect the sofa";
            var option3 = document.createElement("div");
            option3.textContent = "3- Inspect the sound";
            para6.appendChild(option1);
            para6.appendChild(option2);
            para6.appendChild(option3);
            output.appendChild(para0);
            output.appendChild(para5);
            output.appendChild(para6);
            break;
        case 4:
            img.src = "/detective/Capture.JPG";

            var para0 = document.createElement("P");
            para0.textContent = "You look at the sofa. It's the same as always. What did you expect.";
            var para5 = document.createElement("P");
            para5.textContent = "You find yourself in your living room. You see your old tattered sofa and a glass of unusually white water resting on the coffee table. You hear a muffled choking sound from behind the sofa.";
            var para6 = document.createElement("P");
            var option1 = document.createElement("div");
            option1.textContent = "1- Inspect the liquid";
            var option2 = document.createElement("div");
            option2.textContent = "2- Inspect the sofa";
            var option3 = document.createElement("div");
            option3.textContent = "3- Inspect the sound";
            para6.appendChild(option1);
            para6.appendChild(option2);
            para6.appendChild(option3);
            output.appendChild(para0);
            output.appendChild(para5);
            output.appendChild(para6);
            break;
        case 5:
            var para1 = document.createElement("P");
            para1.textContent = "You walk behind the sofa and see Tommy choking on the ground. He is violently coughing and vomiting all over the ground.";
            var para2 = document.createElement("P");
            var option1 = document.createElement("div");
            option1.textContent = "1- Shriek and run away.";
            var option2 = document.createElement("div");
            option2.textContent = "2- Talk to Tommy. ";
            var option3 = document.createElement("div");
            option3.textContent = "3- Inspect room.";
            para2.appendChild(option1);
            para2.appendChild(option2);
            para2.appendChild(option3);
            output.appendChild(para1);
            output.appendChild(para2);
            break;
        case 6:
            var para0 = document.createElement("P");
            para0.textContent = "You scream loudly, and run away from your dying son. He continues to cough and vomit. This doesn't seem to have helped his condition.";
            var para1 = document.createElement("P");
            para1.textContent = "You walk behind the sofa and see Tommy choking on the ground. He is violently coughing and vomiting all over the ground.";
            var para2 = document.createElement("P");
            var option1 = document.createElement("div");
            option1.textContent = "1- Shriek and run away.";
            var option2 = document.createElement("div");
            option2.textContent = "2- Talk to Tommy. ";
            var option3 = document.createElement("div");
            option3.textContent = "3- Inspect room.";
            para2.appendChild(option1);
            para2.appendChild(option2);
            para2.appendChild(option3);
            output.appendChild(para0);
            output.appendChild(para1);
            output.appendChild(para2);
            break;
        case 7:
            var para1 = document.createElement("P");
            para1.textContent = "What would you like to say to Tommy?";
            output.appendChild(para1);
            break;
        case 8:
            var para0 = document.createElement("P");
            para0.textContent = "Tommy doesn't seem to have heard you. He is too busy dying.";
            var para1 = document.createElement("P");
            para1.textContent = "You walk behind the sofa and see Tommy choking on the ground. He is violently coughing and vomiting all over the ground.";
            var para2 = document.createElement("P");
            var option1 = document.createElement("div");
            option1.textContent = "1- Shriek and run away.";
            var option2 = document.createElement("div");
            option2.textContent = "2- Talk to Tommy. ";
            var option3 = document.createElement("div");
            option3.textContent = "3- Inspect room.";
            para2.appendChild(option1);
            para2.appendChild(option2);
            para2.appendChild(option3);
            output.appendChild(para0);
            output.appendChild(para1);
            output.appendChild(para2);
            break;
        case 9:
            var para1 = document.createElement("P");
            para1.textContent = "You hear footsteps approaching. Your older daughter, Rebecca, walks in. She is wearing all black clothing, and a lot of dark makeup. She has being doing this for a while. You hope it's just a phase.";
            var para2 = document.createElement("P");
            para2.textContent = "(Rebecca) --- What is all the noise about?";
            var para3 = document.createElement("P");
            para3.textContent = "You point to the sofa and Rebecca walks over. She sees Tommy and begins to scream, then walks backwards and faints onto the sofa. She seems to be okay. You remember that you have a phone in your pocket and take it out.";
            var para4 = document.createElement("P");
            var option1 = document.createElement("div");
            option1.textContent = "1- Call ambulance";
            var option2 = document.createElement("div");
            option2.textContent = "2- Call wife";
            var option3 = document.createElement("div");
            option3.textContent = "3- Call pizza ";
            para4.appendChild(option1);
            para4.appendChild(option2);
            para4.appendChild(option3);
            output.appendChild(para1);
            output.appendChild(para2);
            output.appendChild(para3);
            output.appendChild(para4);
            break;
        case 10:
            var para0 = document.createElement("P");
            para0.textContent = "You call an ambulance and explain what is happening. They are sending paramedics, but they won't get there until too late. You decide to try and help Tommy yourself.";
            var para1 = document.createElement("P");
            para1.textContent = "Tommy is choking behind the sofa. Rebecca has fainted onto the sofa. There is a glass of liquid on the coffee table. There is a door to the laundry and a door to outside.";
            var para2 = document.createElement("P");
            var option1 = document.createElement("div");
            option1.textContent = "1- Check on Tommy";
            var option2 = document.createElement("div");
            option2.textContent = "2- Check on Rebecca";
            var option3 = document.createElement("div");
            option3.textContent = "3- Inspect liquid";
            var option4 = document.createElement("div");
            option4.textContent = "4- Go outside";
            var option5 = document.createElement("div");
            option5.textContent = "5- Go into laundry ";
            var option6 = document.createElement("div");
            option6.textContent = "6- Go into kitchen";
            para2.appendChild(option1);
            para2.appendChild(option2);
            para2.appendChild(option3);
            para2.appendChild(option4);
            para2.appendChild(option5);
            para2.appendChild(option6);
            output.appendChild(para0);
            output.appendChild(para1);
            output.appendChild(para2);
            break;
        case 11:
            var para0 = document.createElement("P");
            var para01 = document.createElement("div");
            para01.textContent = "You call your wife. She is at work, and sounds annoyed.";
            para0.appendChild(para01);
            var para02 = document.createElement("div");
            para02.textContent = "(Wife) --- I'm busy. Please stop calling me. I don't care what's happening, you can work it out yourself, I have more important things to do.";
            para0.appendChild(para02);
            var para03 = document.createElement("div");
            para03.textContent = "She hangs up on you.";
            para0.appendChild(para03);
            var para1 = document.createElement("P");
            para1.textContent = "Tommy is choking behind the sofa. Rebecca has fainted onto the sofa. There is a glass of liquid on the coffee table. There is a door to the laundry and a door to outside.";
            var para2 = document.createElement("P");
            var option1 = document.createElement("div");
            option1.textContent = "1- Check on Tommy";
            var option2 = document.createElement("div");
            option2.textContent = "2- Check on Rebecca";
            var option3 = document.createElement("div");
            option3.textContent = "3- Inspect liquid";
            var option4 = document.createElement("div");
            option4.textContent = "4- Go outside";
            var option5 = document.createElement("div");
            option5.textContent = "5- Go into laundry ";
            var option6 = document.createElement("div");
            option6.textContent = "6- Go into kitchen";
            para2.appendChild(option1);
            para2.appendChild(option2);
            para2.appendChild(option3);
            para2.appendChild(option4);
            para2.appendChild(option5);
            para2.appendChild(option6);
            output.appendChild(para0);
            output.appendChild(para1);
            output.appendChild(para2);
            break;
        case 12:
            var para0 = document.createElement("P");
            para0.textContent = "You are about to call to order a pizza when you remember your son is dying and you should probably focus on him instead of food. After all, he's your favourite child and you don't want to be stuck with two daughters.";
            var para1 = document.createElement("P");
            para1.textContent = "Tommy is choking behind the sofa. Rebecca has fainted onto the sofa. There is a glass of liquid on the coffee table. There is a door to the laundry and a door to outside.";
            var para2 = document.createElement("P");
            var option1 = document.createElement("div");
            option1.textContent = "1- Check on Tommy";
            var option2 = document.createElement("div");
            option2.textContent = "2- Check on Rebecca";
            var option3 = document.createElement("div");
            option3.textContent = "3- Inspect liquid";
            var option4 = document.createElement("div");
            option4.textContent = "4- Go outside";
            var option5 = document.createElement("div");
            option5.textContent = "5- Go into laundry ";
            var option6 = document.createElement("div");
            option6.textContent = "6- Go into kitchen";
            para2.appendChild(option1);
            para2.appendChild(option2);
            para2.appendChild(option3);
            para2.appendChild(option4);
            para2.appendChild(option5);
            para2.appendChild(option6);
            output.appendChild(para0);
            output.appendChild(para1);
            output.appendChild(para2);
            break;
        case 13:
            img.src = "/detective/Capture.JPG";
            var para0 = document.createElement("P");
            para0.textContent = "Tommy is spasming violently.";
            var para1 = document.createElement("P");
            para1.textContent = "Tommy is choking behind the sofa. Rebecca has fainted onto the sofa. There is a glass of liquid on the coffee table. There is a door to the laundry and a door to outside.";
            var para2 = document.createElement("P");
            var option1 = document.createElement("div");
            option1.textContent = "1- Check on Tommy";
            var option2 = document.createElement("div");
            option2.textContent = "2- Check on Rebecca";
            var option3 = document.createElement("div");
            option3.textContent = "3- Inspect liquid";
            var option4 = document.createElement("div");
            option4.textContent = "4- Go outside";
            var option5 = document.createElement("div");
            option5.textContent = "5- Go into laundry ";
            var option6 = document.createElement("div");
            option6.textContent = "6- Go into kitchen";
            para2.appendChild(option1);
            para2.appendChild(option2);
            para2.appendChild(option3);
            para2.appendChild(option4);
            para2.appendChild(option5);
            para2.appendChild(option6);
            output.appendChild(para0);
            output.appendChild(para1);
            output.appendChild(para2);
            break;
        case 14:
            img.src = "/detective/Capture.JPG";

            var para0 = document.createElement("P");
            para0.textContent = "Tommy's face is entirely purple.";
            var para1 = document.createElement("P");
            para1.textContent = "Tommy is choking behind the sofa. Rebecca has fainted onto the sofa. There is a glass of liquid on the coffee table. There is a door to the laundry and a door to outside.";
            var para2 = document.createElement("P");
            var option1 = document.createElement("div");
            option1.textContent = "1- Check on Tommy";
            var option2 = document.createElement("div");
            option2.textContent = "2- Check on Rebecca";
            var option3 = document.createElement("div");
            option3.textContent = "3- Inspect liquid";
            var option4 = document.createElement("div");
            option4.textContent = "4- Go outside";
            var option5 = document.createElement("div");
            option5.textContent = "5- Go into laundry ";
            var option6 = document.createElement("div");
            option6.textContent = "6- Go into kitchen";
            para2.appendChild(option1);
            para2.appendChild(option2);
            para2.appendChild(option3);
            para2.appendChild(option4);
            para2.appendChild(option5);
            para2.appendChild(option6);
            output.appendChild(para0);
            output.appendChild(para1);
            output.appendChild(para2);
            break;
        case 15:
            img.src = "/detective/Capture.JPG";

            var para0 = document.createElement("P");
            para0.textContent = "Tommy's motions are beginning to grow feeble. He doesn't have much time left.";
            var para1 = document.createElement("P");
            para1.textContent = "Tommy is choking behind the sofa. Rebecca has fainted onto the sofa. There is a glass of liquid on the coffee table. There is a door to the laundry and a door to outside.";
            var para2 = document.createElement("P");
            var option1 = document.createElement("div");
            option1.textContent = "1- Check on Tommy";
            var option2 = document.createElement("div");
            option2.textContent = "2- Check on Rebecca";
            var option3 = document.createElement("div");
            option3.textContent = "3- Inspect liquid";
            var option4 = document.createElement("div");
            option4.textContent = "4- Go outside";
            var option5 = document.createElement("div");
            option5.textContent = "5- Go into laundry ";
            var option6 = document.createElement("div");
            option6.textContent = "6- Go into kitchen";
            para2.appendChild(option1);
            para2.appendChild(option2);
            para2.appendChild(option3);
            para2.appendChild(option4);
            para2.appendChild(option5);
            para2.appendChild(option6);
            output.appendChild(para0);
            output.appendChild(para1);
            output.appendChild(para2);
            break;
        case 16:
            img.src = "/detective/Capture.JPG";

            var para1 = document.createElement("P");
            para1.textContent = "Rebecca is unconscious. Or she might be faking it, so that she doesn't betray herself by looking guilty. She looks kind of guilty anyway. Oh god, she poisoned him, didn't she? She killed your son, and she's going to kill you. She has that smug little face, knowing that Tommy is dying and you can do nothing to save him. Your daughter is a murderer, you know she is.";
            var para2 = document.createElement("P");
            var option1 = document.createElement("div");
            option1.textContent = "1- Kill her before she kills you.";
            var option2 = document.createElement("div");
            option2.textContent = "2- Stop freaking out";
            para2.appendChild(option1);
            para2.appendChild(option2);
            output.appendChild(para1);
            output.appendChild(para2);
            break;
        case 17:
            var para1 = document.createElement("P");
            para1.textContent = "You grab a knife from the kitchen and stab your daughter. She dies, and you are arrested for murder.";
            var para2 = document.createElement("P");
            para2.textContent = "END 2 - YOU WENT TO JAIL";
            var para3 = document.createElement("P");
            para3.textContent = "Before you act on a hypothesis (such as your daughter being a murderer) you should test it first, by gathering evidence. Also, even if you do prove your theory, react accordingly rather than by killing your daughter.";
            output.appendChild(para1);
            output.appendChild(para2);
            output.appendChild(para3);
            document.getElementById("console").style.display = "none";
            break;
        case 18:
            img.src = "/detective/Capture.JPG";

            var para1 = document.createElement("P");
            para1.textContent = "Tommy is choking behind the sofa. Rebecca has fainted onto the sofa. There is a glass of liquid on the coffee table. There is a door to the laundry and a door to outside.";
            var para2 = document.createElement("P");
            var option1 = document.createElement("div");
            option1.textContent = "1- Check on Tommy";
            var option2 = document.createElement("div");
            option2.textContent = "2- Check on Rebecca";
            var option3 = document.createElement("div");
            option3.textContent = "3- Inspect liquid";
            var option4 = document.createElement("div");
            option4.textContent = "4- Go outside";
            var option5 = document.createElement("div");
            option5.textContent = "5- Go into laundry ";
            var option6 = document.createElement("div");
            option6.textContent = "6- Go into kitchen";
            para2.appendChild(option1);
            para2.appendChild(option2);
            para2.appendChild(option3);
            para2.appendChild(option4);
            para2.appendChild(option5);
            para2.appendChild(option6);
            output.appendChild(para1);
            output.appendChild(para2);
            break;
        case 19:
            img.src = "/detective/Capture2.JPG";
            var para0 = document.createElement("P");
            para0.textContent = "You walk outside. The swimming pool is in front of you. Your daughter Rebecca loves swimming, but your daughter Sarah hates it. Rebecca is always the one who uses the pool, so she always cleans it too.";
            var para01 = document.createElement("P");
            para01.textContent = "There isn't much to do here, so you walk back into the living room.";
            var para1 = document.createElement("P");
            para1.textContent = "Tommy is choking behind the sofa. Rebecca has fainted onto the sofa. There is a glass of liquid on the coffee table. There is a door to the laundry and a door to outside.";
            var para2 = document.createElement("P");
            var option1 = document.createElement("div");
            option1.textContent = "1- Check on Tommy";
            var option2 = document.createElement("div");
            option2.textContent = "2- Check on Rebecca";
            var option3 = document.createElement("div");
            option3.textContent = "3- Inspect liquid";
            var option4 = document.createElement("div");
            option4.textContent = "4- Go outside";
            var option5 = document.createElement("div");
            option5.textContent = "5- Go into laundry ";
            var option6 = document.createElement("div");
            option6.textContent = "6- Go into kitchen";
            para2.appendChild(option1);
            para2.appendChild(option2);
            para2.appendChild(option3);
            para2.appendChild(option4);
            para2.appendChild(option5);
            para2.appendChild(option6);
            output.appendChild(para0);
            output.appendChild(para01);
            output.appendChild(para1);
            output.appendChild(para2);
            break;
        case 20:
            img.src = "/detective/final2.JPG";
            var para1 = document.createElement("P");
            para1.textContent = "You walk into the kitchen. There are a lot of cupboards, which have food and various other things in them. On the bench is a finger-painting your son made last night, and a pile of paper. There is a door into the living room.";
            var para2 = document.createElement("P");
            var option1 = document.createElement("div");
            option1.textContent = "1- Inspect cupboards ";
            var option2 = document.createElement("div");
            option2.textContent = "2- Inspect finger-painting";
            var option3 = document.createElement("div");
            option3.textContent = "3- Go into living room";
            var option4 = document.createElement("div");
            option4.textContent = "4- Inspect paper";
            para2.appendChild(option1);
            para2.appendChild(option2);
            para2.appendChild(option3);
            para2.appendChild(option4);
            output.appendChild(para1);
            output.appendChild(para2);
            break;
        case 21:
            var para0 = document.createElement("P");
            para0.textContent = "You want to test the liquid, but have nothing to test it with.";
            var para1 = document.createElement("P");
            para1.textContent = "You pick up the glass of the strong-smelling liquid. It looks like water, but you aren't sure if it really is. The liquid has a sharp, choking smell that reminds you of bleach, but you know that you should always test a hypothesis rather than making assumptions.";
            var para2 = document.createElement("P");
            var option1 = document.createElement("div");
            option1.textContent = "1- Drink the liquid";
            var option2 = document.createElement("div");
            option2.textContent = "2- Put it down";
            var option3 = document.createElement("div");
            option3.textContent = "3- Test the liquid";
            para2.appendChild(option1);
            para2.appendChild(option2);
            para2.appendChild(option3);
            output.appendChild(para0);
            output.appendChild(para1);
            output.appendChild(para2);
            break;
        case 22:
            var para0 = document.createElement("P");
            para0.textContent = "You remember that you have a piece of orange paper. If the liquid is bleach, it will turn the paper white.";
            var para01 = document.createElement("P");
            para01.textContent = "You put the piece of paper in the glass and it slowly becomes paler, until it has gone white.The liquid is probably bleach.";
            var para1 = document.createElement("P");
            para1.textContent = "You pick up the glass of the strong-smelling liquid. It looks like water, but you aren't sure if it really is. The liquid has a sharp, choking smell that reminds you of bleach, but you know that you should always test a hypothesis rather than making assumptions.";
            var para2 = document.createElement("P");
            var option1 = document.createElement("div");
            option1.textContent = "1- Drink the liquid";
            var option2 = document.createElement("div");
            option2.textContent = "2- Put it down";
            var option3 = document.createElement("div");
            option3.textContent = "3- Test the liquid";
            para2.appendChild(option1);
            para2.appendChild(option2);
            para2.appendChild(option3);
            output.appendChild(para0);
            output.appendChild(para01);
            output.appendChild(para1);
            output.appendChild(para2);
            break;
        case 23:
            var para1 = document.createElement("P");
            para1.textContent = "The paper is a bright orange colour.";
            var para2 = document.createElement("P");
            var option1 = document.createElement("div");
            option1.textContent = "1- Take the paper";
            var option2 = document.createElement("div");
            option2.textContent = "2- Go back";
            para2.appendChild(option1);
            para2.appendChild(option2);
            output.appendChild(para1);
            output.appendChild(para2);
            break;
        case 24:
            var para0 = document.createElement("P");
            para0.textContent = "You pick up a piece of the orange paper. Maybe you can find a use for it?";
            var para1 = document.createElement("P");
            para1.textContent = "You walk into the kitchen. There are a lot of cupboards, which have food and various other things in them. On the bench is a finger-painting your son made last night, and a pile of paper. There is a door into the living room.";
            var para2 = document.createElement("P");
            var option1 = document.createElement("div");
            option1.textContent = "1- Inspect cupboards ";
            var option2 = document.createElement("div");
            option2.textContent = "2- Inspect finger-painting";
            var option3 = document.createElement("div");
            option3.textContent = "3- Go into living room";
            var option4 = document.createElement("div");
            option4.textContent = "4- Inspect paper";
            para2.appendChild(option1);
            para2.appendChild(option2);
            para2.appendChild(option3);
            para2.appendChild(option4);
            output.appendChild(para0);
            output.appendChild(para1);
            output.appendChild(para2);
            break;


    }
}

text.addEventListener("keydown", function () {
    switch (scene) {
        case 0:
        case 3:
        case 4:
            if (event.keyCode == 13) {
                if (text.value == "1") {
                    scene = 1;
                }
                else if (text.value == "2") {
                    scene = 4;
                }
                else if (text.value == "3") {
                    scene = 5;
                }
                populate();
                break;
            }
        case 1:
        case 21:
        case 22:
            if (event.keyCode == 13) {
                if (text.value == "1") {
                    scene = 2;
                }
                else if (text.value == "2") {
                    scene = 3;
                }
                else if (text.value == "3") {
                    if (paper == false) {
                        scene = 21;
                    }
                    else {
                        scene = 22;
                    }
                }
                populate();
                break;
            }
        case 2:
            if (event.keyCode == 13) {
                if (text.value == "1") {
                    scene = 2;
                }
                else if (text.value == "2") {
                    scene = 3;
                }
                populate();
                break;
            }
        case 5:
        case 6:
        case 8:
            if (event.keyCode == 13) {
                if (rebecca > 2) {
                    scene = 9;
                }
                else if (text.value == "1") {
                    scene = 6;
                    rebecca++;
                }
                else if (text.value == "2") {
                    scene = 7;
                    rebecca++;
                }
                else if (text.value == "3") {
                    rebecca++;
                    scene = 5;
                }
                populate();
                break;
            }
        case 7:
            if (event.keyCode == 13) {
                scene = 8;
                populate();
                break;
            }
        case 9:
            if (event.keyCode == 13) {
                if (text.value == "1") {
                    scene = 10;
                }
                else if (text.value == "2") {
                    scene = 11;
                }
                else if (text.value == "3") {
                    scene = 12;
                }
                populate();
                break;
            }
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 18:
        case 19:
            if (event.keyCode == 13) {
                if (text.value == "1") {
                    if (tommy == 0) {
                        scene = 13;
                        tommy++;
                    }
                    else if (tommy == 1) {
                        scene = 14;
                        tommy++;
                    }
                    else {
                        scene = 15;
                    }
                }
                else if (text.value == "2") {
                    scene = 16;
                }
                else if (text.value == "3") {
                    scene = 1;
                }
                else if (text.value == "4") {
                    scene = 19;
                }
                else if (text.value == "5") {
                    scene = 18;
                }
                else if (text.value == "6") {
                    scene = 20;
                }
                populate();
                break;
            }
        case 16:
            if (event.keyCode == 13) {
                if (text.value == "1") {
                    scene = 17;
                }
                else if (text.value == "2") {
                    scene = 18;
                }
                populate();
                break;
            }
        case 20:
        case 24:
            if (event.keyCode == 13) {
                if (text.value == "3") {
                    scene = 18;
                }
                if (text.value == "4") {
                    scene = 23;
                }
                populate();
                break;
            }
        case 23:
            if (event.keyCode == 13) {
                if (text.value == "1") {
                    paper = true;
                    scene = 24;
                }
                if (text.value == "2") {
                    scene = 20;
                }
                populate();
                break;
            }

    }
});

populate();
