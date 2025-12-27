export interface Question {
    id: number;
    question: string;
    type: 'multiple-choice' | 'matching' | 'fill-blank' | 'error-correction' | 'reading';
    options?: string[];
    correctAnswer: string | number;
    task?: string;
    points: number;
}

export interface Test {
    id: string;
    title: string;
    description: string;
    totalPoints: number;
    questions: Question[];
}

export const demoTest: Test = {
    id: 'demo-test-1',
    title: 'Eysh 1',
    description: 'Grammar, Vocabulary, Reading, and More',
    totalPoints: 100,
    questions: [
        // Task 1: Grammar
        {
            id: 1,
            task: 'Task 1. Grammar',
            question: 'A: I think there is ……………… wrong with my mobile phone. B: There is …………….. wrong with it. You need to recharge the batteries.',
            type: 'multiple-choice',
            options: [
                'A. anything /any',
                'B. anything/nothing',
                'C. something/little',
                'D. something/nothing',
                'E. any/some'
            ],
            correctAnswer: 3, // D
            points: 8
        },
        {
            id: 2,
            question: "Let's have a party,………………………..?",
            type: 'multiple-choice',
            options: [
                'A. will you',
                'B. did we',
                'C. shall we',
                'D. didn\'t we',
                'E. won\'t you'
            ],
            correctAnswer: 2, // C
            points: 8
        },
        {
            id: 3,
            question: 'A: ………the earth ……… around the sun? B:…………………….',
            type: 'multiple-choice',
            options: [
                'A. Do, go/Yes, it is',
                'B. Does, goes/Yes, it goes.',
                'C. Does, go/Yes, it does.',
                'D. Does ,go/Yes, it is.',
                'E. Does, go/No, it doesn\'t.'
            ],
            correctAnswer: 2, // C
            points: 8
        },
        {
            id: 4,
            question: 'A: Does Emily leave home early? B: No, she said that she………………..home early.',
            type: 'multiple-choice',
            options: [
                'A. leaves',
                'B. didn\'t leave',
                'C. left',
                'D. doesn\'t leave',
                'E. wouldn\'t leave'
            ],
            correctAnswer: 4, // E
            points: 8
        },
        {
            id: 5,
            question: 'A: Do you still want to buy a computer? B: Yes, I …………. buy a computer if I ……………. afford it',
            type: 'multiple-choice',
            options: [
                'A. will/could',
                'B. could/can',
                'C. would/could',
                'D. will/can',
                'E. could/would'
            ],
            correctAnswer: 3, // D
            points: 8
        },
        // Task 2: Vocabulary
        {
            id: 6,
            task: 'Task 2. Vocabulary',
            question: 'I hate……….. oranges. I usually get my wife to do it for me since she has long nails.',
            type: 'multiple-choice',
            options: [
                'A. skinning',
                'B. slicing',
                'C. peeling',
                'D. shaving',
                'E. cutting'
            ],
            correctAnswer: 2, // C
            points: 10
        },
        {
            id: 7,
            question: 'I\'ve decided to take a ………… across Europe this summer by car.',
            type: 'multiple-choice',
            options: [
                'A. voyage',
                'B. travel',
                'C. trip',
                'D. journey',
                'E. package tour'
            ],
            correctAnswer: 2, // C
            points: 10
        },
        {
            id: 8,
            question: 'The bus ……………. arrives late during bad weather.',
            type: 'multiple-choice',
            options: [
                'A. every week',
                'B. now',
                'C. always',
                'D. recently',
                'E. yet'
            ],
            correctAnswer: 2, // C
            points: 10
        },
        {
            id: 9,
            question: 'A …………… is an environmentally friendly method of transport.',
            type: 'multiple-choice',
            options: [
                'A. motocycle',
                'B. bicycle',
                'C. bus',
                'D. train',
                'E. plane'
            ],
            correctAnswer: 1, // B
            points: 10
        },
        {
            id: 10,
            question: 'Don\'t touch things that don\'t ……………. to you.',
            type: 'multiple-choice',
            options: [
                'A. belong',
                'B. possess',
                'C. involve',
                'D. retain',
                'E. own'
            ],
            correctAnswer: 0, // A
            points: 10
        },
        {
            id: 11,
            question: 'Phil: Would you like a piece of cake? Liz: ……………………',
            type: 'multiple-choice',
            options: [
                'A. Never mind',
                'B. No, thanks. I\'m on a diet',
                'C. I\'m on a strike',
                'D. It tastes delicious',
                'E. Oh, that sounds interesting'
            ],
            correctAnswer: 1, // B
            points: 10
        },
        {
            id: 12,
            question: 'Betty: Ouch! There\'s something in my eye! Miranda: …………………….',
            type: 'multiple-choice',
            options: [
                'A. Let me see. No, I couldn\'t',
                'B. You should wear sunglasses',
                'C. Let me look. No, I can\'t see anything',
                'D. What beautiful eyes you have!',
                'E. Let me think for a while'
            ],
            correctAnswer: 2, // C
            points: 10
        },
        {
            id: 13,
            question: 'Stranger: Could you tell me where the post office is? Boy: …………………………….',
            type: 'multiple-choice',
            options: [
                'A. There was a post office fifty years ago',
                'B. Yes. I could tell',
                'C. Of course, go straight on',
                'D. You can buy stamps at the post office',
                'E. Yes, it is'
            ],
            correctAnswer: 2, // C
            points: 10
        },
        {
            id: 14,
            question: 'Carol: Anita moved to a new flat last week. Simon: ………………….',
            type: 'multiple-choice',
            options: [
                'A. How long has she lived there?',
                'B. Really? What\'s she like?',
                'C. Did she move a new flat last week?',
                'D. Oh really? What\'s it like?',
                'E. Thanks, I\'ll be there on time'
            ],
            correctAnswer: 3, // D
            points: 10
        },
        {
            id: 15,
            question: 'Mum: Your room is such a mess Son: …………………..',
            type: 'multiple-choice',
            options: [
                'A. I\'m going to tidy it now',
                'B. I don\'t know how you live in it',
                'C. I think it needs cleaning',
                'D. I clean my room every day',
                'E. You are welcome'
            ],
            correctAnswer: 0, // A
            points: 10
        },
        // Error Correction
        {
            id: 16,
            task: 'Error Correction',
            question: '[A] As she neared retirement, [B] Laura [C] became [D] more thoughtful and withdrawn. [E] No error.',
            type: 'error-correction',
            options: ['A', 'B', 'C', 'D', 'E'],
            correctAnswer: 4, // E
            points: 12
        },
        {
            id: 17,
            question: '[A] He [B] who laughs last [C] laughs [D] softest. [E] No error.',
            type: 'error-correction',
            options: ['A', 'B', 'C', 'D', 'E'],
            correctAnswer: 3, // D
            points: 12
        },
        {
            id: 18,
            question: '[A] The joy [B] of the Titanic [C] could have been avoided [D] if more safety precautions had been taken. [E] No error.',
            type: 'error-correction',
            options: ['A', 'B', 'C', 'D', 'E'],
            correctAnswer: 0, // A
            points: 12
        },
        {
            id: 19,
            question: '[A] The amounts [B] of people [C] who have registered for this course [D] is so high [E] that two sections will be created.',
            type: 'error-correction',
            options: ['A', 'B', 'C', 'D', 'E'],
            correctAnswer: 0, // A
            points: 12
        },
        {
            id: 20,
            question: 'A trained man ……………activated the bomb before it went off.',
            type: 'multiple-choice',
            options: ['A. dis', 'B. de', 'C. non', 'D. in', 'E. super'],
            correctAnswer: 1, // B
            points: 1
        },
        {
            id: 21,
            question: "Can't you read any quicker than that? Is that……………………..?",
            type: 'multiple-choice',
            options: [
                'A. the quickest you can read',
                'B. you can read quickly',
                'C. you can\'t read more quickly',
                'D. the quickest reading you can',
                'E. can you read quickly'
            ],
            correctAnswer: 0, // A
            points: 1
        },
        // Task 3: Reading
        {
            id: 22,
            task: 'Task 3. Reading',
            question: 'Which paragraphs describe a shopaholic?',
            type: 'multiple-choice',
            options: [
                'a. 1 and 3',
                'b. 2 and 3',
                'c. 1 and 2',
                'd. 1 and 4',
                'e. 2 and 4'
            ],
            correctAnswer: 2, // c
            points: 10
        },
        {
            id: 23,
            question: 'Which paragraph gives advice about dealing with problems of uncontrolled shopping?',
            type: 'multiple-choice',
            options: ['a. 1', 'b. 2', 'c. 3', 'd. 1 and 2', 'e. 1 and 3'],
            correctAnswer: 2, // c
            points: 15
        },
        {
            id: 24,
            question: 'Which paragraph gives a description of " shopaholism"?',
            type: 'multiple-choice',
            options: ['a. 1', 'b. 2', 'c. 3', 'd. 1 and 2', 'e. 1 and 3'],
            correctAnswer: 1, // b
            points: 15
        },
        {
            id: 25,
            question: 'Paragraph 3 was written as a kind of…….',
            type: 'multiple-choice',
            options: ['a. request', 'b. offering', 'c. advice', 'd. invitation', 'e. commands'],
            correctAnswer: 2, // c
            points: 15
        },
        {
            id: 26,
            question: 'Which paragraph describes a writer\'s opinion?',
            type: 'multiple-choice',
            options: ['a. 1', 'b. 2', 'c. 3', 'd. 4', 'e.1 and 3'],
            correctAnswer: 3, // d
            points: 15
        },
        {
            id: 27,
            question: 'What\'s the main idea of the text?',
            type: 'multiple-choice',
            options: [
                'A. To help people avoid buying unnecessary goods',
                'B. To make people feel better',
                'C. To tell where can buy goods',
                'D. To help how to write the shopping list',
                'E. To remind people always to pay in cash'
            ],
            correctAnswer: 0, // A
            points: 15
        },
        {
            id: 28,
            question: 'Which sentence is not true about paragraph 2?',
            type: 'multiple-choice',
            options: [
                'A. People like to go on holidays to sunny countries',
                'B. People are happy when they eat chocolate',
                'C. Shopaholics come home from shop with empty credit cards',
                'D. Shopaholics always feel better than others',
                'E. There are a lot of unnecessary goods'
            ],
            correctAnswer: 3, // D
            points: 15
        },
        {
            id: 29,
            question: 'Which sentence is true about shopaholics?',
            type: 'multiple-choice',
            options: [
                'A. They always buy more than they need',
                'B. They always leave cash at home',
                'C. They always take credit cards with them',
                'D. They don\'t like money',
                'E. They like to work at the shop'
            ],
            correctAnswer: 0, // A
            points: 15
        },
        {
            id: 30,
            question: 'Which TV channel shouldn\'t shopaholics watch?',
            type: 'multiple-choice',
            options: ['A. cartoon', 'B. comedy', 'C. news', 'D. shopping', 'E. education'],
            correctAnswer: 3, // D
            points: 15
        },
        {
            id: 31,
            question: 'Why is it important to work out a monthly budget?',
            type: 'multiple-choice',
            options: [
                'А. To buy more items',
                'B. To earn more money',
                'C. To know what you can spend',
                'D. Go shopping very often',
                'E. To leave cash at home'
            ],
            correctAnswer: 2, // C
            points: 15
        },
        {
            id: 32,
            question: 'The word " budget" in paragraph 3 is nearest in meaning to',
            type: 'multiple-choice',
            options: [
                'A. financial plan',
                'B. account',
                'C. money',
                'D. to plan',
                'E. funds'
            ],
            correctAnswer: 0, // A
            points: 15
        },
        {
            id: 33,
            question: 'The word "debt" in paragraph 1 is nearest in the meaning to?',
            type: 'multiple-choice',
            options: [
                'А. money that is owed',
                'B. money that mustn\'t be paid',
                'C. balance',
                'D. duty',
                'E. responsibility'
            ],
            correctAnswer: 0, // A
            points: 15
        },
        {
            id: 34,
            question: 'The word "catalogue" in the text is nearest in the meaning to?',
            type: 'multiple-choice',
            options: ['A. small magazine', 'B. symbol', 'C. key', 'D. listing', 'E. sign'],
            correctAnswer: 3, // D
            points: 15
        },
        // Task 4: Word Formation
        {
            id: 35,
            task: 'Task 4. Word Formation',
            question: 'We were ………… that we would receive a successful exam result.',
            type: 'multiple-choice',
            options: ['A. hopeful', 'B. hope', 'C. hopelessly', 'D. hopelessness', 'E. hoped'],
            correctAnswer: 0, // A
            points: 3
        },
        {
            id: 36,
            question: '……………. is becoming increasingly popular among young people lately.',
            type: 'multiple-choice',
            options: [
                'A. Vegetable',
                'B. Vegetarianism',
                'C. Vegetate',
                'D. Vegetarian',
                'E. Vegetation'
            ],
            correctAnswer: 1, // B
            points: 3
        },
        {
            id: 37,
            question: 'A novel is currently being ………….',
            type: 'multiple-choice',
            options: ['A. dramatic', 'B. dramatically', 'C. dramatized', 'D. dramatist', 'E. drama'],
            correctAnswer: 2, // C
            points: 3
        }
    ]
};

