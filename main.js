function openNav(){
document.getElementById("mySidenav").style.width='250px';
}

function closeNav(){
    document.getElementById("mySidenav").style.width='0px';
    document.getElementById("main").style.width='250px';
    }


function course_video(){
    location.href ="main_course.html";
    
}
function course_closeNav(){
    document.getElementById("course_details").style.width='0px';
    document.getElementById("course_video").style.width='100%';
    document.getElementById("course_main").style.width='25px';
    document.getElementById("course_main").style.display='block';
    }

function course_openNav(){
    document.getElementById("course_details").style.width='25%';
    document.getElementById("course_video").style.width='75%';
    document.getElementById("course_main").style.display='none';
}
function mainPage(){
    location.href="Main.html";
}
