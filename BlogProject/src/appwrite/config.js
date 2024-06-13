import { Client, Databases, Storage,Query } from "appwrite";
import conf from '../conf'

class service {
    client=new Client();
    databases;
    storage;
    query

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectID);
        this.databases=new Databases(this.client)
        this.storage=new Storage(this.client);
        this.query=new Query(this.client)
    }

    async createPost({title,content,slug,images,status,user_id}){
        try {
          return  await this.databases.createDocument(
             conf.appwriteDatabaseID,
             conf.appwriteCollectionID,
             slug,
             {
                title,
                slug,
                images,
                content,
                status,
                user_id
             }


            )
        } catch (
            error
        ) {
            throw error
        }
    }
    async updatePost(slug,{title,content,images,status}){
        try {
          return  await this.databases.updateDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug,
                {
                    title,
                    images,
                    status,
                    content
                }
            )
        } catch (error) {
            throw error
        }
    }

    async deletepost(slug){
 try {
     await this.databases.deleteDocument(
        conf.appwriteDatabaseID,
        conf.appwriteCollectionID,
        slug,
    )
} catch (error) {
    throw error
}
    }
    async getPost(slug){
        try {
          return  await this.databases.getDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug,
            )
        } catch (error) {
            
        }
    }

    async getPosts(query=[Query.equal("status","active")]){
try {
    await this.databases.listDocuments(
        conf.appwriteDatabaseID,
        conf.appwriteCollectionID,
        query
    )
} catch (error) {
    throw error
}
    }

    //file uploading

    async uplaodFile(file){
        try {
 return await this.storage.createFile(
            conf.appwriteBucket,
            ID.unique(),
            file
          )  
        } catch (error) {
            throw error
        }
    }

    async deleteFile(fileid){
        try {
          await this.storage.deleteFile(
            conf.appwriteBucket,
            fileid
            )
        } catch (error) {
            throw error
        }
    }

    async getFilePreview(fileid){
try {
  return this.storage.getFilePreview(
    conf.appwriteBucket,
    fileid
   ) 
} catch (error) {
    throw error
}
    }



}