let mobiles = [
  {
    companyName: "Samsung",
    Model: "Galaxy Note 5",
    Ram: "4 GB",
    Rom: "32 GB",
    Price: "$101",
   },
  {
    companyName: "Xiaomi",
    Model: "Redmi K50",
    Ram: "8 GB",
    Rom: "128 GB",
      Price: "$368",
    },
   {
     companyName: "Iphone",
     Model: "Iphone 12",
     Ram: "4 GB",
     Rom: "128 GB",
     Price: "$799",
   },
   {
     companyName: "Oppo",
     Model: "A36",
     Ram: "8 GB",
     Rom: "256 GB",
     Price: "$353",
   },
   {
     companyName: "Oppo",
     Model: "K10",
     Ram: "6 GB",
     Rom: "128 GB",
     Price: "$220",
    },
    {
      companyName: "Google",
     Model: "Pixel 6",
     Ram: "8 GB",
     Rom: "128 GB",
     Price: "$599",
   },
   {
     companyName: "Google",
     Model: "Pixel 7",
     Ram: "8 GB",
     Rom: "128 GB",
     Price: "$400",
   },
   {
     companyName: "Google",
     Model: "Pixel 8",
     Ram: "8 GB",
     Rom: "256 GB",
     Price: "$600",
    },
    {
      companyName: "Iphone",
      Model: "Iphone 13",
      Ram: "4 GB",
      Rom: "128 GB",
      Price: "$1699",
    },
     {                    
       companyName: "Iphone",
       Model: "Iphone X",
       Ram: "3 GB",
       Rom: "64 GB",
       Price: "$218",
      },
     {
      companyName: "Samsung",
      Model: "Galaxy Note 8",
      Ram: "6 GB",
      Rom: "64 GB",
      Price: "$419",
    },
    {
      companyName: "Samsung",
      Model: "Galaxy S22",
      Ram: "8 GB",
      Rom: "128 GB",
      Price: "$799",
    },
    {
      companyName: "Oppo",
      Model: "Reno 8",
      Ram: "8 GB",
      Rom: "128 GB",
      Price: "$399",
    },
   {
     companyName: "Infinix",
     Model: "Smart 6",
     Ram: "2 GB",
     Rom: "32 GB",
     Price: "$102",
   },
   {
     companyName: "Infinix",
     Model: "Hot 11",
     Ram: "4 GB",
     Rom: "64 GB",
     Price: "$128",
   },
   {
     companyName: "Infinix",
     Model: "Note 11",
     Ram: "6 GB",
     Rom: "128 GB",
     Price: "$229",
   },
   {
     companyName: "Xiaomi",
     Model: "Redmi 10",
     Ram: "4 GB",
     Rom: "64 GB",
     Price: "$173",
   },
   {
     companyName: "Xiaomi",
     Model: "Redmi Note 10",
     Ram: "4 GB",
     Rom: "128 GB",
     Price: "$182",
   },
]





let showup = mobiles.map(function(x){
  return x.companyName
})

console.log(showup)


function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

let companies = showup.filter(onlyUnique)


let Mobilecompany = document.getElementById("Mobilecompany")
let MobileModel = document.getElementById("MobileModel")

function fillup(){
  Mobilecompany.innerHTML = " ";
  for(let i=0 ; i < companies.length; i++){
    Mobilecompany.innerHTML += `<option value="${companies[i]}">${companies[i]}</option>`
  }
}

fillup();

let models = mobiles.filter(function(value){
  if(value.companyName = Mobilecompany.value){
    return value
  }
})


console.log(models)



function fillupnext(){

  MobileModel.innerHTML = " ";


  for(i=0; i < models.length; i++){
    MobileModel.innerHTML += `<option value="${models[i].Model}">${models[i].Model}</option>`

  }
  
}









