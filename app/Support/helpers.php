<?php
use App\Exceptions\KonsomException;
		
/**
*	Функция проверяет существование указанной переменной
*	
*	Возвращает значение переменной, или значение по умолчанию, если ее не существует
*
*	@param $val Указатель на переменную
*	@param $default Значение по умолчанию
*	@return Знчение
*	@author Струков И.С. 
*/
function nvl(&$val, $default='') {if(empty($val))return $default ; return $val;}

/**
 *	Функция получения названия месяца по его номеру
 *
 *	Возвращает название месяца по его номеру. возможен родительный падеж
 *
 *	@param $num Номер месяца
 *	@param $mode возвращаемый падеж
 *	@return Название месяца
 *	@author Струков И.С.
 */
function get_rus_month($num , $mode = null){
	$months=['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
	if($mode == 'R')
		$months=['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
	if($num>=1 && $num <=12)
		return $months[$num-1];
	else
		return '';
}

function error( $title = null, $message = null, $code = 400){
	throw new KonsomException( $title,$message,$code); 
}

function makeErrResponse($params, $code){
	if(config('app.debug'))
		return response()->json(array('title'=>$params['title'], 'message'  => $params['message'], 'file'=>$params['file'], 'line'=>$params['line'], 'trace'=> $params['trace'],   ), $code);
	else
		return response()->json(array('title'=>$params['title'], 'message'  => (preg_match("/^[а-яА-Я]*/", $params['message'])?$params['message']:'Системная ошибка, обратитесь к администратору!'  ) ), $code );
}

function getTicket(){
	return  md5(session()->getId()) ;
}
function checkTicket($ticket){
	return  md5(session()->getId())==$ticket ;
}

function parseTodo($arr){
	$tmp = [];
	foreach($arr as $row ){
		if(array_search($row['type'], ['INFO','NBSP','LINE', ])!==FALSE)
			continue;
		if( !nvl($row['multy'] ) &&  array_search($row['type'], ['INPUT','LIST','BOOL','PASSWORD','NUMBER','HIDDEN','DATE','DATETIME','TIME','TEXT', ])!==FALSE )
			$tmp[$row['code'] ]=$row['value'];
		//if( array_search($row['type'], ['DATE_RANGE','DATETIME_RANGE', 'TIME_RANGE', 'RANGE' ])!==FALSE )

		else 
			$tmp[$row['code'] ]=$row['value_arr'];		
	}
	return $tmp;
}
function createTodo($data){
	$tmp = [];
	if(!nvl($data['todo']))
		return $tmp;
	$tmp = parseTodo($data['todo']);
	return $tmp;
}
function createArrTodo($data){
	$tmp = array();
	if(!nvl($data['todo']))
		return $tmp;
	foreach($data['todo'] as $row )
		$tmp[]=parseTodo($row);
	return $tmp;
}

function convertToAssArr($arr,$key){
	$tmp=[];
	foreach($arr as $row)
		$tmp[ $row[$key] ] = $row;
	return $tmp;
}