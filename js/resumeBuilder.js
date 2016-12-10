/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "name": "Ajay Mehra",
    "role": "Web Developer",
    "contacts": {
        "mobile": "9632789779",
        "email": "ajay.mehra@gmail.com",
        "github": "ajaymehra05",
        "twitter": "ajaymehra05",
        "location": "Bangalore"
    },
    "welcomeMessage": "Welcome to My Online Resume",
    "skills": ["Javascript", "Core Java", "HTML", "CSS"],
    "biopic": "images/ajay.jpg"
};

var work = {
    "jobs": [
      {
        "employer": "Amazon",
        "title": "Web Developer",
        "location": "Bangalore",
        "dates": "2008-2010",
        "description": "Javascript developer"
      },
      {
       "employer": "Google",
        "title": " Sr. Web Developer",
        "location": "Bangalore",
        "dates": "2010-2012",
        "description": " Sr Javascript developer"
      }
            ]
      };

var projects = {
    "projects": [
      {
        "title": "JS Framework",
        "dates": "2008-2010",
        "description": "JReact is front end library developed by Facebook. It's used for handling view layer for web and mobile apps. ReactJS allows us to create reusable UI components. It is currently one of the most popular JavaScript libraries and it has strong foundation and large community behind it.",
        "images": [
          {
            "url": "images/react1.jpg"
          },
          {
            "url": "images/react2.jpg"
          }
                  ]
      },
      {
        "title": "API Framework",
        "dates": "2010-2012",
        "description": "Representational state transfer (REST) or RESTful web services are one way of providing interoperability between computer systems on the Internet. REST-compliant web services allow requesting systems to access and manipulate textual representations of web resources using a uniform and predefined set of stateless operations. Other forms of web service exist, which expose their own arbitrary sets of operations such as WSDL and SOAP.[1] Web resources were first defined on the World Wide Web as documents or files identified by their URLs, but today they have a much more generic and abstract definition encompassing every thing or entity that can be identified, named, addressed or handled, in any way whatsoever, on the web. In a REST web service, requests made to a resource's URI will elicit a response that may be in XML, HTML, JSON or some other defined format. The response may confirm that some alteration has been made to the stored resource, and it may provide hypertext links to other related resources or collections of resources. Using HTTP, as is most common, the kind of operations available include those predefined by the HTTP verbs GET, POST, PUT, DELETE and so on. By making use of a stateless protocol and standard operations REST systems aim for fast performance, reliability, and the ability to grow, by using reused components that can be managed and updated without affecting the system as a whole, even while it is running.",
        "images": [
          {
            "url": "images/api1.jpg"
          },
          {
            "url": "images/api2.jpg"
          }
                  ]
      }
                ]
};

var education = {
    "schools": [
      {
        "name": "IARE",
        "location": "Dundigal Hyderabad",
        "degree": "BTECH",
        "majors": ["CS"],
        "dates": "2008",
        "URL": "www.iare.com"
      },
      {
        "name": "Air Force School",
        "location": "Begumpet Hyderabad",
        "degree": "Matriculation",
        "majors": ["MPC"],
        "dates": "2004",
        "URL": "www.airforce.com"
      }
                ],
    "onlineCourses": [
      {
        "title": "Frontend Web Developer Course",
        "school": "Udacity",
        "dates": "2016",
        "url": "www.udacity.com"
      },
      {
        "title": "Android Developer",
        "school": "Udacity",
        "dates": "2016",
        "url": "www.udacity.com"
      }]

};

function nameChanger(Name) {
    var finalName = Name;
    finalName = finalName.slice(0,1).toUpperCase() + finalName.slice(1).toLowerCase();

    return finalName;
};


bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    for( var key in bio.contacts) {
    var formattedContactobject = HTMLcontactGeneric.replace("%contact%", nameChanger(key));
    var formattedContact = formattedContactobject.replace("%data%", bio.contacts[key]);
    $('#topContacts').prepend(formattedContact);
  }
  $('#header').prepend(formattedRole);
  $('#header').prepend(formattedName);
  $('#header').append(formattedPic);
  $('#header').append(formattedWelcomeMsg);


$('#header').append(HTMLskillsStart);

for(var i=0; i<bio.skills.length; i++) {
  if(bio.skills.length > 0) {
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
    $('#skills').append(formattedSkills);
    }
  }
};

work.display = function() {
for(job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    var formattedemployerTitle = formattedworkEmployer + formattedworkTitle + formattedworkDates + formattedworkLocation + formattedworkDescription;
    $(".work-entry:last").append(formattedemployerTitle);

};

projects.display = function() {
  $("#projects").append(HTMLprojectStart);
    for(project in projects.projects) {
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);
        if(projects.projects[project].images.length>0) {
            for(image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image].url);
                $(".project-entry:last").append(formattedImage);
            }
        }

    }
}
};

education.display = function() {
  $('#education').append(HTMLschoolStart);
  for(var i=0; i<education.schools.length; i++) {
    if(education.schools.length >0 ) {
    var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
    $('.education-entry').append(formattedschoolName);
    var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
    $('.education-entry').append(formattedschoolDegree);
    var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
    $('.education-entry').append(formattedschoolDates);
    var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
    $('.education-entry').append(formattedschoolLocation);
    var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
    $('.education-entry').append(formattedschoolMajor);
    }
  }

    $('#education').append(HTMLonlineClasses);
    for(var i=0; i<education.onlineCourses.length; i++) {
    if(education.onlineCourses.length >0 ) {
    var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
    var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
    $('#education h3').append(formattedonlineTitle + formattedonlineSchool);
    var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
    $('#education h3').append(formattedonlineDates);
    var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
    $('#education h3').append(formattedonlineURL);
    }
  }
};

bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);