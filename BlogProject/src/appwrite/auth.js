import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf"

export class Authservice{
  client=new Client()
 account;
   constructor(){
    this.client
         .setEndpoint(conf.appwriteUrl)
         .setProject(conf.appwriteProjectID);
      this.acccont=new Account(this.client)
   }
 async createAccount({email,password,name}){
               try {
              const useraccount= await this.account.create(ID.unique(),email,password,name)
if(useraccount) return this.login({email,password})
    else return useraccount
               } catch (error) {
                throw error
               }
   }

   async login({email,password}){
    try {
        return this.account.createEmailPasswordSession(email,password) 
    } catch (error) {
        throw error
    }
   }

   async currentUser(){
  try {
     return await this.acccont.get()
  } catch (error) {
    throw error
  }
  return null
   }
   async logout(){
    try {
       return await this.acccont.deleteSessions() //deletes sessions for all browsers
    } catch (error) {
        throw error
    }

   }
}

 export const authservice=new Authservice()
