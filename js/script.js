const randomFolks = document.querySelector(".random-peeps");
const selectUserNumber = document.querySelector("select");

const getData = async function(numUser){
    const usersRequest = await fetch(`https://randomuser.me/api?results=${numUser}`);
    const data = await usersRequest.json();
    const userResults = data.results;
    //console.log(userResults);
    displayUsers(userResults);
  
};

getData(1);

const displayUsers = function(userResults){

    for(let user of userResults){
        const country = user.location.country;
        const name = user.name.first;
        const imageUrl = user.picture.medium;
        const userDiv = document.createElement("div");
        userDiv.innerHTML = `
        <h3>${name}</h3>
        <p>${country}</p>
        <img src=${imageUrl} alt="User avatar" />
    `;
    randomFolks.append(userDiv);
    }

};

selectUserNumber.addEventListener("change", function(e){
    let numUser = e.target.value;
    getData(numUser);
});

