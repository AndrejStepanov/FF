<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Carbon\Carbon;

class CreateObjects extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
		$this->down();
		// Дерево объектов с псевдоэлементами
        Schema::create('_tree', function (Blueprint $table) {
			$table->charset = 'utf8';
            $table->integer('tree_id')->nullable(false)->unique();
			$table->string('tree_group',32)->nullable(false); 	//'Корень дерева
			$table->integer('parent_id');
			$table->string('parent_ids', 1024);
			$table->smallInteger('level');									// 'Уровент вложения'
			$table->string('tree_name', 256)->nullable(false);				// 'Название элемента в дереве'
			$table->string('tree_desc', 512);								// 'описание элемента дерева'
			$table->string('tree_path', 4096); 								// 'Собранный путь до элемента'	
			$table->integer('seq_num'); 									// 'Сортировка в рамках родительского элемента'
			$table->datetime('created_at')->nullable(false);
			$table->datetime('updated_at');		
			
			$table->softDeletes();
        });
        $this->initializeTree();
		
		// объекты в системе - формы представления, модальные окна
        Schema::create('_object', function (Blueprint $table) {
			$table->charset = 'utf8';
			$table->integer('obj_id')->nullable(false)->unique();
			$table->string('obj_group',1)->nullable(false);					// 'Группа объекта - форма, модальное окно, модуль "F", "W", "M"'
			$table->string('obj_type',32)->nullable(false);					// 'Тип объекта (АРМ, Отчёт, Гл.Страница, Окно, Модуль)'	
			$table->string('obj_path',4096)->nullable(false);				// 'Путь до объекта'
			$table->string('obj_name',512)->nullable(false);				// 'Название объекта'
			$table->string('obj_desc',1024);								//'Описание объекта'
			$table->string('creator', 255); 								// 'Автор, ФИО'
			$table->integer('guid_tree_id');								// 'Ссылка на документацию в дереве (инструкция) '				
			$table->datetime('created_at')->nullable(false);
			$table->datetime('updated_at');	
			
			$table->softDeletes();
			
			$table->foreign('guid_tree_id')->references('tree_id')->on('_tree');
		});
		// Ссылки до объектов (route)
		Schema::create('_alias', function (Blueprint $table) {
			$table->charset = 'utf8';
			$table->integer('alias_id')->nullable(false)->unique();
			$table->integer('obj_id')->nullable(false);						// 'Ссылка на объект '
			$table->string('src_path',1024);								// 'Путь, требуется если нет ссылки на obj !!!'
			$table->string('alias_name',1024)->nullable(false);				// 'Название алиаса для объекта, короткое название + формат переменных'
			$table->string('get_param',1024);								// 'Входные параметры для формы представления'
			$table->datetime('created_at')->nullable(false);
			$table->datetime('updated_at');	
			
			$table->softDeletes();
			
			$table->foreign('obj_id')->references('obj_id')->on('_object');
		});
		
		// Локальные ресурсы объекта (Картинки, Документы)
		Schema::create('_misc', function (Blueprint $table) {
			$table->charset = 'utf8';
			$table->integer('misc_id')->nullable(false)->unique();
			$table->integer('tree_id')->nullable(false);
			$table->string('misc_type',32)->nullable(false);				// 'Тип ресурса - IMG, DOC, ICON16, ICON32, ICON64, ICON128'
			$table->string('misc_name',128)->nullable(false);				// 'Название ресурса'
			$table->string('misc_file',512)->nullable(false);				// 'Имя файла'
			$table->integer('misc_size')->nullable(false);					// 'Размер файла (Кб)'
			$table->datetime('created_at')->nullable(false);
			$table->datetime('updated_at');
			
			$table->softDeletes();
			
			$table->foreign('tree_id')->references('tree_id')->on('_tree');
		});
		
		// Ссылки, вкладки для форм представления
		Schema::create('_obj_tab', function (Blueprint $table) {
			$table->charset = 'utf8';
			$table->integer('tab_id')->nullable(false)->unique();
			$table->integer('obj_id')->nullable(false);						// 'Ссылка на объект'
			$table->string('position',32)->nullable(false);					// 'Позиция на экране (слева или справа) left - right'
			$table->string('name', 255)->nullable(false);					// 'Название ссылки'
			$table->string('desc', 1024);									// 'Описание, всплывающая подсказка'
			$table->integer('link_to_obj');									// 'Ссылка на объект'
			$table->longText('js_code');									// 'Ссылка на JS функцию, доп. режим, если задан то игнорируется поле link_to_obj'
			$table->string('link_href',1024);								// 'Внешняя ссылка (за рамками системы)'
			$table->datetime('created_at')->nullable(false);
			$table->datetime('updated_at');
						
			$table->softDeletes();
			
			$table->foreign('obj_id')->references('obj_id')->on('object');
			$table->foreign('link_to_obj')->references('obj_id')->on('object');
		});
		
		// Локальные ресурсы объекта (Картинки, Документы)
		Schema::create('_obj_fun', function (Blueprint $table) {
			$table->charset = 'utf8';
			$table->integer('fun_id')->nullable(false)->unique();
			$table->integer('obj_id')->nullable(false);						// 'Ссылка на объект'	
			$table->smallInteger('pos_seq')->nullable(false);				// 'Порядок отображения'
			$table->string('fun_pos',32)->nullable(false);					// 'Слева или справа / left, right'
			$table->string('fun_type',32)->nullable(false);					//  'Тип отображения - Функция, Ссылка, Пробел, Разделитель/ fun, nbsp, line'
			$table->string('fun_name',128);									// 'Название функции'
			$table->string('fun_desc',1024);								// 'Описание функции'
			$table->boolean('is_active')->default(true)->nullable(false);	// 'Активность функции'
			$table->integer('img_active_local');							// 'ICON ссылка на MISC'
			$table->integer('img_disabled_local');							// 'Ссылка на MISC'
			$table->integer('link_to_obj');									// 'Ссылка на объект (МОДАЛЬНОЕ ОКНО)'
			$table->longText('js_code');									// 'Ссылка на JS функцию, доп. режим, если задан то игнорируется поле link_to_obj'
			$table->datetime('created_at')->nullable(false);
			$table->datetime('updated_at');
			
			$table->softDeletes();
			
			$table->foreign('obj_id')->references('obj_id')->on('object');
			$table->foreign('link_to_obj')->references('obj_id')->on('object');
			$table->foreign('img_active_local')->references('misc_id')->on('_misc');
			$table->foreign('img_disabled_local')->references('misc_id')->on('_misc');
		});
		
		// Локальные ресурсы объекта (Картинки, Документы)
		Schema::create('_obj_frame', function (Blueprint $table) {
			$table->charset = 'utf8';
			$table->integer('frame_id')->nullable(false)->unique();			
			$table->integer('obj_id')->nullable(false);						// 'Ссылка на объект'
			$table->string('html_id', 255)->nullable(false);				// 'ИД формы в HTML документе'	
			$table->integer('component_id');								// 'Ссылка на один из компонентов для настройки отображения'
			
			$table->string('width',32);										// 'Ширина'
			$table->string('height',32);									// 'Высота'
			$table->string('top',32);										// 'Отступ сверху'
			$table->string('bottom',32);									// 'Отступ снизу'
			$table->string('left',32);										// 'Отступ слева'
			$table->string('right',32);										// 'Отступ справа'
			$table->datetime('created_at')->nullable(false);
			$table->datetime('updated_at');
			
			$table->softDeletes();
			
			$table->foreign('obj_id')->references('obj_id')->on('object');
		});			
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('_obj_frame');
        Schema::dropIfExists('_obj_fun');
        Schema::dropIfExists('_obj_tab');
        Schema::dropIfExists('_misc');
        Schema::dropIfExists('_alias');
        Schema::dropIfExists('_object');
        Schema::dropIfExists('_tree');
    }

    public function initializeTree()
    {
        DB::table('_tree')->truncate();        
        DB::table('_tree')->insert(array("tree_id"=>"100001",
										"tree_group"=>"object",
										"parent_id"=>null,
										"parent_ids"=>null,
										"level"=>"0",
										"tree_name"=>"Объекты системы",
										"tree_desc"=>"Объекты системы",
										"tree_path"=>"Объекты системы",
										"seq_num"=>"1",
										"created_at"=>Carbon::now()));
        DB::table('_tree')->insert(array("tree_id"=>"100002",
										"tree_group"=>"object",
										"parent_id"=>"100001",
										"parent_ids"=>"100001",
										"level"=>"1",
										"tree_name"=>"Формы представления",
										"tree_desc"=>"Формы представления",
										"tree_path"=>"Объекты системы::Формы представления",
										"seq_num"=>"1",
										"created_at"=>Carbon::now()));
        DB::table('_tree')->insert(array("tree_id"=>"100003",
										"tree_group"=>"object",
										"parent_id"=>"100001",
										"parent_ids"=>"100001",
										"level"=>"1",
										"tree_name"=>"Модули (окна)",
										"tree_desc"=>"Модальные окна, которые используются в разных формах",
										"tree_path"=>"Объекты системы::Модули (окна)",
										"seq_num"=>"2",
										"created_at"=>Carbon::now()));
										
        DB::table('_tree')->insert(array("tree_id"=>"100004",
										"tree_group"=>"misc",
										"parent_id"=>null,
										"parent_ids"=>null,
										"level"=>"0",
										"tree_name"=>"Ресурсы",
										"tree_desc"=>"Хранилище картинок, документов",
										"tree_path"=>"Ресурсы",
										"seq_num"=>"2",
										"created_at"=>Carbon::now()));
										
        DB::table('_tree')->insert(array("tree_id"=>"100005",
										"tree_group"=>"filter",
										"parent_id"=>null,
										"parent_ids"=>null,
										"level"=>"0",
										"tree_name"=>"Фильтры",
										"tree_desc"=>"Шаблоны фильтров для поиска данных",
										"tree_path"=>"Фильтры",
										"seq_num"=>"3",
										"created_at"=>Carbon::now()));
	
        DB::table('_tree')->insert(array("tree_id"=>"100006",
										"tree_group"=>"input",
										"parent_id"=>null,
										"parent_ids"=>null,
										"level"=>"0",
										"tree_name"=>"Формы ввода",
										"tree_desc"=>"Шаблоны форм ввода информации в систему",
										"tree_path"=>"Формы ввода",
										"seq_num"=>"4",
										"created_at"=>Carbon::now()));
    }
}
