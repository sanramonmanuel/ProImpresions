// TAB JS - Copy and paste the following into the Custom Footer Code section
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

// Find all the class name from each component and add JavaScript to the page builder
// Use the Class names you've assigned to each component and append them to TAB IDs you've created
$(document).ready(function(){
    $('.tabs').tabs();
    $('.tab-1').appendTo('#pestSightings');
    $('.tab-2').appendTo('#notes');
    $('.tab-3').appendTo('#genInfo');
    $('.tab-4').appendTo('#otherDocs');
    $('.tab-5').appendTo('#approvedMats');
});