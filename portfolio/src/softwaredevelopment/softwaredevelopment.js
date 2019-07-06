

function SoftwareDevelopment(){

    const description = {
  
        category : {
          name : "[ software development ]",
          description : "Software architecture design is similar to design a city"
        },
  
        project : [
          {
            title : "[ AUTOMATED EQUIPMENT S/W DESIGN ]",
  
            containerColumn : '49% 40%',
            maxResourceWidth : '48%',
            tools : "Tool : UML , C++ , C#",

            description : "The measurement is needed for the production of semiconductor after Etch process.  The old method damages the surface of Wafer cause of using profiler, so we could not measure the part of transistor for the real circuit.  This is the automated S/W project which used for semiconductor 300mm & LCD FAB.  For the perfect automatic system, communicate with the host of customer and SECS (SEMI Equipment Communications Standard) Message formulation. -This is the virtual device class design which manages all electronic devices that are attached to the machines smoothly and able to multiply the action. -Recipe Class Design that makes the user makes recipe (The essential factor for the machine automation) easier and faster than before. -Runjob Class Design which operates made recipe automatically. -Sequence Editor Class Design for data measurement -SECS/GEM Communication Class Design for FA (Factory Automation).",
  
            main_image : {
              "image" : require("../resources/softwaredevelopment_01.png"),
              "caption" : "Software architecture design for automated AFM"
            },
  
            
              resources : [
  
                {
                  "image" : require("../resources/softwaredevelopment_05.png"),
                  "text" : null,
                },
  
                {
                  "image" : require("../resources/softwaredevelopment_03.png"),
                  "text" : "Sequence diagram of loading wafer",
                },

                {
                    "image" : require("../resources/softwaredevelopment_04.png"),
                    "text" : null,
                },

                {
                    "text" : "Most of equipment companies develop their s/w depend on what kind of 3’rd party dll or library use for control devices.  Imagine if you need a change system HW components in the field according to customer specs (or bad supplier).  In this case, the entire low-level device control code must be re-written. To avoid this fundamental problem, I designed a multi-action ‘virtual device’ concept treating component control at a high level of abstraction. Changing hardware is simple as the virtual device actions need only to be “re-wired’ to the new component’s functions.  This may be first time to treat AFM as a ‘component’ in automated fab system. For factory automation interfacing, I can make scenario generator (engine).  For example if we want to load a wafer or glass in to our stage, we have to check many states and values, my engine can make loading scenario with runtime and make a protocol package and send it to virtual device manager. So changing the source code to check air, vacuum and so on is eliminated.  It’s easy to incorporate system configuration changes too.",
                },

                {
                    "image" : require("../resources/softwaredevelopment_06.png"),
                    "text" : null,
                },

                {
                    "image" : require("../resources/softwaredevelopment_07.png"),
                    "text" : null,
                },


              ],

            },

            {
                title : "[ NATURAL SOUND APP ]",
      
                containerColumn : '49% 20%',
                maxResourceWidth : '90%',
                tools : "Tool : Xcode, Objective-C",
    
                description : "Become part of nature while listening to nature in your busy everyday life anywhere and at any time. - This time the UI design has been reformed for simple and easy to use. - 100% purely a natural sound. - There is absolutely no advertisement. - The developer personally went to the field to record each sound with care. The developer went to some hard time as he even dipped bare feet into the icy cold seawater in winter to record better sounds. - There are sounds of the water drops falling on the microphone at the time. - You can enjoy natural sound while another music playing on your iPhone.",
                
                main_image : {
                  "image" : null,
                  "caption" : null,
                },
      
                resources : [
      
                    {
                      "image" : require("../resources/naturalsound_05.PNG"),
                      "text" : "Simple and easy to use",
                    },
    
                  ],
    
                }
      
  
          ]
  
        };
  
  
    return description;
  }
  
  export default SoftwareDevelopment;