/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
const gitDefinition = `Git is a way of saving different versions of your coding projects at various stages of its development.
It also allows you to create separate branches (not unlike alternate realities) of your project so that multiple people can work
on the same project at the same time without interfering with each other.`
//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
const gitHubDefinition = `GitHub is a website that stores remote repositories. First off, LOCAL repositories are stored on your machine's memory.
REMOTE repositories are stored on GitHub's servers so that you and others can access them from any machine. I should also explain what 
repositories are for. A repository contains the files needed for your project.`
//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE
const init = {
    code : "git init",
    description : "This command activates the git program, and creates an invisible git file within the repository or folder you are currently browsing."
}
//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE
const clone = {
    code : "git clone <insert GitHub URL here>",
    description : "This command creates a copy of a repository from GitHub on your local machine."
}

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE
const status = {
    code : "git status",
    description : `This command reports of the current status of the repository you are current browsing; It will tell you if you have made any 
    changes to the files that haven't been added, if you have added files, but haven't committed those changes yet, if it's linked to a remote repo, 
    and if that remote repo is up-to-date on the changes you've made to the local repo.`
}
//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE
const add = {
    code : "git add <file name>",
    description : `This command stages a file. Staging a file means to prepare it to be committed. I see it as telling git to target this file.`
}
//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE
const commit = {
    code : "git commit -m 'type your commit message here'",
    description : `This command takes the files you've added/staged and commits them as a new version of your project.
    The easiest way to do this is with the little '-m' flag. If you don't, TERRIBLE THINGS WILL HAPPEN. Also, your commit message should be short, yet descriptive.`
}

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE

const push = {
    code : "git push origin main",
    description : `This command pushes your committed version of your files to a remote repo, which you should have already linked to
    with the command "git remote add origin <GitHub URL>`
}