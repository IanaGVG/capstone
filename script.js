// Toggle Description Function
function toggleDescription(week) {
    const description = document.getElementById("week" + week);
    if (description.style.display === "none" || description.style.display === "") {
      description.style.display = "block";
    } else {
      description.style.display = "none";
    }
  }
  
  // Scroll Progress Bar Script
  window.onscroll = function () {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("progress-bar").style.width = scrolled + "%";
  };
  