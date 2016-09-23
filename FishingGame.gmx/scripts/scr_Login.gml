  u = get_string("Login Name", "Anonymous"); 
 p = get_string("Login Name:"+u+"# Password:", "Anonymous"); 
 
 global.UserName = "u";
 createUser(u,p);
// return global.UserName;
