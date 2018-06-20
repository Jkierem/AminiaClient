export default class Cookie {
	static setCookie( name , value , days , path="/"){
		let d = new Date();
    d.setTime(d.getTime() + (days*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = `${name}=${value};${expires};path=${path}`;
	}

	static getCookie( name ){
		let cookieName = name + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(cookieName) === 0) {
            return c.substring(cookieName.length, c.length);
        }
    }
    return "";
	}

	static hasCookie( name ){
		let cookie = Cookie.getCookie( name );
		return cookie !== "";
	}

	static deleteCookie( name , path="/"){
		if( Cookie.checkCookie ){
			Cookie.setCookie(name,"",-1,path);
		}
	}

}
