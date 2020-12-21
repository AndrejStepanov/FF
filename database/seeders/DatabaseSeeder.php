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
		$this->call('S1_TestTableSeeder');		$this->command->info('Тестовая таблица загружена данными!');
		$this->call('S2_UserRootSeeder');		$this->command->info('Администратор и гость установлены!');
		$this->call('S3_ObjStructSeeder');		$this->command->info('Тестовая структура системы заведена!');
		$this->call('S4_TestNSDSeeder');		$this->command->info('Тестовая структура НСИ заведена!');
		$this->call('S5_ObjTestArm');			$this->command->info('Тестовый арм создан!');
    }
}