<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ObjStruct extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {

		try{

			/* Дерево объектов с псевдоэлементами*/
			Schema::create('trees', function (Blueprint $table) {
				$table->id('tree_id');
				$table->string('tree_group')->comment('Виды корней дерева (Объекты, Формы ввода, Фильтры, MISC)');
				$table->unsignedBigInteger('parent_id')->nullable();
				$table->string('parent_ids', 1024)->nullable();
				$table->integer('level')->comment('Уровент вложения');
				$table->string('tree_name')->comment('Название элемента в дереве');
				$table->string('tree_desc',512)->nullable()->comment('Описание элемента дерева');
				$table->string('tree_path', 4096)->nullable()->comment('Собранный путь до элемента');
				$table->string('seq_num')->comment('Сортировка в рамках родительского элемента');
				$table->timestamps();
			});

			/* объекты в системе - формы представления,модальные окна и всплыв. подсказка*/
			Schema::create('objects', function (Blueprint $table) {
				$table->unsignedBigInteger('obj_id')->comment('Идентификатор объекта 1XXXXN');
				$table->string('obj_group')->comment('Группа объекта - форма, модальное окно, модуль "F", "W", "M"');
				$table->string('obj_type')->comment('Тип объекта (АРМ, Отчёт, Гл.Страница, Окно, Модуль)');
				$table->string('obj_path',4096)->comment('Путь до объекта');
				$table->string('obj_name')->comment('Название объекта');
				$table->string('obj_desc')->nullable()->comment('Описание объекта');
				$table->string('auth')->nullable()->comment('Автор, ФИО');
				$table->string('language')->nullable()->comment('Язык по-умолчанию (код)');
				$table->unsignedBigInteger('guid_tree_id')->nullable()->comment('Ссылка на документацию в дереве (инструкция)');
				$table->timestamps();
				$table->unique('obj_id');
				$table->foreign('guid_tree_id')->references('tree_id')->on('trees');
			});

			/* Локальные ресурсы объекта (Картинки, Документы)*/
			Schema::create('miscs', function (Blueprint $table) {
				$table->id('misc_id');
				$table->unsignedBigInteger('tree_id')->nullable();
				$table->string('misc_type')->comment('Тип ресурса - IMG, DOC, ICON16, ICON32, ICON64, ICON128');
				$table->string('misc_name')->comment('Название ресурса');
				$table->string('misc_file', 512)->comment('Имя файла');
				$table->double('misc_size', 12,3)->comment('Размер файла (Кб)');
				$table->unsignedBigInteger('obj_id')->nullable()->comment('Ссылка на объект (локальный ресурс)');
				$table->timestamps();
				$table->foreign('obj_id')->references('obj_id')->on('objects');
				$table->foreign('tree_id')->references('tree_id')->on('trees');
			});

			/* Ссылки для объекта (на главной странице)*/
			Schema::create('obj_links', function (Blueprint $table) {
				$table->id('link_id');
				$table->string('link_group')->comment('Название группы (объединение ссылок)');
				$table->string('link_name')->comment('Название ссылки');
				$table->string('link_desc', 512)->nullable()->comment('Описание ссылки');
				$table->string('is_active')->comment('Активная или нет ссылка (Y,N)');
				$table->string('css_class')->nullable()->comment('Класс CSS для упралвения отображением');
				$table->string('href_link')->nullable()->comment('Ссылка на объект, куда переходить (если объект в рамках системы)');
				$table->unsignedBigInteger('obj_id')->nullable()->comment('ИД объекта в рамках системы)');
				$table->string('link_to_type')->nullable()->comment('Тип перехода, в тек. окне или в новом (_self, _blank)');
				$table->string('js_fun')->nullable()->comment('JS функция для ручного указания ссылки перехода');
				$table->unsignedBigInteger('misc_id')->nullable()->comment('Ссылка на инонку для отображения icon');
				$table->timestamps();
				$table->foreign('obj_id')->references('obj_id')->on('objects');
				$table->foreign('misc_id')->references('misc_id')->on('miscs');
			});
		}catch(PDOException $ex){
			$this->down();
			throw $ex;
		}
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()	{
		Schema::dropIfExists('obj_links');
		Schema::dropIfExists('miscs');
		Schema::dropIfExists('objects');
		Schema::dropIfExists('trees');		
	}
}
