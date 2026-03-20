//contact book
let contacts = [
{name:'Keerthana',mobile:8904176932,isFav:false},
{name:'Vindhu',mobile:9988776623,isFav:false},
{name:'Anusha',mobile:1234231236,isFav:true},
{name:'Shabhudin',mobile:8754679281,isFav:true},
{name:'Kiran',mobile:3456234578,isFav:false},

{name:'Rakesh',mobile:9876543210,isFav:true},
{name:'Rahul',mobile:9123456780,isFav:false},
{name:'Sneha',mobile:9988123456,isFav:false},
{name:'Pooja',mobile:9871204567,isFav:true},
{name:'Aman',mobile:9129087765,isFav:false},

{name:'Naveen',mobile:9012345678,isFav:false},
{name:'Rohit',mobile:9098765432,isFav:true},
{name:'Priya',mobile:9345612780,isFav:false},
{name:'Divya',mobile:9876541203,isFav:false},
{name:'Arjun',mobile:9001122334,isFav:true},

{name:'Manoj',mobile:9112233445,isFav:false},
{name:'Deepak',mobile:9223344556,isFav:false},
{name:'Karthik',mobile:9334455667,isFav:true},
{name:'Harsha',mobile:9445566778,isFav:false},
{name:'Varun',mobile:9556677889,isFav:false},

{name:'Sanjay',mobile:9667788990,isFav:true},
{name:'Akash',mobile:9778899001,isFav:false},
{name:'Ravi',mobile:9889900112,isFav:false},
{name:'Vijay',mobile:8990011223,isFav:true},
{name:'Ajay',mobile:9001122335,isFav:false},

{name:'Nikhil',mobile:9112233446,isFav:false},
{name:'Suresh',mobile:9223344557,isFav:true},
{name:'Mahesh',mobile:9334455668,isFav:false},
{name:'Lokesh',mobile:9445566779,isFav:false},
{name:'Ganesh',mobile:9556677890,isFav:true},

{name:'Chandan',mobile:9667788901,isFav:false},
{name:'Abhishek',mobile:9778899012,isFav:false},
{name:'Tarun',mobile:9889900123,isFav:true},
{name:'Kunal',mobile:8990011234,isFav:false},
{name:'Tejas',mobile:9001122345,isFav:false},

{name:'Bhavya',mobile:9112233456,isFav:true},
{name:'Nandini',mobile:9223344567,isFav:false},
{name:'Aishwarya',mobile:9334455678,isFav:false},
{name:'Swathi',mobile:9445566789,isFav:true},
{name:'Lakshmi',mobile:9556677891,isFav:false},

{name:'Megha',mobile:9667788902,isFav:false},
{name:'Ritu',mobile:9778899013,isFav:true},
{name:'Shreya',mobile:9889900124,isFav:false},
{name:'Neha',mobile:8990011235,isFav:false},
{name:'Kavya',mobile:9001122346,isFav:true},

{name:'Siddharth',mobile:9112233457,isFav:false},
{name:'Aditya',mobile:9223344568,isFav:false},
{name:'Yash',mobile:9334455679,isFav:true},
{name:'Pranav',mobile:9445566790,isFav:false},
{name:'Darshan',mobile:9556677892,isFav:false}
];

//craete
function addContact(name,mobile,isFav=false){
    let exists =  contacts.some(c => c.name === name); // true/false
    if(exists){
         console.log("Name already exists!!");
         return;
    }

    let contact = {
        name : name,
        mobile : mobile,
        isFav : isFav

    }
    contacts.push(contact);
    console.log(`added contact successfully..`);
}


//update 
function updateContact(name, newName, newMobile, newIsFav=false){

    let contact = contacts.find(c=>c.name == name);
    if(!contact){
        console.log("contact not present");
        return;
    }

    contact.name = newName;
    contact.mobile = newMobile;
    contact.isFav = newIsFav;

    console.log("contact updated successfully..")
}

//serach contact
function searchContact(name){
    let updateContact = contacts.findIndex(c=>c.name === name);
    if(updateContact == -1){
        console.log("contact not found");
        return;
    }
    console.log(`contact found at index  :${updateContact} `);
    // console.log(found);
}

//delete contact
function deleteContact(name){

    let index = contacts.findIndex(c => c.name === name);
    if(index === -1){
        console.log("Contact not found");
        return;
    }

    contacts.splice(index,1); //start, deleteCount
    console.log("Contact deleted successfully");
}

//sort all contacts
function sortByName(){
    let sortedContacts = [...contacts].sort((a,b)=> a.name.localeCompare(b.name));
    console.log(sortedContacts);
}


sortByName();

// console.log(contacts);
// addContact("jeo",8765786468,false);
// updateContact("vindhu", "vindhushree", 7687654578, true);
// searchContact("Vindhu");
// deleteContact("anusha");
// console.log(contacts);
