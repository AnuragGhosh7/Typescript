var facebookPage = /** @class */ (function () {
    function facebookPage(name, gender, birthDate, work, education, homeTown, siblings, friends, currentCity, mobileNumber, relationShip, emailId, about, quotes) {
        var _this = this;
        //Getter methods
        this.getName = function () {
            return _this.name;
        };
        this.getGender = function () {
            return _this.gender;
        };
        this.getBirthDate = function () {
            return _this.birthDate;
        };
        this.getWork = function () {
            return _this.work;
        };
        this.getEducation = function () {
            return _this.education;
        };
        this.getHometown = function () {
            return _this.homeTown;
        };
        this.getSiblings = function () {
            return _this.siblings;
        };
        this.getFriends = function () {
            return _this.friends;
        };
        this.getCurrentCity = function () {
            return _this.currentCity;
        };
        this.getMobileNo = function () {
            return _this.mobileNumber;
        };
        this.getEmail = function () {
            return _this.emailId;
        };
        this.getRelationship = function () {
            return _this.relationShip;
        };
        this.getAbout = function () {
            return _this.about;
        };
        this.getQuote = function () {
            return _this.quotes;
        };
        //Properties like relationship, Currentcity, Mobile number that can be modified by setter methods
        this.setRelationship = function (relationShip) {
            _this.relationShip = relationShip;
        };
        this.setCurrentCity = function (currentCity) {
            _this.currentCity = currentCity;
        };
        this.setMobilenumber = function (mobileNumber) {
            _this.mobileNumber;
        };
        this.name = name;
        this.gender = gender;
        this.birthDate = birthDate;
        this.work = work;
        this.education = education;
        this.homeTown = homeTown;
        this.siblings = siblings;
        this.friends = friends;
        this.currentCity = currentCity;
        this.mobileNumber = mobileNumber;
        this.relationShip = relationShip;
        this.emailId = emailId;
        this.about = about;
        this.quotes = quotes;
    }
    return facebookPage;
}());
var fbPage = new facebookPage("Anurag Ghosh", "Male", "19 November 1996", "Edwisor", "Saraswati Interational School", "Valsad", ["Shubhankar", "Shila", "Prakash"], 1075, "Thane", 8502949312, "Single", "anuragg1996@gmail.com", "Still Learning and will always learn", "Where there is a will there is a way");
//display Facebook Page information on console
console.log("Name: " + fbPage.getName());
console.log("Gender: " + fbPage.getGender());
console.log("Date Of Birth: " + fbPage.getBirthDate());
console.log("Work Profile: " + fbPage.getWork());
console.log("Hometown: " + fbPage.getHometown());
console.log("Education: " + fbPage.getEducation());
console.log("Siblings: " + fbPage.getSiblings());
console.log("Total number of friends: " + fbPage.getFriends());
console.log("Current city: " + fbPage.getCurrentCity());
console.log("Mobile  Number: " + fbPage.getMobileNo());
console.log("Email ID: " + fbPage.getEmail());
console.log("Relationship: " + fbPage.getRelationship());
console.log("About: " + fbPage.getAbout());
console.log("Quote: " + fbPage.getQuote());
//Modified Youtube Page information on console
fbPage.setCurrentCity("Bangalore");
console.log("City Changed: " + fbPage.getCurrentCity());
fbPage.setRelationship("Complex");
console.log("Relationship Status Changed: " + fbPage.getRelationship());
fbPage.setMobilenumber(7990423050);
console.log("Mobile number Changed: " + fbPage.getMobileNo());
