
        tailwind.config = {
            darkMode: 'class',
        };

        /*JavaScript for Read More Button */
        function toggleReadMore() {
            var moreText = document.getElementById("moreText");
            var btnText = document.getElementById("readMoreBtn");
    
            if (moreText.classList.contains("hidden")) {
                moreText.classList.remove("hidden");
                btnText.innerHTML = "🔽 Read Less";
            } else {
                moreText.classList.add("hidden");
                btnText.innerHTML = "📖 Read More";
            }
        }

        /*AOS Animation Script */

    AOS.init({
        duration: 800,
        once: true
    });



/* AOS Animation Script */

    AOS.init({
        duration: 800,
        once: true
    });



/* AOS Animation Script */

    AOS.init({
        duration: 800,
        once: true
    });



/* AOS Animation Script */

    AOS.init({
        duration: 800,
        once: true
    });

    /* Include AOS JavaScript */
    <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
 
        AOS.init({
            duration: 800,  // Animation speed in milliseconds
            once: true      // Ensures animation only happens once per scroll
        });

        
    function openProject(title, description, imgSrc, liveDemo, github) {
        document.getElementById("project-title").innerText = title;
        document.getElementById("project-description").innerText = description;
        document.getElementById("project-image").src = imgSrc;
        document.getElementById("live-demo").href = liveDemo;
        document.getElementById("github-link").href = github;
        
        let popup = document.getElementById("project-popup");
        popup.classList.add("show");
    }

    function closeProject() {
        let popup = document.getElementById("project-popup");
        popup.classList.remove("show");
    }
