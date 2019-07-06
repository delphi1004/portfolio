

function InteractiveArt(){

    const description = {
  
        category : {
          name : "[ interactive project ]",
          description : "It is always a pleasure for me to create an interactive project!"
        },
  
        project : [
          {
            title : "[ AQUARIUM PROJECT FOR HELSINKI CHILDREN'S HOSPITAL ]",

            description : "There was a project for Helsinki children's hospital. It was a student's volunteer project for the hospital. I was one of the team members which 4 people. We created an interactive art installation at the lobby of the hospital. Basically, kids could paint with there favorite color on the paper which already have a skeleton of a fish. Then they put the paper on the machine called 'scanner' which I developed. Finally, when they push a button then the fish which they painted will become a digital fish in the digital aquarium. While I was doing with talented people together, it was the most impressive project experience because it helps kids to feel happy and excited.",
  
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
                  "image" : require("../resources/aqua_01.png"),
                  "text" : null,
                },
  
                {
                    "image" : require("../resources/aqua_02.png"),
                    "text" : null,
                },

                {
                    "image" : require("../resources/aqua_03.JPG"),
                    "text" : null,
                },

                {
                    "image" : require("../resources/aqua_07.JPG"),
                    "text" : null,
                },

                {
                    "image" : require("../resources/aqua_05.JPG"),
                    "text" : null,
                },

                {
                    "image" : require("../resources/aqua_06.JPG"),
                    "text" : null,
                },

                {
                    "image" : require("../resources/aqua_04.JPG"),
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
    
                description : "The project name is “Game Together!” In modern society, the computer game has been growing hugely. Related in this industry, we can find many different types of a game controller such as a keyboard, Nintendo Wii, X-box controller etc. these controllers are well designed for one person to control their character in the game. It is handy and efficient. what happens if the game controller becomes an uncomfortable thing to play the game? what happens if only two people should co-work together to play a game? is it good for their relationship? or not?. Hence I designed a game controller which has a button and wheel on a box. So one controller only related in to move x-axis, and other is related in y-axis only. People should turn the wheels to move a character and archive the goal. I just want to give people new experience which is quite different than the conventional game controller.",
      
                containerColumn : '60% 39%',
                maxResourceWidth : '30%',
                tools : "Tool : Arduino, Laser cutter , Rotary sensor",
      
                main_image : {
                  "image" : require("../resources/game_controller_01.JPG"),
                  "caption" : "Two people should play the game together efficiently",
                },
    
                  resources : [
      
                    {
                      "image" : require("../resources/game_controller_02.JPG"),
                      "text" : "Rotary encoder to detect the steps of the rotation",
                    },
      
                    {
                        "image" : require("../resources/game_controller_03.JPG"),
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
      
                    description : "What happens if I can control a light? I created an interactive projection mapping system which could detect my palm position in 3D space. All the lights would rush to my palm like I'm the center of the universe. In order to do that, I just used a projector and kinect sensor to detect the palm position.",
                  },
          ]
  
        };
  
  
    return description;
  }
  
  export default InteractiveArt;