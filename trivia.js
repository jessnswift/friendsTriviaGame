var triviaQuestions = [
  { //1
    question: "What color is the couch in Central Perk?",
    possibleAnswers: ["Purple", "Orange", "Pink"],
    answer: "Orange"
  },
  { //2
    question: "What band sings the opening credits song?",
    possibleAnswers: ["The Rembrandts", "Soundgarden", "The Smashing Pumpkins"],
    answer: "The Rembrandts"
  },
  { //3
    question: "Who said, 'Oh I'm sorry, did my back hurt your knife?' ",
    possibleAnswers: ["Rachel", "Monica", "Phoebe"],
    answer: "Rachel"
  },
  { //4
    question:
      "Which Friends cast memeber has never hosted Saturday Night Live?",
    possibleAnswers: ["Jennifer Aniston", "David Schwimmer", "Matt LeBlanc"],
    answer: "Matt LeBlanc"
  },
  { //5
    question: "What is the 'Joey speical'?",
    possibleAnswers: ["Meat Lovers", "2 Pizzas", "2 Pepperoni Pizzas"],
    answer: "2 Pizzas"
  },
  { //6
    question: "Who does Phoebe think her grandfather is?",
    possibleAnswers: ["Albert Einstein", "Sigmund Freud", "Isaac Newton"],
    answer: "Albert Einstein"
  },
  { //7
    question: "What did Ross say that Rachel's 'traditional English trifle' taste like?",
    possibleAnswers: ["Feet", "Disgusting", "Sour"],
    answer: "Feet"
  },
  { //8
    question: "How many categories for towels does Monica have?",
    possibleAnswers: ["7", "3", "11"],
    answer: "11"
  },
  { //9
    question: "What is Chandler's dad's burlesque show called?",
    possibleAnswers: ["Viva Las Loveless", "Viva Las Gaygas", "Viva Las MenLess"],
    answer: "Viva Las Gaygas"
  },
  { //10
    question: "Which high school did Ross, Monica and Rachel attend?",
    possibleAnswers: ["Lincoln High School"],
    answer: "Lincoln High School"
  },
  { //11
    question: "What is Monica's biggest pet peeve?",
    possibleAnswers: ["Someone else cleaning her home", "Animals dressed as humans", "Glass rings on coffee tables"],
    answer: "Animals dressed as humans"
  },
  { //12
    question: "What is the name on Chandler and Joey's TV Guide?",
    possibleAnswers: ["Miss Chanandler Bong", "Mr Chandler Bing", "Mr. Chanandler Bong"],
    answer: "Miss Chanandler Bong"
  },
  { //13
    question: "What fruit is Ross allergic to?",
    possibleAnswers: ["apple", "banana", "kiwi"],
    answer: "kiwi"
  },
  { //14
    question: "What kind of animal is Huggsy?",
    possibleAnswers: ["Hippo", "Penguin", 'Bear'],
    answer: "Penguin"
  },
  { //15
    question: "Which guest star did not win an Emmy for their performances?",
    possibleAnswers: ["Christina Applegate", "Bruce Willis", "Brad Pitt"],
    answer: "Brad Pitt"
  },
  { //16
    question: "What sport and position did Monica play in high school?",
    possibleAnswers: ["Field hockey goalie", "Catcher", "Fullback"],
    answer: "Field hockey goalie"
  },
  { //17
    question: "What is Chandler's job?",
    possibleAnswers: ["Transpons Transponter", "Accountant", "IT Procurement Manager"],
    answer: "IT procurement manager"
  },
  { //18
    question: "What phonemenon scares the bejeezus out of Chandler?",
    possibleAnswers: ["His Mother", "", "Michael Flatley, Lord of the Dance"],
    answer: "Michael Flatley, Lord of the Dance"
  },
  { //19
    question: "Who pees on Monica after she is stung by a jelly fish?",
    possibleAnswers: ["Ross", "Joey", "Chandler"],
    answer: "Chandler"
  },
  { //20
    question: "Who got a pencil stuck in his/her ear?",
    possibleAnswers: ["Chandler", "Monica", "Rachel"],
    answer: "Monica"
  },
  { //21
    question: "What was the musical Joey starred in?",
    possibleAnswers: ["The Musical", "Freud", "Sigmund Freud"],
    answer: "Freud"
  },
  { //22
    question: "What movie did Ross claim to have come up with the idea for?",
    possibleAnswers: ["The land before time", "We're back", "Jurassic Park"],
    answer: "Jurassic Park"
  },
  { //23
    question: "What is Rachel's favorite movie?",
    possibleAnswers: ["When Harry Met Sally", "Weekend at Bernie's", "Sleepless in Seattle"],
    answer: "Weekend at Bernie's"
  },
  { //24
    question: "What is Joey's favorite food?",
    possibleAnswers: ["Pizza", "Pie", "Sandwiches"],
    answer: "Sandwiches"
  },
  { //25
    question: "What was Joey's imaginary childhood friends profession?",
    possibleAnswers: ["Cop", "Space-cowboy", "Bull Rider"],
    answer: "Space-cowboy"
  },
  { //26
    question: "How many babies were born on the show?",
    possibleAnswers: ["5", "6", "7"],
    answer: "7"
  },
  { //27
    question: "What are Ross and Monica's parents names?",
    possibleAnswers: ["Richard and Judy", "Jack and Carol", "Jack and Judy"],
    answer: "Jack and Judy"
  },
  { //28
    question: "Who was the superintendent at Monica, Rachel, Joey and Chandler's apartment building?",
    possibleAnswers: ["Mr. Heckles", "Mr. Wyle", "Mr. Treeger"],
    answer: "Mr. Treeger"
  },
  { //29
    question: "How many sisters does Joey have?",
    possibleAnswers: ["8", "7", "6"],
    answer: "7"
  },
  { //30
    question: "What is Chandler's middle name?",
    possibleAnswers: ["Marsha", "Muriel", "Marion"],
    answer: "Muriel"
  },
  { //31
    question: "What is the name of Monica's boyfriend that tried to become the Ultimate Fighting Champion?",
    possibleAnswers: ["Pete", "Richard", "Paul"],
    answer: "Pete"
  },
  { //32
    question: "What is Dr. Drake Ramoray's medical speciality?",
    possibleAnswers: ["Neurosurgeon", "Cardiologist", "Orthopaedic Surgeon"],
    answer: "Neurosurgeon"
  },
  { //33
    question: "Where is Chandler forced to move to after falling asleep in a meeting?",
    possibleAnswers: ["Boise", "Tulsa", "Denver"],
    answer: "Tulsa"
  },
  { //34
    question: "What is the name of Chandler's roommate before Joey?",
    possibleAnswers: ["Freddie", "Kip", "Eddie"],
    answer: "Kip"
  },
  { //35
    question: "Joey gets caught taking a shower in the dressing room of which Hollywood star?",
    possibleAnswers: ["Charlton Heston", "Jack Palance", "Client Eastwood"],
    answer: "Charlton Heston"
  },
  { //36
    question: "What sitcome did Ursula appear in before Friends",
    possibleAnswers: ["Will and Grace", "Mad About You", "Becker"],
    answer: "Mad About Yo"
  },
  { //37
    question: "Who did Rachel leave at the altar?",
    possibleAnswers: ["Larry", "Harry", "Barry"],
    answer: "Barry"
  },
  { //38
    question: "What did Phoeve find in her sodea?",
    possibleAnswers: ["A toe", "A thumb", "A nose"],
    answer: "A thumb"
  },
  { //39
    question: "What country does Chandler tell Janice he's moving to?",
    possibleAnswers: ["Oman", "Iran", "Yemen"],
    answer: "Yemen"
  },
  { //40
    question: "What is Phoebe's twin sister's name?",
    possibleAnswers: ["Ursula", "Regina", "Michelle"],
    answer: "Ursula"
  },
  { //41
    question: "Joey's favourite sports team is the...",
    possibleAnswers: ["Mets", "Yankees", "Knicks"],
    answer: "Knicks"
  },
  { //42
    question: "What are the names of Chandler and Monica's babies?",
    possibleAnswers: ["Erica & Ross", "Erica & Jack", "Emma & Jack"],
    answer: "Erica & Jack"
  },
  { //43
    question: "Who is Monica's first kiss with?",
    possibleAnswers: ["Chip", "Chandler", "Ross"],
    answer: "Ross"
  },
  { //44
    question: "What does Monica start making to get over Richard?",
    possibleAnswers: ["Candy", "Jam", "Marmalade"],
    answer: "Jam"
  },
  { //45
    question: "What is the name of the self help book the girls read?",
    possibleAnswers: ["Be Your Own Windkeeper", "Be Your Own Person", "Be Your Own Lightning Bearer"],
    answer: "Be Your Own Windkeeper"
  },
  { //46
    question: "Who said: 'Oh my God. I've become my father. I've been trying so hard not to become my mother, I didn't see this coming.' ?",
    possibleAnswers: ["Chandler", "Rachel", "Monica"],
    answer: "Rachel"
  },
  { //47
    question: "What is wrong with the couch Ross returned to the store?",
    possibleAnswers: ["It was torn", "It was stained", "It was cut in half"],
    answer: "It was cut in half"
  },
  { //48
    question: "How much store credit did Ross get for the couch?",
    possibleAnswers: ["$4", "$40", "$14"],
    answer: "$4"
  },
  { //49
    question: "Who said: 'Oh, yeah, I'm a gym member. I try to go four times a week, but I've missed the last... Twelve hundred times.' ?",
    possibleAnswers: ["Ross", "Joey", "Chandler"],
    answer: "Chandler"
  },
  { //50
    question: "How many long-stemmed roses did Ross send Emily?",
    possibleAnswers: ["56", "72", "98"],
    answer: "72"
  },
  { //51
    question: "What was Phoebe in charge of for Rachel's suprise party?",
    possibleAnswers: ["cups & popcorn", "cups & ice", "ballons & ice"],
    answer: "cups & ice"
  },
  { //52
    question: "What was the name of the Photographer who almost moved in with Chandler?",
    possibleAnswers: ["Eric", "Mark", "John"],
    answer: "Eric"
  },
  { //53
    question: "What did Pete Becker invent?",
    possibleAnswers: ["Moss 865", "Moss 876", "Moss 987"],
    answer: "Moss 865"
  },
  { //54
    question: "Who did Phoebe think would have very hairy children?",
    possibleAnswers: ["Ross & Janice", "Chandler & Janice", ""],
    answer: ""
  },
  { //55
    question: "How many lasagnas did Monica make for her aunt?",
    possibleAnswers: ["6", "13", "12"],
    answer: "12"
  },
  { //56
    question: "Who fell in an open grave?",
    possibleAnswers: ["Ross", "Joey", "Phoebe"],
    answer: ""
  },
  { //57
    question: "What was the name of Joey's Stalker?",
    possibleAnswers: ["Emma", "Erika", "Erin"],
    answer: "Erika"
  },
  { //58
    question: "What is the name of the laundrette the girls use?",
    possibleAnswers: ["Launderama", "Suds N Stuff", "Kelan It"],
    answer: "Launderama"
  },
  { //59
    question: "What book did Joey keep in the freezer?",
    possibleAnswers: ["IT", "The Shining", "Carrie"],
    answer: "The Shining"
  },
  { //60
    question: "What is the name of Eddie's ex-girlfriend?",
    possibleAnswers: ["Tracy", "Tillie", "Tanya"],
    answer: "Tillie"
  },
  { //61
    question: "Whose dollhouse has the 'Aroma' room",
    possibleAnswers: ["Phoebe", "Rachel", "Monica"],
    answer: "Phoebe"
  },
  { //62
    question: "Who played the supply manager that phoebe talked out of killing himself ?",
    possibleAnswers: ["Julia Roberts", "James Vanderbeek", "Jason Alexander"],
    answer: "Jason Alexander"
  },
  { //63
    question: "Who scored the winning point at ping-pong in Barbados ?",
    possibleAnswers: ["Mike", "Chandler", "David"],
    answer: "Chandler"
  },
  { //64
    question: "Who had a flock of seagulls hairstyle in college?",
    possibleAnswers: ["Ross", "Monica", "Chandler"],
    answer: "Chandler"
  },
  { //65
    question: "Who left Chandler stranded in a restaurant restroom wearing only a pink thong?",
    possibleAnswers: ["Angelina Jolie", "Julia Roberts", "Meg Ryan"],
    answer: "Julia Roberts"
  },
  { //66
    question: "Who said: 'Observe the art of seduction. Watch, learn, and don't eat my cookie.' ?",
    possibleAnswers: ["Joey", "Chandler", "Phoebe"],
    answer: "Phoebe"
  },
  { //67
    question: "What did Ross dress as when he was trying to teach Ben about Hanukkah?",
    possibleAnswers: ["Santa Claus", "Armadillo", "Rat"],
    answer: "Armadillo"
  },
  { //68
    question: "What apartment number does Monica and Rachel live?",
    possibleAnswers: ["5", "12", "20"],
    answer: "20"
  },
  { //69
    question: "What two presents does phoebe buy joey to make Rachel want to move out ?",
    possibleAnswers: ["Bird, Cat", "Drums, Flute", "Drums, Tarantula"],
    answer: "Drums, Tarantula"
  },
  { //70
    question: "What did Gunther dress up as in Monica and Chandler's Halloween party ?",
    possibleAnswers: ["Snoopy", "Charlie Brown", "He came as himself"],
    answer: "Charlie Brown"
  },
  { //71
    question: "Where does Phoebe's Scientist boyfriend David leave here to go work?",
    possibleAnswers: ["Australia", "Alaska", "Minsk"],
    answer: "Minsk"
  },
  { //72
    question: "What is the name of Joey's little sister that becomes pregnant?",
    possibleAnswers: ["Dina", "Mary Angela", "Mary Therese"],
    answer: "Dina"
  },
  { //73
    question: "Which supermodel played Joey's roommate?",
    possibleAnswers: ["Cindy Crawford", "Claudia Schiffer", "Elle MacPherson"],
    answer: "Elle MacPherson"
  },
  { //74
    question: "Who’s toe was severed?",
    possibleAnswers: ["Chandler", "Ross", "Joey"],
    answer: "Chandler"
  },
  { //75
    question: "Who said, 'I've always found public men's rooms to be quite sexy.'",
    possibleAnswers: ["Rachel", "Monica", "Pheobe"],
    answer: "Monica"
  },
  { //76
    question: "What is the name of Monica and Ross' cousin?",
    possibleAnswers: ["Catherine", "Cathy", "Cassie"],
    answer: "Cassie"
  },
  { //77
    question: "Who got married in Vegas?",
    possibleAnswers: ["Chandler & Monica", "Ross & Rachel", "Joey & Phoebe"],
    answer: "Ross & Rachel"
  },
  { //78
    question: "What is the 1st line ever said on Friends?",
    possibleAnswers: ["There's nothin' 2 tell", "Hi you guys", "Oh my god!"],
    answer: "There's nothin' 2 tell"
  },
  { //79
    question: "Which actress did Rachel kiss?",
    possibleAnswers: ["Winona Ryder", "Alicia Silverstone", "Christina Applegate"],
    answer: "Winona Ryder"
  },
  { //80
    question: "Who said the 1st line on Friends?",
    possibleAnswers: ["Ross", "Phoeve", "Monica"],
    answer: "Monica"
  },
  { //81
    question: "Monica said to Richard: 'I'm dating a man whose ______ I once peed in'",
    possibleAnswers: ["Pool", "Bed", "Yard"],
    answer: "Pool"
  },
  { //82
    question: "What is the name of the copy store?",
    possibleAnswers: ["Brandy", "Chloe", "Linda"],
    answer: "Chloe"
  },
  { //83
    question: "What was Rachel's bra size?",
    possibleAnswers: ["32C", "34B", "34C"],
    answer: "32C"
  },
  { //84
    question: "What costume did Emma wear to a beauty pageant on Thanksgiving?",
    possibleAnswers: ["Fairy Costume", "Princess Costume", "Cowgirl Costume"],
    answer: "Cowgirl Costume"
  },
  { //85
    question: "Who said, 'Chandler entered a Vanilla Ice look-alike contest and won!'",
    possibleAnswers: ["Ross", "Joey", "Monica"],
    answer: ""
  },
  { //86
    question: "Which cast member did Ross talk to on the phone when he couldn’t get his leather pants back on?",
    possibleAnswers: ["Chandler", "Joey", "Monica"],
    answer: "Joey"
  },
  { //87
    question: "Which “Friends” star was the only one to kiss all of the other cast members during the course of the ten seasons?",
    possibleAnswers: ["Rachel", "Phoebe", "Joey"],
    answer: "Rachel"
  },
  { //88
    question: "What was Ross’ middle name?",
    possibleAnswers: ["Muriel", "Eustace", "He doesn't have one"],
    answer: "Eustace"
  },
  { //89
    question: "Which characters were on the socks that Janice bought Chandler right before he broke up with her?",
    possibleAnswers: ["Beavis and Butt-Head", "Tweety And Sylvester", "Rocky and Bullwinkle"],
    answer: "Rocky and Bullwinkle"
  },
  { //90
    question: "What did Joey buy Chandler as a token of their friendship, which Chandler hated?",
    possibleAnswers: ["A bracelet", "A duck", "A foosball table"],
    answer: "A bracelet"
  },
  { //91
    question: "What was the neckline on Monica’s wedding dres?",
    possibleAnswers: ["Sweetheart", "V-neck", "Off-the-shoulder"],
    answer: "V-neck"
  },
  { //92
    question: "Who convinced Bonnie to shave her head again?",
    possibleAnswers: ["Phoebe", "Chandler", "Rachel"],
    answer: "Rachel"
  },
  { //93
    question: "What is Joey's PIN number?",
    possibleAnswers: ["5639", "1111", "1234"],
    answer: "5639"
  },
  { //94
    question: "Who said, 'On a scale from one to ten, ten being the dumbest a person can look, you are definitely nineteen.'",
    possibleAnswers: ["Ross", "Monica", "Chandler"],
    answer: "Chandler"
  },
  { //95
    question: "Inspired by Chandler's mum, Rachel begins to write her own erotic novel. What was the title of this novel?",
    possibleAnswers: ["A Woman Undone", "Wind Beneath Me", "A Woman's Right"],
    answer: "A Woman Undone"
  },
  { //96
    question: "Who is Paul?",
    possibleAnswers: ["The Weeper", "The I Win Guy", "The Wine Guy"],
    answer: "The Wine Guy"
  },
  { //97
    question: "To whom did Rachel serve her last ever cup of coffee to as a waitress at Central Perk?",
    possibleAnswers: ["Ross", "Chandler", "Joey"],
    answer: "Chandler"
  },
  { //98
    question: "When Phoebe agrees to have Frank Jr's babies, how many embryos does Frank suggest the doctors implant in Phoebe?",
    possibleAnswers: ["200", "300", "100"],
    answer: "200"
  },
  { //99
    question: "What family heirloom was sent to Phoebe by her birth mother?",
    possibleAnswers: ["Fur Coat", "Vintage Car", "Pocket Watch"],
    answer: "Fur Coat"
  },
  { //100
    question: "What was the last line said on Friends?",
    possibleAnswers: ["This is so hard", "Sure... Where?", "By you guys"],
    answer: "Sure... Where?"
  },
];
