export function isEmail(mail) 
{
 let regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if (regex.test(mail.trim())){
    return (true)
  }
    // alert("You have entered an invalid email address!")
    return (false)
}