export const readingText = `Buy, Buy, Buy

1. Do you go shopping whenever you feel depressed? Do you spend too much money on things you don't really need, lose control and then get into debt? If you answered 'yes' to these questions, you may be a shopaholic!

2. "Shopaholism" is uncontrolled shopping in order to feel better about yourself. Just like some people go on holidays to sunny countries or eat chocolate to feel better, others simply go on shopping sprees. But shopaholics usually come home with bags and bags of items, most of which will never be used, and an empty bank account.

3. So, what can you do about the problem?
- Always pay in cash. Never take your credit cards with you when you go shopping-or better still, destroy them altogether.
- Make a shopping list before you leave the house and stick to it.
- Work out a monthly budget, so you know what you can spend.
- Take only enough money with you to pay for the absolute essentials.
- Avoid ordering goods from catalogues, and don't watch shopping channels on TV.
- If you see something you feel you must have, ask the shop to keep it for you and go back again a few days later. If you still want it, buy it.

4. Try to follow these simple steps. We hope your effort won't be pointless. After a while you can get exciting results and you should never lose control of your purse or your budget again!`;

export const eysh2Test: Test = {
    id: 'eysh-2',
    title: 'Eysh 2',
    description: 'Grammar, Vocabulary, Reading, and More',
    totalPoints: 100,
    questions: [
        // Task 1: Grammar and Vocabulary (1-13)
        {
            id: 1,
            task: 'Task 1. Grammar and Vocabulary',
            question: 'Italy is in _____ South of _____ Europe, isn\'t it?',
            type: 'multiple-choice',
            options: ['A. the / --', 'B. an / a', 'C. the / the', 'D. the / an', 'E. an / the'],
            correctAnswer: 0, // A
            points: 1
        },
        {
            id: 2,
            question: 'Anna: Hurry up! There\'s _____ time to waste. The bus will be here soon. – Tom: I\'m nearly ready.',
            type: 'multiple-choice',
            options: ['A. few', 'B. a little', 'C. little', 'D. a few', 'E. any'],
            correctAnswer: 2, // C
            points: 1
        },
        {
            id: 3,
            question: 'I haven\'t got _____ as cheap as that this year.',
            type: 'multiple-choice',
            options: ['A. nowhere', 'B. something', 'C. anywhere', 'D. anything', 'E. nothing'],
            correctAnswer: 3, // D
            points: 1
        },
        {
            id: 4,
            question: 'The higher the fence is, _____ the neighbour is.',
            type: 'multiple-choice',
            options: ['A. better', 'B. the better', 'C. the best', 'D. good', 'E. best'],
            correctAnswer: 1, // B
            points: 1
        },
        {
            id: 5,
            question: 'The rooms of the hotel have been _____ decorated to help you relax and feel at home.',
            type: 'multiple-choice',
            options: ['A. tasteful', 'B. tasty', 'C. tastefully', 'D. more tastefully than', 'E. more tasteful'],
            correctAnswer: 2, // C
            points: 1
        },
        {
            id: 6,
            question: 'Look! The bike is leaning _____ the garage wall.',
            type: 'multiple-choice',
            options: ['A. at', 'B. with', 'C. to', 'D. against', 'E. onto'],
            correctAnswer: 3, // D
            points: 1
        },
        {
            id: 7,
            question: 'How rude _____ Frank to use Paula\'s car without asking her.',
            type: 'multiple-choice',
            options: ['A. to', 'B. for', 'C. by', 'D. about', 'E. of'],
            correctAnswer: 4, // E
            points: 1
        },
        {
            id: 8,
            question: 'This time next week we _____ for our holiday.',
            type: 'multiple-choice',
            options: ['A. will be packing', 'B. will have packed', 'C. will pack', 'D. will have been packing', 'E. going to pack'],
            correctAnswer: 0, // A
            points: 1
        },
        {
            id: 9,
            question: 'I _____ her for everything she _____ .',
            type: 'multiple-choice',
            options: ['A. had thanked / did', 'B. have thanked / has', 'C. thanked / did', 'D. thanked / had done', 'E. has thanked / does'],
            correctAnswer: 2, // C
            points: 1
        },
        {
            id: 10,
            question: '_____ Sharon quite enjoys musicals, she really prefers serious dramas more.',
            type: 'multiple-choice',
            options: ['A. As soon as', 'B. Despite', 'C. Although', 'D. When', 'E. Due to'],
            correctAnswer: 2, // C
            points: 1
        },
        {
            id: 11,
            question: 'The tour guide advised the tourists not _____ too much money out with them.',
            type: 'multiple-choice',
            options: ['A. taking', 'B. to take', 'C. take', 'D. to taking', 'E. to be taken'],
            correctAnswer: 1, // B
            points: 1
        },
        {
            id: 12,
            question: 'The robber _____ at the airport soon.',
            type: 'multiple-choice',
            options: ['A. has caught', 'B. will catch', 'C. would be caught', 'D. will be caught', 'E. has been caught'],
            correctAnswer: 3, // D
            points: 1
        },
        {
            id: 13,
            question: '"Will you be going to the USA next summer?" his boss asked. His boss asked _____',
            type: 'multiple-choice',
            options: [
                'A. him he would be going to USA the following summer.',
                'B. him he would be going to the USA the next summer.',
                'C. him if he would be going to the USA the following summer.',
                'D. him if he would be going to the USA the previous summer.',
                'E. for him if he would be going to the USA the following summer.'
            ],
            correctAnswer: 2, // C
            points: 1
        },
        // Error Correction (14-16)
        {
            id: 14,
            task: 'Error Correction',
            question: 'If the government would kept their promise, taxes wouldn\'t have gone up last year. [A] would [B] kept [C] their [D] promise',
            type: 'error-correction',
            options: ['A', 'B', 'C', 'D'],
            correctAnswer: 1, // B (kept → keep)
            points: 3
        },
        {
            id: 15,
            question: 'The tribe\'s sense of identity can easily been destroyed. [A] tribe\'s [B] easily [C] been [D] destroyed',
            type: 'error-correction',
            options: ['A', 'B', 'C', 'D'],
            correctAnswer: 2, // C (been → be)
            points: 3
        },
        {
            id: 16,
            question: 'Her teacher sent her home because of she was such a naughty child. [A] teacher [B] home [C] because of [D] such',
            type: 'error-correction',
            options: ['A', 'B', 'C', 'D'],
            correctAnswer: 2, // C (because of → because)
            points: 3
        },
        // Phrasal Verbs (17-18)
        {
            id: 17,
            task: 'Phrasal Verbs',
            question: 'He turned _____ the invitation to the concert as he was feeling tired.',
            type: 'multiple-choice',
            options: ['A. in', 'B. back', 'C. down', 'D. up', 'E. on'],
            correctAnswer: 2, // C (down)
            points: 3
        },
        {
            id: 18,
            question: 'Simon always manages to get _____ doing the washing up because he says he has a lot of homework.',
            type: 'multiple-choice',
            options: ['A. over', 'B. out of', 'C. through', 'D. out', 'E. get along'],
            correctAnswer: 1, // B (out of)
            points: 3
        },
        // Task 2: Vocabulary (19-33)
        {
            id: 19,
            task: 'Task 2. Vocabulary',
            question: 'You need to acquire _____ in social work.',
            type: 'multiple-choice',
            options: ['A. an application', 'B. a qualification', 'C. a necessity', 'D. an operation', 'E. cooperation'],
            correctAnswer: 1, // B
            points: 1
        },
        {
            id: 20,
            question: 'He lied to me and to make matters worse, he didn\'t ______ at all.',
            type: 'multiple-choice',
            options: ['A. thank', 'B. apologize', 'C. reject', 'D. admit', 'E. accept'],
            correctAnswer: 1, // B
            points: 1
        },
        {
            id: 21,
            question: 'The level of junk food _____ was illustrated by statistics.',
            type: 'multiple-choice',
            options: ['A. consideration', 'B. compulsion', 'C. consumption', 'D. combination', 'E. compassion'],
            correctAnswer: 2, // C
            points: 1
        },
        {
            id: 22,
            question: 'Many groups are working to reduce _____ to protect pasture land in the Gobi region.',
            type: 'multiple-choice',
            options: ['A. drought', 'B. hazards', 'C. blizzard', 'D. soil erosion', 'E. gale'],
            correctAnswer: 3, // D
            points: 1
        },
        {
            id: 23,
            question: 'Jack has already _____ a very good reputation as a talented prosecutor.',
            type: 'multiple-choice',
            options: ['A. made', 'B. win', 'C. done', 'D. gained', 'E. achieve'],
            correctAnswer: 3, // D
            points: 1
        },
        {
            id: 24,
            question: 'The little boy\'s eyes _____ when he saw his daddy.',
            type: 'multiple-choice',
            options: ['A. lit up', 'B. shine', 'C. light', 'D. flowed', 'E. dark'],
            correctAnswer: 0, // A
            points: 1
        },
        {
            id: 25,
            question: 'Always _____ your files and any documents you\'re working on.',
            type: 'multiple-choice',
            options: ['A. back up', 'B. hack into', 'C. login', 'D. click on', 'E. crash on'],
            correctAnswer: 0, // A
            points: 1
        },
        {
            id: 26,
            question: 'Alice: You were late for the meeting this morning! Tom: I feel sorry for being tardy. The alarm didn\'t go off.',
            type: 'multiple-choice',
            options: ['A. denying', 'B. refusing', 'C. making an excuse', 'D. requesting', 'E. reminding'],
            correctAnswer: 2, // C
            points: 1
        },
        {
            id: 27,
            question: 'Sharon: Who is the girl? Do you know her? John: She must be Alice\'s daughter. She looks just like her.',
            type: 'multiple-choice',
            options: ['A. criticism', 'B. complaint', 'C. compliment', 'D. assumption', 'E. suggestion'],
            correctAnswer: 3, // D
            points: 1
        },
        {
            id: 28,
            question: 'go on a',
            type: 'multiple-choice',
            options: ['A. date', 'B. meal', 'C. solution', 'D. plan', 'E. diet'],
            correctAnswer: 4, // E
            points: 3
        },
        {
            id: 29,
            question: '_____ knowledge',
            type: 'multiple-choice',
            options: ['A. to impart', 'B. to conduct', 'C. to instruct', 'D. to earn', 'E. to endure'],
            correctAnswer: 0, // A
            points: 3
        },
        {
            id: 30,
            question: 'I recognize a few words in the passage, therefore, I _____ .',
            type: 'multiple-choice',
            options: [
                'A. find it easy to understand most of the content',
                'B. try hard to catch the meaning of the other words',
                'C. keep my mouth shut like a fish',
                'D. never look up a new word in a dictionary',
                'E. am not eager to learn new words'
            ],
            correctAnswer: 0, // A
            points: 1
        },
        {
            id: 31,
            question: 'Choose the most possible solution to flood.',
            type: 'multiple-choice',
            options: ['A. stonework', 'B. dams and canals', 'C. wind turbines', 'D. tunnels and subways', 'E. brickwork'],
            correctAnswer: 1, // B
            points: 1
        },
        {
            id: 32,
            question: 'Finally, the department\'s solution to the problem hit the nail on the head.',
            type: 'multiple-choice',
            options: [
                'A. The accident was caused by the failures.',
                'B. The staff did exactly right.',
                'C. The staff\'s solution was not bad.',
                'D. The staff\'s act was quite smart.',
                'E. The staff hit the box of nails.'
            ],
            correctAnswer: 1, // B
            points: 3
        },
        {
            id: 33,
            question: 'The computer he gave you isn\'t the best one in the world, but you shouldn\'t look a gift horse in the mouth.',
            type: 'multiple-choice',
            options: [
                'A. You should give back the computer to him.',
                'B. The computer is a bad gift.',
                'C. You should not complain about the gift given to you.',
                'D. Never receive a gift you don\'t like.',
                'E. Receiving a horse as a gift is his hobby.'
            ],
            correctAnswer: 2, // C
            points: 3
        },
        // Task 3: Communicative Tasks (34-38)
        {
            id: 34,
            task: 'Task 3. Communicative Tasks',
            question: 'Teller: Can I help you? Customer: Yes, I\'d like to _____ a withdrawal from my account, please.',
            type: 'multiple-choice',
            options: ['A. open', 'B. get', 'C. take', 'D. make', 'E. lend'],
            correctAnswer: 3, // D (make)
            points: 1
        },
        {
            id: 35,
            question: 'Man: These drones aren\'t as expensive as I thought. Woman: They\'re _____ cheap right now because a new model has just come out.',
            type: 'multiple-choice',
            options: ['A. bringing up', 'B. giving', 'C. asking', 'D. sending', 'E. going'],
            correctAnswer: 4, // E (going)
            points: 1
        },
        {
            id: 36,
            question: 'Where is the bus station? The most polite form: _____',
            type: 'multiple-choice',
            options: [
                'A. Could you tell me where the bus station is?',
                'B. Can you tell me where is the bus station?',
                'C. Could you tell me where is the bus station?',
                'D. Tell me, where is the bus station?',
                'E. Tell me, where is the bus station, please?'
            ],
            correctAnswer: 0, // A
            points: 2
        },
        {
            id: 37,
            question: 'Alice: Can I have a salad and rice with my lunch? John: No, you have to choose, salad or rice, but not both.',
            type: 'multiple-choice',
            options: ['A. make a change', 'B. make an effort', 'C. make a habit', 'D. make a choice', 'E. make a point'],
            correctAnswer: 3, // D
            points: 3
        },
        {
            id: 38,
            question: 'Tutor: It was very good that you had a lot of statistics in your presentation. John: Thank you. I seemed to be able to talk about them. Anna: It was fine to listen to, but I couldn\'t write the notes down. What does Anna mean?',
            type: 'multiple-choice',
            options: [
                'A. The presentation was very interesting.',
                'B. The presenter\'s speed was a bit slow sometimes.',
                'C. The presenter\'s pace was a bit quick at times.',
                'D. The presentation was easy to understand.',
                'E. There was a good time planning.'
            ],
            correctAnswer: 2, // C
            points: 3
        },
        // Task 4: Reading (39-44) - Note: Reading text not provided, but questions are here
        {
            id: 39,
            task: 'Task 4. Reading',
            question: 'What title will be the most suitable for the passage?',
            type: 'multiple-choice',
            options: [
                'A. Increase in car\'s popularity',
                'B. Relationship between driving age and serious accidents',
                'C. Starting to drive at 25',
                'D. Environmental benefit of raising driving age',
                'E. Car dependence of a social group'
            ],
            correctAnswer: 1, // B
            points: 1
        },
        {
            id: 40,
            question: 'Which of the following are examples of \'tax and spend\' approaches?',
            type: 'multiple-choice',
            options: [
                'A. tax older drivers more than younger drivers',
                'B. increase fuel price and invest in public transport',
                'C. increase fuel price and living cost',
                'D. increase living cost and car maintenance',
                'E. decrease public transport fees and driving age'
            ],
            correctAnswer: 1, // B
            points: 1
        },
        {
            id: 41,
            question: 'Young people make up more than 25% of _____ .',
            type: 'multiple-choice',
            options: ['A. road accidents', 'B. road congestion', 'C. city pollution', 'D. public transport', 'E. road deaths'],
            correctAnswer: 4, // E
            points: 1
        },
        {
            id: 42,
            question: 'Which group is NOT mentioned as a community that could cause a \'political disaster\'?',
            type: 'multiple-choice',
            options: ['A. young people', 'B. workers', 'C. older citizens', 'D. families', 'E. voters'],
            correctAnswer: 0, // A
            points: 1
        },
        {
            id: 43,
            question: 'According to the text why can people get angry? When _____ .',
            type: 'multiple-choice',
            options: [
                'A. the young people have to get their driving licenses at 25',
                'B. they have to pay more',
                'C. they have to use public transport',
                'D. the governments try to reduce congestion',
                'E. the brains of young people cannot calculate risk'
            ],
            correctAnswer: 1, // B
            points: 3
        },
        {
            id: 44,
            question: 'Which statement agrees with the information in the text?',
            type: 'multiple-choice',
            options: [
                'A. Governments allow a certain number of vehicles into the city centres if drivers can afford the increased expense for having own car.',
                'B. Raising the minimum driving age to 25 can improve the health of young people.',
                'C. Banning cars in urban areas can fully solve the congestion and pollution problems.',
                'D. Laws and regulations have stopped driving of all age drivers.',
                'E. Young people could be encouraged to use public transport by governments providing some financial support.'
            ],
            correctAnswer: 4, // E
            points: 3
        },
        // Task 5: Word Formation and Cloze (45-56)
        {
            id: 45,
            task: 'Task 5. Word Formation and Cloze',
            question: 'As strong astronauts have to pass a medical and have a (a) _____ in a relevant subject.',
            type: 'multiple-choice',
            options: ['1. qualification', '2. equality', '3. qualify', '4. disqualification', '5. qualifying'],
            correctAnswer: 0, // 1
            points: 1
        },
        {
            id: 46,
            question: 'They have to be willing to live in a (b) _____ small space and work well with other people.',
            type: 'multiple-choice',
            options: ['1. extremism', '2. extreme', '3. extricate', '4. extremist', '5. extremely'],
            correctAnswer: 4, // 5
            points: 1
        },
        {
            id: 47,
            question: 'Experiments can go (c) _____ wrong, risking the lives of astronauts.',
            type: 'multiple-choice',
            options: ['1. dangerously', '2. dangerous', '3. danger', '4. out of danger', '5. in danger'],
            correctAnswer: 0, // 1
            points: 1
        },
        {
            id: 48,
            question: 'They have to be able to react (d) _____ in a difficult situation as well as be prepared to work hard.',
            type: 'multiple-choice',
            options: ['1. calm', '2. calmly', '3. calmness', '4. calming', '5. calmed'],
            correctAnswer: 1, // 2
            points: 1
        },
        {
            id: 49,
            question: 'The first British astronaut was a woman named Helen Sharman. She got the job after hearing an (e) _____ on the radio.',
            type: 'multiple-choice',
            options: ['1. announcing', '2. announce', '3. announced', '4. announcement', '5. announcer'],
            correctAnswer: 3, // 4
            points: 1
        },
        {
            id: 50,
            question: 'She said that the most (f) _____ thing for her was seeing the Earth from 120 miles into space.',
            type: 'multiple-choice',
            options: ['1. amazement', '2. amazingly', '3. amazed', '4. amazing', '5. amaze'],
            correctAnswer: 3, // 4
            points: 1
        },
        {
            id: 51,
            question: 'Music is thought to be one of mankind\'s greatest inventions. It is found all over the world and is an important part of culture and (a) _____ .',
            type: 'multiple-choice',
            options: ['1. fun', '2. habits', '3. traditions', '4. health', '5. belief'],
            correctAnswer: 2, // 3
            points: 1
        },
        {
            id: 52,
            question: 'One curious fact is that music has formed a part of all the different (b) _____ on our planet.',
            type: 'multiple-choice',
            options: ['1. people', '2. civilizations', '3. festivals', '4. citizens', '5. adults'],
            correctAnswer: 1, // 2
            points: 1
        },
        {
            id: 53,
            question: 'Music is seen as one of the purest and most emotional creations and it would be hard to imagine our (c) _____ without it.',
            type: 'multiple-choice',
            options: ['1. times', '2. existences', '3. routines', '4. periods', '5. lives'],
            correctAnswer: 4, // 5
            points: 1
        },
        {
            id: 54,
            question: 'What we need to do is make sure that it does not become too controlled by (d) _____ and allow people to be creative and express themselves through music.',
            type: 'multiple-choice',
            options: ['1. income', '2. cash', '3. money', '4. expenses', '5. currency'],
            correctAnswer: 2, // 3
            points: 1
        },
        {
            id: 55,
            question: 'People are constantly inventing new (e) _____ of music and it makes such an interesting topic of (f) _____ .',
            type: 'multiple-choice',
            options: ['1. genres', '2. classes', '3. categories', '4. inventions', '5. series'],
            correctAnswer: 0, // 1
            points: 1
        },
        {
            id: 56,
            question: 'Let\'s just hope that this will never stop. (f) _____',
            type: 'multiple-choice',
            options: ['1. school', '2. agreement', '3. argument', '4. conversation', '5. learning'],
            correctAnswer: 3, // 4
            points: 1
        }
    ]
};

