class AccepterForm {
    constructor(){
        this.name = createInput("Name");
        this.email = createInput("Email");
        this.location = createInput("Location");
        this.phoneNumber = createInput("Phone Number");
        this.crop = createInput("Crop");
        this.quantity = createInput("Quantity");
        this.submitButton = createButton("Submit");
    }

    hide(){
        this.name.hide();
        this.email.hide();
        this.location.hide();
        this.phoneNumber.hide();
        this.crop.hide();
        this.quantity.hide();
        this.submitButton.hide();
    }

    show(){
        this.name.show();
        this.email.show();
        this.location.show();
        this.phoneNumber.show();
        this.crop.show();
        this.quantity.show();
        this.submitButton.show();
    }

    async start(){
        var donaterCountRef = await database.ref('donaterCount').once("value");
        if(donaterCountRef.exists()){
          donaterCount = donaterCountRef.val();
          updater.donaterGetCount();
        }
    }

    display(){
        this.name.position(window.innerWidth/2 - 80, window.innerHeight/8);
        this.email.position(window.innerWidth/2 - 80, window.innerHeight/6);
        this.location.position(window.innerWidth/2 - 80, window.innerHeight/5 + 6);
        this.phoneNumber.position(window.innerWidth/2 - 80, window.innerHeight/4);
        this.crop.position(window.innerWidth/2 - 80, window.innerHeight/4 + 30);
        this.submitButton.position(window.innerWidth/2 - 40, window.innerHeight/4 + 60);

        this.submitButton.mousePressed(()=>{

            accepterCount+=1;
            updater.accepterIndex = accepterCount;
            updater.accepterUpdateCount(accepterCount);

            updater.accepterName = this.name.value();
            updater.accepterPhoneNumber = this.phoneNumber.value();
            updater.accepterEmail = this.email.value();
            updater.accepterCrop = this.crop.value();
            updater.accepterLocation = this.location.value();
            updater.accepterQuantity = this.quantity.value();

            updater.accepterUpdate();

            this.hide();

        })

    }

}