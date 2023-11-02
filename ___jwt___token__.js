/**
 * 
 * --------------------------
 *  make api secure
 * --------------------------
 * The person who should have
 * 
 * concept:
 * 1. assign two token for each person (access token, refresh token)
 * 2. access token contains: user identification(email,role etc) valid for a shorter duration.
 *  3 . refresh token: is used to recreate an access token that was expired .
 * 4. if refresh is invalid then log out the  user
 * **/ 


/**
 * jwt ----> json web token
 * 
 * generate a token by using jwt.sign
    create api set to cookie . httpOnly,secure,samesite
    from client site : into axios post use withCredential :true
    cors setup origin and credentials
 * */ 

   /**
    * 1. for secure api call
    * 2. on server site: install cookie parser and use it as middlewares
    * 3. then you will get the token in req.cookies
    * 4. on the server site : make api call with axios withCredentials :true
    * or credentials includes while fetch
    * */  