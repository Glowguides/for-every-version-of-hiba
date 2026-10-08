const chapters = [
{title:'receive this', subtitle:'so I guess that means… now.', note:'happy birthday, Hiba ♡\nI know I’m a little late.', body:[], poem:''},
{title:'you’re sad',subtitle:'you can put the brave face down.',note:'no fixing required. just a little company.',body:[
'Hiba,',
'Come here. Even if “here” is only a page for now.',
'You don’t have to turn this feeling into a neat explanation before you deserve comfort. You don’t need a good enough reason, either. If today feels heavy, then today feels heavy. I believe you.',
'I wish I could sit beside you without making you talk. Let you lean into me. Ask whether you want company, a distraction, or someone to listen—and actually wait for your answer.',
'Until I can, unclench your jaw a little. Let your shoulders come down. Take a sip of water if there’s some nearby. Nothing enormous. Just one small kindness for the girl I love.',
'You’re allowed to have a sad day without becoming a sad story. There is still so much of you beyond this moment: your warmth, your ridiculous laugh, the way you make ordinary things matter.',
'I’m not asking you to feel better by the end of this page. I’m just asking you to let yourself be loved while you don’t.',
'I’m here, habibti. Tell me what kind of here you need.'
],poem:'let the day be grey\nyou don’t have to be the sun\nrest your heart a little\nyou are loved before you’ve done a thing'},
{title:'you feel like giving up',subtitle:'rest is still part of the story.',note:'one tiny next step counts. I promise.',body:[
'My love,',
'Before you decide anything enormous, let’s make the moment smaller.',
'You don’t have to solve your whole life tonight. You don’t even have to solve tomorrow. Maybe the next thing is eating something. Maybe it’s asking for help. Maybe it’s closing the laptop and admitting you’ve reached your limit for today.',
'I know how easy it is to look at everything unfinished and forget everything you’ve already carried. But I see someone who keeps trying, even when trying looks quieter than people expect.',
'And if the thing you’re chasing no longer fits you, you’re allowed to change direction. I love you more than I love any plan you’ve made. You don’t owe an old dream your entire happiness.',
'Please tell someone you trust when it feels too much to hold alone. Tell me, too. You don’t have to make the message beautiful. “I’m struggling” is enough.',
'For now, put down the idea that you have to earn a gentler day. Let yourself pause. We can look for the next step when you’ve caught your breath.',
'You haven’t disappointed me by being tired. You’re a person I love, not a performance I’m grading.'
],poem:'a pause is not an ending\na breath is not defeat\nsometimes the way forward\nbegins with somewhere soft to sit'},
{title:'you miss me',subtitle:'consider this a very inconvenient hug.',note:'side effects may include missing me more. sorry 😭',body:[
'Hiba,',
'First of all, excellent taste. Missing me? Understandable. Very reasonable decision.',
'Okay, jokes aside. I miss you too. I miss the little things most: having something pointless to tell you and knowing you’re exactly the person I want to tell. Being near you without needing the moment to be special. The kind of closeness that makes even doing nothing feel like a plan.',
'If I were there, I’d probably pull you closer and ruin the romantic silence with something stupid. You’d give me that look. I’d pretend I was innocent. We both know I wouldn’t be.',
'But right now, imagine my hand finding yours. No dramatic speech. Just that small squeeze that says, “yes, you. still you.”',
'Send me the thing you almost didn’t send. The thought, the voice note, the completely unnecessary update. I like being included in your ordinary life.',
'Until we’re together again, keep this page as a small piece of company. There’s someone on the other side of the distance who would very much prefer to be beside you.'
],poem:'between wherever you are\nand wherever I am\nthere is a little thread\nand I keep holding my end'},
{title:'you’re overthinking',subtitle:'not every thought deserves the microphone.',note:'2 AM thoughts are terrible life coaches.',body:[
'My love,',
'I know your brain can turn one tiny “what if” into a full documentary with twelve seasons and absolutely no evidence.',
'Let’s stop the screening for a second. What do you actually know? What are you afraid might be true? Those are different things, even when fear makes them sound exactly alike.',
'You don’t need to argue with every thought until it gives up. Sometimes you can say, “I hear you. I’m not deciding this tonight.” Write the worry down if it helps. Let paper hold it for a while.',
'And if the question is about me, please ask me. You deserve an answer from the person you’re wondering about. You shouldn’t have to become a detective to feel secure with me.',
'I want us to make room for honest questions, even the awkward ones. Especially the awkward ones.',
'Tonight, let one thing be uncomplicated: I care about you. You matter to me. You can have a noisy mind and still be someone worth loving gently.',
'Now breathe. Your brain has done enough unpaid overtime.'
],poem:'a thought can knock\nwithout moving in\nlet the night be a night\nlet tomorrow answer tomorrow'},
{title:'you feel alone',subtitle:'there is room for you here.',note:'you don’t need an excuse to reach out.',body:[
'Hiba,',
'Feeling alone can happen even in a room full of people. Sometimes what you’re missing isn’t a crowd. It’s the feeling of being understood without having to translate every part of yourself.',
'I can’t claim I’ll always understand immediately. But I want to listen long enough to learn. I want to ask better questions. I want you to have somewhere you can arrive as you are.',
'You don’t have to be interesting, cheerful, or easy to be around to reach for me. You can send “can you talk?” You can send nothing clever at all.',
'And I hope you reach for the other people who care about you, too. You deserve a whole circle of warmth: friends, family, whoever makes you feel a little more yourself.',
'For this moment, picture a seat kept beside me. No test at the door. No version of you required. Just your name, and the quiet happiness of you arriving.',
'If I’m slow to answer, it doesn’t make you less important. Tell me you need company when you can. I want to know.',
'You belong in the lives of people who love you. Including mine.'
],poem:'there is a chair beside me\nthat the world cannot fill\nit is yours when you are laughing\nit is yours when you are still'},
{title:'you can’t sleep',subtitle:'let’s make the world a little quieter.',note:'no need to finish this page tonight.',body:[
'Hey, sleepy girl who is apparently not sleepy enough,',
'You don’t have to win an argument with the night. Let’s just make it gentler.',
'Get comfortable. Let your forehead soften. Let your hands stop holding whatever they’ve been holding all day. If reading is keeping you awake, put the phone down after this paragraph. These words will still be here in the morning.',
'Imagine we’re somewhere quiet. Nothing scheduled. Nothing urgent. I’m beside you, and we don’t need to say anything impressive. Maybe you steal most of the blanket. I notice. I let you. Very heroic of me, honestly.',
'There’s no need to sort through every memory or solve every problem before you rest. You’re allowed to leave things unfinished for a few hours. The world can wait while you become a person under a blanket.',
'If sleep takes its time, you haven’t failed. Just be gentle with yourself while you wait.',
'I wish I could kiss your forehead and lower the volume of everything for you. For now, this page will have to whisper.',
'Goodnight, Hiba. You don’t have to reply to a goodnight to deserve it.'
],poem:'leave the questions by the door\nleave the day where it has been\nthere is nothing you must prove\nto let a little quiet in'},
{title:'you’re angry with me',subtitle:'I’m listening. really.',note:'you’re allowed to tell me the uncomfortable part.',body:[
'Hiba,',
'If I’ve upset you, you don’t have to make your feelings smaller to protect mine.',
'I want to understand what happened from your side. Not just what I meant. What you heard. What hurt. What you needed and didn’t get.',
'Good intentions don’t automatically make an impact disappear. If I owe you an apology, I want to give you one that names the thing—not a vague “sorry” that asks you to do the rest of the work.',
'And if you need space before talking, tell me. We can agree on a time to come back to it, so space feels like breathing room instead of a question mark.',
'I’m still allowed to have feelings, too. We can make room for both of us without turning the conversation into a competition.',
'This letter isn’t a shortcut around the real conversation. Please don’t feel you have to smile because I wrote something sweet. I’d rather hear the truth from you than receive a peace that cost you your voice.',
'I love you. That means I want to get better at hearing you, including when what you’re saying is difficult for me to hear.'
],poem:'tell me where it hurts\nI will try to stay and hear\nlove should make room for truth\nnot make the truth disappear'},
{title:'we had an argument',subtitle:'same team. difficult moment.',note:'we can begin with “help me understand.”',body:[
'My love,',
'We had a bad chapter. I don’t want to confuse it with the whole story.',
'But I don’t want to skip the chapter without understanding it, either. We’ve learned what happens when words stay in our heads and silence starts speaking for us. I want us to choose something clearer.',
'Maybe we begin with one question each: “What did you need me to understand?” Then actually let the other person finish. No preparing a comeback halfway through. No keeping score from three conversations ago.',
'If things get too heated, we can pause and choose when to return. A pause should have a way back. Neither of us should be left wondering whether the conversation—or the care—has disappeared.',
'We don’t need identical feelings to take each other seriously. We can disagree about a moment and still be careful with the person standing inside it.',
'When I’m wrong, I want to say it. When something needs to change, I want the change to show up outside this book.',
'I’m not hoping we never disagree again. I’m hoping we learn how to disagree without making each other feel alone.',
'When you’re ready, let’s talk. Gently. Honestly. Us against the problem.'
],poem:'we can turn the page\nwithout tearing out the truth\nand learn a kinder language\nfor the words between us two'},
{title:'you don’t feel beautiful',subtitle:'borrow my eyes for a minute.',note:'yes, even on the “don’t look at me” days.',body:[
'Hiba,',
'I know telling you “you’re beautiful” doesn’t magically switch off every unkind thought. But I’m telling you anyway, because I mean it.',
'You’re beautiful when you’re dressed up and aware of it. You’re beautiful when you’re distracted, halfway through a sentence, forgetting to perform for anybody. I like the realness of you. The expressions you don’t rehearse. The face that is yours.',
'You don’t have to agree with me this second. Just leave a little room for the possibility that the harshest voice in your head is not the most accurate one.',
'And your body doesn’t owe anyone a certain mood, shape, or photograph to deserve care. Especially you. You deserve to feel at home in yourself, not permanently under inspection.',
'Also, respectfully: you are very distracting. I had other thoughts before you walked into them. A whole functioning brain, allegedly.',
'So if today you can’t look at yourself with affection, let me lend you some. You are more than a mirror’s worst moment. You are a whole person I am very, very glad to look at.'
],poem:'the mirror knows a surface\nI know a little more\nthe light that moves when you laugh\nthe girl I keep looking for'},
{title:'you doubt yourself',subtitle:'you don’t need certainty to begin.',note:'I believe in you. on the wobbly days too.',body:[
'My love,',
'Confidence is not a ticket you have to show before you’re allowed to try.',
'You can do something with a shaking voice. You can learn it slowly. You can ask the question everyone else seems to know the answer to. You can be new at something without being bad at being you.',
'Sometimes doubt sounds convincing because it knows your weak spots. It remembers one awkward moment and conveniently forgets all the times you figured something out.',
'Try giving yourself a fairer account. What have you learned? What have you survived? What would you say to a friend standing exactly where you are? I suspect you’d be kinder than the voice you’ve been using on yourself.',
'I’m proud of your effort, not just the parts that become results. The attempt nobody claps for still counts.',
'And if this doesn’t work out, we can be disappointed without declaring you a disappointment. Those are different things.',
'Take the small step. Ask for what you need. Let yourself be a beginner. I’m cheering for the girl, not demanding a perfect score.'
],poem:'you can be unsure\nand still open the door\ncourage sometimes whispers\nlet’s try a little more'},
{title:'you feel like you’re not enough',subtitle:'there is no audition for being loved.',note:'you don’t have to become easier to deserve tenderness.',body:[
'Hiba,',
'Enough for whom? For a moving target that changes every time you get close? For the version of yourself who never gets tired, never gets emotional, never needs anything?',
'That girl doesn’t exist. And I’m not waiting for her.',
'I love a person. A person with limits and moods and a life that can’t be perfectly managed every day. Your needs aren’t defects. Having a difficult moment doesn’t cancel out everything good in you.',
'There are things we can both learn. Growing matters. But growth doesn’t have to begin with hating who you are right now.',
'You are allowed to be loved while you’re figuring it out. You’re allowed to receive affection without immediately asking how to repay it. You can be cared for on a day when all you managed was getting through.',
'Please don’t make yourself smaller just so nobody has to make room. I want to know what room looks like for you.',
'There isn’t a more convenient Hiba I secretly wish you would become. There’s you. And I’m glad there’s you.'
],poem:'come with your unfinished edges\ncome without a perfect line\nthere is room for all your becoming\nin this little heart of mine'},
{title:'you had a terrible day',subtitle:'officially: today was rude.',note:'I would like to file a complaint on your behalf.',body:[
'Hiba,',
'I have reviewed the situation, and my professional opinion is that today needs to apologise.',
'Some days don’t teach you a beautiful lesson. They just take your patience, make everything harder than necessary, and then have the audacity to last twenty-four hours.',
'You don’t have to turn this one into something inspiring. Tell me the annoying parts. The tiny thing that tipped you over. The thing you handled well and nobody noticed. I’d like to notice.',
'Then, if you can, do one thing that marks the day as over. Wash your face. Change into something comfortable. Eat something you actually like. Let the evening have a different texture from the afternoon.',
'I wish I could bring you your favourite comfort and sit there while you explain, in great detail, why everyone was being ridiculous. I would be an excellent audience. Occasional dramatic gasps included.',
'Today getting the better of you doesn’t mean it gets to define you.',
'You made it here. You can stop carrying the entire day around now. Put a little of it on this page. I don’t mind.'
],poem:'let this day end at the doorstep\nlet the evening hold you light\none terrible little Tuesday\ndoesn’t get your whole life'},
{title:'you’re stressed',subtitle:'one thing at a time, habibti.',note:'your shoulders called. they’d like a break.',body:[
'My love,',
'If everything is urgent, your mind can start treating everything as equally enormous. Let’s untangle just a little of it.',
'Name the thing that actually needs your attention next. Not all the things. One. If it’s too big, make the first step smaller until it’s something you can see yourself doing.',
'And what can wait? What can somebody else help with? What are you carrying only because you’re afraid of letting anyone down?',
'You don’t have to answer me. Just remember that being capable doesn’t mean being available for every demand at once.',
'Take a proper breath. Drink some water. Give your body a moment to catch up with the pace you’ve been asking it to keep. You deserve breaks before you’re completely empty.',
'If you want, tell me what would help: listening, thinking something through, or a few minutes talking about absolutely nothing. I can ask instead of assuming.',
'I’m proud of you. But I would also be proud of you for resting, asking for help, and deciding that one thing can wait until tomorrow.'
],poem:'you don’t have to hold the sky\nto keep the stars in place\nset one little burden down\ngive yourself a little space'},
{title:'you’re scared about the future',subtitle:'we only need the next page.',note:'unknown doesn’t automatically mean unkind.',body:[
'Hiba,',
'I wish I could hand you a map with all the frightening corners already explained. I can’t. But I can remind you that you don’t have to arrive in the future all at once.',
'You’ll get there a day at a time, with chances to learn things you don’t know yet. You don’t need today’s version of you to have every answer tomorrow’s version might need.',
'Plans can change without your life being ruined. You can choose again. Ask for advice. Start differently. A life is allowed to look different from the picture you first made of it.',
'When I imagine us, I don’t only picture big milestones. I picture ordinary evenings. Checking in. Laughing at something stupid. Learning how the other person likes to be loved. Choosing care in ways small enough to repeat.',
'I can’t promise a future without hard days. I want to help build one with honesty in it, and room for both of us to grow.',
'For tonight, let the future be unopened. You’re here. I’m grateful for that. The next page can come when it comes.'
],poem:'we don’t know every chapter\nor where each road will bend\nbut I like the thought of learning\nwith your hand inside my hand'},
{title:'you need motivation',subtitle:'okay, future world-conqueror.',note:'a small start is still a start. go on ♡',body:[
'Hiba,',
'This is your lovingly issued reminder that the thing probably won’t get easier while you stare at it and negotiate with your ceiling.',
'I say that with affection. And with full awareness that I am also capable of highly advanced procrastination.',
'Pick a starting point so small it feels almost silly. Open the document. Read the first paragraph. Put your shoes on. Give it ten minutes, then decide what comes next.',
'You don’t need a cinematic burst of inspiration. You need a beginning. You’re allowed to make a messy first attempt and improve it after it exists.',
'Remember why it matters to you—not why somebody else thinks it should. Your reasons are allowed to be quiet and personal. A little more freedom. A skill you want. A future that feels more like yours.',
'And when you do start, let that count. Don’t move the finish line before you’ve even let yourself enjoy the step.',
'Now go do your little thing. I’ll be here being embarrassingly proud of you. Try to act surprised when I make a big deal out of it.'
],poem:'begin before the feeling\narrives to say you can\na little brave beginning\nis how the bigger things began'},
{title:'you’re crying',subtitle:'you can stay here a little.',note:'no rush. no “stop crying.” just me.',body:[
'Oh, my love.',
'You don’t have to explain the tears before you wipe them away. You don’t have to wipe them away for me at all.',
'I wish I could be beside you with a tissue, a glass of water, and the common sense to know this might be a listening moment instead of a speech moment.',
'So I’ll keep this simple. You’re allowed to feel what you feel. You’re allowed to be overwhelmed. You don’t owe anyone a graceful version of hurting.',
'Let your breathing find its own pace. If you can, rest somewhere comfortable. When you’re ready, tell someone you trust what’s happening. Tell me if you want to. We can start with one sentence, even one word.',
'And if you don’t want to talk yet, that’s okay. Company can be quiet.',
'I love your laugh. But I don’t only love you when you’re laughing. You don’t lose your place in my heart because your eyes are wet.',
'Stay with this page as long as you need. Then do one small thing that takes care of you. You are worth the gentleness, even now. Especially now.'
],poem:'if the words won’t come\nlet the tears say what they will\nyou don’t have to hold it neatly\nto be someone I love still'},
{title:'you need to smile',subtitle:'my dignity died for this chapter.',note:'if you roll your eyes, that counts. I checked.',body:[
'Dear Hiba,',
'Following a very serious investigation, I have found that you are guilty of being my favourite person. Evidence includes: me wanting to tell you everything, me smiling at my phone, and me trying to write a normal love letter before somehow turning into this.',
'Your sentence is one imaginary forehead kiss. Appeals will be considered, but honestly the judge is biased.',
'Also, I have prepared an extremely accurate description of our relationship: you being adorable, me being annoying, you saying I’m annoying, me taking that as encouragement. A beautiful system. Needs occasional maintenance.',
'If I were with you right now, I would absolutely say something so stupid that you’d look at me like you were reconsidering several life choices. Then I’d wait for the tiny smile you tried to hide.',
'There it is. Or maybe not yet. I’m willing to embarrass myself for another paragraph if necessary.',
'Here’s the actual point: I love making you laugh. The small laugh counts, too. Even the “this mf 😭” counts.',
'Please collect your imaginary kiss at the end of this sentence. ♡'
],poem:'I tried to be mysterious\nbut look what I became\na man writing tiny poems\nand grinning at your name'},
{title:'something amazing happened',subtitle:'wait. tell me EVERYTHING.',note:'yes, we’re celebrating the little wins too.',body:[
'Hiba!!',
'I need the full version. The beginning. The moment you realised. The detail you think isn’t important but absolutely is. I want to hear how it felt from inside your happiness.',
'If you worked for this, I’m proud of the parts nobody saw. The patience. The trying again. The moments you nearly talked yourself out of it and continued anyway.',
'And if it’s just something lovely that happened unexpectedly, you don’t have to justify enjoying it. Good things are allowed to find you without an invoice.',
'Please don’t make the moment smaller before you’ve had a chance to live in it. Say you’re excited. Be a little dramatic. You have my enthusiastic support and, potentially, some extremely excessive cheering.',
'I want to be somebody you think of when there’s good news—not because I own a part of it, but because I’ll be happy that you’re happy.',
'Take a little mental picture of today. You deserve to remember yourself like this, too.',
'Now go enjoy it, my love. And if we’re together, I’m probably already looking at you with that ridiculous proud face. Sorry. It’s permanent.'
],poem:'keep this little golden moment\nlet it shine without a reason\nyour joy belongs beside you\nin every changing season'},
{title:'you wonder how much I love you',subtitle:'this page is terrible at containing it.',note:'I was trying to be normal about you. clearly failed.',body:[
'Hiba,',
'A lot. But that answer feels too small, doesn’t it?',
'I love you in the impulse to share a thought before it’s finished. In seeing something beautiful and wishing you could see it too. In the way your name changes the feeling of an ordinary notification.',
'I love the cheerful you, obviously. But also the thoughtful you. The stubborn you. The tired you who hasn’t got a charming sentence left. I don’t need every day to be easy for the person in it to matter.',
'I want my love to be something you can recognise in how I treat you: asking instead of guessing, listening instead of waiting for my turn, saying the important thing while there’s still time to say it.',
'A book can say beautiful things. I know the days outside the book have to give those things somewhere real to live.',
'So how much do I love you? Enough to want to keep learning you, rather than decide I already know everything. Enough to feel lucky about the ordinary privilege of being included in your day.',
'And enough to write twenty-something letters when one perfectly reasonable birthday message was available. You did this to me. ♡'
],poem:'not only in the grand things\nnot only when skies are blue\nin the small returning choices\nI want to keep choosing you'},
{title:'you just need me',subtitle:'you don’t need a reason.',note:'send “I need you.” we can start there.',body:[
'My Hiba,',
'Maybe nothing happened. Maybe too many things did. Maybe you don’t know which chapter fits because what you need isn’t advice or motivation or a clever little poem.',
'Maybe you just need me.',
'Then let this be the page without a task attached. You don’t have to take a lesson from it. You don’t have to become calmer or brighter or stronger by the last sentence.',
'You can reach for me. Tell me whether you need a call, some quiet company, or a moment to talk. If I can’t answer immediately, we can find a time—and you can lean on someone else you trust while you wait.',
'I wish I could step out of the words for a second. Sit close. Let the space between us become small enough that you don’t have to explain anything.',
'Until then, here’s what I want you to hear: I’m glad you’re in my life. Your presence is not something I take lightly. You don’t have to make needing affection sound more respectable.',
'Come as you are, my love. We can figure out the words after.',
'And when you’re ready to turn the page, there’s still a little something waiting.'
],poem:'no perfect words\nno reason to prepare\njust your hand reaching\nand my wish to be there'},
{title:'you’ve read everything else.',subtitle:'of course I left you one more.',note:'a last page. not a last letter.',body:[
'Hiba,',
'You found it. I knew you would.',
'By now you’ve met a lot of versions of me: the serious one, the soft one, the one who cannot get through a love letter without making a joke. All of them had the same girl in mind.',
'I hope somewhere in these pages you felt seen. Not just admired from a distance, but welcomed. With your changing moods, your questions, your good news, your quiet days. All the parts that make a person a person.',
'There are versions of you I haven’t met yet. The you who discovers something she loves. The you who changes her mind. The you who looks back on a difficult year and realises how much she’s grown. I’m excited about her. I’m grateful for the girl reading this, too.',
'I can’t undo those days. But I can choose what I give you now—something that stays with you for all the days that come after them.',
'And beyond the words, I want to give you care you can feel. Clearer conversations. Attention. Ordinary affection. Space for your truth and mine. A future we build with actions, not only wishes.',
'This book ends here. What I hope for us doesn’t.',
'Happy birthday, Hiba. Here’s to more laughing. More learning each other. More small moments that turn out to be the important ones.',
'And to still getting to write “us.” ♡'
],poem:'the last page is only paper\nthere are days still coming through\nand if we keep writing our story\nI hope they’re full of me and you'}
];

