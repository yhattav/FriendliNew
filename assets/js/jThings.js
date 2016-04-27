$('#createThing').submit(function(e){
    e.preventDefault();
    $.ajax({
        url:'/jThings',
        type:'post',
        data:$(this).serialize(),
        success:function(){
            document.location.reload();
        }
    });
});

$('#updateThing').submit(function(e){
    e.preventDefault();
    $.ajax({
        url:$(this).attr('action'),
        type:'put',
        data:$(this).serialize(),
        success:function(){
            document.location.reload();
        }
    });
});

$('#deleteThing').click(function(e){
    e.preventDefault();
    $.ajax({
        url:$(this).attr('action'),
        type:'delete',
        data:$(this).serialize(),
        success:function(){
            document.location.href = '/jThings';
        }
    });
});