window.onload = function() {
    //Find the elements containing the icons beneath each tweet
    var actionItems = document.getElementsByClassName('ProfileTweet-actionList js-actions');


    //Add in icon for Fishie modal
    var buttonInHtml = "<button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">\n" +
        "    Launch demo modal\n" +
        "</button>\n";

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
    Add in action item (button) on each tweet to open modal
     */
    for (var i = 0; i < actionItems.length; i++) {
        actionItems[i].insertAdjacentHTML('beforeend', buttonInHtml);
    }
}
