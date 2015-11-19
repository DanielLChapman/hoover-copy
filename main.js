            $(document).ready(function() {
                $("#horizontal-spacer").animate({
                    width: '100%',
                    left : '0'
                }, 2000);
                setTimeout(verticalOut, 2000);
                $('#right-top').hide(0).delay(2500).fadeIn(300);
                $('#right-bottom').hide(0).delay(3000).fadeIn(300);
                $('.intro_bg').addClass('zout');
                setTimeout(toggleZout, 7000);
            });
            function verticalOut() {
                $("#vertical-spacer").animate({
                    height: '100%',
                    top : '0'
                }, 1000);
            }
            function toggleZout() {
                $('.intro_bg').css("transition", "all 3s ease-in"); 
                $('.intro_bg').removeClass('zout');
                setTimeout(switchFunction, 3000);
            }
            function startZout() {
                $('.intro_bg').css("transition", "all 16s ease-in"); 
                $('.intro_bg').addClass('zout');
                setTimeout(toggleZout, 16000);
            }
            function switchFunction() {
                if($('.intro_bg').hasClass('bg1')) {
                    $('.intro_bg').removeClass('bg1');
                    $('.intro_bg').addClass('bg2');
                }
                else if($('.intro_bg').hasClass('bg2')) { 
                    $('.intro_bg').removeClass('bg2');
                    $('.intro_bg').addClass('bg3');
                }
                else {
                    $('.intro_bg').removeClass('bg3');
                    $('.intro_bg').addClass('bg1');
                }
                
                setTimeout(startZout,50);
            }