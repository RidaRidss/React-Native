# Complete Steps Of React Native Development From Scratch for Ubuntu 

# step 1:     Node.js 

    install node.js using ubuntu terminal 

         1. Configure Repo first :
   
              curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
   
        2. Install :
   
              sudo apt-get install -y nodejs
    
# step 2 :    Yarn Package Manager
  
               install Yarn via Debian package repository on Ubuntu
    
                1. first configure repo for installation yarn

                  curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
                  echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

                2. install yarn

                  sudo apt-get update && sudo apt-get install yarn

                3. check version

                  yarn --version
          
# step 3 :   JDK
   
            1. configure jdk using terminal :

                    sudo apt-get install openjdk-8-jdk

             2. Cache to install from ubuntu system , if you have configure earlier

                    apt-cache search jdk

            3.  Run

               1. jdk

               2. whereis java

             4. Set path for Java Home using terminal

               1. export JAVA_HOME=/usr/lib/jvm/java-8-openjdk

               2. export PATH=$PATH:/usr/lib/jvm/java-8-openjdk/bin

             5. check version

                 javac -version

#  step 4 :  Android Studio
  
            1. download android studio via site

            2. copy android studio from download directory to the path usr using terminal  in ubuntu (while we are using the permission mode to copy in usr directory bu adding -R in this command )

              sudo cp -R android-studio /usr/ 

            3. Go to the path in android studio bin folder

              cd /usr/android-studio/bin/

            4. install the file 

              ./studio.sh 
          
          
            #### note : After Installation if get an error :
                        Unable to run mksdcard SDK tool       
                        Run the Process Below :

                         [
                              1. Install Yum

                                sudo apt-get install yum*

                              2.  Run

                                sudo yum install compat-libstdc++-296.i686 compat-libstdc++-33.i686 ncurses-libs.i686 compat-libstdc++-33.x86_64

                          ]  = > ( then  Finish )
              
              
          5.  Make Emulator On Android Studio

          6. Set Android Home path in system

              First open .bashrc file which is exist in Home folder in your system

                1. 

                  [

                  Open Home Folder , press Ctrl+h then .bashrc will be enable in the folder.

                  ]

                                              OR
                  [

                  By using terminal , Run below command , you will be enable the file

                      sudo gedit ~/.bashrc

                  ]

                2. paste below paths in this file on the very top of the code

                   i) export ANDROID_HOME=/home/username/Android/Sdk

                   ii) export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
                   
                    #### note : If HAXM is not available after installation , try this process :

                        ###### Change BIOS setting

                            restart PC and press F10
                            => Security => System Security => Virtualization Technology => Enable 
                            => Security => System Security => Virtualization Technology Direction => Enable
                            press F10 for save setting and restart PC


# step 5 : Git
 
            install git using terminal

                sudo apt-get install git
     
#  step 6 :   Watchman
  
  
            1. Go to the Root path in ubuntu terminal 
       
                cd ~
       
            2. Configure Repo to download watchman
       
                git clone https://github.com/facebook/watchman.git
            
            3. redirect path watchman directory

                cd watchman/
           
             4. checkout repo  
    
                git checkout v4.7.0 
           
            5. configure libraries using terminal
  
                sudo apt-get install -y autoconf automake build-essential python-dev
          
            6. install 
       
                 1.  ./autogen.sh 

                 2.   make

                 3.   sudo apt-get install make

                 4.   check watchman version using terminal

                        watchman --version
                
                
                
# step 7 :   Watchman shutdown-server
     
                echo 999999 | sudo tee -a /proc/sys/fs/inotify/max_user_watches  && echo 999999 | sudo tee -a  /proc/sys/fs/inotify/max_queued_events && echo 999999 | sudo tee  -a /proc/sys/fs/inotify/max_user_instances && watchman  shutdown-server


