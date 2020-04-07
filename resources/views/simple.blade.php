<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>ForwardForms - KonsOM</title>
        <link href="{{asset('css/app.css')}}" rel="stylesheet" type="text/css">
    </head>
    <body>
        <div id="app"></div>
        <script>
            window.profID ='{{(isset($profID)?$profID:"")}}';
            window.laravel = {'ticket': "{{ getTicket() }}", }
            window.userInfo ={ 
                @if (Auth::check())
                    name : '{{Auth::user()->name}}', userId : '{{Auth::user()->id}}', isRoot : '{{Auth::user()->isRoot}}', avatar : '{{Auth::user()->avatar}}', 
                @endif
            };
            window.systemLanguage="{{Auth::check()? Auth::user()->systemLanguage :'ru'}}"
            
        </script>
        <script src="{{asset('js/manifest.js')}}"></script>
        <script src="{{asset('js/vendor.js')}}"></script>
        <script src="{{asset('js/value_equals.js')}}"></script>
        <script src="{{asset('js/functions.js')}}"></script>
        <script src="{{asset('js/'.$app_js.'.js')}}"></script>
    </body>
</html>