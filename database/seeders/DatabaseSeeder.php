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
		$this->call('TestTableSeeder');		$this->command->info('Тестовая таблица загружена данными!');
		$this->call('UserRootSeeder');		$this->command->info('Администратор и гость установлены!');
		$this->call('ObjStructSeeder');		$this->command->info('Тестовая структура системы заведена!');
		$this->call('TestNSDSeeder');		$this->command->info('Тестовая структура НСИ заведена!');
		$this->call('ObjTestArm');			$this->command->info('Тестовый арм создан!');
    }
}