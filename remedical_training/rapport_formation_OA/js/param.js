function parseQuery() {
    var queryString = window.location.search.substring(1)
    var query = {};
    var pairs = (queryString[0] === '?' ? queryString.substring(1) : queryString).split('&');
    for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split('=');
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    }
    return query;
}

function updateContent() {
    var data = parseQuery();
    var keys = Object.keys(data);
    
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        
        var node = document.getElementById(key);
        if (node) {
            node.innerHTML = data[key];
        }
    }
}

function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[""])[1].replace(/\+/g, '%20'))||null
}

function checkFields(){

    const myvar = getURLParameter('x_total');
    
    if (myvar == 0) {
        document.getElementById('no_benefits').style.display = 'block';
        document.getElementById('with_benefits').style.display = 'none';
    } else {
        document.getElementById('no_benefits').style.display = 'none';
        document.getElementById('with_benefits').style.display = 'block';
    }
    const tab_param = ['x_pain', 'x_sleep', 'x_socialLife', 'x_fatigue', 'x_stiffness', 'x_stress', 'tr_x_mood']
    tab_param.forEach(param => {
        if (getURLParameter(param) == 0) {
            document.getElementById('tr_'+param).style.display = 'none';
        } 
    });

    
}