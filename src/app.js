alert("hello");

var app = new Vue({
    el: '#app',
    data: {
      navbar: [
          {
              link: "Home",

          },
          {
              link: "Order Online",
          },
          {
              link: "About",

          },
          {
              link: "News",
          },
          {
              link:"Contact Us"
          },

      ]
    },
    methods: {

    },
    mounted(){

    }
  })

  const root = new Vue({
      el:'#root',
      data:{
          footer:[
              {
                title: 'ORDER ONLINE',
              },
              {
                plate:[
                    {
                        nome: 'Appetizers'
                    },
                    {
                        nome: 'Burgers'
                    },
                    {
                        nome: 'Pizza'
                    },
                    {
                        nome: 'Fries'
                    },
                    {
                        nome: 'Sides'
                    },
                    {
                        nome: 'Desserts'
                    },
                    {
                        nome: 'Beverages'
                    },
                    {
                        nome: 'Specials'
                    },
                ]

              }
            ]
        }
    })
            
//               },
//               {
//                 title: 'NAVIGATE',
//                 menu: [
//                     {
//                         nome:'Home',
//                     },
//                     {
//                         nome:'Alternate Home',
//                     },
//                     {
//                         nome:'Menu',
//                     },
//                     {
//                         nome:'About',
//                     },
//                     {
//                         nome:'News',
//                     },
//                     {
//                         nome:'Contact Us',
//                     },
//                     {
//                         nome:'Cart',
//                     },

//                 ]
//               },
//               {
//                 title: 'INFORMATION',
//                 info:[
//                     {
//                         nome:'My Account',
//                     },
//                     {
//                         nome:'Terms Of Service',
//                     },
//                     {
//                         nome:'Privacy Policy',
//                     },

//                 ]
//               },
//               {
//                 title: 'OPENING HOURS',
//                 days:[
//                     {
//                         nome:'Mon -',
//                         hour:'10AM to 11PM'
//                     },
//                     {
//                         nome:'Tue -',
//                         hour:'10AM to 11PM'
//                     },
//                     {
//                         nome:'Wed -',
//                         hour:'10AM to 11PM'
//                     },
//                     {
//                         nome:'Thur -',
//                         hour:'10AM to 11PM'
//                     },
//                     {
//                         nome:'Fri -',
//                         hour:'10AM to 11PM'
//                     },
//                     {
//                         nome:'Sat -',
//                         hour:'10AM to 1AM'
//                     },
//                     {
//                         nome:'Sun -',
//                         hour:'11AM to 10PM'
//                     },

//                 ]
//               },
//               {
//                 title: 'VOUCHER'
//               }
//           ]
//       }
//   })