export const checkValidate = (email,password,name)=>{
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    const isNameValid = /^[A-Z][a-z]+(?:\s[A-Z][a-z]+)*$/.test(name)


    if(!isEmailValid) return 'Email ID is not valid'
    if(!isPasswordValid) return 'Password is not valid'
    if(!isNameValid) return 'Name is not valid'
    //if both of them are valid then return null
    return null

}