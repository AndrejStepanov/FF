<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class S2_UserRootSeeder extends Seeder {

	public function run()  {
		if(env('APP_ENV') == 'production')	
			return;
		User::where('login','root')->delete();
		
		User::create(['id'=>1,  'login' => 'root', 'password'=> Hash::make('!rootpwd'), 'FirstName'=>'Admin', 'LastName'=>'Adminov', 'email'=>'root@konsom.ru', 'name'=>'Администратор', 'is_root'=>'Y', 
			'systemLanguage'=>'ru', 'user_system'=>'ForwardForms' ]);

		User::where('login','guest')->delete();
		
		User::create(['id'=>2,  'login' => 'guest', 'password'=> Hash::make('guest'), 'FirstName'=>'Guest', 'LastName'=>'Guestov', 'email'=>'guest@konsom.ru', 'name'=>'Гость', 'is_root'=>NULL, 
			'systemLanguage'=>'ru', 'user_system'=>'ForwardForms' ]);
	}

}