async function getUsers() {
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("Failed");

        let data = await res.json();

        data.forEach(user => {
            console.log(user.name + " - " + user.email);
        });

    } catch (e) {
        console.log("Error:", e.message);
    } finally {
        console.log("Done");
    }
}

getUsers();