export const a2b1Test: Test = {
    id: 'a2-b1',
    title: 'A2-B1 Level Test',
    description: 'Beginner to Intermediate English Test',
    totalPoints: 100,
    questions: [
        {
            id: 1,
            task: 'Grammar',
            question: 'I _____ to the store yesterday.',
            type: 'multiple-choice',
            options: ['A. go', 'B. went', 'C. goes', 'D. going', 'E. gone'],
            correctAnswer: 1, // B
            points: 6
        },
        {
            id: 2,
            question: 'She _____ English for three years.',
            type: 'multiple-choice',
            options: ['A. study', 'B. studies', 'C. has studied', 'D. is studying', 'E. studied'],
            correctAnswer: 2, // C
            points: 6
        },
        {
            id: 3,
            question: 'There _____ many books on the table.',
            type: 'multiple-choice',
            options: ['A. is', 'B. are', 'C. be', 'D. was', 'E. been'],
            correctAnswer: 1, // B
            points: 6
        },
        {
            id: 4,
            question: 'I _____ like to visit Paris one day.',
            type: 'multiple-choice',
            options: ['A. will', 'B. would', 'C. can', 'D. should', 'E. must'],
            correctAnswer: 1, // B
            points: 6
        },
        {
            id: 5,
            question: 'He is _____ than his brother.',
            type: 'multiple-choice',
            options: ['A. tall', 'B. taller', 'C. tallest', 'D. more tall', 'E. most tall'],
            correctAnswer: 1, // B
            points: 6
        },
        {
            id: 6,
            question: 'We _____ dinner when the phone rang.',
            type: 'multiple-choice',
            options: ['A. eat', 'B. ate', 'C. were eating', 'D. have eaten', 'E. will eat'],
            correctAnswer: 2, // C
            points: 6
        },
        {
            id: 7,
            question: 'She _____ speak three languages.',
            type: 'multiple-choice',
            options: ['A. can', 'B. could', 'C. may', 'D. might', 'E. must'],
            correctAnswer: 0, // A
            points: 6
        },
        {
            id: 8,
            question: 'I haven\'t seen him _____ Monday.',
            type: 'multiple-choice',
            options: ['A. for', 'B. since', 'C. from', 'D. during', 'E. while'],
            correctAnswer: 1, // B
            points: 6
        },
        {
            id: 9,
            question: 'The movie was _____ interesting.',
            type: 'multiple-choice',
            options: ['A. very', 'B. too', 'C. so', 'D. such', 'E. much'],
            correctAnswer: 0, // A
            points: 6
        },
        {
            id: 10,
            question: 'They _____ to the party last night.',
            type: 'multiple-choice',
            options: ['A. don\'t go', 'B. didn\'t go', 'C. doesn\'t go', 'D. won\'t go', 'E. haven\'t go'],
            correctAnswer: 1, // B
            points: 6
        },
        {
            id: 11,
            task: 'Vocabulary',
            question: 'I need to _____ my homework before dinner.',
            type: 'multiple-choice',
            options: ['A. make', 'B. do', 'C. take', 'D. have', 'E. get'],
            correctAnswer: 1, // B
            points: 6
        },
        {
            id: 12,
            question: 'She is very _____ - she always helps others.',
            type: 'multiple-choice',
            options: ['A. kind', 'B. kind of', 'C. kindly', 'D. kindness', 'E. kinder'],
            correctAnswer: 0, // A
            points: 6
        },
        {
            id: 13,
            question: 'Can you _____ me the salt, please?',
            type: 'multiple-choice',
            options: ['A. take', 'B. bring', 'C. get', 'D. give', 'E. put'],
            correctAnswer: 3, // D
            points: 6
        },
        {
            id: 14,
            question: 'I\'m _____ tired to go out tonight.',
            type: 'multiple-choice',
            options: ['A. very', 'B. too', 'C. so', 'D. enough', 'E. much'],
            correctAnswer: 1, // B
            points: 6
        },
        {
            id: 15,
            question: 'The weather is _____ today.',
            type: 'multiple-choice',
            options: ['A. sun', 'B. sunny', 'C. sunnier', 'D. sunniest', 'E. sunshine'],
            correctAnswer: 1, // B
            points: 6
        },
        {
            id: 16,
            question: 'I _____ my keys. Can you help me find them?',
            type: 'multiple-choice',
            options: ['A. lost', 'B. lose', 'C. losing', 'D. have lost', 'E. will lose'],
            correctAnswer: 3, // D
            points: 6
        },
        {
            id: 17,
            question: 'She works _____ a teacher at the local school.',
            type: 'multiple-choice',
            options: ['A. as', 'B. like', 'C. for', 'D. with', 'E. to'],
            correctAnswer: 0, // A
            points: 6
        }
    ]
};

