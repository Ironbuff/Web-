import {z} from 'zod'



// Schema definition
export const signupschema = z.object({
    username:z.string().min(1,"Username required"),
    email:z.string().email("Invaild Email format"),
    password:z.string()
    .min(6,"Password must be 6 length long")
    .regex(/[a-z]/,"Must be atleast one small letter")
    .regex(/[A-Z]/,"Must be atleast one capital letter")
    .regex(/[!@#$%^&*(){}]/,"Must Contain atleast one Special letter")
    .regex(/[0-9]/,"Must Contain atleast one number"),
    profilePicture:z.any().optional() //file cannot be validated by

})