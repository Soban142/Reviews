const reviews = [
    {
      id: 1,
      name: "Susan Smith",
      job: "WEB DEVELOPER",
      img:"./images/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "Anna Jhonson",
      job: "WEB DESIGNER",
      img:"./images/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "Peter Jones",
      job: "INTERN",
      img:"./images/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "Bill Anderson",
      job: "THE BOSS",
      img:"./images/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];

let reviewImg = document.querySelector(".review-img");
let reviewName = document.querySelector(".review-name");
let reviewJob = document.querySelector(".review-job");
let reviewInfo = document.querySelector(".review-description");


let leftMove = document.querySelector(".fa-chevron-left");
let rightMove = document.querySelector(".fa-chevron-right");
let surpriseMe = document.querySelector(".randomBtn")


// setting starting index number for a person

let currentItem = 0;


// show person based on index number 

function showPerson(currentItem) {
    reviewImg.src = reviews[currentItem].img;
    reviewName.textContent = reviews[currentItem].name;
    reviewJob.textContent = reviews[currentItem].job;
    reviewInfo.textContent = reviews[currentItem].text;
}


// show right person 

rightMove.addEventListener('click', () => {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;

    }

    showPerson(currentItem);
});


// show left person 

leftMove.addEventListener('click', () => {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }

    showPerson(currentItem);
});


// show random person

surpriseMe.addEventListener('click', () => {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
});