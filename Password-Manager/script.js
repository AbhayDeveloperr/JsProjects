const deletePass = (website)=>{
    let data = localStorage.getItem("passwords")
    let arr = JSON.parse(data);
    arrUpdated = arr.filter((e)=>{
        return e.website != website
    })
    localStorage.setItem("passwords",JSON.stringify(arrUpdated))
    refreshTable()
}
//Function to refresh table without reloading
const refreshTable = () => {
    let tb = document.querySelector("table")
    let data = localStorage.getItem("passwords")
    // Clear existing rows except headers
    tb.innerHTML = `<tr>
                <th>Website</th>
                <th>Username</th>
                <th>Password</th>
                <th>Delete</th>
            </tr>`
    
    if(data == null){
        tb.innerHTML = "No data to show"
    }
    else{
        let arr = JSON.parse(data);
        let str = ""
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            str += `<tr>
               <td>${element.website}</td>
               <td>${element.username}</td>
               <td>${element.password}</td>
               <td><button class="btnsm" onclick="deletePass('${element.website}')">Delete</button></td>
            </tr>`
        }
        tb.innerHTML = tb.innerHTML + str
    }
}

//Initial load
refreshTable()




console.log("Working...");
document.querySelector(".btn").addEventListener("click",(e)=>{
    e.preventDefault()
    console.log("clicked...")
    console.log(website.value, username.value, password.value)
    let passwords = localStorage.getItem("passwords")
    console.log(passwords)
    if(passwords==null){
        let json = []
        json.push({website:website.value, username:username.value, password:password.value})
        alert("Password Saved")
        localStorage.setItem("passwords",JSON.stringify(json))
    }
    else{
        let json = JSON.parse(localStorage.getItem("passwords"))
        json.push({website:website.value, username:username.value, password:password.value})
        alert("Password Saved")
        localStorage.setItem("passwords",JSON.stringify(json))
    }
    // Clear form and refresh table
    document.querySelector("form").reset()
    refreshTable()
})