function navigateTo(pageIndex) {
    let data = JSON.stringify({"action": "navigate", "page": pageIndex});
    if (window.navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
        const messageHandlers = window.webkit.messageHandlers;
        if (messageHandlers) {
            messageHandlers.callbackHandler.postMessage(data);
        }
    }
    if (navigator.userAgent.match(/Android/i)) {
        Android.sendData(data);
    }
}

function finishTherapeuticLearn() {
    let data = JSON.stringify({"action": "finishTherapeuticLearn"});
    if (window.navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
        const messageHandlers = window.webkit.messageHandlers;
        if (messageHandlers) {
            messageHandlers.callbackHandler.postMessage(data);
        }
    }
    if (navigator.userAgent.match(/Android/i)) {
        Android.sendData(data);
    }   
}