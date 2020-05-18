
var database;

var donaterForm;
var accepterForm;
var updater;

var donaterCount;
var accepterCount;

var accepterButton;
var donaterButton;

var backButton;

function setup() {
  createCanvas(
    window.innerWidth,
    window.innerHeight
  );
  
  database = firebase.database();

  donaterForm = new DonaterForm();
  accepterForm = new AccepterForm();

  updater = new Updater();

  accepterButton = createButton("Be an Accepter");
  donaterButton = createButton("Be a Donater");

  backButton = createButton("Back");

}

function draw() {
  background(0);

  accepterButton.position(window.innerWidth/2 - 80 - 80,window.innerHeight/2 - 5);
  donaterButton.position(window.innerWidth/2 - 80 + 80,window.innerHeight/2 - 5);
  backButton.position(window.innerWidth/2 - 50,window.innerHeight/2 + 80);

  // accepterForm.display();
  // donaterForm.display();

  accepterForm.hide();
  donaterForm.hide();
  backButton.hide();

  donaterButton.mousePressed(()=>{

    donaterForm.start();

    backButton.show();

    accepterButton.hide();
    donaterButton.hide();

    donaterForm.display();

    backButton.mousePressed(()=>{

      backButton.hide()
      donaterForm.hide();

      accepterButton.show();
      donaterButton.show();
  
    });

  });

  accepterButton.mousePressed(()=>{

    backButton.show();

    accepterButton.hide();
    donaterButton.hide();

    accepterForm.display();

    backButton.mousePressed(()=>{

      backButton.hide()
      accepterForm.hide();

      accepterButton.show();
      donaterButton.show();
    });

  });

  drawSprites();
}

