//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('modal');
    var openModalBtn = document.getElementById('openModal');
    var closeModalBtn = document.getElementById('close-modal');

    openModalBtn.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
