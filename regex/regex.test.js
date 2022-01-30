/* Write a function that take a string and return true if the string only contain uppercase and lowercase
characters (no numbers and symbols) and it should end with capital A else return false */

function capitalA(s) {
    let regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(A$)/g;

    if (regex.test(s)) {
        return "true";
    } else {
        return "false";
    }

}
console.log(capitalA(s));

/* Write a function that take a string and return true if the the sting is following the emails pattern
which end with io (example@example.io) */



function ioEmail(email) {
    let regex = /^(.+)@(\S+)io$./ig;
    if (regex.test(email)) {
        return "true";
    } else {
        return "false";
    }
}


/* You have a text that contain image names with their extention you need to write a function to 
find all images in that text and return their names and extention in an array 
required extention are jpg, jpeg and png.
*/

function imagesSearcher(imageName, text) {
    let arr = [];
    let regex = /jpg/;
    let regext = /jpeg/;
    let regext = /png/;

    if (regex.match(text) = true || (regex.match(text) = true || (regex.match(text) = true) )){
        arr.push(imageName);
    } else { }
}