# Step 8 :  Visual Studio code

  #### 1. Download Visual Studio Code for ubuntu
    
            code_1.17.0-1507160143_amd64.deb

                double tap , open and install


   #### 2. Install VS Code Extensions 

            [ Go To File => Preferences => Settings ]
        
                    OR
        
            [  press window icon on left side of vs code window, you will get the Extensions searchbar , then install below extensions one by one and press reload after installation done.

            ] = >
            {
                    1.  React Native Tools by Visual Studio Mobile Tools
                    2.  Auto Close Tag by Jun Han
                    3.  Auto Complete Tag by Jun Han
                    4. Auto Rename Tag by Jun Han
                    5.  Babel ES6/ES7 by dzannotti
                    6.  Code Spellcheker by Street Side Software
                    7.  Color Highlight by Sergii Naumov
                    8.  Document This by Jeol Day
                    9.  ESLint by Drik Baeumer
                    10.  Flow Language Support by flowtype
                    11.  Git Blame by Wade Anderson
                    12.  Lorem ipsum by Daniel Imms
                    13.  Path Intellisense by Christian Kohler
                    14.  Peep by nwallace
                    15.  Prettier - JavaScript formatter by Esben Petersen
                    16.  Rainbow Brackets by 2gua
                    17.  SVG Viewer by cssho
                    18.  SVN Changes by eliean
                    19.  TODO Highlight by Wayou Liu
                    20.  vscode-icons by Roberto Huertas
            }
            
#### 3. Change VS Code Settings
    
            presss Ctrl + ','  now change VS code settings for React-Native Code , paste below code in the setting file with in {} openend by shortcut key as above
                {
                        "editor.tabSize": 2,
                        "workbench.iconTheme": "vscode-icons",
                        "editor.formatOnSave": true,
                        "flow.useNPMPackagedFlow": true,
                        // Enable/disable JavaScript validation. (For Flow)
                        "javascript.validate.enable": false,
                        // Enable/disable default JavaScript formatter (For Prettier)
                        "javascript.format.enable": false
                }

 #### 4. Run React-Native Project in VS Code
 
            1.  Open React-Native Project in terminal
        
            2.  Use below command to open your React-Native project in VS Code
        
                [
                   code .
                ]
            
                                     OR
                        
                [

                    Open VS Code and Open Folder (select your project folder path)

                ]       
            
            3. getting VS Code Terminal 
            
                    press ctrl+J  
           
                4. Connect Your Device
            
                    1. If Android SDK is installed ,this command will work
            
                              adb
                
                    2. Run this command to get all available devices in your system and it will Run your project application in all the available devices which will shown in list by checked by the command 'adb' 
            
                            adb devices
                        
                    3. Run 
                
                        1. for the very first time run server in VS Code terminal, press + button in VS Code terminal and run below command
                        
                                react-native start
                            
                          #### note : If You got an error any time while starting the server " ERROR  A non-recoverable condition has triggered.  Watchman needs your help!" , use the below process , Run below 3 commands

                                   echo 256 | sudo tee -a /proc/sys/fs/inotify/max_user_instances
                                   echo 32768 | sudo tee -a /proc/sys/fs/inotify/max_queued_events
                                   echo 65536 | sudo tee -a /proc/sys/fs/inotify/max_user_watches
                                   watchman shutdown-server
  
                
                        
                        2. secondly run app in VS Code terminal, press + button to add a new tab in VS Code terminal and run below command

                                react-native run-android
                        
                            #### note : Now in the above command there is an option while you have already run this command first Time , app build is ready before , So no need of this for the next time

                        3(a) If You are working with an android device
                    
                            Thirdly run react server to reload the changes within project to your device app after build prepare just connect your device , in VS Code terminal press + button to add a new tab in VS Code terminal and run below command
                                [
                                    adb reverse tcp:8081 tcp:8081
                                ]
                                                  OR
                                [
                                    while you are connected to wifi to reload the changes just connect your device to system and shake your android device , now you will get a popup , go to dev setting => connect port => enter your I.P Address and then react native server will be automatically reload the app with the current changes within your app 
                                ]

                        3(b) If You are working with an emulator
                    
                              use the below command to reload changes within your app to emulator , press + button to add a new tab in VS Code terminal and run below command
                       
                                    adb shell input keyevent 82
                                                   
                        
                        #### note : only Run the above command , its important, your device should be connected to the system , while your device is not connected to wifi : " This command is to start react native server and only if it is needed , while you are not connected to any server "

                        #### note : If you got an error throw from VS Code terminal "java.io.IOException: Cannot run program : /home/username/Android/Sdk/build-tools/23.0.1/aapt" while apk installation in your device :                  
               
                           open project's directory cmd and run below command 

                                sudo apt-get install lib32stdc++6 lib32z1

                                                OR

                                Best way to install build-tools using android studio

                                    open android studio and install

     
  #### 5. For Searching files in VS Code   
    
                press ctrl+p
           
           
