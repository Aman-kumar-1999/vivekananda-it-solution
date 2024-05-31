import conf from '../conf/conf.js';
import { Client, ID, Databases, Query } from "appwrite";


const data = 
{
  "$id": "658a4709917637cd93fd",
  "$createdAt": "2023-12-26T03:22:49.597+00:00",
  "$updatedAt": "2024-05-31T09:57:54.033+00:00",
  "name": "Aman Kumar",
  "registration": "2023-12-26T03:22:49.595+00:00",
  "status": true,
  "labels": [],
  "passwordUpdate": "2024-05-31T09:57:54.033+00:00",
  "email": "code.a2z.code@gmail.com",
  "phone": "",
  "emailVerification": true,
  "phoneVerification": false,
  "mfa": false,
  "prefs": {},
  "targets": [],
  "accessedAt": "2024-04-28T08:09:18.158+00:00"
}


export class VendorService{
    client = new Client();
    databases;
   
    
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
       
    }

    async createVendor({VendorName, VendorNumber, VendorEmail, VendorRemarks}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                data,
                {VendorName, VendorNumber, VendorEmail, VendorRemarks}
            )
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
        }
    }

    // async updatePost(slug, {title, content, featuredImage, status}){
    //     try {
    //         return await this.databases.updateDocument(
    //             conf.appwriteDatabaseId,
    //             conf.appwriteCollectionId,
    //             slug,
    //             {
    //                 title,
    //                 content,
    //                 featuredImage,
    //                 status,

    //             }
    //         )
    //     } catch (error) {
    //         console.log("Appwrite serive :: updatePost :: error", error);
    //     }
    // }

    // async deletePost(slug){
    //     try {
    //         await this.databases.deleteDocument(
    //             conf.appwriteDatabaseId,
    //             conf.appwriteCollectionId,
    //             slug
            
    //         )
    //         return true
    //     } catch (error) {
    //         console.log("Appwrite serive :: deletePost :: error", error);
    //         return false
    //     }
    // }

    // async getPost(slug){
    //     try {
    //         return await this.databases.getDocument(
    //             conf.appwriteDatabaseId,
    //             conf.appwriteCollectionId,
    //             slug
            
    //         )
    //     } catch (error) {
    //         console.log("Appwrite serive :: getPost :: error", error);
    //         return false
    //     }
    // }

    // async getPosts(queries = [Query.equal("status", "active")]){
    //     try {
    //         return await this.databases.listDocuments(
    //             conf.appwriteDatabaseId,
    //             conf.appwriteCollectionId,
    //             queries,
                

    //         )
    //     } catch (error) {
    //         console.log("Appwrite serive :: getPosts :: error", error);
    //         return false
    //     }
    // }
}


const vendorService = new VendorService()
export default vendorService