    <script type="text/javascript">
        var _scrollPosition = 0;

        try {
            var prm = Sys.WebForms.PageRequestManager.getInstance();
            prm.add_beginRequest(function() {
                _scrollPosition = $(window).scrollTop();
            });
            prm.add_endRequest(function() {
                //alert('');
                setTimeout(function(){
                    $(window).scrollTop(_scrollPosition);
                }, 100);
                //$('.modal').on('hidden.bs.modal', function () {
                //    $(window).scrollTop(_scrollPosition);
                //});
                //$(window).scrollTop(_scrollPosition);
            });
        }
        catch(err) {
        }
        //Ends Here

    </script>
