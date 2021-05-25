class Question1 {

    constructor() {
      this.title = createElement('h1')
      this.input3 = createInput("Enter Your Name Here....");
      this.input4 = createInput("Enter Correct Option No..");
      this.button1 = createButton('Submit');
      this.question1 = createElement('h3');
      this.option5 = createElement('h4');
      this.option6 = createElement('h4');
      this.option7 = createElement('h4');
      this.option8 = createElement('h4');
    }
  
    hide(){
      this.title.hide();
      this.input3.hide();
      this.button1.hide();
      this.input4.hide();
    }
  
    display(){
      this.title.html("");
      this.title.position(350, 0);
  
      this.question1.html("Question:- What is the capital city of Spain" );
      this.question1.position(850, 80);
      this.option5.html("1: Barcelona " );
      this.option5.position(850, 100);
      this.option6.html("2: Madrid" );
      this.option6.position(850, 120);
      this.option7.html("3: Seville " );
      this.option7.position(850, 140);
      this.option8.html("4: Granada" );
      this.option8.position(850, 160);
  
      this.input3.position(850, 230);
      this.input4.position(1050, 230);
      this.button1.position(990, 300);
  
      this.button1.mousePressed(()=>{
        //this.title.hide();
        this.input3.hide();
        this.input4.hide();
        this.button1.hide();
        contestant.name = this.input3.value();
        contestant.answer = this.input4.value();
        contestantCount+=1;
        contestant.index = contestantCount;
        contestant.update();
        contestant.updateCount(contestantCount);
      });
    }
  }
  