chapters[0].body=["Hiba,","If you're reading this, then somehow I managed to keep my mouth shut long enough for this to actually reach you.","Which is already impressive.","I thought a lot about what I could give you for your birthday.","And yeah… I know.","The irony isn't lost on me.","Out of all the times life could've gotten complicated between us, somehow we managed to choose the days right before your birthday.","And I know that I played my part in that.","There are things I wish I handled differently. Words I wish I had said instead of keeping them in my head. Moments where I should've communicated instead of disappearing into whatever was going on inside me.","I can't go backwards and give you a perfect birthday.","I can't erase the part where someone who was supposed to make that week happier ended up making it heavier.","But I can give you this.","Not as some giant apology disguised as a present.","Not as a way of pretending nothing happened.","But because while I was thinking about you, I realized I didn't want to write you only one birthday message.","One message didn't feel like enough.","Because there isn't only one version of you that I love.","There's the Hiba who's happy and laughing at absolutely nothing.","The Hiba who's annoyed with me.","The Hiba who's tired.","The Hiba who overthinks at 2 AM.","The Hiba who feels beautiful.","The Hiba who doesn't.","The Hiba who's motivated and ready to take over the world.","And the Hiba who sometimes needs someone to remind her that she doesn't have to have everything figured out.","So I made something for all of them.","Twenty-something little pieces of me, hidden inside one book.","Some pages are serious.","Some are probably going to make you emotional.","Some might make you laugh.","Some will probably make you roll your eyes and say ‘this mf 😭.’","And somewhere in here I'm definitely going to flirt with you because let's be realistic, I can only behave for so many pages.","But every page has the same purpose.","If there's ever a moment when you need me and I'm not beside you…","open this.","Find whatever version of you showed up that day.","And hopefully somewhere between these pages, you'll find a version of me waiting for her.","I know this isn't the birthday gift I would've wanted our story to require.","But maybe that's okay.","Because perfect gifts get opened once.","I wanted to give you something you could keep opening.","Happy birthday, Hiba.","I'm sorry for the hurt that came before this.","And I'm grateful that somehow, after everything…","I still get to write ‘us.’","Now turn the page.","You've got a whole book waiting for you."];
chapters[0].poem="i couldn't rewrite the days that came before\r\nso I wrote you something worth opening once more\r\nfor every night your heart might need somewhere to go\r\nfor every version of you I haven't met yet or already know\r\nif my voice feels far and you don't know what to do\r\nturn another page\r\ni left pieces of me here for you";
