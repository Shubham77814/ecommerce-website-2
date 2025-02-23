// document.querySelector('#nav__menu').addEventListener("mousemove", (dets)=>{
//   console.log(dets)
// })


// /*=============== SHOW MENU ===============*/
//  const navMenu = document.querySelector("#nav__menu"),
//   navToggle = document.querySelector("#nav-toggle"),
//   navClose = document.querySelector("#nav-close");
// /*===== Menu Show =====*/
// /* Validate if constant exists */
// if (navToggle) {
//   navToggle.addEventListener("click", () => {
//     navMenu.classList.add("show-menu");
//   });
// }
// /*===== Hide Show =====*/
// /* Validate if constant exists */
// if (navClose) {
//   navClose.addEventListener("click", () => {
//     navMenu.classList.remove("show-menu");
//   });
// }
// /*=============== IMAGE GALLERY ===============*/
// function imgGallery() {
//   const mainImg = document.querySelector(".details__img"),
//     smallImg = document.querySelectorAll(".details__small-img");

//   smallImg.forEach((img) => {
//     img.addEventListener("click", function () {
//       mainImg.src = this.src;
//     });
//   });
// }
// imgGallery();

// /*=============== SWIPER CATEGORIES ===============*/
 var swiperCategories = new Swiper(".categories_container", {
   spaceBetween: 24,
   loop: true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
  },
 

  breakpoints: {
    350: {
      slidesPerView: 2,
      spaceBetween: 24,
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 24,
    },

    992: {
      slidesPerView: 4,
      spaceBetween: 24,
    },

    1200: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 6,
      spaceBetween: 24,
    },
  },
});

// /*=============== SWIPER PRODUCTS ===============*/
var swiperCategories = new Swiper(".products-container", {
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});
// /*=============== PRODUCTS TABS ===============*/

const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);
    console.log(target)
  
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active-tab");
    });
    target.classList.add("active-tab");

    tabs.forEach((tab) => {
      tab.classList.remove("active-tab");
    });
    tab.classList.add("active-tab");
  });
});

// // let userName =prompt("Enter your full name without spaces");
// // let res = `@${userName}${userName.length}`
// // console.log(res)

// // Different string method

// // str.slice(start, end)
// //  let userName = 'shubham';
// // console.log(userName.slice(1,5));
// // console.log(userName.toUpperCase());
// // console.log(userName.toLowerCase())
// // console.log(userName.replace("h", "a"));
// // console.log(userName.charAt(2));
// // console.log(userName.split(2,3))

// // let student = {
// //     name: "shubahm",
// //     class: 18,
// //     isPass : "pass"

// // }

// // for (const key in student) {
// //     console.log(`${key}: ${student[key]}`)
// //     // console.log(student[key])
    
// // }

// // // Array
// // // let sum = 0
// // let marks = ["batara", "birgunj", "ktm"]

// // // for (let i = 0; i < marks.length; i++) {
   
// // //     sum = sum + marks[i]
// // //   // console.log(marks.length)
// // // }

// // // for (const element in marks) {
// // //     console.log(element)
// // // }

// //  for (const key in marks) {
// //      console.log(marks[key])
// //  }


// // // let mark2 = [1, 5, 3]
// // // console.log(typeof marks)

// // let prices = [250, 645, 300, 900, 50]
// // // for (const price of prices) {
// // //     let fp = price - price*0.1
// // //     console.log(fp)
// // //     console.log(prices);
// // // }
// // for (let i = 0; i < prices.length; i++) {
// //     prices[i] -= prices[i]*0.1
// //     // console.log(prices[i])
// // }
// // // console.log(prices)

// // // Different methods of ARRAY
// // // There are two types of methods i.e some change the array and some change the array and return new one
// // // 1. Push() : add at end
// //            // prices.push(99)
// //               // console.log(prices)
// //             let fruits = ["Litchi", "mango", "apple", "pineapple"];
// //             // console.log(fruits);
// //             fruits.push("guava")
// //             // console.log(fruits);

// // // 2. Pop() : delete from end and return
// //     // console.log(fruits)
    
// //     // console.log(fruits.pop());
// // // 3. toString() : converts array to string

// // //   console.log(fruits.toString());

// // //   4. Concat() : joins multiple arrays & returns result
// // //  does n't change the orginal arrays make a new one and change
// // // let marvelHeroes = ["thor", "spiderman", "ironman"]
// // let dcHeroes = ["superman", "batman"]
// // // console.log(marvelHeroes.concat(dcHeroes))
// // // console.log(marvelHeroes)
// // //   5. unshift() : add to start
// // let marvelHeroes = ["thor", "spiderman", "ironman"]
// // // console.log(marvelHeroes.unshift("antman"))
// // // console.log(marvelHeroes)
// // //   6. shift()   : delete from start & return
// // let fh = marvelHeroes.shift()
// // // console.log(fh)
// // // console.log(marvelHeroes)

// // // 7. slice() : return a piece of the array 
// // //      slice(startidx, endidx)

// // // 8. splice() : change original array (add, remove, replace)
// // // splice( startidx, delCount, newel1..) [delcount means how many Element to delete after start]

// // let companies = ["Bloomber", "Microsoft", "Uber", "Google", "IBM", "Netflix"]

// // // companies.shift();
// // // console.log(companies) 

// // companies.splice(2, 1,)
// // // console.log(companies)

// // companies.push("Amazon")
// // console.log(companies)
// // console.log(typeof companies)

let marks = [97, 93, 99, 88, 77]
// console.log(marks)
let  toppers = marks.filter((val)=>{
  return val > 90
})
// console.log(toppers);

// let n = prompt("Enter a number:"),
// let shubh = []
// for (let i = 1; i <= n ; i++){
//   shubh[i-1] = i;
// }
// console.log(shubh)
