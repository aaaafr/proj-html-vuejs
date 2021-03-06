
var app = new Vue({
    el: '#app',
    data: {
      navbar: [
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
        plates:[
            {
                nome: 'ORDER ONLINE',
            },
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
        ],
        navigate: [
            {
                nome: 'NAVIGATE',
            },
            {
                nome: 'Home'
            },
            {
                nome: 'Alternate Home'
            },
            {
                nome: 'Menu'
            },
            {
                nome: 'About'
            },
            {
                nome: 'News'
            },
            {
                nome: 'Contact Us'
            },
            {
                nome: 'Cart'
            },
        ],
        info: [
            {
                nome: 'INFORMATION',
            },
            {
                nome: 'My Account'
            },
            {
                nome: 'Terms Of Service'
            },
            {
                nome: 'Privacy Policy'
            },
        ],
        days: [
            {
                nome: 'OPENING HOURS',
            },
            {
                nome: 'Mon -',
                hour:'10AM to 11PM'
            },
            {
                nome: 'Tue -',
                hour:'10AM to 11PM'
            },
            {
                nome: 'Wed -',
                hour:'10AM to 11PM'
            },
            {
                nome: 'Thur -',
                hour:'10AM to 11PM'
            },
            {
                nome: 'Fri -',
                hour:'10AM to 11PM'
            },
            {
                nome: 'Sat -',
                hour:'10AM to 1AM'
            },
            {
                nome: 'Sun -',
                hour:'11AM to 10PM'
            },
        ],
        vouch: [
            {
                nome: 'VOUCHER'
            }
        ]

    },

})
            