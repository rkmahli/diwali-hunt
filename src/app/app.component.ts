import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private states: any = ['fresh', 'a', 'b'];
  public state = 'fresh';
  public codeField: any;
  public answerField: any;
  public selectedData: any;

  constructor() {
  }


  private quizData = [
    {
      code: '1O07',
      serial: '22',
      question: 'ZUBDZWRO: Trendy word',
      answer: 'BUZZWORD',
      hint: 'Standing with a book and a torch'
    },
    {
      code: '7EBT',
      serial: '7',
      question: 'What comes once in a minute, twice in a moment, but never in a thousand years?',
      answer: 'M',
      hint: 'Red thing near the entrance'
    },
    {
      code: 'DVCK',
      serial: '33',
      question: 'Number Puzzle',
      image: 'assets/np1.jpg',
      answer: '13',
      hint: 'A white board, 179179'
    },
    {
      code: 'T2T5',
      serial: '3',
      question: 'Choose the correct path',
      image: 'assets/pp1.jpg',
      answer: 'D',
      hint: 'A big, deep-blue board'
    },
    {
      code: 'KWC0',
      serial: '16',
      question: 'What has 88 keys but can’t open a single door?',
      answer: 'Piano',
      hint: 'Disney\'s minion on a desk'
    },
    {
      code: 'PTUG',
      serial: '1',
      question: 'Sum across each row, column and diagonal should be equal to the mentioned value. Enter the missing numbers without spaces.',
      image: 'assets/ms1.jpg',
      answer: '2741',
      hint: 'This was the final puzle. Please inform the organizers.'
    },

    {
      code: 'KWMF',
      serial: '6',
      question: 'ABZDZIRL: Snowstorm',
      answer: 'BLIZZARD',
      hint: 'Go to the toy store'
    },
    {
      code: 'N0LO',
      serial: '18',
      question: 'What is full of holes but still holds water?',
      answer: 'Sponge',
      hint: 'You are suddenly feeling thirsty'
    },
    {
      code: 'I6BV',
      serial: '20',
      question: 'Number Puzzle 2',
      image: 'assets/np2.jpg',
      answer: '16',
      hint: 'Corner of the ODC'
    },
    {
      code: 'WISH',
      serial: '10',
      question: 'Path Puzzle',
      image: 'assets/pp2.png',
      answer: 'B',
      hint: 'A really big trophy. Not near the television'
    },
    {
      code: '0AA3',
      serial: '31',
      question: 'What begins when things end and ends all things that begin?',
      answer: 'Death',
      hint: 'Room with India in it'
    },
    {
      code: 'RPBK',
      serial: '14',
      question: 'Sum across each row, column and diagonal should be equal to the mentioned value. Enter the missing numbers without spaces.',
      image: 'assets/ms2.jpg',
      answer: '4371',
      hint: 'This was the final puzle. Please inform the organizers.'
    },


    {
      code: 'RHDX',
      serial: '19',
      question: 'AMKZAEIK: Japanese airplane pilot',
      answer: 'KAMIKAZE',
      hint: 'Fire near the washroom'
    },
    {
      code: 'WD2U',
      serial: '35',
      question: 'I have a trunk but I\'m not an elephant',
      answer: 'Tree',
      hint: 'Diwali celebrations runners up!'
    },
    {
      code: '34AP',
      serial: '8',
      question: 'Number Puzzle 3',
      image: 'assets/np3.jpg',
      answer: '6',
      hint: '486878\'s table'
    },
    {
      code: 'ZIOQ',
      serial: '17',
      question: 'Path Puzzle',
      image: 'assets/pp3.jpg',
      answer: 'C',
      hint: 'Sword and ____'
    },
    {
      code: 'J6A8',
      serial: '2',
      question: 'What do you call a snowman in summer?',
      answer: 'Water',
      hint: 'GRM US PL Operations Products'
    },
    {
      code: 'YV92',
      serial: '34',
      question: 'Sum across each row, column and diagonal should be equal to the mentioned value. Enter the missing numbers without spaces.',
      image: 'assets/ms3.jpg',
      answer: '582',
      hint: 'This was the final puzle. Please inform the organizers.'
    },


    {
      code: '0H44',
      serial: '23',
      question: 'TJIOKCYS: Controller',
      answer: 'JOYSTICK',
      hint: 'A board showing university in diversity'
    },
    {
      code: 'J0RM',
      serial: '4',
      question: 'You can walk on me all day but never get anywhere!',
      answer: 'Treadmill',
      hint: 'On a pillar'
    },
    {
      code: 'PE7C',
      serial: '24',
      question: 'Number Puzzle 4',
      image: 'assets/np4.jpg',
      answer: '40',
      hint: 'Hardcopy'
    },
    {
      code: '94XH',
      serial: '9',
      question: 'Path Puzzle',
      image: 'assets/pp4.jpg',
      answer: 'A',
      hint: 'Snowman sticking to a cubicle wall'
    },
    {
      code: 'UB95',
      serial: '13',
      question: 'What has a face and two hands but no arms or legs?',
      answer: 'Clock',
      hint: 'When the going gets tough, the tough get going'
    },
    {
      code: 'H83Z',
      serial: '36',
      question: 'Sum across each row, column and diagonal should be equal to the mentioned value. Enter the missing numbers without spaces.',
      image: 'assets/ms4.jpg',
      answer: '7486',
      hint: 'This was the final puzle. Please inform the organizers.'
    },


    {
      code: 'BGVC',
      serial: '77',
      question: 'EISOREXC: The right thing to do to a ghost',
      answer: 'EXORCISE',
      hint: 'Where ships go plus an organ on your face'
    },
    {
      code: '1LRI',
      serial: '11',
      question: 'Take off my skin and I won’t cry, but you will, what am I?',
      answer: 'Onion',
      hint: 'A picture of Mecca on a cubicle wall'
    },
    {
      code: '9LCY',
      serial: '25',
      question: 'Number Puzzle 5',
      image: 'assets/np5.jpg',
      answer: '9',
      hint: 'Liberty Mutual Runner Up 2018 CII Target Achievement Award'
    },
    {
      code: '3NJU',
      serial: '44',
      question: 'Path Puzzle',
      image: 'assets/pp5.jpg',
      answer: 'C',
      hint: 'Availability 997'
    },
    {
      code: 'OH9L',
      serial: '37',
      question: 'What word is spelled wrong in every dictionary?',
      answer: 'Wrong',
      hint: 'Clean up time'
    },
    {
      code: 'YEI6',
      serial: '15',
      question: 'Sum across each row, column and diagonal should be equal to the mentioned value. Enter the missing numbers without spaces.',
      image: 'assets/ms5.jpg',
      answer: '91110',
      hint: 'This was the final puzle. Please inform the organizers.'
    },


    {
      code: '5N9H',
      serial: '5',
      question: 'KEELSTNO: Keeps us firm',
      answer: 'SKELETON',
      hint: 'Birth place of a very famous, once richest man in Earth'
    },
    {
      code: 'T5Y0',
      serial: '12',
      question: 'Take off my skin and I won’t cry, but you will, what am I?I have cities but no houses. I have mountains but no trees. I have water but no fish.',
      answer: 'Map',
      hint: 'Ask 724447'
    },
    {
      code: 'GWMG',
      serial: '99',
      question: 'Number Puzzle 6',
      image: 'assets/np6.jpg',
      answer: '9',
      hint: 'Aim for Bala\'s place'
    },
    {
      code: 'FNU8',
      serial: '30',
      question: 'Path Puzzle',
      image: 'assets/pp6.jpg',
      answer: 'A',
      hint: 'Shred your papers here'
    },
    {
      code: '1G8S',
      serial: '32',
      question: 'What is seen at the middle of March and April that can\'t be seen at the beginning or end of either month?',
      answer: 'R',
      hint: 'Amudha\'s biggest fan'
    },
    {
      code: 'LFBL',
      serial: '21',
      question: 'Sum across each row, column and diagonal should be equal to the mentioned value. Enter the missing numbers without spaces.',
      image: 'assets/ms6.jpg',
      answer: '91110',
      hint: 'This was the final puzle. Please inform the organizers.'
    }
  ];




    public findData() {
      const temp = this.quizData.find(element => {
        return String(element.code).toLowerCase() === String(this.codeField).toLowerCase();
      });
      if (!temp) {
        alert('Code not found!');
      } else {
        this.selectedData = temp;
        this.state = 'a';
      }
  }

  public verify() {
    if (String(this.answerField).toLowerCase() === String(this.selectedData.answer).toLowerCase()) {
      this.state = 'b';
    } else {
      alert('Incorrect!');
    }
  }

  public refresh() {
    this.state = 'fresh';
    this.answerField = undefined;
    this.codeField = undefined;
    this.selectedData = undefined;
  }
}

