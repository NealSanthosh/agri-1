class DonaterForm {
    constructor(){
        this.name = createInput("Name");
        this.email = createInput("Email");
        this.location = createInput("Location");
        this.phoneNumber = createInput("Phone Number");
        this.crop = createInput("Crop");
        this.quantity = createInput("Quantity");
        this.productionDate = createInput("Production Date");
        this.expiryDate = createInput("Expiry Date");
        this.submitButton = createButton("Submit");
    }

    hide(){
        this.name.hide();
        this.email.hide();
        this.location.hide();
        this.phoneNumber.hide();
        this.crop.hide();
        this.quantity.hide();
        this.productionDate.hide();
        this.expiryDate.hide();
        this.submitButton.hide();
    }

    show(){
        console.log("hi");
        this.name.show();
        this.email.show();
        this.location.show();
        this.phoneNumber.show();
        this.crop.show();
        this.quantity.show();
        this.productionDate.show();
        this.expiryDate.show();
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
        this.quantity.position(window.innerWidth/2 - 80, window.innerHeight/3);
        this.productionDate.position(window.innerWidth/2 - 80, window.innerHeight/3 + 30);
        this.expiryDate.position(window.innerWidth/2 - 80, window.innerHeight/3 + 60);
        this.submitButton.position(window.innerWidth/2 - 40, window.innerHeight/3 + 60 + 40);

        this.submitButton.mousePressed(()=>{

            donaterCount+=1;
            updater.donaterIndex = donaterCount;
            updater.donaterUpdateCount(donaterCount);

            updater.donaterName = this.name.value();
            updater.donaterPhoneNumber = this.phoneNumber.value();
            updater.donaterEmail = this.email.value();
            updater.donaterCrop = this.crop.value();
            updater.donaterLocation = this.location.value();
            updater.donaterCropProductionDate = this.productionDate.value();
            updater.donaterCropExpiryDate = this.expiryDate.value();
            updater.donaterQuantity = this.quantity.value();

            updater.donaterUpdate();

            this.hide();

        })

    }

}