
const TWEET_TEXT_CLASS = 'tweet-text'
const TWEET_TEXT_SELECTOR = '.' + TWEET_TEXT_CLASS

/**
 *
 * @param tweet
 * @returns the textContent of the tweet as a String. does not return the link
 *  OR
 *  @returns undefined if the tweet does not have the tweet text dom element
 */
function getTextFromTweet(tweet){
    const tweetTextDom = tweet.querySelector(TWEET_TEXT_SELECTOR)
    if (!tweetTextDom) {
        console.error('there is no tweettext for ', tweet)
        return
    }
    const tweetText = tweetTextDom.textContent
    return tweetText;
}

/**
 *
 * @param tweet
 * @returns the link of the tweet as a String
 *  OR
 *  @returns undefined if the tweet has no link or no tweet text element
 */
function getLinkFromTweet(tweet){
    const tweetTextDom = tweet.querySelector(TWEET_TEXT_SELECTOR)
    if (!tweetTextDom) {
        console.error('getLinkfromtweet no tweetTextDom found for ', tweet)
        return
    }
    const tweetTextDomLink = tweetTextDom.querySelector('a')
    if (!tweetTextDomLink) {
        return
    }
    const tweetLinkText = tweetTextDomLink.getAttribute('data-expanded-url')
    return tweetLinkText
}
/**
 *
 * @param tweet
 * @returns the userId of the tweet as a String
 */
function getUserIdFromTweet(tweet){
    const dataUserId = tweet.getAttribute('data-user-id')
    return dataUserId
}


window.onload = function() {



    //Add in icon for Fishie modal
    /*
    !!!!!!!!!!!!1REPLACE 'icons/icon48.png'!!!!!!!!!!!!!!!!!!!111
     */
    var iconImg = document.createElement('img');
    iconImg.setAttribute('src', 'https://cdn4.iconfinder.com/data/icons/car-tools/512/Maintenance-48.png'); //temporary

    var modalInHtml = "<!-- Modal -->\n" +
        "    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n" +
        "        <div class=\"modal-content\">\n" +
        "            <div class=\"modal-header\">\n" +
        "                <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Modal title</h5>\n" +
        "                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n" +
        "                    <span aria-hidden=\"true\">&times;</span>\n" +
        "                </button>\n" +
        "            </div>\n" +
        "            <div class=\"modal-body\">\n" +
        "                ...\n" +
        "            </div>\n" +
        "            <div class=\"modal-footer\">\n" +
        "                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n" +
        "                <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </div>\n";

    /*
    Add in necessary link and scripts for bootstrap
     */
    if (!document.getElementById('newLink')) {
        var link = document.createElement('link');
        link.id = 'newLink';
        link.rel = 'stylesheet';
        link.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css';
        link.integrity = 'sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4';
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
    }

    if (!document.getElementById('newScript')) {

        //instantiate bootstrap scripts
        var script1 = document.createElement('script');
        script1.id = 'newScript';
        script1.src = 'https://code.jquery.com/jquery-3.3.1.slim.min.js';
        script1.integrity = 'sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo';
        script1.crossOrigin= 'anonymous';

        var script2 = document.createElement('script');
        script2.id = 'newScript';
        script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js';
        script2.integrity = 'sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ';
        script2.crossOrigin= 'anonymous';

        var script3 = document.createElement('script');
        script3.id = 'newScript';
        script3.src = 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js';
        script3.integrity = 'sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm';
        script3.crossOrigin= 'anonymous';

        //append scripts
        document.body.appendChild(script1);
        document.body.appendChild(script2);
        document.body.appendChild(script3);
    }

    /*
    Add in modal, which should be hidden based on bootstrap CSS
     */

    if (!document.getElementById('newModal')) {
        var modal = document.createElement("div");
        modal.className = "modal fade";
        modal.id = "exampleModalCenter";
        modal.tabIndex = "-1";

        modal.setAttribute("role", "dialog");
        modal.setAttribute("aria-labelledby","exampleModalCenterTitle");
        modal.setAttribute("aria-hidden","true");
        modal.setAttribute("style","{position: absolute}")

        //insert the rest of the modal
        modal.innerHTML = modalInHtml;
        document.body.appendChild(modal);
    }

    /*
    Iterate through tweet objects, do the following:

    1) Find user, message, and source for each tweet
    2) Insert button with id = i.toString() for each tweet
     */

    var users = [];
    var messages = [];
    var sources = [];

    var items = document.getElementsByClassName('tweet');
    for(var i=0;i<items.length;i++) {

        //Collect the necessary information from each tweet
        var it = items[i];
        users.push(getUserIdFromTweet(it));
        messages.push(getTextFromTweet(it));
        sources.push(getLinkFromTweet(it));

        //Add in button to action items row in the HTML
        var iconButton = document.createElement('button');

        //Set attributes for button
        iconButton.setAttribute('id', i.toString());  //This allows indexing buttons along with the parameters for onClick
        iconButton.setAttribute('type', 'button');
        iconButton.setAttribute('class', 'btn btn-primary');
        iconButton.setAttribute('data-toggle', 'modal');
        iconButton.setAttribute('data-target', '#exampleModalCenter');

        //add icon image to the button
        iconButton.appendChild(iconImg);

        it.getElementsByClassName('ProfileTweet-actionList js-actions')[0].appendChild(iconButton);


    }
}
