/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 * cnt is counter  number of section
 */
let cnt = 5;


/**
  * @description this funtion make new link and new item list
                link has attributes  id , textconntest (section (num)) and dara-link
                then append think link to new item list then appent item list to nav
  * @param {*} sectionId this parameter of section id
  */

function createitembtn(sectionId) {
  let newbt = document.createElement("a"); // this link for button when click on it scroll to section
  let newList = document.createElement("li"); // this new list

  
  newbt.setAttribute("id", `btn${sectionId}`); // link has id of section id
  newbt.setAttribute("data-link", `${sectionId}`);//link had data-link
  newbt.textContent = `section ${cnt - 1}`; // lintlist has textof (name of section)
  newbt.classList.add("menu__link"); //add classlist to newlink to has the same css
  newbt.name = `section${cnt - 1}`;

  newList.appendChild(newbt); //appent newlink to new list

  document.getElementById("navbar__list").appendChild(newList); //append new list to navvar of list
}

/**
  * @description this funton when calling cnt ++ this refere to number of section that you're add
  *       then make newparagraph and new header and give header textcontent 
          then make new div  to append header and newparagraph into it 
          then make new sectoin and add class landing__container ,had id section and data-new 
          then append new div to new section and append newsection to main
          then calling createbutton to link between new section and newbutton with argument id
  */
function createnewsection() {
  cnt += 1; // this counter for section'number
  let newp1 = document.createElement("p"); // this new paragraph
  let newp2 = document.createElement("p");

  let sectionId = `section${cnt - 1}`; // tha number of section

  //append text to paragraph
  newp1.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod";
  newp2.textContent +=
    "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non";
  let newheading = document.createElement("h2"); // this new header
  newheading.textContent = `section ${cnt - 1}`; // this title of header

  let newdiv = document.createElement("div"); // this new div that contain heading and paragraph
  let newSection = document.createElement("section"); //this new section that contain div
  newdiv.classList.add("landing__container"); // add calss to div
  newdiv.appendChild(newheading); // append heading to div
  newdiv.appendChild(newp1); // append p to div
  newdiv.appendChild(newp2);
  newSection.appendChild(newdiv); // append div to section

  // attribut sectoin is id ,data nav and your-active-class;
  newSection.setAttribute("id", `section${cnt - 1}`);
  newSection.setAttribute("data-nav", `Section ${cnt - 1}`);


  //this append section after index first child of main
  document.getElementsByTagName("main")[0].appendChild(newSection);

  //call funtion createnewitem to link this id new section with id New item 
  createitembtn(sectionId);
}
document.getElementById("addsection").addEventListener("click", function () {
  createnewsection();
});

/**
 * @description this funsion use for get heigh of section
 * @param {*} item  this section
 * @returns heigh of section between 0 and 400
 */
function activeitembtn(item) {
  let sectintop = item.getBoundingClientRect();
  return sectintop.top == 0 || sectintop.top <= 400;
}


/**
* @description  Add class 'active' to section while scrolling this funtion  calling function activeitembtn 
             and return sectiontop and then check if section not contains active then active it 
             else remove active from other sections
  
*/
window.addEventListener("scroll", () => {
  let vecsection = Array.from(document.querySelectorAll("section"));
  vecsection.forEach((section) => {
   
    if (activeitembtn(section)){
       if(!section.classList.contains("your-active-class")) {
        section.classList.add("your-active-class"); // add active class
      }
    }
    else  section.classList.remove("your-active-class");//this remove active class from section
  });
});

/**
 * @description Set list item as active while scrolling and this fucntion calling function activeitembtn 
             and return sectiontop and then search for all item list to remove all active 
             and check if item list has id like section id then acive parent of this item list

 */
window.addEventListener("scroll", () => {
  let vecsection = Array.from(document.querySelectorAll("section")); // aray of sections
  let btnlia = Array.from(document.querySelectorAll("li a")); // array of link a
  vecsection.forEach((section) => {
    if (activeitembtn(section)) {
      for (btn of btnlia) {
        btn.parentNode.classList.remove("active"); // remove active other list item
        if (btn.getAttribute("id") === "btn" + section.getAttribute("id")) {
          // if id of section ==id of list item(btn)
          btn.parentNode.classList.add("active"); //add active to it
        }
      }
    }
  });
});


/**
 * @describtion this when click on item list scrolling into what item list refere to sectoin 
        and funtion scrollintoview  has attributes smooth and block ceter to diplay it center of page
 */
document.addEventListener('click', (btn) => {
    if(btn.target.getAttribute('data-link')){
      document.getElementById(btn.target.getAttribute('data-link')).scrollIntoView({behavior:"smooth",block:"center"});              
    }
});
        
  
       

  

