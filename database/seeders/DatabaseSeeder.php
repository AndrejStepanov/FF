<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
class DatabaseSeeder extends Seeder{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run() {
		$this->call('Database\Seeders\S1_TestTableSeeder');		$this->command->info('Тестовая таблица загружена данными!');
		$this->call('Database\Seeders\S2_UserRootSeeder');		$this->command->info('Администратор и гость установлены!');
		$this->call('Database\Seeders\S3_ObjStructSeeder');		$this->command->info('Тестовая структура системы заведена!');
		$this->call('Database\Seeders\S4_TestNSDSeeder');		$this->command->info('Тестовая структура НСИ заведена!');
		$this->call('Database\Seeders\S5_ObjTestArm');			$this->command->info('Тестовый арм создан!');
    }
}