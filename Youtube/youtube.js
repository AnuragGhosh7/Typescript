var youtubePage = /** @class */ (function () {
    function youtubePage(videoTitle, channelName, totalViews, totalLikes, totalDislikes, totalSubscribers, autoplay, datePublished, RelatedVideos) {
        var _this = this;
        //Getter methods
        this.getVideoTitle = function () {
            return _this.videoTitle;
        };
        this.getChannelName = function () {
            return _this.channelName;
        };
        this.getTotalviews = function () {
            return _this.totalViews;
        };
        this.getTotalLikes = function () {
            return _this.totalLikes;
        };
        this.getTotalDislikes = function () {
            return _this.totalDislikes;
        };
        this.getTotalSubscribers = function () {
            return _this.totalSubscribers;
        };
        this.getDatePublished = function () {
            return _this.datePublished;
        };
        this.getRelatedVideos = function () {
            return _this.RelatedVideos;
        };
        //getter method for getting boolean method
        this.willAutoplay = function () {
            return _this.autoplay;
        };
        //Properties like views, dislikes, likes that can be modified by setter methods
        this.setViews = function (totalViews) {
            _this.totalViews = totalViews;
        };
        this.setLikes = function (totalLikes) {
            _this.totalLikes = totalLikes;
        };
        this.setDislikes = function (totalDislikes) {
            _this.totalDislikes = totalDislikes;
        };
        this.videoTitle = videoTitle;
        this.channelName = channelName;
        this.totalViews = totalViews;
        this.totalLikes = totalLikes;
        this.totalDislikes = totalDislikes;
        this.totalSubscribers = totalSubscribers;
        this.autoplay = autoplay;
        this.datePublished = datePublished;
        this.RelatedVideos = RelatedVideos;
    }
    return youtubePage;
}());
var Page = new youtubePage("All is Well | 3 idiots | Aamir Khan", "TSeries", "60647877 views", 121000, 140000, 4786952, true, "Aug 3 2012", ["Behti Hawa Sa Tha Woh",
    "Zoobi Doobi", "Jaane nahi", "Give me some sunshine"]);
//display Youtube Page information on console
console.log("Video Title: " + Page.getVideoTitle());
console.log("Channel Name: " + Page.getChannelName());
console.log("Number of views: " + Page.getTotalviews());
console.log("Number of Likes: " + Page.getTotalLikes());
console.log("Number of Dislikes: " + Page.getTotalDislikes());
console.log("Number of Subscribers: " + Page.getTotalSubscribers());
console.log("autoPlay: " + Page.willAutoplay());
console.log("Published Date: " + Page.getDatePublished());
console.log("Related Videos: " + Page.getRelatedVideos());
//Modified Youtube Page information on console
Page.setViews("61647877 views");
console.log("Views Changed: " + Page.getTotalviews());
Page.setLikes(131200);
console.log("Likes Changed: " + Page.getTotalLikes());
Page.setDislikes(141410);
console.log("Dislikes Changed: " + Page.getTotalDislikes());
