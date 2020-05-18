class Updater {
    constructor(){
      this.donaterIndex;
      this.donaterName;
      this.donaterPhoneNumber;
      this.donaterEmail;
      this.donaterCrop;
      this.donaterLocation;
      this.donaterCropProductionDate;
      this.donaterCropExpiryDate;
      this.donaterQuantity
      
      this.accepterIndex;
      this.accepterName;
      this.accepterPhoneNumber;
      this.accepterEmail;
      this.accepterCrop;
      this.accepterLocation;
      this.accepterQuantity

    }
    donaterUpdate(){
      var index = "Donaters/donater" + this.donaterIndex;
      database.ref(index).set({

        donaterName:this.donaterName,
        donaterPhoneNumber:this.donaterPhoneNumber,
        donaterEmail:this.donaterEmail,
        donaterCrop:this.donaterCrop,
        donaterLocation:this.donaterLocation,
        donaterCropProductionDate:this.donaterCropProductionDate,
        donaterCropExpiryDate:this.donaterCropExpiryDate,
        donaterQuantity:this.donaterQuantity
        
      });
    }
    accepterUpdate(){
      var index = "Accepters/accepter" + this.accepterIndex;
      database.ref(index).set({
        accepterName:this.accepterName,
        accepterPhoneNumber:this.accepterPhoneNumber,
        accepterEmail:this.accepterEmail,
        accepterCrop:this.accepterCrop,
        accepterLocation:this.accepterLocation,
        accepterQuantity:this.accepterQuantity
      });
    }

    donaterGetCount(){
      var donaterCountRef = database.ref('donaterCount');
      donaterCountRef.on("value",(data)=>{
        donaterCount = data.val();
      })
    }
  
    donaterUpdateCount(count){
      database.ref('/').update({
        donaterCount: count
      });
    }

    accepterGetCount(){
      var accepterCountRef = database.ref('accepterCount');
      accepterCountRef.on("value",(data)=>{
        accepterCount = data.val();
      })
    }
  
    accepterUpdateCount(count){
      database.ref('/').update({
        accepterCount: count
      });
    }
}