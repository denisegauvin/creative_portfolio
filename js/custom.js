


    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* timers */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    $('#charts').waypoint(function() {
        // first timer
        $('.ChartNumber1').countTo({

            from: 0, // the number you want to start
            to: 2160, // the number you want to reach
            speed: 1500,
            refreshInterval: 100

        });

        // second timer
        $('.ChartNumber2').countTo({

            from: 0,// the number you want to start
            to: 28,// the number you want to reach
            speed: 2000,
            refreshInterval: 50

        });


        // third timer
        $('.ChartNumber3').countTo({

            from: 0,// the number you want to start
            to: 100,// the number you want to reach
            speed: 2500,
            refreshInterval: 10
        });



    }, { offset: 500 });


    var filtertextholder=$('.FilterPositionAboslute .textholder');
    $( "#filters .btn" ).click(function() {
        var Text = $(this).text();
        filtertextholder.text( Text );
    });




