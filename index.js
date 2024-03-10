// thiis is all about setTimeout practice
const heading = document.querySelector("h1")
const subheading = document.querySelector("h2")
const starttimeout = document.querySelector("#startTimeout")
const stoptimeout = document.querySelector("#stop")



// ye by default chalega
setTimeout(() => {
    subheading.innerHTML = "After By default set time out"
}, 3000);




// variable ka naam aise hi funny sa likh diya hai
// ye start button jb click hoga tabhi set time out chalega

starttimeout.addEventListener('click', function(){
    const save_kara_maine_isko = setTimeout(function(){
        heading.innerHTML = "after click on button manually "
    }, 3000)
    // mujhe ye to pta hai ki ek time ke baad ye run hoga lekin ,ai use pahle hi band kr dunga
    stoptimeout.addEventListener('click', function(){
        clearTimeout(save_kara_maine_isko)
    })
})



// this is all about setInterval practice

const intervalHeading = document.querySelector('#h1')
const intervalSubheading = document.querySelector('#h2')
const intervalstartButton = document.querySelector('#startInterval')
const stopInterval2 = document.querySelector('#stopInterval2')


 intervalstartButton.addEventListener('click', function(){
    const start = setInterval(function(){
        console.log("hi kaise ho")
    },3000)

    stopInterval2.addEventListener('click', function(){
            clearInterval(start)
        })
})

// ye fucntion run hoga interval pr






// ye hamare us interval ko rokega jo by default ho raha hoga 
const endInterval = document.querySelector('#stopInterval')
const startInterval = function(){
    console.log("Hi whatsapp Buddy")
}

const interval = setInterval(startInterval, 2000)


endInterval.addEventListener('click', function(){
    clearInterval(interval)
})




