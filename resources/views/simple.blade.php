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
            window.Laravel = <?php  echo json_encode([ 'csrfToken' => csrf_token(),]); ?>;
            window.User_info = <?php echo json_encode([ 'name' =>  !Auth::check()?'':Auth::user()->name,]); ?>;
        </script>
        <script src="{{asset('js/manifest.js')}}"></script>
        <script src="{{asset('js/vendor.js')}}"></script>
        <script src="{{asset('js/'.$app_js.'.js')}}"></script>
    </body>
</html>