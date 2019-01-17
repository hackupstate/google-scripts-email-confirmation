// https://medium.com/@max.brawer/learn-to-magically-send-emails-from-your-google-form-responses-8bbdfd3a4d02
// https://developers.google.com/apps-script/guides/triggers/events
// https://webapps.stackexchange.com/questions/54670/send-html-email-from-a-spreadsheet-using-a-different-alias

// 1. Create a google form
// 2. Go to the responses tab and click the green spreadsheet button to open responses in a spreadsheet
// 2. Click "Tools" then "Script Editor". It will open a blank file in this editor
// 3. Click the "Current project's triggers" in the navbar at the top
// 4. Change "Select event source" to "From form"
// 5. Change "Select event type" to "On form submit"
// 6. Change failure submissions to "Immediately"

function myFunction(e) {
  
  var values = e.namedValues; // get all the values 
 
  var timestamp = e.values[0];
  var name = e.values[1];
  var email = e.values[2];
  var gender = e.values[3];
  var shirtSize = e.values[4];
  var dietaryRestrictions = e.values[5];
  var codeOfConduct = e.values[6];
  var over18 = e.values[7];

  var subject = "Thanks for signing up for Hack Upstate XIII on April 6-7, 2019!!";
  
  var htmlToSend = '<h1>Thanks for signing up for Hack Upstate XIII on April 6-7, 2019!</h1>' +
               '<p>If you have any questions in the meantime, feel free to reach out to team@hackupstate.com, or join our Slack community here: http://huslack.herokuapp.com/ </p>' +
               '<p>Here is what you submitted on the form: </p>' +
                 
               '<p><b>First and Last Name:</b> ' + name + '</p>' +
               '<p><b>Email:</b> ' + email + '</p>' +
               '<p><b>Gender:</b> ' + gender + '</p>' +
               '<p><b>Shirt Size:</b> ' + shirtSize + '</p>' +
               '<p><b>Dietary Restrictions:</b> ' + dietaryRestrictions + '</p>' +
               '<p><b>Code of Conduct:</b> ' + codeOfConduct + '</p>' +
               '<p><b>Over 18:</b> ' + over18 + '</p>' +
                 
               '<p>We can\'t wait to see what you\'ll build! </p>' + 
               '<p>Happy Hacking!</p>';
                
  // Send the message to the user as HTML
  MailApp.sendEmail(email, subject, '', {
    htmlBody: htmlToSend}
  ); 
}