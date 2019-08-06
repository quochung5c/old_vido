
    // ajax cho tên đăng nhập
    var min = 6, bol1 , bol ,bol2;
    function myusername()
    {
        var x = $('#unique-username').val();
        if (x.length < min)
        {
            bol = 0;
            $('#content-user').html("Tối thiểu 6 kí tự");
        }
        else
        {
            bol = 1;
            $(document).ready(function(){
            $.get("ajaxregister.php",{usern : x},function(data){
                if($('#content-user').html(data) == "Đã Tồn Tại")
                {
                    bol1 = 0;
                }
                else
                {
                    bol1 = 1;
                }
                });
            });

        }
    }
    function mypass()
    {
        var x = $('#unique-passreal').val();
        var y = $('#unique-passfake').val();
        if (x == y)
        {
            bol2 = 1;
            $('#content-pass').html('<i style="color: green" class="fas fa-check"></i>');
        }
        else
        {
            bol2 = 0;
            $('#content-pass').html('<i style="color: red"class="fas fa-times"></i>');
        }
    }
