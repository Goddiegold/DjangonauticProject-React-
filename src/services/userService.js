import http from "./httpService";
import jwtDecode from "jwt-decode";

export async function getAllArticles(){
  return await http.get("/articles/")
}

export async function register(user) {
  return await http.post("/users/signup", user);
}

export async function login(user) {
  return await http.post("/users/signin", user);
}

export async function createArticle(article,token) {
  return http.post("/articles", article,{headers:{"auth-token":token}})
};

export function getCurrentUser(token){
  try{
      if(token) return {...jwtDecode(token),token}
      else return null;
    }
    catch(ex){
      console.log(ex)
    }
    }