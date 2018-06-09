
class facebookPage  {

    name:string
    gender:string
    birthDate:string
    work:string
    education:string
    homeTown:string
    siblings:string[]
    friends:number
    currentCity:string
    mobileNumber:number
    relationShip:string
    emailId:string
    about?:string
    quotes?:string
    

    constructor( name:string, gender:string, birthDate:string,
                 work:string, education:string, homeTown:string,
                 siblings:string[], friends:number, currentCity:string,
                  mobileNumber:number, relationShip:string,
                 emailId:string, about?:string, quotes?:string,
                 )  {
                  
                    this.name = name
                    this.gender = gender
                    this.birthDate = birthDate
                    this.work = work
                    this.education = education
                    this.homeTown = homeTown
                    this.siblings = siblings
                    this.friends = friends
                    this.currentCity=currentCity
                    this.mobileNumber=mobileNumber
                    this.relationShip=relationShip
                    this.emailId=emailId
                    this.about=about
                    this.quotes=quotes
                                     }
    //Getter methods
                   getName = ()=>{
                    return this.name
                }
                getGender = ()=>{
                    return this.gender
                }
                getBirthDate = ()=>{
                    return this.birthDate
                }
                getWork = ()=>{
                    return this.work
                }
                getEducation = ()=>{
                    return this.education
                }
                getHometown = ()=>{
                    return this.homeTown
                }
                getSiblings = ()=>{
                    return this.siblings
                }
                getFriends = ()=>{
                    return this.friends
                }
                getCurrentCity= ()=>{
                    return this.currentCity;
                }
            
                getMobileNo= ()=>{
                    return this.mobileNumber;
                }
                getEmail= ()=>{
                    return this.emailId;
                }
                getRelationship=()=>{
                    return this.relationShip;
                }
                getAbout= () =>{
                    return this.about;
                }
            
                getQuote= () =>{
                    return this.quotes;
                }
                    
             //Properties like relationship, Currentcity, Mobile number that can be modified by setter methods

                setRelationship = (relationShip:string )=>{
                     this.relationShip =relationShip
                }

                setCurrentCity = (currentCity:string) =>{
                    this.currentCity=currentCity
                }

                setMobilenumber = (mobileNumber:number) =>{
                      this.mobileNumber
                }
               }

         let fbPage = new facebookPage("Anurag Ghosh","Male","19 November 1996",
                                      "Edwisor","Saraswati Interational School","Valsad",
                                      ["Shubhankar","Shila","Prakash"],1075,"Thane",8502949312,"Single",
                                      "anuragg1996@gmail.com","Still Learning and will always learn",
                                      "Where there is a will there is a way",)

   
           //display Facebook Page information on console
        
             console.log(`Name: ${fbPage.getName()}`)
             console.log(`Gender: ${fbPage.getGender()}`)
             console.log(`Date Of Birth: ${fbPage.getBirthDate()}`)
             console.log(`Work Profile: ${fbPage.getWork()}`)
             console.log(`Hometown: ${fbPage.getHometown()}`)
             console.log(`Education: ${fbPage.getEducation()}`)
             console.log(`Siblings: ${fbPage.getSiblings()}`)
             console.log(`Total number of friends: ${fbPage.getFriends()}`)
             console.log(`Current city: ${fbPage.getCurrentCity()}`)
             console.log(`Mobile  Number: ${fbPage.getMobileNo()}`)
             console.log(`Email ID: ${fbPage.getEmail()}`)
             console.log(`Relationship: ${fbPage.getRelationship()}`)
             console.log(`About: ${fbPage.getAbout()}`)
             console.log(`Quote: ${fbPage.getQuote()}`)
                 
            //Modified Youtube Page information on console
            
             fbPage.setCurrentCity("Bangalore")
             console.log("City Changed: "+ fbPage.getCurrentCity())
   
             fbPage.setRelationship("Complex")
             console.log("Relationship Status Changed: "+fbPage.getRelationship())
   
             fbPage.setMobilenumber(7990423050)
             console.log("Mobile number Changed: "+fbPage.getMobileNo())
   
   