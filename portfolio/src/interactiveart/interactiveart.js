

function InteractiveArt(){

    const description = {
  
        category : {
          name : "[ interactive project ]",
          description : "It is always a pleasure for me to create an interactive project!"
        },
  
        project : [
          {
            title : "[ AQUARIUM PROJECT FOR HELSINKI CHILDREN'S HOSPITAL ]",

            description : "I participated in a student volunteer project for the Helsinki Children's Hospital, working with a team of four to create an interactive art installation in the hospital lobby. The installation allowed kids to paint their favourite colours on a fish outline on paper, which was then scanned using a machine I developed. When the paper was placed in the scanner and a button was pressed, the painted fish was transformed into a digital fish in a virtual aquarium. Collaborating with talented individuals on this project was a truly impactful experience, as it brought joy and excitement to the children.",
  
            containerColumn : '60% 30.5% 10%',
            maxResourceWidth : '30%',
            tools : "Tool : Unity3D, Fusion 360, Teensy",
  
            main_image : {
              "movie" : 'FRKkWGA_G0s',
              "height" : "83%",
              "caption" : "null",
            },

              resources : [
  
                {
                  "image" : require("../resources/small/aqua_01.png"),
                  "text" : null,
                },
  
                {
                    "image" : require("../resources/small/aqua_02.png"),
                    "text" : null,
                },

                {
                    "image" : require("../resources/small/aqua_03.JPG"),
                    "text" : null,
                },

                {
                    "image" : require("../resources/small/aqua_07.JPG"),
                    "text" : null,
                },

                {
                    "image" : require("../resources/small/aqua_05.JPG"),
                    "text" : null,
                },

                {
                    "image" : require("../resources/small/aqua_06.JPG"),
                    "text" : null,
                },

                {
                    "image" : require("../resources/small/aqua_04.JPG"),
                    "text" : null,
                },

                {
                  "movie" : "KFxfdGawWyI",
                  "height" : "83%",
                  "caption" : "null",
                }
              ]
            },

            {
                title : "[ the most uncomfortable game controller ]",
    
                description : `The project, titled "Game Together!", explores the world of computer gaming and the various types of game controllers available. While standard controllers are designed for individual use, what happens when they become cumbersome or when two players must work together to play a game? This project aimed to answer these questions by designing a unique game controller consisting of a box with buttons and wheels. Each controller controls only one axis, allowing players to work together to move their character and reach the game's objective. This new design offers a fresh and unique gaming experience that diverges from the traditional game controller.`,
      
                containerColumn : '60% 39%',
                maxResourceWidth : '30%',
                tools : "Tool : Arduino, Laser cutter , Rotary sensor",
      
                main_image : {
                  "image" : require("../resources/small/game_controller_01.JPG"),
                  "caption" : "Two people should play the game together efficiently",
                },
    
                  resources : [
      
                    {
                      "image" : require("../resources/small/game_controller_02.JPG"),
                      "text" : "Rotary encoder to detect the steps of the rotation",
                    },
      
                    {
                        "image" : require("../resources/small/game_controller_03.JPG"),
                        "text" : "Laser cutting",
                    },
                  ]
                },

                {
                    "title" : "[ PROJECTION MAPPING ]",
          
                    containerColumn : '65% 35%',
                    maxResourceWidth : '55%',
                    tools : "Tool : Processing , OpenCV , Kinect sensor , Mini projector",
        
                    main_image : {
                      "movie" : "yYf2Ssi9EQA",
                      "caption" : null,
                      "height" : "200%",
                    },
      
                    description : `I developed an innovative projection mapping system that allows for interactive control of lights. By utilizing a combination of a projector and a Kinect sensor, the system detects the 3D position of a person's palm and directs the lights to converge on it, as if they were being drawn towards the centre of the universe. This unique technology offers a new and captivating experience for users.`,
                  },
          ]
  
        };
  
  
    return description;
  }
  
  export default InteractiveArt;