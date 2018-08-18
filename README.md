# How to deploy 
 > if you want to deploy this app, you will need to install NodeJs and and ReactJs environement 
 # Installing the Distro-Stable Version for Ubuntu
Ubuntu 18.04 contains a version of Node.js in its default repositories that can be used to provide a consistent experience across multiple systems. At the time of writing, the version in the repositories is 8.10.0. This will not be the latest version, but it should be stable and sufficient for quick experimentation with the language.

To get this version, you can use the apt package manager. Refresh your local package index by typing:

  #  sudo apt update

Install Node.js from the repositories:

  #  sudo apt install nodejs

If the package in the repositories suits your needs, this is all you need to do to get set up with Node.js. In most cases, you'll also want to also install npm, the Node.js package manager. You can do this by typing:

  #  sudo apt install npm

This will allow you to install modules and packages to use with Node.js.

Because of a conflict with another package, the executable from the Ubuntu repositories is called nodejs instead of node. Keep this in mind as you are running software.

To check which version of Node.js you have installed after these initial steps, type:

  #  nodejs -v

Once you have established which version of Node.js you have installed from the Ubuntu repositories, you can decide whether or not you would like to work with different versions, package archives, or version managers. Next, we'll discuss these elements, along with more flexible and robust methods of installation.

# And now we will install Reactjs 
  
  >> $ npm install --global npm
and
  >> $ npm install --global create-react-app
  
  ## Now we are going to deploy it by :
  
  > $ git clone https://github.com/apollosoldier/ReactJs_Porto.git
  > $ cd ReactJs_Porto
  > $ npm install 
  > $ npm start.
  
  Finish
  
  
  


# TRAORE Mohamed

All is in the master branch
## License

MIT ©
