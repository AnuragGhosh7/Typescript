
class youtubePage  {

 videoTitle:string 
 channelName:string
 totalViews:string
 totalLikes:number
 totalDislikes:number
 totalSubscribers:number
 autoplay:Boolean
 datePublished:string
 RelatedVideos:string[]
 
 constructor( videoTitle:string, channelName:string, totalViews:string, 
              totalLikes:number,  totalDislikes:number, totalSubscribers:number, 
              autoplay:Boolean, datePublished:string,  RelatedVideos:string[])  {
               
                this.videoTitle=videoTitle 
                this.channelName=channelName
                this.totalViews=totalViews
                this.totalLikes=totalLikes
                this.totalDislikes=totalDislikes
                this.totalSubscribers=totalSubscribers
                this.autoplay=autoplay
                this.datePublished=datePublished
                this.RelatedVideos = RelatedVideos             
              }
             //Getter methods
              getVideoTitle=()=>{
                return this.videoTitle
              }

              getChannelName =()=>{
                return this.channelName
              }
              
              getTotalviews =()=>{
                return this.totalViews
              }

              getTotalLikes =()=>{
                return this.totalLikes
              }
              getTotalDislikes =()=>{
                return this.totalDislikes
              }
              getTotalSubscribers =()=>{
                return this.totalSubscribers
              }
             
              getDatePublished = () =>{
                return this.datePublished
              }

              getRelatedVideos =() =>{
                return this.RelatedVideos
              }
             
              //getter method for getting boolean method
              willAutoplay = () =>{
                return this.autoplay
              }
              
              //Properties like views, dislikes, likes that can be modified by setter methods
               
              setViews = (totalViews:string) =>{
                 this.totalViews = totalViews
               }
               
               setLikes = (totalLikes:number) =>{
                 this.totalLikes = totalLikes
               }

               setDislikes = (totalDislikes:number)=>{
                 this.totalDislikes = totalDislikes
               }
            }
      let Page = new youtubePage("All is Well | 3 idiots | Aamir Khan","TSeries","60647877 views",
                                  121000,140000,4786952, true,"Aug 3 2012",["Behti Hawa Sa Tha Woh",
                                  "Zoobi Doobi","Jaane nahi","Give me some sunshine"])

        //display Youtube Page information on console

          console.log(`Video Title: ${Page.getVideoTitle()}`)
          console.log(`Channel Name: ${Page.getChannelName()}`)
          console.log(`Number of views: ${Page.getTotalviews()}`)
          console.log(`Number of Likes: ${Page.getTotalLikes()}`)
          console.log(`Number of Dislikes: ${Page.getTotalDislikes()}`)
          console.log(`Number of Subscribers: ${Page.getTotalSubscribers()}`)
          console.log(`autoPlay: ${Page.willAutoplay()}`)
          console.log(`Published Date: ${Page.getDatePublished()}`)
          console.log(`Related Videos: ${Page.getRelatedVideos()}`)
  
          //Modified Youtube Page information on console
          Page.setViews("61647877 views")
          console.log("Views Changed: "+ Page.getTotalviews())

          Page.setLikes(131200)
          console.log("Likes Changed: "+Page.getTotalLikes())

          Page.setDislikes(141410)
          console.log("Dislikes Changed: "+Page.getTotalDislikes())