export const b1b2Test: Test = {
    id: 'b1-b2',
    title: 'B1-B2 Level Test',
    description: 'Intermediate to Upper-Intermediate English Test',
    totalPoints: 100,
    questions: [
        {
            id: 1,
            task: 'Grammar',
            question: 'If I _____ rich, I would travel around the world.',
            type: 'multiple-choice',
            options: ['A. am', 'B. was', 'C. were', 'D. be', 'E. been'],
            correctAnswer: 2, // C
            points: 6
        },
        {
            id: 2,
            question: 'By next year, I _____ living here for five years.',
            type: 'multiple-choice',
            options: ['A. will be', 'B. will have been', 'C. am', 'D. have been', 'E. was'],
            correctAnswer: 1, // B
            points: 6
        },
        {
            id: 3,
            question: 'The book _____ I bought yesterday is very interesting.',
            type: 'multiple-choice',
            options: ['A. which', 'B. who', 'C. where', 'D. when', 'E. what'],
            correctAnswer: 0, // A
            points: 6
        },
        {
            id: 4,
            question: 'I wish I _____ harder when I was younger.',
            type: 'multiple-choice',
            options: ['A. study', 'B. studied', 'C. had studied', 'D. have studied', 'E. will study'],
            correctAnswer: 2, // C
            points: 6
        },
        {
            id: 5,
            question: 'She suggested _____ to the cinema.',
            type: 'multiple-choice',
            options: ['A. go', 'B. going', 'C. to go', 'D. went', 'E. gone'],
            correctAnswer: 1, // B
            points: 6
        },
        {
            id: 6,
            question: 'The more you practice, _____ you become.',
            type: 'multiple-choice',
            options: ['A. better', 'B. the better', 'C. best', 'D. the best', 'E. good'],
            correctAnswer: 1, // B
            points: 6
        },
        {
            id: 7,
            question: 'He is used to _____ early in the morning.',
            type: 'multiple-choice',
            options: ['A. get up', 'B. getting up', 'C. got up', 'D. gets up', 'E. get up'],
            correctAnswer: 1, // B
            points: 6
        },
        {
            id: 8,
            question: 'I\'d rather _____ at home tonight.',
            type: 'multiple-choice',
            options: ['A. stay', 'B. staying', 'C. stayed', 'D. to stay', 'E. stays'],
            correctAnswer: 0, // A
            points: 6
        },
        {
            id: 9,
            question: 'Not only _____ speak English, but he also speaks French.',
            type: 'multiple-choice',
            options: ['A. he does', 'B. does he', 'C. he', 'D. he can', 'E. can he'],
            correctAnswer: 1, // B
            points: 6
        },
        {
            id: 10,
            question: 'The report _____ by the team last week.',
            type: 'multiple-choice',
            options: ['A. writes', 'B. wrote', 'C. was written', 'D. is written', 'E. writing'],
            correctAnswer: 2, // C
            points: 6
        },
        {
            id: 11,
            task: 'Vocabulary',
            question: 'The company decided to _____ the project due to lack of funds.',
            type: 'multiple-choice',
            options: ['A. cancel', 'B. postpone', 'C. continue', 'D. finish', 'E. start'],
            correctAnswer: 0, // A
            points: 6
        },
        {
            id: 12,
            question: 'She made a significant _____ to the research.',
            type: 'multiple-choice',
            options: ['A. contribute', 'B. contribution', 'C. contributing', 'D. contributed', 'E. contributes'],
            correctAnswer: 1, // B
            points: 6
        },
        {
            id: 13,
            question: 'The meeting was _____ because the manager was ill.',
            type: 'multiple-choice',
            options: ['A. called off', 'B. called on', 'C. called up', 'D. called for', 'E. called in'],
            correctAnswer: 0, // A
            points: 6
        },
        {
            id: 14,
            question: 'He is very _____ about his work - he never makes mistakes.',
            type: 'multiple-choice',
            options: ['A. careful', 'B. careless', 'C. care', 'D. caring', 'E. cared'],
            correctAnswer: 0, // A
            points: 6
        },
        {
            id: 15,
            question: 'We need to _____ a solution to this problem.',
            type: 'multiple-choice',
            options: ['A. find', 'B. find out', 'C. look for', 'D. search', 'E. discover'],
            correctAnswer: 0, // A
            points: 6
        },
        {
            id: 16,
            question: 'The situation is getting _____ complicated.',
            type: 'multiple-choice',
            options: ['A. increase', 'B. increasingly', 'C. increased', 'D. increasing', 'E. increases'],
            correctAnswer: 1, // B
            points: 6
        },
        {
            id: 17,
            question: 'She _____ her mind about moving to another city.',
            type: 'multiple-choice',
            options: ['A. changed', 'B. exchanged', 'C. switched', 'D. turned', 'E. moved'],
            correctAnswer: 0, // A
            points: 6
        }
    ]
};

