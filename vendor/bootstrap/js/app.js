$(document).ready(function() {
    $.ajax({
        url: "http://rest-service.guides.spring.io/greeting"
    }).then(function(data) {
       $('.greeting-id').append(data.id);
       $('.greeting-content').append(data.content);
    });
});

<script src="https://checkout-sandbox.getbread.com/bread.js" data-api-key="4dbfe30f-0841-45bf-b281-7de2f2c62a49"></script>
