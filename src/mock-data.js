const mockData = [
  {
    kind: "calendar#event",
    etag: '"p3308h454qfgum0g"',
    id: "f86ad0s89f6asdf0as5d6",
    location: "Los Angeles, CA",
    timeZone: "Los Angeles/US",
    dateTime: "2020-05-19T16:00:00+02:00",
    description: "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
    summary: "Learn JavaScript"
  },
  
  {
    kind: "calendar#event",
    etag: '"3181161784712000"',
    id: "fds89a7f80as7df089asf",
    location: "Berlin, Germany",
    timeZone: "Europe/Berlin",
    dateTime: "2020-05-19T16:00:00+02:00",
    description: "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
    summary: "React is Fun"
  },

  {
    kind: "calendar#event",
    etag: "\"3187221858184000\"",
    id: "3gi3kabkm3bua5lq3jhscc8s4c_20200629T200000Z",
    status: "confirmed",
    htmlLink: "https://www.google.com/calendar/event?eid=M2dpM2thYmttM2J1YTVscTNqaHNjYzhzNGNfMjAyMDA2MjlUMjAwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
    created: "2020-07-01T13:23:24.000Z",
    updated: "2020-07-01T13:42:09.092Z",
    summary: "Intro to AngularJS-Remote",
    description: "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. Join us to get introduced to this wonderful framework and dive deep into its features. ",
    "location": "New York, NY, USA",
    "creator": {
      "email": "fullstackwebdev@careerfoundry.com",
      "self": true
  }
},

  {
        "kind": "calendar#event",
        "etag": "\"3187237556010000\"",
        "id": "111vmlbl7p8gmc0fbf5u107p8u_20200723T070000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MTExdm1sYmw3cDhnbWMwZmJmNXUxMDdwOHVfMjAyMDA3MjNUMDcwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-07-01T15:47:59.000Z",
        "updated": "2020-07-01T15:52:58.005Z",
        "summary": "React Native Tokyo",
        "description": "We meet every Monday and Thursday to talk about React Native and native app development in general. React Native Tokyo is an inclusive community that tries to cater to all levels of learners during meetups. \n\nJoin us if you are curious to hear about what's new in the field of native app development.",
        "location": "Tokyo, Japan",
        "creator": {
         "email": "fullstackwebdev@careerfoundry.com",
         "self": true
        }
      },

    {
          "kind": "calendar#event",
          "etag": "\"3187232583216000\"",
          "id": "3m5n6mcl1aqrdsg6k5vkr6to5p_20200725T163000Z",
          "status": "confirmed",
          "htmlLink": "https://www.google.com/calendar/event?eid=M201bjZtY2wxYXFyZHNnNms1dmtyNnRvNXBfMjAyMDA3MjVUMTYzMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
          "created": "2020-07-01T13:54:32.000Z",
          "updated": "2020-07-01T15:11:31.608Z",
          "summary": "Build Your First App with JavaScript",
          "description": "You know basic HTML and CSS, and interested to learn the next thing about web development? Well, you are at the right place. Our workshop will take you to the amazing world of JavaScript. \n\nIn this workshop, you'll:\n- Learn JavaScript, from basics to advanced topics\n- Create your first app",
          "location": "Amsterdam, Netherlands",
          "creator": {
           "email": "fullstackwebdev@careerfoundry.com",
           "self": true
          }
        },

      {
            "kind": "calendar#event",
            "etag": "\"3187232047578000\"",
            "id": "013qoq4ns44cam7q4hqcf13eab_20200628T230000Z",
            "status": "confirmed",
            "htmlLink": "https://www.google.com/calendar/event?eid=MDEzcW9xNG5zNDRjYW03cTRocWNmMTNlYWJfMjAyMDA2MjhUMjMwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
            "created": "2020-07-01T15:05:49.000Z",
            "updated": "2020-07-01T15:07:03.789Z",
            "summary": "jQuery and More",
            "description": "Do you know jQuery is used by around 70 percent of the 10 million most popular websites as of May 2019? \n\nThough many consider it dead after Angular and Express gained popularity, jQuery is still an important part of many websites. \n\nIn our workshop, we teach basic to advanced jQuery where you will also be able to build a simple app using it. If you are familiar with JS, join us to learn probably its most popular library.",
            "location": "Santiago, Santiago Metropolitan Region, Chile",
            "creator": {
             "email": "fullstackwebdev@careerfoundry.com",
             "self": true
            }
          },

        {
              "kind": "calendar#event",
              "etag": "\"3187221506816000\"",
              "id": "48m09le389vijbqfs2mcr6i87q_20200630T070000Z",
              "status": "confirmed",
              "htmlLink": "https://www.google.com/calendar/event?eid=NDhtMDlsZTM4OXZpamJxZnMybWNyNmk4N3FfMjAyMDA2MzBUMDcwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
              "created": "2020-07-01T13:39:01.000Z",
              "updated": "2020-07-01T13:39:13.408Z",
              "summary": "Node Gang",
              "description": "We meet every Tuesday to talk about Node or JavaScript in general. Node Gang is an inclusive community that tries to cater to all levels of learners during meetups. Join us if you are curious to hear about what's new in Node, patterns, interesting npm packages, and practices.",
              "location": "Sydney NSW, Australia",
              "creator": {
               "email": "fullstackwebdev@careerfoundry.com",
               "self": true
              }
            },

          {
                "kind": "calendar#event",
                "etag": "\"3187234769062000\"",
                "id": "46717o686s7ibj1lp300pabro9_20200722T180000Z",
                "status": "confirmed",
                "htmlLink": "https://www.google.com/calendar/event?eid=NDY3MTdvNjg2czdpYmoxbHAzMDBwYWJybzlfMjAyMDA3MjJUMTgwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
                "created": "2020-07-01T15:28:56.000Z",
                "updated": "2020-07-01T15:29:44.531Z",
                "summary": "React Workshop",
                "description": "React is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
                "location": "Toronto, ON, Canada",
                "creator": {
                 "email": "fullstackwebdev@careerfoundry.com",
                 "self": true
                }
              },

            {
                  "kind": "calendar#event",
                  "etag": "\"3187221858184000\"",
                  "id": "3gi3kabkm3bua5lq3jhscc8s4c_20200629T200000Z",
                  "status": "confirmed",
                  "htmlLink": "https://www.google.com/calendar/event?eid=M2dpM2thYmttM2J1YTVscTNqaHNjYzhzNGNfMjAyMDA2MjlUMjAwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
                  "created": "2020-07-01T13:23:24.000Z",
                  "updated": "2020-07-01T13:42:09.092Z",
                  "summary": "Intro to AngularJS-Remote",
                  "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. Join us to get introduced to this wonderful framework and dive deep into its features. ",
                  "location": "New York, NY, USA",
                  "creator": {
                   "email": "fullstackwebdev@careerfoundry.com",
                   "self": true
                  }
                },

];
  
  export { mockData };





  // {
  //   "kind": "calendar#events",
  //   "etag": "\"p3308h454qfgum0g\"",
  //   "summary": "fullstackwebdev@careerfoundry.com",
  //   "updated": "2020-09-11T17:42:14.056Z",
  //   "timeZone": "Europe/Berlin",
  //   "accessRole": "reader",
  //   "defaultReminders": [],
  //   "nextPageToken": "EjYKKzZjbzBvamwwbDBqMHJiaDNnNTZ2bGMyczlpXzIwMjAwODEyVDAxMDAwMFoYgNikkdaU6wIiBwgFEKzrwR4=",
  //   "items": [
  //    {
  //     "kind": "calendar#event",
  //     "etag": "\"3181161784712000\"",
  //     "id": "4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",
  //     "status": "confirmed",
  //     "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
  //     "created": "2020-05-19T19:17:46.000Z",
  //     "updated": "2020-05-27T12:01:32.356Z",
  //     "summary": "Learn JavaScript",
  //     "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
  //     "location": "London, UK",
  //     "creator": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "organizer": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "start": {
  //      "dateTime": "2020-05-19T16:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "end": {
  //      "dateTime": "2020-05-19T17:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
  //     "originalStartTime": {
  //      "dateTime": "2020-05-19T16:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
  //     "sequence": 0,
  //     "reminders": {
  //      "useDefault": true
  //     },
  //     "eventType": "default"
  //    },



  //    {
  //     "kind": "calendar#event",
  //     "etag": "\"3181159875584000\"",
  //     "id": "3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",
  //     "status": "confirmed",
  //     "htmlLink": "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
  //     "created": "2020-05-19T19:14:30.000Z",
  //     "updated": "2020-05-27T11:45:37.792Z",
  //     "summary": "React is Fun",
  //     "description": "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
  //     "location": "Berlin, Germany",
  //     "creator": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "organizer": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "start": {
  //      "dateTime": "2020-05-20T14:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "end": {
  //      "dateTime": "2020-05-20T15:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "recurringEventId": "3qtd6uscq4tsi6gc7nmmtpqlct",
  //     "originalStartTime": {
  //      "dateTime": "2020-05-20T14:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "iCalUID": "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
  //     "sequence": 0,
  //     "reminders": {
  //      "useDefault": true
  //     },
  //     "eventType": "default"
  //    },


  //    {
  //     "kind": "calendar#event",
  //     "etag": "\"3181161784712000\"",
  //     "id": "4eahs9ghkhrvkld72hogu9ph3e_20200521T140000Z",
  //     "status": "confirmed",
  //     "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjFUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
  //     "created": "2020-05-19T19:17:46.000Z",
  //     "updated": "2020-05-27T12:01:32.356Z",
  //     "summary": "Learn JavaScript",
  //     "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
  //     "location": "London, UK",
  //     "creator": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "organizer": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "start": {
  //      "dateTime": "2020-05-21T16:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "end": {
  //      "dateTime": "2020-05-21T17:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
  //     "originalStartTime": {
  //      "dateTime": "2020-05-21T16:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
  //     "sequence": 0,
  //     "reminders": {
  //      "useDefault": true
  //     },
  //     "eventType": "default"
  //    },


  //    {
  //     "kind": "calendar#event",
  //     "etag": "\"3181159875584000\"",
  //     "id": "3qtd6uscq4tsi6gc7nmmtpqlct_20200522T120000Z",
  //     "status": "confirmed",
  //     "htmlLink": "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjJUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
  //     "created": "2020-05-19T19:14:30.000Z",
  //     "updated": "2020-05-27T11:45:37.792Z",
  //     "summary": "React is Fun",
  //     "description": "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
  //     "location": "Berlin, Germany",
  //     "creator": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "organizer": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "start": {
  //      "dateTime": "2020-05-22T14:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "end": {
  //      "dateTime": "2020-05-22T15:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "recurringEventId": "3qtd6uscq4tsi6gc7nmmtpqlct",
  //     "originalStartTime": {
  //      "dateTime": "2020-05-22T14:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "iCalUID": "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
  //     "sequence": 0,
  //     "reminders": {
  //      "useDefault": true
  //     },
  //     "eventType": "default"
  //    },


  //    {
  //     "kind": "calendar#event",
  //     "etag": "\"3181161784712000\"",
  //     "id": "4eahs9ghkhrvkld72hogu9ph3e_20200523T140000Z",
  //     "status": "confirmed",
  //     "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjNUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
  //     "created": "2020-05-19T19:17:46.000Z",
  //     "updated": "2020-05-27T12:01:32.356Z",
  //     "summary": "Learn JavaScript",
  //     "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
  //     "location": "London, UK",
  //     "creator": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "organizer": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "start": {
  //      "dateTime": "2020-05-23T16:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "end": {
  //      "dateTime": "2020-05-23T17:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
  //     "originalStartTime": {
  //      "dateTime": "2020-05-23T16:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
  //     "sequence": 0,
  //     "reminders": {
  //      "useDefault": true
  //     },
  //     "eventType": "default"
  //    },


  //    {
  //     "kind": "calendar#event",
  //     "etag": "\"3181159875584000\"",
  //     "id": "3qtd6uscq4tsi6gc7nmmtpqlct_20200525T120000Z",
  //     "status": "confirmed",
  //     "htmlLink": "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjVUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
  //     "created": "2020-05-19T19:14:30.000Z",
  //     "updated": "2020-05-27T11:45:37.792Z",
  //     "summary": "React is Fun",
  //     "description": "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
  //     "location": "Berlin, Germany",
  //     "creator": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "organizer": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "start": {
  //      "dateTime": "2020-05-25T14:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "end": {
  //      "dateTime": "2020-05-25T15:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "recurringEventId": "3qtd6uscq4tsi6gc7nmmtpqlct",
  //     "originalStartTime": {
  //      "dateTime": "2020-05-25T14:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "iCalUID": "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
  //     "sequence": 0,
  //     "reminders": {
  //      "useDefault": true
  //     },
  //     "eventType": "default"
  //    },


  //    {
  //     "kind": "calendar#event",
  //     "etag": "\"3181161784712000\"",
  //     "id": "4eahs9ghkhrvkld72hogu9ph3e_20200526T140000Z",
  //     "status": "confirmed",
  //     "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjZUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
  //     "created": "2020-05-19T19:17:46.000Z",
  //     "updated": "2020-05-27T12:01:32.356Z",
  //     "summary": "Learn JavaScript",
  //     "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
  //     "location": "London, UK",
  //     "creator": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "organizer": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "start": {
  //      "dateTime": "2020-05-26T16:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "end": {
  //      "dateTime": "2020-05-26T17:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
  //     "originalStartTime": {
  //      "dateTime": "2020-05-26T16:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
  //     "sequence": 0,
  //     "reminders": {
  //      "useDefault": true
  //     },
  //     "eventType": "default"
  //    },
  //    {
  //     "kind": "calendar#event",
  //     "etag": "\"3181159875584000\"",
  //     "id": "3qtd6uscq4tsi6gc7nmmtpqlct_20200527T120000Z",
  //     "status": "confirmed",
  //     "htmlLink": "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjdUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
  //     "created": "2020-05-19T19:14:30.000Z",
  //     "updated": "2020-05-27T11:45:37.792Z",
  //     "summary": "React is Fun",
  //     "description": "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
  //     "location": "Berlin, Germany",
  //     "creator": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "organizer": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "start": {
  //      "dateTime": "2020-05-27T14:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "end": {
  //      "dateTime": "2020-05-27T15:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "recurringEventId": "3qtd6uscq4tsi6gc7nmmtpqlct",
  //     "originalStartTime": {
  //      "dateTime": "2020-05-27T14:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "iCalUID": "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
  //     "sequence": 0,
  //     "reminders": {
  //      "useDefault": true
  //     },
  //     "eventType": "default"
  //    },


  //    {
  //     "kind": "calendar#event",
  //     "etag": "\"3181161784712000\"",
  //     "id": "4eahs9ghkhrvkld72hogu9ph3e_20200528T140000Z",
  //     "status": "confirmed",
  //     "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjhUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
  //     "created": "2020-05-19T19:17:46.000Z",
  //     "updated": "2020-05-27T12:01:32.356Z",
  //     "summary": "Learn JavaScript",
  //     "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
  //     "location": "London, UK",
  //     "creator": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "organizer": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "start": {
  //      "dateTime": "2020-05-28T16:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "end": {
  //      "dateTime": "2020-05-28T17:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
  //     "originalStartTime": {
  //      "dateTime": "2020-05-28T16:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
  //     "sequence": 0,
  //     "reminders": {
  //      "useDefault": true
  //     },
  //     "eventType": "default"
  //    },


  //    {
  //     "kind": "calendar#event",
  //     "etag": "\"3181159875584000\"",
  //     "id": "3qtd6uscq4tsi6gc7nmmtpqlct_20200529T120000Z",
  //     "status": "confirmed",
  //     "htmlLink": "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjlUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
  //     "created": "2020-05-19T19:14:30.000Z",
  //     "updated": "2020-05-27T11:45:37.792Z",
  //     "summary": "React is Fun",
  //     "description": "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
  //     "location": "Berlin, Germany",
  //     "creator": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "organizer": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "start": {
  //      "dateTime": "2020-05-29T14:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "end": {
  //      "dateTime": "2020-05-29T15:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "recurringEventId": "3qtd6uscq4tsi6gc7nmmtpqlct",
  //     "originalStartTime": {
  //      "dateTime": "2020-05-29T14:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "iCalUID": "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
  //     "sequence": 0,
  //     "reminders": {
  //      "useDefault": true
  //     },
  //     "eventType": "default"
  //    },


  //    {
  //     "kind": "calendar#event",
  //     "etag": "\"3181161784712000\"",
  //     "id": "4eahs9ghkhrvkld72hogu9ph3e_20200530T140000Z",
  //     "status": "confirmed",
  //     "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MzBUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
  //     "created": "2020-05-19T19:17:46.000Z",
  //     "updated": "2020-05-27T12:01:32.356Z",
  //     "summary": "Learn JavaScript",
  //     "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
  //     "location": "London, UK",
  //     "creator": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "organizer": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "start": {
  //      "dateTime": "2020-05-30T16:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "end": {
  //      "dateTime": "2020-05-30T17:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
  //     "originalStartTime": {
  //      "dateTime": "2020-05-30T16:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
  //     "sequence": 0,
  //     "reminders": {
  //      "useDefault": true
  //     },
  //     "eventType": "default"
  //    },


  //    {
  //     "kind": "calendar#event",
  //     "etag": "\"3181159875584000\"",
  //     "id": "3qtd6uscq4tsi6gc7nmmtpqlct_20200601T120000Z",
  //     "status": "confirmed",
  //     "htmlLink": "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA2MDFUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
  //     "created": "2020-05-19T19:14:30.000Z",
  //     "updated": "2020-05-27T11:45:37.792Z",
  //     "summary": "React is Fun",
  //     "description": "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
  //     "location": "Berlin, Germany",
  //     "creator": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "organizer": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "start": {
  //      "dateTime": "2020-06-01T14:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "end": {
  //      "dateTime": "2020-06-01T15:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "recurringEventId": "3qtd6uscq4tsi6gc7nmmtpqlct",
  //     "originalStartTime": {
  //      "dateTime": "2020-06-01T14:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "iCalUID": "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
  //     "sequence": 0,
  //     "reminders": {
  //      "useDefault": true
  //     },
  //     "eventType": "default"
  //    },
  //    {
  //     "kind": "calendar#event",
  //     "etag": "\"3181161784712000\"",
  //     "id": "4eahs9ghkhrvkld72hogu9ph3e_20200602T140000Z",
  //     "status": "confirmed",
  //     "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA2MDJUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
  //     "created": "2020-05-19T19:17:46.000Z",
  //     "updated": "2020-05-27T12:01:32.356Z",
  //     "summary": "Learn JavaScript",
  //     "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
  //     "location": "London, UK",
  //     "creator": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "organizer": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "start": {
  //      "dateTime": "2020-06-02T16:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "end": {
  //      "dateTime": "2020-06-02T17:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
  //     "originalStartTime": {
  //      "dateTime": "2020-06-02T16:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
  //     "sequence": 0,
  //     "reminders": {
  //      "useDefault": true
  //     },
  //     "eventType": "default"
  //    },
  //    {
  //     "kind": "calendar#event",
  //     "etag": "\"3181159875584000\"",
  //     "id": "3qtd6uscq4tsi6gc7nmmtpqlct_20200603T120000Z",
  //     "status": "confirmed",
  //     "htmlLink": "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA2MDNUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
  //     "created": "2020-05-19T19:14:30.000Z",
  //     "updated": "2020-05-27T11:45:37.792Z",
  //     "summary": "React is Fun",
  //     "description": "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
  //     "location": "Berlin, Germany",
  //     "creator": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "organizer": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "start": {
  //      "dateTime": "2020-06-03T14:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "end": {
  //      "dateTime": "2020-06-03T15:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "recurringEventId": "3qtd6uscq4tsi6gc7nmmtpqlct",
  //     "originalStartTime": {
  //      "dateTime": "2020-06-03T14:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "iCalUID": "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
  //     "sequence": 0,
  //     "reminders": {
  //      "useDefault": true
  //     },
  //     "eventType": "default"
  //    },
  //    {
  //     "kind": "calendar#event",
  //     "etag": "\"3181161784712000\"",
  //     "id": "4eahs9ghkhrvkld72hogu9ph3e_20200604T140000Z",
  //     "status": "confirmed",
  //     "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA2MDRUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
  //     "created": "2020-05-19T19:17:46.000Z",
  //     "updated": "2020-05-27T12:01:32.356Z",
  //     "summary": "Learn JavaScript",
  //     "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
  //     "location": "London, UK",
  //     "creator": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "organizer": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "start": {
  //      "dateTime": "2020-06-04T16:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "end": {
  //      "dateTime": "2020-06-04T17:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
  //     "originalStartTime": {
  //      "dateTime": "2020-06-04T16:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
  //     "sequence": 0,
  //     "reminders": {
  //      "useDefault": true
  //     },
  //     "eventType": "default"
  //    },
  //    {
  //     "kind": "calendar#event",
  //     "etag": "\"3181159875584000\"",
  //     "id": "3qtd6uscq4tsi6gc7nmmtpqlct_20200605T120000Z",
  //     "status": "confirmed",
  //     "htmlLink": "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA2MDVUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
  //     "created": "2020-05-19T19:14:30.000Z",
  //     "updated": "2020-05-27T11:45:37.792Z",
  //     "summary": "React is Fun",
  //     "description": "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
  //     "location": "Berlin, Germany",
  //     "creator": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "organizer": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "start": {
  //      "dateTime": "2020-06-05T14:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "end": {
  //      "dateTime": "2020-06-05T15:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "recurringEventId": "3qtd6uscq4tsi6gc7nmmtpqlct",
  //     "originalStartTime": {
  //      "dateTime": "2020-06-05T14:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "iCalUID": "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
  //     "sequence": 0,
  //     "reminders": {
  //      "useDefault": true
  //     },
  //     "eventType": "default"
  //    },
  //    {
  //     "kind": "calendar#event",
  //     "etag": "\"3181161784712000\"",
  //     "id": "4eahs9ghkhrvkld72hogu9ph3e_20200606T140000Z",
  //     "status": "confirmed",
  //     "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA2MDZUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
  //     "created": "2020-05-19T19:17:46.000Z",
  //     "updated": "2020-05-27T12:01:32.356Z",
  //     "summary": "Learn JavaScript",
  //     "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
  //     "location": "London, UK",
  //     "creator": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "organizer": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "start": {
  //      "dateTime": "2020-06-06T16:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "end": {
  //      "dateTime": "2020-06-06T17:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
  //     "originalStartTime": {
  //      "dateTime": "2020-06-06T16:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
  //     "sequence": 0,
  //     "reminders": {
  //      "useDefault": true
  //     },
  //     "eventType": "default"
  //    },
  //    {
  //     "kind": "calendar#event",
  //     "etag": "\"3181159875584000\"",
  //     "id": "3qtd6uscq4tsi6gc7nmmtpqlct_20200608T120000Z",
  //     "status": "confirmed",
  //     "htmlLink": "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA2MDhUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
  //     "created": "2020-05-19T19:14:30.000Z",
  //     "updated": "2020-05-27T11:45:37.792Z",
  //     "summary": "React is Fun",
  //     "description": "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
  //     "location": "Berlin, Germany",
  //     "creator": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "organizer": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "start": {
  //      "dateTime": "2020-06-08T14:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "end": {
  //      "dateTime": "2020-06-08T15:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "recurringEventId": "3qtd6uscq4tsi6gc7nmmtpqlct",
  //     "originalStartTime": {
  //      "dateTime": "2020-06-08T14:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "iCalUID": "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
  //     "sequence": 0,
  //     "reminders": {
  //      "useDefault": true
  //     },
  //     "eventType": "default"
  //    },
  //    {
  //     "kind": "calendar#event",
  //     "etag": "\"3181161784712000\"",
  //     "id": "4eahs9ghkhrvkld72hogu9ph3e_20200609T140000Z",
  //     "status": "confirmed",
  //     "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA2MDlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
  //     "created": "2020-05-19T19:17:46.000Z",
  //     "updated": "2020-05-27T12:01:32.356Z",
  //     "summary": "Learn JavaScript",
  //     "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
  //     "location": "London, UK",
  //     "creator": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "organizer": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "start": {
  //      "dateTime": "2020-06-09T16:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "end": {
  //      "dateTime": "2020-06-09T17:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
  //     "originalStartTime": {
  //      "dateTime": "2020-06-09T16:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
  //     "sequence": 0,
  //     "reminders": {
  //      "useDefault": true
  //     },
  //     "eventType": "default"
  //    },
  //    {
  //     "kind": "calendar#event",
  //     "etag": "\"3181159875584000\"",
  //     "id": "3qtd6uscq4tsi6gc7nmmtpqlct_20200610T120000Z",
  //     "status": "confirmed",
  //     "htmlLink": "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA2MTBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
  //     "created": "2020-05-19T19:14:30.000Z",
  //     "updated": "2020-05-27T11:45:37.792Z",
  //     "summary": "React is Fun",
  //     "description": "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
  //     "location": "Berlin, Germany",
  //     "creator": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "organizer": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "start": {
  //      "dateTime": "2020-06-10T14:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "end": {
  //      "dateTime": "2020-06-10T15:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "recurringEventId": "3qtd6uscq4tsi6gc7nmmtpqlct",
  //     "originalStartTime": {
  //      "dateTime": "2020-06-10T14:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "iCalUID": "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
  //     "sequence": 0,
  //     "reminders": {
  //      "useDefault": true
  //     },
  //     "eventType": "default"
  //    },
  //    {
  //     "kind": "calendar#event",
  //     "etag": "\"3181161784712000\"",
  //     "id": "4eahs9ghkhrvkld72hogu9ph3e_20200611T140000Z",
  //     "status": "confirmed",
  //     "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA2MTFUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
  //     "created": "2020-05-19T19:17:46.000Z",
  //     "updated": "2020-05-27T12:01:32.356Z",
  //     "summary": "Learn JavaScript",
  //     "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
  //     "location": "London, UK",
  //     "creator": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "organizer": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "start": {
  //      "dateTime": "2020-06-11T16:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "end": {
  //      "dateTime": "2020-06-11T17:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
  //     "originalStartTime": {
  //      "dateTime": "2020-06-11T16:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
  //     "sequence": 0,
  //     "reminders": {
  //      "useDefault": true
  //     },
  //     "eventType": "default"
  //    },
  //    {
  //     "kind": "calendar#event",
  //     "etag": "\"3181159875584000\"",
  //     "id": "3qtd6uscq4tsi6gc7nmmtpqlct_20200612T120000Z",
  //     "status": "confirmed",
  //     "htmlLink": "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA2MTJUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
  //     "created": "2020-05-19T19:14:30.000Z",
  //     "updated": "2020-05-27T11:45:37.792Z",
  //     "summary": "React is Fun",
  //     "description": "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
  //     "location": "Berlin, Germany",
  //     "creator": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "organizer": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "start": {
  //      "dateTime": "2020-06-12T14:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "end": {
  //      "dateTime": "2020-06-12T15:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "recurringEventId": "3qtd6uscq4tsi6gc7nmmtpqlct",
  //     "originalStartTime": {
  //      "dateTime": "2020-06-12T14:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "iCalUID": "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
  //     "sequence": 0,
  //     "reminders": {
  //      "useDefault": true
  //     },
  //     "eventType": "default"
  //    },
  //    {
  //     "kind": "calendar#event",
  //     "etag": "\"3181161784712000\"",
  //     "id": "4eahs9ghkhrvkld72hogu9ph3e_20200613T140000Z",
  //     "status": "confirmed",
  //     "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA2MTNUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
  //     "created": "2020-05-19T19:17:46.000Z",
  //     "updated": "2020-05-27T12:01:32.356Z",
  //     "summary": "Learn JavaScript",
  //     "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
  //     "location": "London, UK",
  //     "creator": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "organizer": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "start": {
  //      "dateTime": "2020-06-13T16:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "end": {
  //      "dateTime": "2020-06-13T17:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
  //     "originalStartTime": {
  //      "dateTime": "2020-06-13T16:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
  //     "sequence": 0,
  //     "reminders": {
  //      "useDefault": true
  //     },
  //     "eventType": "default"
  //    },
  //    {
  //     "kind": "calendar#event",
  //     "etag": "\"3181159875584000\"",
  //     "id": "3qtd6uscq4tsi6gc7nmmtpqlct_20200615T120000Z",
  //     "status": "confirmed",
  //     "htmlLink": "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA2MTVUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
  //     "created": "2020-05-19T19:14:30.000Z",
  //     "updated": "2020-05-27T11:45:37.792Z",
  //     "summary": "React is Fun",
  //     "description": "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
  //     "location": "Berlin, Germany",
  //     "creator": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "organizer": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "start": {
  //      "dateTime": "2020-06-15T14:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "end": {
  //      "dateTime": "2020-06-15T15:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "recurringEventId": "3qtd6uscq4tsi6gc7nmmtpqlct",
  //     "originalStartTime": {
  //      "dateTime": "2020-06-15T14:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "iCalUID": "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
  //     "sequence": 0,
  //     "reminders": {
  //      "useDefault": true
  //     },
  //     "eventType": "default"
  //    },
  //    {
  //     "kind": "calendar#event",
  //     "etag": "\"3181161784712000\"",
  //     "id": "4eahs9ghkhrvkld72hogu9ph3e_20200616T140000Z",
  //     "status": "confirmed",
  //     "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA2MTZUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
  //     "created": "2020-05-19T19:17:46.000Z",
  //     "updated": "2020-05-27T12:01:32.356Z",
  //     "summary": "Learn JavaScript",
  //     "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
  //     "location": "London, UK",
  //     "creator": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "organizer": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "start": {
  //      "dateTime": "2020-06-16T16:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "end": {
  //      "dateTime": "2020-06-16T17:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
  //     "originalStartTime": {
  //      "dateTime": "2020-06-16T16:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
  //     "sequence": 0,
  //     "reminders": {
  //      "useDefault": true
  //     },
  //     "eventType": "default"
  //    },
  //    {
  //     "kind": "calendar#event",
  //     "etag": "\"3181159875584000\"",
  //     "id": "3qtd6uscq4tsi6gc7nmmtpqlct_20200617T120000Z",
  //     "status": "confirmed",
  //     "htmlLink": "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA2MTdUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
  //     "created": "2020-05-19T19:14:30.000Z",
  //     "updated": "2020-05-27T11:45:37.792Z",
  //     "summary": "React is Fun",
  //     "description": "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
  //     "location": "Berlin, Germany",
  //     "creator": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "organizer": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "start": {
  //      "dateTime": "2020-06-17T14:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "end": {
  //      "dateTime": "2020-06-17T15:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "recurringEventId": "3qtd6uscq4tsi6gc7nmmtpqlct",
  //     "originalStartTime": {
  //      "dateTime": "2020-06-17T14:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "iCalUID": "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
  //     "sequence": 0,
  //     "reminders": {
  //      "useDefault": true
  //     },
  //     "eventType": "default"
  //    },
  //    {
  //     "kind": "calendar#event",
  //     "etag": "\"3181161784712000\"",
  //     "id": "4eahs9ghkhrvkld72hogu9ph3e_20200618T140000Z",
  //     "status": "confirmed",
  //     "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA2MThUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
  //     "created": "2020-05-19T19:17:46.000Z",
  //     "updated": "2020-05-27T12:01:32.356Z",
  //     "summary": "Learn JavaScript",
  //     "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
  //     "location": "London, UK",
  //     "creator": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "organizer": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "start": {
  //      "dateTime": "2020-06-18T16:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "end": {
  //      "dateTime": "2020-06-18T17:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
  //     "originalStartTime": {
  //      "dateTime": "2020-06-18T16:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
  //     "sequence": 0,
  //     "reminders": {
  //      "useDefault": true
  //     },
  //     "eventType": "default"
  //    },
  //    {
  //     "kind": "calendar#event",
  //     "etag": "\"3181159875584000\"",
  //     "id": "3qtd6uscq4tsi6gc7nmmtpqlct_20200619T120000Z",
  //     "status": "confirmed",
  //     "htmlLink": "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA2MTlUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
  //     "created": "2020-05-19T19:14:30.000Z",
  //     "updated": "2020-05-27T11:45:37.792Z",
  //     "summary": "React is Fun",
  //     "description": "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
  //     "location": "Berlin, Germany",
  //     "creator": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "organizer": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "start": {
  //      "dateTime": "2020-06-19T14:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "end": {
  //      "dateTime": "2020-06-19T15:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "recurringEventId": "3qtd6uscq4tsi6gc7nmmtpqlct",
  //     "originalStartTime": {
  //      "dateTime": "2020-06-19T14:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "iCalUID": "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
  //     "sequence": 0,
  //     "reminders": {
  //      "useDefault": true
  //     },
  //     "eventType": "default"
  //    },
  //    {
  //     "kind": "calendar#event",
  //     "etag": "\"3181161784712000\"",
  //     "id": "4eahs9ghkhrvkld72hogu9ph3e_20200620T140000Z",
  //     "status": "confirmed",
  //     "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA2MjBUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
  //     "created": "2020-05-19T19:17:46.000Z",
  //     "updated": "2020-05-27T12:01:32.356Z",
  //     "summary": "Learn JavaScript",
  //     "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
  //     "location": "London, UK",
  //     "creator": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "organizer": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "start": {
  //      "dateTime": "2020-06-20T16:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "end": {
  //      "dateTime": "2020-06-20T17:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
  //     "originalStartTime": {
  //      "dateTime": "2020-06-20T16:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
  //     "sequence": 0,
  //     "reminders": {
  //      "useDefault": true
  //     },
  //     "eventType": "default"
  //    },
  //    {
  //     "kind": "calendar#event",
  //     "etag": "\"3181159875584000\"",
  //     "id": "3qtd6uscq4tsi6gc7nmmtpqlct_20200622T120000Z",
  //     "status": "confirmed",
  //     "htmlLink": "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA2MjJUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
  //     "created": "2020-05-19T19:14:30.000Z",
  //     "updated": "2020-05-27T11:45:37.792Z",
  //     "summary": "React is Fun",
  //     "description": "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
  //     "location": "Berlin, Germany",
  //     "creator": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "organizer": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "start": {
  //      "dateTime": "2020-06-22T14:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "end": {
  //      "dateTime": "2020-06-22T15:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "recurringEventId": "3qtd6uscq4tsi6gc7nmmtpqlct",
  //     "originalStartTime": {
  //      "dateTime": "2020-06-22T14:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "iCalUID": "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
  //     "sequence": 0,
  //     "reminders": {
  //      "useDefault": true
  //     },
  //     "eventType": "default"
  //    },
  //    {
  //     "kind": "calendar#event",
  //     "etag": "\"3181161784712000\"",
  //     "id": "4eahs9ghkhrvkld72hogu9ph3e_20200623T140000Z",
  //     "status": "confirmed",
  //     "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA2MjNUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
  //     "created": "2020-05-19T19:17:46.000Z",
  //     "updated": "2020-05-27T12:01:32.356Z",
  //     "summary": "Learn JavaScript",
  //     "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
  //     "location": "London, UK",
  //     "creator": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "organizer": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "start": {
  //      "dateTime": "2020-06-23T16:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "end": {
  //      "dateTime": "2020-06-23T17:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
  //     "originalStartTime": {
  //      "dateTime": "2020-06-23T16:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
  //     "sequence": 0,
  //     "reminders": {
  //      "useDefault": true
  //     },
  //     "eventType": "default"
  //    },
  //    {
  //     "kind": "calendar#event",
  //     "etag": "\"3181159875584000\"",
  //     "id": "3qtd6uscq4tsi6gc7nmmtpqlct_20200624T120000Z",
  //     "status": "confirmed",
  //     "htmlLink": "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA2MjRUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
  //     "created": "2020-05-19T19:14:30.000Z",
  //     "updated": "2020-05-27T11:45:37.792Z",
  //     "summary": "React is Fun",
  //     "description": "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
  //     "location": "Berlin, Germany",
  //     "creator": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "organizer": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "start": {
  //      "dateTime": "2020-06-24T14:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "end": {
  //      "dateTime": "2020-06-24T15:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "recurringEventId": "3qtd6uscq4tsi6gc7nmmtpqlct",
  //     "originalStartTime": {
  //      "dateTime": "2020-06-24T14:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "iCalUID": "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
  //     "sequence": 0,
  //     "reminders": {
  //      "useDefault": true
  //     },
  //     "eventType": "default"
  //    },
  //    {
  //     "kind": "calendar#event",
  //     "etag": "\"3181161784712000\"",
  //     "id": "4eahs9ghkhrvkld72hogu9ph3e_20200625T140000Z",
  //     "status": "confirmed",
  //     "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA2MjVUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
  //     "created": "2020-05-19T19:17:46.000Z",
  //     "updated": "2020-05-27T12:01:32.356Z",
  //     "summary": "Learn JavaScript",
  //     "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
  //     "location": "London, UK",
  //     "creator": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "organizer": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "start": {
  //      "dateTime": "2020-06-25T16:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "end": {
  //      "dateTime": "2020-06-25T17:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
  //     "originalStartTime": {
  //      "dateTime": "2020-06-25T16:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
  //     "sequence": 0,
  //     "reminders": {
  //      "useDefault": true
  //     },
  //     "eventType": "default"
  //    },
  //    {
  //     "kind": "calendar#event",
  //     "etag": "\"3181159875584000\"",
  //     "id": "3qtd6uscq4tsi6gc7nmmtpqlct_20200626T120000Z",
  //     "status": "confirmed",
  //     "htmlLink": "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA2MjZUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
  //     "created": "2020-05-19T19:14:30.000Z",
  //     "updated": "2020-05-27T11:45:37.792Z",
  //     "summary": "React is Fun",
  //     "description": "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
  //     "location": "Berlin, Germany",
  //     "creator": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "organizer": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "start": {
  //      "dateTime": "2020-06-26T14:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "end": {
  //      "dateTime": "2020-06-26T15:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "recurringEventId": "3qtd6uscq4tsi6gc7nmmtpqlct",
  //     "originalStartTime": {
  //      "dateTime": "2020-06-26T14:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "iCalUID": "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
  //     "sequence": 0,
  //     "reminders": {
  //      "useDefault": true
  //     },
  //     "eventType": "default"
  //    },
  //    {
  //     "kind": "calendar#event",
  //     "etag": "\"3181161784712000\"",
  //     "id": "4eahs9ghkhrvkld72hogu9ph3e_20200627T140000Z",
  //     "status": "confirmed",
  //     "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA2MjdUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
  //     "created": "2020-05-19T19:17:46.000Z",
  //     "updated": "2020-05-27T12:01:32.356Z",
  //     "summary": "Learn JavaScript",
  //     "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
  //     "location": "London, UK",
  //     "creator": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "organizer": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "start": {
  //      "dateTime": "2020-06-27T16:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "end": {
  //      "dateTime": "2020-06-27T17:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
  //     "originalStartTime": {
  //      "dateTime": "2020-06-27T16:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
  //     "sequence": 0,
  //     "reminders": {
  //      "useDefault": true
  //     },
  //     "eventType": "default"
  //    },
  //    {
  //     "kind": "calendar#event",
  //     "etag": "\"3187232047578000\"",
  //     "id": "013qoq4ns44cam7q4hqcf13eab_20200628T230000Z",
  //     "status": "confirmed",
  //     "htmlLink": "https://www.google.com/calendar/event?eid=MDEzcW9xNG5zNDRjYW03cTRocWNmMTNlYWJfMjAyMDA2MjhUMjMwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
  //     "created": "2020-07-01T15:05:49.000Z",
  //     "updated": "2020-07-01T15:07:03.789Z",
  //     "summary": "jQuery and More",
  //     "description": "Do you know jQuery is used by around 70 percent of the 10 million most popular websites as of May 2019? \n\nThough many consider it dead after Angular and Express gained popularity, jQuery is still an important part of many websites. \n\nIn our workshop, we teach basic to advanced jQuery where you will also be able to build a simple app using it. If you are familiar with JS, join us to learn probably its most popular library.",
  //     "location": "Santiago, Santiago Metropolitan Region, Chile",
  //     "creator": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "organizer": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "start": {
  //      "dateTime": "2020-06-29T01:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "end": {
  //      "dateTime": "2020-06-29T02:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "recurringEventId": "013qoq4ns44cam7q4hqcf13eab",
  //     "originalStartTime": {
  //      "dateTime": "2020-06-29T01:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "iCalUID": "013qoq4ns44cam7q4hqcf13eab@google.com",
  //     "sequence": 1,
  //     "hangoutLink": "https://meet.google.com/mqx-jyfg-uoc",
  //     "conferenceData": {
  //      "entryPoints": [
  //       {
  //        "entryPointType": "video",
  //        "uri": "https://meet.google.com/mqx-jyfg-uoc",
  //        "label": "meet.google.com/mqx-jyfg-uoc"
  //       },
  //       {
  //        "entryPointType": "more",
  //        "uri": "https://tel.meet/mqx-jyfg-uoc?pin=9759553023326",
  //        "pin": "9759553023326"
  //       },
  //       {
  //        "regionCode": "DE",
  //        "entryPointType": "phone",
  //        "uri": "tel:+49-40-8081618734",
  //        "label": "+49 40 8081618734",
  //        "pin": "678190650"
  //       }
  //      ],
  //      "conferenceSolution": {
  //       "key": {
  //        "type": "hangoutsMeet"
  //       },
  //       "name": "Google Meet",
  //       "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
  //      },
  //      "conferenceId": "mqx-jyfg-uoc",
  //      "signature": "AGirE/KiaAjBYNu1wvc5f9lZ14v5"
  //     },
  //     "reminders": {
  //      "useDefault": true
  //     },
  //     "eventType": "default"
  //    },
  //    {
  //     "kind": "calendar#event",
  //     "etag": "\"3181159875584000\"",
  //     "id": "3qtd6uscq4tsi6gc7nmmtpqlct_20200629T120000Z",
  //     "status": "confirmed",
  //     "htmlLink": "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA2MjlUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
  //     "created": "2020-05-19T19:14:30.000Z",
  //     "updated": "2020-05-27T11:45:37.792Z",
  //     "summary": "React is Fun",
  //     "description": "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
  //     "location": "Berlin, Germany",
  //     "creator": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "organizer": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "start": {
  //      "dateTime": "2020-06-29T14:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "end": {
  //      "dateTime": "2020-06-29T15:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "recurringEventId": "3qtd6uscq4tsi6gc7nmmtpqlct",
  //     "originalStartTime": {
  //      "dateTime": "2020-06-29T14:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "iCalUID": "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
  //     "sequence": 0,
  //     "reminders": {
  //      "useDefault": true
  //     },
  //     "eventType": "default"
  //    },
  //    {
  //     "kind": "calendar#event",
  //     "etag": "\"3187234500432000\"",
  //     "id": "65jg7h2f96klim15fie75mj1a1_20200629T140000Z",
  //     "status": "confirmed",
  //     "htmlLink": "https://www.google.com/calendar/event?eid=NjVqZzdoMmY5NmtsaW0xNWZpZTc1bWoxYTFfMjAyMDA2MjlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
  //     "created": "2020-07-01T15:26:57.000Z",
  //     "updated": "2020-07-01T15:27:30.216Z",
  //     "summary": "AngularJS Workshop",
  //     "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. \n\nJoin us to get introduced to this wonderful framework and dive deep into its features.",
  //     "location": "Cape Town, South Africa",
  //     "creator": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "organizer": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "start": {
  //      "dateTime": "2020-06-29T16:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "end": {
  //      "dateTime": "2020-06-29T17:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "recurringEventId": "65jg7h2f96klim15fie75mj1a1",
  //     "originalStartTime": {
  //      "dateTime": "2020-06-29T16:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "iCalUID": "65jg7h2f96klim15fie75mj1a1@google.com",
  //     "sequence": 1,
  //     "hangoutLink": "https://meet.google.com/ctp-pwtc-pmq",
  //     "conferenceData": {
  //      "entryPoints": [
  //       {
  //        "entryPointType": "video",
  //        "uri": "https://meet.google.com/ctp-pwtc-pmq",
  //        "label": "meet.google.com/ctp-pwtc-pmq"
  //       },
  //       {
  //        "entryPointType": "more",
  //        "uri": "https://tel.meet/ctp-pwtc-pmq?pin=2824243883315",
  //        "pin": "2824243883315"
  //       },
  //       {
  //        "regionCode": "DE",
  //        "entryPointType": "phone",
  //        "uri": "tel:+49-30-300195220",
  //        "label": "+49 30 300195220",
  //        "pin": "987090091"
  //       }
  //      ],
  //      "conferenceSolution": {
  //       "key": {
  //        "type": "hangoutsMeet"
  //       },
  //       "name": "Google Meet",
  //       "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
  //      },
  //      "conferenceId": "ctp-pwtc-pmq",
  //      "signature": "AGirE/IQQTa9Vuy9hN+VDhEX7QNI"
  //     },
  //     "reminders": {
  //      "useDefault": true
  //     },
  //     "eventType": "default"
  //    },


  //    {
  //     "kind": "calendar#event",
  //     "etag": "\"3187221858184000\"",
  //     "id": "3gi3kabkm3bua5lq3jhscc8s4c_20200629T200000Z",
  //     "status": "confirmed",
  //     "htmlLink": "https://www.google.com/calendar/event?eid=M2dpM2thYmttM2J1YTVscTNqaHNjYzhzNGNfMjAyMDA2MjlUMjAwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
  //     "created": "2020-07-01T13:23:24.000Z",
  //     "updated": "2020-07-01T13:42:09.092Z",
  //     "summary": "Intro to AngularJS-Remote",
  //     "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. Join us to get introduced to this wonderful framework and dive deep into its features. ",
  //     "location": "New York, NY, USA",
  //     "creator": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "organizer": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "start": {
  //      "dateTime": "2020-06-29T22:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "end": {
  //      "dateTime": "2020-06-29T23:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "recurringEventId": "3gi3kabkm3bua5lq3jhscc8s4c",
  //     "originalStartTime": {
  //      "dateTime": "2020-06-29T22:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "iCalUID": "3gi3kabkm3bua5lq3jhscc8s4c@google.com",
  //     "sequence": 2,
  //     "hangoutLink": "https://meet.google.com/xcb-hfjb-psv",
  //     "conferenceData": {
  //      "entryPoints": [
  //       {
  //        "entryPointType": "video",
  //        "uri": "https://meet.google.com/xcb-hfjb-psv",
  //        "label": "meet.google.com/xcb-hfjb-psv"
  //       },
  //       {
  //        "entryPointType": "more",
  //        "uri": "https://tel.meet/xcb-hfjb-psv?pin=4442155852117",
  //        "pin": "4442155852117"
  //       },
  //       {
  //        "regionCode": "DE",
  //        "entryPointType": "phone",
  //        "uri": "tel:+49-40-8081617300",
  //        "label": "+49 40 8081617300",
  //        "pin": "657955248"
  //       }
  //      ],
  //      "conferenceSolution": {
  //       "key": {
  //        "type": "hangoutsMeet"
  //       },
  //       "name": "Google Meet",
  //       "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
  //      },
  //      "conferenceId": "xcb-hfjb-psv",
  //      "signature": "AGirE/KwGYI6/tI3Q9TgjwEMhE+o"
  //     },
  //     "reminders": {
  //      "useDefault": true
  //     },
  //     "eventType": "default"
  //    },
  //    {
  //     "kind": "calendar#event",
  //     "etag": "\"3187221506816000\"",
  //     "id": "48m09le389vijbqfs2mcr6i87q_20200630T070000Z",
  //     "status": "confirmed",
  //     "htmlLink": "https://www.google.com/calendar/event?eid=NDhtMDlsZTM4OXZpamJxZnMybWNyNmk4N3FfMjAyMDA2MzBUMDcwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
  //     "created": "2020-07-01T13:39:01.000Z",
  //     "updated": "2020-07-01T13:39:13.408Z",
  //     "summary": "Node Gang",
  //     "description": "We meet every Tuesday to talk about Node or JavaScript in general. Node Gang is an inclusive community that tries to cater to all levels of learners during meetups. Join us if you are curious to hear about what's new in Node, patterns, interesting npm packages, and practices.",
  //     "location": "Sydney NSW, Australia",
  //     "creator": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "organizer": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "start": {
  //      "dateTime": "2020-06-30T09:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "end": {
  //      "dateTime": "2020-06-30T10:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "recurringEventId": "48m09le389vijbqfs2mcr6i87q",
  //     "originalStartTime": {
  //      "dateTime": "2020-06-30T09:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "iCalUID": "48m09le389vijbqfs2mcr6i87q@google.com",
  //     "sequence": 1,
  //     "hangoutLink": "https://meet.google.com/wdc-wutt-tji",
  //     "conferenceData": {
  //      "entryPoints": [
  //       {
  //        "entryPointType": "video",
  //        "uri": "https://meet.google.com/wdc-wutt-tji",
  //        "label": "meet.google.com/wdc-wutt-tji"
  //       },
  //       {
  //        "entryPointType": "more",
  //        "uri": "https://tel.meet/wdc-wutt-tji?pin=3796108774207",
  //        "pin": "3796108774207"
  //       },
  //       {
  //        "regionCode": "DE",
  //        "entryPointType": "phone",
  //        "uri": "tel:+49-40-8081618974",
  //        "label": "+49 40 8081618974",
  //        "pin": "170634768"
  //       }
  //      ],
  //      "conferenceSolution": {
  //       "key": {
  //        "type": "hangoutsMeet"
  //       },
  //       "name": "Google Meet",
  //       "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
  //      },
  //      "conferenceId": "wdc-wutt-tji",
  //      "signature": "AGirE/LhFDA0pcP/2mptu9nEhNEy"
  //     },
  //     "reminders": {
  //      "useDefault": true
  //     },
  //     "eventType": "default"
  //    },

  //    {
  //     "kind": "calendar#event",
  //     "etag": "\"3187234769062000\"",
  //     "id": "46717o686s7ibj1lp300pabro9_20200722T180000Z",
  //     "status": "confirmed",
  //     "htmlLink": "https://www.google.com/calendar/event?eid=NDY3MTdvNjg2czdpYmoxbHAzMDBwYWJybzlfMjAyMDA3MjJUMTgwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
  //     "created": "2020-07-01T15:28:56.000Z",
  //     "updated": "2020-07-01T15:29:44.531Z",
  //     "summary": "React Workshop",
  //     "description": "React is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
  //     "location": "Toronto, ON, Canada",
  //     "creator": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "organizer": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "start": {
  //      "dateTime": "2020-07-22T20:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "end": {
  //      "dateTime": "2020-07-22T21:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "recurringEventId": "46717o686s7ibj1lp300pabro9",
  //     "originalStartTime": {
  //      "dateTime": "2020-07-22T20:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "iCalUID": "46717o686s7ibj1lp300pabro9@google.com",
  //     "sequence": 1,
  //     "hangoutLink": "https://meet.google.com/jnj-edux-duq",
  //     "conferenceData": {
  //      "entryPoints": [
  //       {
  //        "entryPointType": "video",
  //        "uri": "https://meet.google.com/jnj-edux-duq",
  //        "label": "meet.google.com/jnj-edux-duq"
  //       },
  //       {
  //        "entryPointType": "more",
  //        "uri": "https://tel.meet/jnj-edux-duq?pin=3356856978418",
  //        "pin": "3356856978418"
  //       },
  //       {
  //        "regionCode": "DE",
  //        "entryPointType": "phone",
  //        "uri": "tel:+49-30-300195194",
  //        "label": "+49 30 300195194",
  //        "pin": "599388176"
  //       }
  //      ],
  //      "conferenceSolution": {
  //       "key": {
  //        "type": "hangoutsMeet"
  //       },
  //       "name": "Google Meet",
  //       "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
  //      },
  //      "conferenceId": "jnj-edux-duq",
  //      "signature": "AGirE/LvoztfSZ5PVG7k7gmhVqyJ"
  //     },
  //     "reminders": {
  //      "useDefault": true
  //     },
  //     "eventType": "default"
  //    },
  //    {
  //     "kind": "calendar#event",
  //     "etag": "\"3187221858184000\"",
  //     "id": "3gi3kabkm3bua5lq3jhscc8s4c_20200722T200000Z",
  //     "status": "confirmed",
  //     "htmlLink": "https://www.google.com/calendar/event?eid=M2dpM2thYmttM2J1YTVscTNqaHNjYzhzNGNfMjAyMDA3MjJUMjAwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
  //     "created": "2020-07-01T13:23:24.000Z",
  //     "updated": "2020-07-01T13:42:09.092Z",
  //     "summary": "Intro to AngularJS-Remote",
  //     "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. Join us to get introduced to this wonderful framework and dive deep into its features. ",
  //     "location": "New York, NY, USA",
  //     "creator": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "organizer": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "start": {
  //      "dateTime": "2020-07-22T22:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "end": {
  //      "dateTime": "2020-07-22T23:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "recurringEventId": "3gi3kabkm3bua5lq3jhscc8s4c",
  //     "originalStartTime": {
  //      "dateTime": "2020-07-22T22:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "iCalUID": "3gi3kabkm3bua5lq3jhscc8s4c@google.com",
  //     "sequence": 2,
  //     "hangoutLink": "https://meet.google.com/xcb-hfjb-psv",
  //     "conferenceData": {
  //      "entryPoints": [
  //       {
  //        "entryPointType": "video",
  //        "uri": "https://meet.google.com/xcb-hfjb-psv",
  //        "label": "meet.google.com/xcb-hfjb-psv"
  //       },
  //       {
  //        "entryPointType": "more",
  //        "uri": "https://tel.meet/xcb-hfjb-psv?pin=4442155852117",
  //        "pin": "4442155852117"
  //       },
  //       {
  //        "regionCode": "DE",
  //        "entryPointType": "phone",
  //        "uri": "tel:+49-40-8081617300",
  //        "label": "+49 40 8081617300",
  //        "pin": "657955248"
  //       }
  //      ],
  //      "conferenceSolution": {
  //       "key": {
  //        "type": "hangoutsMeet"
  //       },
  //       "name": "Google Meet",
  //       "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
  //      },
  //      "conferenceId": "xcb-hfjb-psv",
  //      "signature": "AGirE/KwGYI6/tI3Q9TgjwEMhE+o"
  //     },
  //     "reminders": {
  //      "useDefault": true
  //     },
  //     "eventType": "default"
  //    },
  //    {
  //     "kind": "calendar#event",
  //     "etag": "\"3187237556010000\"",
  //     "id": "111vmlbl7p8gmc0fbf5u107p8u_20200723T070000Z",
  //     "status": "confirmed",
  //     "htmlLink": "https://www.google.com/calendar/event?eid=MTExdm1sYmw3cDhnbWMwZmJmNXUxMDdwOHVfMjAyMDA3MjNUMDcwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
  //     "created": "2020-07-01T15:47:59.000Z",
  //     "updated": "2020-07-01T15:52:58.005Z",
  //     "summary": "React Native Tokyo",
  //     "description": "We meet every Monday and Thursday to talk about React Native and native app development in general. React Native Tokyo is an inclusive community that tries to cater to all levels of learners during meetups. \n\nJoin us if you are curious to hear about what's new in the field of native app development.",
  //     "location": "Tokyo, Japan",
  //     "creator": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "organizer": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "start": {
  //      "dateTime": "2020-07-23T09:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "end": {
  //      "dateTime": "2020-07-23T10:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "recurringEventId": "111vmlbl7p8gmc0fbf5u107p8u",
  //     "originalStartTime": {
  //      "dateTime": "2020-07-23T09:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "iCalUID": "111vmlbl7p8gmc0fbf5u107p8u@google.com",
  //     "sequence": 1,
  //     "hangoutLink": "https://meet.google.com/ceo-behe-ssp",
  //     "conferenceData": {
  //      "entryPoints": [
  //       {
  //        "entryPointType": "video",
  //        "uri": "https://meet.google.com/ceo-behe-ssp",
  //        "label": "meet.google.com/ceo-behe-ssp"
  //       },
  //       {
  //        "entryPointType": "more",
  //        "uri": "https://tel.meet/ceo-behe-ssp?pin=2641490783465",
  //        "pin": "2641490783465"
  //       },
  //       {
  //        "regionCode": "DE",
  //        "entryPointType": "phone",
  //        "uri": "tel:+49-40-8081617770",
  //        "label": "+49 40 8081617770",
  //        "pin": "889553795"
  //       }
  //      ],
  //      "conferenceSolution": {
  //       "key": {
  //        "type": "hangoutsMeet"
  //       },
  //       "name": "Google Meet",
  //       "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
  //      },
  //      "conferenceId": "ceo-behe-ssp",
  //      "signature": "AGirE/JaL/DB2RyTMxMcHv3/9v58"
  //     },
  //     "reminders": {
  //      "useDefault": true
  //     },
  //     "eventType": "default"
  //    },
  //    {
  //     "kind": "calendar#event",
  //     "etag": "\"3187232532588000\"",
  //     "id": "20c51je3q99mnolr1rp06dt9jd_20200723T120000Z",
  //     "status": "confirmed",
  //     "htmlLink": "https://www.google.com/calendar/event?eid=MjBjNTFqZTNxOTltbm9scjFycDA2ZHQ5amRfMjAyMDA3MjNUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
  //     "created": "2020-07-01T14:17:12.000Z",
  //     "updated": "2020-07-01T15:11:06.294Z",
  //     "summary": "Use jQuery, bring in interactivity easily ",
  //     "description": "Do you know jQuery is used by around 70 percent of the 10 million most popular websites as of May 2019? \n\nThough many consider it dead after Angular and Express gained popularity, jQuery is still an important part of many websites. \n\nIn our workshop, we teach basic to advanced jQuery where you will also be able to build a simple app using it. If you are familiar with JS, join us to learn probably its most popular library.",
  //     "location": "Mumbai, Maharashtra, India",
  //     "creator": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "organizer": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "start": {
  //      "dateTime": "2020-07-23T14:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "end": {
  //      "dateTime": "2020-07-23T15:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "recurringEventId": "20c51je3q99mnolr1rp06dt9jd",
  //     "originalStartTime": {
  //      "dateTime": "2020-07-23T14:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "iCalUID": "20c51je3q99mnolr1rp06dt9jd@google.com",
  //     "sequence": 1,
  //     "hangoutLink": "https://meet.google.com/nns-htdr-ijk",
  //     "conferenceData": {
  //      "entryPoints": [
  //       {
  //        "entryPointType": "video",
  //        "uri": "https://meet.google.com/nns-htdr-ijk",
  //        "label": "meet.google.com/nns-htdr-ijk"
  //       },
  //       {
  //        "entryPointType": "more",
  //        "uri": "https://tel.meet/nns-htdr-ijk?pin=9302146320475",
  //        "pin": "9302146320475"
  //       },
  //       {
  //        "regionCode": "DE",
  //        "entryPointType": "phone",
  //        "uri": "tel:+49-40-8081618430",
  //        "label": "+49 40 8081618430",
  //        "pin": "810644618"
  //       }
  //      ],
  //      "conferenceSolution": {
  //       "key": {
  //        "type": "hangoutsMeet"
  //       },
  //       "name": "Google Meet",
  //       "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
  //      },
  //      "conferenceId": "nns-htdr-ijk",
  //      "signature": "AGirE/LKHWXbW3Hmf42CIofZT7zK"
  //     },
  //     "reminders": {
  //      "useDefault": true
  //     },
  //     "eventType": "default"
  //    },
  //    {
  //     "kind": "calendar#event",
  //     "etag": "\"3181161784712000\"",
  //     "id": "4eahs9ghkhrvkld72hogu9ph3e_20200723T140000Z",
  //     "status": "confirmed",
  //     "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA3MjNUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
  //     "created": "2020-05-19T19:17:46.000Z",
  //     "updated": "2020-05-27T12:01:32.356Z",
  //     "summary": "Learn JavaScript",
  //     "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
  //     "location": "London, UK",
  //     "creator": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "organizer": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "start": {
  //      "dateTime": "2020-07-23T16:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "end": {
  //      "dateTime": "2020-07-23T17:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
  //     "originalStartTime": {
  //      "dateTime": "2020-07-23T16:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
  //     "sequence": 0,
  //     "reminders": {
  //      "useDefault": true
  //     },
  //     "eventType": "default"
  //    },
  //    {
  //     "kind": "calendar#event",
  //     "etag": "\"3187224991890000\"",
  //     "id": "3glt4dve9uip7oh5g5kb2bid2s_20200723T160000Z",
  //     "status": "confirmed",
  //     "htmlLink": "https://www.google.com/calendar/event?eid=M2dsdDRkdmU5dWlwN29oNWc1a2IyYmlkMnNfMjAyMDA3MjNUMTYwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
  //     "created": "2020-07-01T14:07:59.000Z",
  //     "updated": "2020-07-01T14:08:15.945Z",
  //     "summary": "Fun with Node.js",
  //     "description": "Do you know that Node.js is basically a server having the capability of executing JavaScript? If you are familiar with JS, Node.js will be an easy ride. \n\nJoin us if you want to learn how to build the server-side of an app using Node.js.",
  //     "location": "Nairobi, Kenya",
  //     "creator": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "organizer": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "start": {
  //      "dateTime": "2020-07-23T18:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "end": {
  //      "dateTime": "2020-07-23T19:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "recurringEventId": "3glt4dve9uip7oh5g5kb2bid2s",
  //     "originalStartTime": {
  //      "dateTime": "2020-07-23T18:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "iCalUID": "3glt4dve9uip7oh5g5kb2bid2s@google.com",
  //     "sequence": 1,
  //     "hangoutLink": "https://meet.google.com/wkx-akyy-omd",
  //     "conferenceData": {
  //      "entryPoints": [
  //       {
  //        "entryPointType": "video",
  //        "uri": "https://meet.google.com/wkx-akyy-omd",
  //        "label": "meet.google.com/wkx-akyy-omd"
  //       },
  //       {
  //        "entryPointType": "more",
  //        "uri": "https://tel.meet/wkx-akyy-omd?pin=9536747460380",
  //        "pin": "9536747460380"
  //       },
  //       {
  //        "regionCode": "DE",
  //        "entryPointType": "phone",
  //        "uri": "tel:+49-40-8081616512",
  //        "label": "+49 40 8081616512",
  //        "pin": "576339034"
  //       }
  //      ],
  //      "conferenceSolution": {
  //       "key": {
  //        "type": "hangoutsMeet"
  //       },
  //       "name": "Google Meet",
  //       "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
  //      },
  //      "conferenceId": "wkx-akyy-omd",
  //      "signature": "AGirE/Ielm/IWcKMVRqC0BqOJCpa"
  //     },
  //     "reminders": {
  //      "useDefault": true
  //     },
  //     "eventType": "default"
  //    },
  //    {
  //     "kind": "calendar#event",
  //     "etag": "\"3187232047578000\"",
  //     "id": "013qoq4ns44cam7q4hqcf13eab_20200723T230000Z",
  //     "status": "confirmed",
  //     "htmlLink": "https://www.google.com/calendar/event?eid=MDEzcW9xNG5zNDRjYW03cTRocWNmMTNlYWJfMjAyMDA3MjNUMjMwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
  //     "created": "2020-07-01T15:05:49.000Z",
  //     "updated": "2020-07-01T15:07:03.789Z",
  //     "summary": "jQuery and More",
  //     "description": "Do you know jQuery is used by around 70 percent of the 10 million most popular websites as of May 2019? \n\nThough many consider it dead after Angular and Express gained popularity, jQuery is still an important part of many websites. \n\nIn our workshop, we teach basic to advanced jQuery where you will also be able to build a simple app using it. If you are familiar with JS, join us to learn probably its most popular library.",
  //     "location": "Santiago, Santiago Metropolitan Region, Chile",
  //     "creator": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "organizer": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "start": {
  //      "dateTime": "2020-07-24T01:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "end": {
  //      "dateTime": "2020-07-24T02:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "recurringEventId": "013qoq4ns44cam7q4hqcf13eab",
  //     "originalStartTime": {
  //      "dateTime": "2020-07-24T01:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "iCalUID": "013qoq4ns44cam7q4hqcf13eab@google.com",
  //     "sequence": 1,
  //     "hangoutLink": "https://meet.google.com/mqx-jyfg-uoc",
  //     "conferenceData": {
  //      "entryPoints": [
  //       {
  //        "entryPointType": "video",
  //        "uri": "https://meet.google.com/mqx-jyfg-uoc",
  //        "label": "meet.google.com/mqx-jyfg-uoc"
  //       },
  //       {
  //        "entryPointType": "more",
  //        "uri": "https://tel.meet/mqx-jyfg-uoc?pin=9759553023326",
  //        "pin": "9759553023326"
  //       },
  //       {
  //        "regionCode": "DE",
  //        "entryPointType": "phone",
  //        "uri": "tel:+49-40-8081618734",
  //        "label": "+49 40 8081618734",
  //        "pin": "678190650"
  //       }
  //      ],
  //      "conferenceSolution": {
  //       "key": {
  //        "type": "hangoutsMeet"
  //       },
  //       "name": "Google Meet",
  //       "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
  //      },
  //      "conferenceId": "mqx-jyfg-uoc",
  //      "signature": "AGirE/KiaAjBYNu1wvc5f9lZ14v5"
  //     },
  //     "reminders": {
  //      "useDefault": true
  //     },
  //     "eventType": "default"
  //    },
  //    {
  //     "kind": "calendar#event",
  //     "etag": "\"3187222416180000\"",
  //     "id": "6co0ojl0l0j0rbh3g56vlc2s9i_20200724T010000Z",
  //     "status": "confirmed",
  //     "htmlLink": "https://www.google.com/calendar/event?eid=NmNvMG9qbDBsMGowcmJoM2c1NnZsYzJzOWlfMjAyMDA3MjRUMDEwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
  //     "created": "2020-07-01T13:44:15.000Z",
  //     "updated": "2020-07-01T13:46:48.090Z",
  //     "summary": "React California",
  //     "description": "React is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nReact California is a non-profit organization offering free training sessions to React enthusiasts every Wednesday and Friday.\n\nJoin us in our free React training sessions and give your career a new direction.",
  //     "location": "California, USA",
  //     "creator": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "organizer": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "start": {
  //      "dateTime": "2020-07-24T03:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "end": {
  //      "dateTime": "2020-07-24T04:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "recurringEventId": "6co0ojl0l0j0rbh3g56vlc2s9i",
  //     "originalStartTime": {
  //      "dateTime": "2020-07-24T03:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "iCalUID": "6co0ojl0l0j0rbh3g56vlc2s9i@google.com",
  //     "sequence": 1,
  //     "hangoutLink": "https://meet.google.com/imt-kabh-cib",
  //     "conferenceData": {
  //      "entryPoints": [
  //       {
  //        "entryPointType": "video",
  //        "uri": "https://meet.google.com/imt-kabh-cib",
  //        "label": "meet.google.com/imt-kabh-cib"
  //       },
  //       {
  //        "entryPointType": "more",
  //        "uri": "https://tel.meet/imt-kabh-cib?pin=8711708481601",
  //        "pin": "8711708481601"
  //       },
  //       {
  //        "regionCode": "DE",
  //        "entryPointType": "phone",
  //        "uri": "tel:+49-40-8081618688",
  //        "label": "+49 40 8081618688",
  //        "pin": "752695860"
  //       }
  //      ],
  //      "conferenceSolution": {
  //       "key": {
  //        "type": "hangoutsMeet"
  //       },
  //       "name": "Google Meet",
  //       "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
  //      },
  //      "conferenceId": "imt-kabh-cib",
  //      "signature": "AGirE/In05cchoOvbYk33gmlrnrg"
  //     },
  //     "reminders": {
  //      "useDefault": true
  //     },
  //     "eventType": "default"
  //    },
  //    {
  //     "kind": "calendar#event",
  //     "etag": "\"3187232499498000\"",
  //     "id": "7rclpdp8egm60g7kepei7j0bt9_20200724T090000Z",
  //     "status": "confirmed",
  //     "htmlLink": "https://www.google.com/calendar/event?eid=N3JjbHBkcDhlZ202MGc3a2VwZWk3ajBidDlfMjAyMDA3MjRUMDkwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
  //     "created": "2020-07-01T15:10:03.000Z",
  //     "updated": "2020-07-01T15:10:49.749Z",
  //     "summary": "Hello JavaScript!!",
  //     "description": "You know basic HTML and CSS, and interested to learn the next thing about web development? You are at the right place. Our workshop will take you to the amazing world of JavaScript. \n\nIn this workshop, you'll:- Learn JavaScript, from basics to advanced topics- Create your first app",
  //     "location": "Bangkok, Thailand",
  //     "creator": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "organizer": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "start": {
  //      "dateTime": "2020-07-24T11:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "end": {
  //      "dateTime": "2020-07-24T12:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "recurringEventId": "7rclpdp8egm60g7kepei7j0bt9",
  //     "originalStartTime": {
  //      "dateTime": "2020-07-24T11:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "iCalUID": "7rclpdp8egm60g7kepei7j0bt9@google.com",
  //     "sequence": 1,
  //     "hangoutLink": "https://meet.google.com/tbu-cgma-ikb",
  //     "conferenceData": {
  //      "entryPoints": [
  //       {
  //        "entryPointType": "video",
  //        "uri": "https://meet.google.com/tbu-cgma-ikb",
  //        "label": "meet.google.com/tbu-cgma-ikb"
  //       },
  //       {
  //        "entryPointType": "more",
  //        "uri": "https://tel.meet/tbu-cgma-ikb?pin=5464596701700",
  //        "pin": "5464596701700"
  //       },
  //       {
  //        "regionCode": "DE",
  //        "entryPointType": "phone",
  //        "uri": "tel:+49-40-8081618071",
  //        "label": "+49 40 8081618071",
  //        "pin": "382271360"
  //       }
  //      ],
  //      "conferenceSolution": {
  //       "key": {
  //        "type": "hangoutsMeet"
  //       },
  //       "name": "Google Meet",
  //       "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
  //      },
  //      "conferenceId": "tbu-cgma-ikb",
  //      "signature": "AGirE/JMEW9+pm1Esv5ik3OMrH7A"
  //     },
  //     "reminders": {
  //      "useDefault": true
  //     },
  //     "eventType": "default"
  //    },
  //    {
  //     "kind": "calendar#event",
  //     "etag": "\"3181159875584000\"",
  //     "id": "3qtd6uscq4tsi6gc7nmmtpqlct_20200724T120000Z",
  //     "status": "confirmed",
  //     "htmlLink": "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA3MjRUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
  //     "created": "2020-05-19T19:14:30.000Z",
  //     "updated": "2020-05-27T11:45:37.792Z",
  //     "summary": "React is Fun",
  //     "description": "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
  //     "location": "Berlin, Germany",
  //     "creator": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "organizer": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "start": {
  //      "dateTime": "2020-07-24T14:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "end": {
  //      "dateTime": "2020-07-24T15:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "recurringEventId": "3qtd6uscq4tsi6gc7nmmtpqlct",
  //     "originalStartTime": {
  //      "dateTime": "2020-07-24T14:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "iCalUID": "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
  //     "sequence": 0,
  //     "reminders": {
  //      "useDefault": true
  //     },
  //     "eventType": "default"
  //    },
  //    {
  //     "kind": "calendar#event",
  //     "etag": "\"3187234500432000\"",
  //     "id": "65jg7h2f96klim15fie75mj1a1_20200724T140000Z",
  //     "status": "confirmed",
  //     "htmlLink": "https://www.google.com/calendar/event?eid=NjVqZzdoMmY5NmtsaW0xNWZpZTc1bWoxYTFfMjAyMDA3MjRUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
  //     "created": "2020-07-01T15:26:57.000Z",
  //     "updated": "2020-07-01T15:27:30.216Z",
  //     "summary": "AngularJS Workshop",
  //     "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. \n\nJoin us to get introduced to this wonderful framework and dive deep into its features.",
  //     "location": "Cape Town, South Africa",
  //     "creator": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "organizer": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "start": {
  //      "dateTime": "2020-07-24T16:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "end": {
  //      "dateTime": "2020-07-24T17:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "recurringEventId": "65jg7h2f96klim15fie75mj1a1",
  //     "originalStartTime": {
  //      "dateTime": "2020-07-24T16:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "iCalUID": "65jg7h2f96klim15fie75mj1a1@google.com",
  //     "sequence": 1,
  //     "hangoutLink": "https://meet.google.com/ctp-pwtc-pmq",
  //     "conferenceData": {
  //      "entryPoints": [
  //       {
  //        "entryPointType": "video",
  //        "uri": "https://meet.google.com/ctp-pwtc-pmq",
  //        "label": "meet.google.com/ctp-pwtc-pmq"
  //       },
  //       {
  //        "entryPointType": "more",
  //        "uri": "https://tel.meet/ctp-pwtc-pmq?pin=2824243883315",
  //        "pin": "2824243883315"
  //       },
  //       {
  //        "regionCode": "DE",
  //        "entryPointType": "phone",
  //        "uri": "tel:+49-30-300195220",
  //        "label": "+49 30 300195220",
  //        "pin": "987090091"
  //       }
  //      ],
  //      "conferenceSolution": {
  //       "key": {
  //        "type": "hangoutsMeet"
  //       },
  //       "name": "Google Meet",
  //       "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
  //      },
  //      "conferenceId": "ctp-pwtc-pmq",
  //      "signature": "AGirE/IQQTa9Vuy9hN+VDhEX7QNI"
  //     },
  //     "reminders": {
  //      "useDefault": true
  //     },
  //     "eventType": "default"
  //    },
  //    {
  //     "kind": "calendar#event",
  //     "etag": "\"3187221858184000\"",
  //     "id": "3gi3kabkm3bua5lq3jhscc8s4c_20200724T200000Z",
  //     "status": "confirmed",
  //     "htmlLink": "https://www.google.com/calendar/event?eid=M2dpM2thYmttM2J1YTVscTNqaHNjYzhzNGNfMjAyMDA3MjRUMjAwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
  //     "created": "2020-07-01T13:23:24.000Z",
  //     "updated": "2020-07-01T13:42:09.092Z",
  //     "summary": "Intro to AngularJS-Remote",
  //     "description": "Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. Join us to get introduced to this wonderful framework and dive deep into its features. ",
  //     "location": "New York, NY, USA",
  //     "creator": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "organizer": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "start": {
  //      "dateTime": "2020-07-24T22:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "end": {
  //      "dateTime": "2020-07-24T23:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "recurringEventId": "3gi3kabkm3bua5lq3jhscc8s4c",
  //     "originalStartTime": {
  //      "dateTime": "2020-07-24T22:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "iCalUID": "3gi3kabkm3bua5lq3jhscc8s4c@google.com",
  //     "sequence": 2,
  //     "hangoutLink": "https://meet.google.com/xcb-hfjb-psv",
  //     "conferenceData": {
  //      "entryPoints": [
  //       {
  //        "entryPointType": "video",
  //        "uri": "https://meet.google.com/xcb-hfjb-psv",
  //        "label": "meet.google.com/xcb-hfjb-psv"
  //       },
  //       {
  //        "entryPointType": "more",
  //        "uri": "https://tel.meet/xcb-hfjb-psv?pin=4442155852117",
  //        "pin": "4442155852117"
  //       },
  //       {
  //        "regionCode": "DE",
  //        "entryPointType": "phone",
  //        "uri": "tel:+49-40-8081617300",
  //        "label": "+49 40 8081617300",
  //        "pin": "657955248"
  //       }
  //      ],
  //      "conferenceSolution": {
  //       "key": {
  //        "type": "hangoutsMeet"
  //       },
  //       "name": "Google Meet",
  //       "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
  //      },
  //      "conferenceId": "xcb-hfjb-psv",
  //      "signature": "AGirE/KwGYI6/tI3Q9TgjwEMhE+o"
  //     },
  //     "reminders": {
  //      "useDefault": true
  //     },
  //     "eventType": "default"
  //    },
  //    {
  //     "kind": "calendar#event",
  //     "etag": "\"3187232532588000\"",
  //     "id": "20c51je3q99mnolr1rp06dt9jd_20200725T120000Z",
  //     "status": "confirmed",
  //     "htmlLink": "https://www.google.com/calendar/event?eid=MjBjNTFqZTNxOTltbm9scjFycDA2ZHQ5amRfMjAyMDA3MjVUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
  //     "created": "2020-07-01T14:17:12.000Z",
  //     "updated": "2020-07-01T15:11:06.294Z",
  //     "summary": "Use jQuery, bring in interactivity easily ",
  //     "description": "Do you know jQuery is used by around 70 percent of the 10 million most popular websites as of May 2019? \n\nThough many consider it dead after Angular and Express gained popularity, jQuery is still an important part of many websites. \n\nIn our workshop, we teach basic to advanced jQuery where you will also be able to build a simple app using it. If you are familiar with JS, join us to learn probably its most popular library.",
  //     "location": "Mumbai, Maharashtra, India",
  //     "creator": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "organizer": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "start": {
  //      "dateTime": "2020-07-25T14:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "end": {
  //      "dateTime": "2020-07-25T15:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "recurringEventId": "20c51je3q99mnolr1rp06dt9jd",
  //     "originalStartTime": {
  //      "dateTime": "2020-07-25T14:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "iCalUID": "20c51je3q99mnolr1rp06dt9jd@google.com",
  //     "sequence": 1,
  //     "hangoutLink": "https://meet.google.com/nns-htdr-ijk",
  //     "conferenceData": {
  //      "entryPoints": [
  //       {
  //        "entryPointType": "video",
  //        "uri": "https://meet.google.com/nns-htdr-ijk",
  //        "label": "meet.google.com/nns-htdr-ijk"
  //       },
  //       {
  //        "entryPointType": "more",
  //        "uri": "https://tel.meet/nns-htdr-ijk?pin=9302146320475",
  //        "pin": "9302146320475"
  //       },
  //       {
  //        "regionCode": "DE",
  //        "entryPointType": "phone",
  //        "uri": "tel:+49-40-8081618430",
  //        "label": "+49 40 8081618430",
  //        "pin": "810644618"
  //       }
  //      ],
  //      "conferenceSolution": {
  //       "key": {
  //        "type": "hangoutsMeet"
  //       },
  //       "name": "Google Meet",
  //       "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
  //      },
  //      "conferenceId": "nns-htdr-ijk",
  //      "signature": "AGirE/LKHWXbW3Hmf42CIofZT7zK"
  //     },
  //     "reminders": {
  //      "useDefault": true
  //     },
  //     "eventType": "default"
  //    },
  //    {
  //     "kind": "calendar#event",
  //     "etag": "\"3181161784712000\"",
  //     "id": "4eahs9ghkhrvkld72hogu9ph3e_20200725T140000Z",
  //     "status": "confirmed",
  //     "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA3MjVUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
  //     "created": "2020-05-19T19:17:46.000Z",
  //     "updated": "2020-05-27T12:01:32.356Z",
  //     "summary": "Learn JavaScript",
  //     "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
  //     "location": "London, UK",
  //     "creator": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "organizer": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "start": {
  //      "dateTime": "2020-07-25T16:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "end": {
  //      "dateTime": "2020-07-25T17:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
  //     "originalStartTime": {
  //      "dateTime": "2020-07-25T16:00:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
  //     "sequence": 0,
  //     "reminders": {
  //      "useDefault": true
  //     },
  //     "eventType": "default"
  //    },
  //    {
  //     "kind": "calendar#event",
  //     "etag": "\"3187232583216000\"",
  //     "id": "3m5n6mcl1aqrdsg6k5vkr6to5p_20200725T163000Z",
  //     "status": "confirmed",
  //     "htmlLink": "https://www.google.com/calendar/event?eid=M201bjZtY2wxYXFyZHNnNms1dmtyNnRvNXBfMjAyMDA3MjVUMTYzMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
  //     "created": "2020-07-01T13:54:32.000Z",
  //     "updated": "2020-07-01T15:11:31.608Z",
  //     "summary": "Build Your First App with JavaScript",
  //     "description": "You know basic HTML and CSS, and interested to learn the next thing about web development? Well, you are at the right place. Our workshop will take you to the amazing world of JavaScript. \n\nIn this workshop, you'll:\n- Learn JavaScript, from basics to advanced topics\n- Create your first app",
  //     "location": "Amsterdam, Netherlands",
  //     "creator": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "organizer": {
  //      "email": "fullstackwebdev@careerfoundry.com",
  //      "self": true
  //     },
  //     "start": {
  //      "dateTime": "2020-07-25T18:30:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "end": {
  //      "dateTime": "2020-07-25T19:30:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "recurringEventId": "3m5n6mcl1aqrdsg6k5vkr6to5p",
  //     "originalStartTime": {
  //      "dateTime": "2020-07-25T18:30:00+02:00",
  //      "timeZone": "Europe/Berlin"
  //     },
  //     "iCalUID": "3m5n6mcl1aqrdsg6k5vkr6to5p@google.com",
  //     "sequence": 1,
  //     "hangoutLink": "https://meet.google.com/vxc-jcvs-juv",
  //     "conferenceData": {
  //      "entryPoints": [
  //       {
  //        "entryPointType": "video",
  //        "uri": "https://meet.google.com/vxc-jcvs-juv",
  //        "label": "meet.google.com/vxc-jcvs-juv"
  //       },
  //       {
  //        "entryPointType": "more",
  //        "uri": "https://tel.meet/vxc-jcvs-juv?pin=7178471106778",
  //        "pin": "7178471106778"
  //       },
  //       {
  //        "regionCode": "DE",
  //        "entryPointType": "phone",
  //        "uri": "tel:+49-40-8081619886",
  //        "label": "+49 40 8081619886",
  //        "pin": "257304091"
  //       }
  //      ],
  //      "conferenceSolution": {
  //       "key": {
  //        "type": "hangoutsMeet"
  //       },
  //       "name": "Google Meet",
  //       "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
  //      },
  //      "conferenceId": "vxc-jcvs-juv",
  //      "signature": "AGirE/L1nRxxage7/xYEiTpkVsOW"
  //     },
  //     "reminders": {
  //      "useDefault": true
  //     },
  //     "eventType": "default"
  //    },