export const cookingVocabularyTest: Test = {
    id: 'cooking-vocabulary',
    title: 'Cooking Vocabulary',
    description: 'Test your knowledge of cooking terms and kitchen vocabulary',
    totalPoints: 100,
    questions: [
        {
            id: 1,
            question: 'What does it mean to "sauté" vegetables?',
            type: 'multiple-choice',
            options: [
                'A. To cook them in boiling water',
                'B. To cook them quickly in a small amount of oil over high heat',
                'C. To cook them in the oven',
                'D. To cook them on a grill',
                'E. To cook them slowly in a covered pot'
            ],
            correctAnswer: 1, // B
            points: 6
        },
        {
            id: 2,
            question: 'Which tool is used to whisk eggs?',
            type: 'multiple-choice',
            options: [
                'A. A spatula',
                'B. A whisk',
                'C. A ladle',
                'D. A colander',
                'E. A peeler'
            ],
            correctAnswer: 1, // B
            points: 6
        },
        {
            id: 3,
            question: 'What does "dice" mean in cooking?',
            type: 'multiple-choice',
            options: [
                'A. To cut into thin strips',
                'B. To cut into small cubes',
                'C. To cut into round slices',
                'D. To cut into large pieces',
                'E. To cut into long pieces'
            ],
            correctAnswer: 1, // B
            points: 6
        },
        {
            id: 4,
            question: 'What is a "colander" used for?',
            type: 'multiple-choice',
            options: [
                'A. To mix ingredients',
                'B. To drain water from food',
                'C. To measure ingredients',
                'D. To cut vegetables',
                'E. To serve food'
            ],
            correctAnswer: 1, // B
            points: 6
        },
        {
            id: 5,
            question: 'What does "simmer" mean?',
            type: 'multiple-choice',
            options: [
                'A. To cook at a very high temperature',
                'B. To cook at a low temperature just below boiling',
                'C. To cook in the microwave',
                'D. To cook on a grill',
                'E. To cook in an oven'
            ],
            correctAnswer: 1, // B
            points: 6
        },
        {
            id: 6,
            question: 'What is "marinate"?',
            type: 'multiple-choice',
            options: [
                'A. To cook meat quickly',
                'B. To soak food in a seasoned liquid before cooking',
                'C. To cut food into small pieces',
                'D. To mix ingredients together',
                'E. To serve food hot'
            ],
            correctAnswer: 1, // B
            points: 6
        },
        {
            id: 7,
            question: 'What does "grate" mean?',
            type: 'multiple-choice',
            options: [
                'A. To cut into thin slices',
                'B. To reduce food to small shreds using a grater',
                'C. To mix ingredients',
                'D. To cook at high heat',
                'E. To remove the skin from food'
            ],
            correctAnswer: 1, // B
            points: 6
        },
        {
            id: 8,
            question: 'What is a "spatula" used for?',
            type: 'multiple-choice',
            options: [
                'A. To measure liquids',
                'B. To flip or turn food while cooking',
                'C. To cut vegetables',
                'D. To drain pasta',
                'E. To whisk eggs'
            ],
            correctAnswer: 1, // B
            points: 6
        },
        {
            id: 9,
            question: 'What does "braise" mean?',
            type: 'multiple-choice',
            options: [
                'A. To cook quickly in hot oil',
                'B. To cook slowly in a small amount of liquid in a covered pot',
                'C. To cook on a grill',
                'D. To cook in boiling water',
                'E. To cook in the oven without liquid'
            ],
            correctAnswer: 1, // B
            points: 6
        },
        {
            id: 10,
            question: 'What is "mince"?',
            type: 'multiple-choice',
            options: [
                'A. To cut into large chunks',
                'B. To cut into very small pieces',
                'C. To cut into strips',
                'D. To cut into cubes',
                'E. To cut into slices'
            ],
            correctAnswer: 1, // B
            points: 6
        },
        {
            id: 11,
            question: 'What does "blanch" mean?',
            type: 'multiple-choice',
            options: [
                'A. To cook food until it turns white',
                'B. To briefly cook in boiling water then cool in ice water',
                'C. To cook in the oven',
                'D. To cook on a grill',
                'E. To cook slowly in liquid'
            ],
            correctAnswer: 1, // B
            points: 6
        },
        {
            id: 12,
            question: 'What is a "ladle" used for?',
            type: 'multiple-choice',
            options: [
                'A. To cut vegetables',
                'B. To serve soup or liquid',
                'C. To mix ingredients',
                'D. To measure ingredients',
                'E. To drain pasta'
            ],
            correctAnswer: 1, // B
            points: 6
        },
        {
            id: 13,
            question: 'What does "julienne" mean?',
            type: 'multiple-choice',
            options: [
                'A. To cut into cubes',
                'B. To cut into thin matchstick-sized strips',
                'C. To cut into rounds',
                'D. To cut into large pieces',
                'E. To cut into squares'
            ],
            correctAnswer: 1, // B
            points: 6
        },
        {
            id: 14,
            question: 'What is "poach"?',
            type: 'multiple-choice',
            options: [
                'A. To cook in boiling water',
                'B. To cook gently in simmering liquid',
                'C. To cook in hot oil',
                'D. To cook on a grill',
                'E. To cook in the oven'
            ],
            correctAnswer: 1, // B
            points: 6
        },
        {
            id: 15,
            question: 'What does "zest" mean in cooking?',
            type: 'multiple-choice',
            options: [
                'A. The outer colored part of citrus peel',
                'B. The inner white part of citrus',
                'C. The juice of a fruit',
                'D. The seeds of a fruit',
                'E. The pulp of a fruit'
            ],
            correctAnswer: 0, // A
            points: 6
        },
        {
            id: 16,
            question: 'What is a "cutting board" used for?',
            type: 'multiple-choice',
            options: [
                'A. To serve food',
                'B. To provide a surface for cutting food',
                'C. To measure ingredients',
                'D. To mix ingredients',
                'E. To store food'
            ],
            correctAnswer: 1, // B
            points: 6
        },
        {
            id: 17,
            question: 'What does "sear" mean?',
            type: 'multiple-choice',
            options: [
                'A. To cook slowly in liquid',
                'B. To quickly brown the surface of food at high heat',
                'C. To cook in the oven',
                'D. To cook in boiling water',
                'E. To cook on a grill'
            ],
            correctAnswer: 1, // B
            points: 4
        }
    ]
};

export const availableTests: Test[] = [demoTest, eysh2Test, a2b1Test, b1b2Test, cookingVocabularyTest];

