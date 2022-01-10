
const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'img/wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'img/angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'img/walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'img/angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'img/scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'img/barbara-ramos-graphic-designer.jpg',
  },
];




let teamContainer =document.querySelector('.team-container');
let button = document.getElementById('addMemberButton');
let inputs = document.querySelectorAll('input')




//click(form-add new member)
button.addEventListener("click", function(){
  
  let newName  = document.getElementById('name').value;
  let newRole = document.getElementById('role').value;
  let newImg = document.getElementById('image').value;
  console.log(newRole, newName, newImg)
  const newCard ={
    name:newName,
    role:newRole,
    image:newImg,
  }

  //nuove carte (membere)
  teamContainer.innerHTML +=` <div class="team-card">
    <div class="card-image">
    <img
    src="${newImg}"
    alt="${newImg}"
    
    />
    </div>
    <div class="card-text">
    <h3>${newName}</h3>
    <p>${newRole}</p>
    </div>
    </div>`;
    

  team.push(newCard); 
  console.log(team);
  inputs.forEach(input=> input.value ="");
  
});

//le carte di (our team)  
  for(let i=0; i<team.length; i++){
    teamContainer.innerHTML +=` 
    <div class="team-card">
      <div class="card-image">
        <img
        src="${team[i].image}"
        alt="${team[i].image}"  
        />
      </div>
      <div class="card-text">
        <h3>${team[i].name}</h3>
        <p>${team[i].role}</p>
      </div>
    </div>`;
  }
  
  console.log(teamContainer)
  
  




