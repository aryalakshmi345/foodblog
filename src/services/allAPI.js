import { BASE_URL } from "./baseurl";
import { commonAPI } from "./commonAPI";

// register
export const registerAPI = async(user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/register`,user,"")
}

// login
export const loginAPI = async(user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/login`,user,"")
}

// addblog
export const addBlogAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${BASE_URL}/blog/add`,reqBody,reqHeader)
}

// homeblogs 
export const homeBlogAPI = async()=>{
    return await commonAPI("GET",`${BASE_URL}/blogs/home-blogs`,"","")
}
// allblogs
export const allBlogAPI = async(searchKey,reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/blogs/all-blogs?search=${searchKey}`,"",reqHeader)
}

// userpblogs
export const userBlogAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/user/all-blogs`,"",reqHeader)
}

// getablog
export const getABlogAPI = async(blogId)=>{
    return await commonAPI("GET",`${BASE_URL}/blogs/view/${blogId}`,"","")
}

// getuserProfile
export const getUserProfileAPI = async(id)=>{
    return await commonAPI("GET",`${BASE_URL}/user/view/${id}`,"","")
}

// getprofileblogs
export const getUserBlogsAPI = async(id)=>{
    return await commonAPI("GET",`${BASE_URL}/user/blogs/${id}`,"","")
}

// editblog
export const editABlogAPI = async(blogId,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${BASE_URL}/blogs/edit/${blogId}`,reqBody,reqHeader)
}

// deleteblog
export const deleteBlogAPI = async(blogId,reqHeader)=>{
    return await commonAPI("DELETE",`${BASE_URL}/blogs/remove/${blogId}`,{},reqHeader)
}

// editblog
export const editProfileAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${BASE_URL}/user/edit`,reqBody,reqHeader)
}
