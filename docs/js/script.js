'use strict';

/*DOTS FOR ROUNDED PANELS*/
document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.dot');
    var contents = document.querySelectorAll('.rounded-rectangle-container');

    // Show the first content on document load
    contents.forEach(function(content, index) {
        if (index === 0) {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });

    // Add the active class to the first button on load
    if (buttons.length > 0) {
        buttons[0].classList.add('active-dot');
    }

    buttons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            var targetId = this.getAttribute('data-target');
            var targetContent = document.getElementById(targetId);

            // Toggle the active class on buttons
            buttons.forEach(function(btn) {
                btn.classList.remove('active-dot');
            });
            this.classList.add('active-dot');

            // Hide all content paragraphs
            contents.forEach(function(content) {
                content.style.display = 'none';
            });

            // Show the selected content paragraph
            if (targetContent) {
                targetContent.style.display = 'block';
            }

        });
    });

});


/*BUTTON FOR TEXT */

document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.toggle-btn');
    var contents = document.querySelectorAll('.content');

    // Show the first content on document load
    if (contents.length > 0) {
        contents[0].style.display = 'block';
    }

    // Add the active class to the first button on load
    if (buttons.length > 0) {
        buttons[0].classList.add('active-btn');
    }

    buttons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            var targetId = this.getAttribute('data-target');
            var targetContent = document.getElementById(targetId);

            // Toggle the active class on buttons
            buttons.forEach(function(btn) {
                btn.classList.remove('active-btn');
            });
            this.classList.add('active-btn');

            // Hide all content paragraphs
            contents.forEach(function(content) {
                content.style.display = 'none';
            });

            // Show the selected content paragraph
            if (targetContent) {
                targetContent.style.display = 'block';
            }
        });
    });
});