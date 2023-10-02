const users = [
  {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
  },
  {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
  },
  {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
  },
];
const ol = document.createElement("ol");
users.forEach((element)=> {
const li = document.createElement("li")
li.innerText= ` first name: ${element.firstName} \n Last Name: ${element.lastName} \n email: ${element.email}`
li.setAttribute("data-id", Math.floor(Math.random()*100000))

ol.append(li)

})
const body = document.getElementsByTagName("body")[0]
body.append(ol)

ol.classList.add("orderd")
