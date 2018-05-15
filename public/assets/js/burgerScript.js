$('li>button').click(function(){
    //console.log(this);
    let sendData = {
        id: $(this).attr("id")
    };
    //console.log(sendData);
    $.post('/api/eat', sendData, function(data) {
        location.reload();
    });
});