function utilityCharges_keisan(){
 
    target = document.getElementById("output");

    //入力された数字を取得
    var ryoukinNotcomma = document.kirokubox.kingaku.value;
    var ryoukin = ryoukinNotcomma.replace( /(\d)(?=(\d\d\d)+(?!\d))/g, "$1," );
    
    //日付の計算
    var dt = new Date();
	var month = dt.getMonth()+1;
	var day = dt.getDate();

	var lastMonth = dt.setMonth(dt.getMonth() -1);
	var lastmonth = dt.getMonth()+1;//このコードを忘れると、数字の羅列で表示される。
	
	var twoMonths = dt.setMonth(dt.getMonth() -2);
	var twomonth = dt.getMonth()+2;

	/*var lastMonth = dt.setMonth(month -2);
	var lastmonth = dt.getMonth()+1;//このコードを忘れると、数字の羅列で表示される。
	
	var twoMonth = dt.setMonth(month -3);
	var twomonth = dt.getMonth()+1;*/

	var lastDay = dt.setDate(day -33);
	var lastday = dt.getDate();

	//セレクトボックス、日付、金額を文字列結合
    var f = document.kirokubox.utilityCharges;
	for(var i = 0 ; i < f.options.length ; i++){
		if(f.options[0].selected){
			target.innerHTML = ('<pre class="output_hizuke">今月の'+ f.options[0].value +'料金</pre>'+'<pre class="output_kingaku">●'+ lastmonth + "月" + lastday + "日～"+ month + "月" + day + "日　" + ryoukin +"円</pre>");
			
		} else if(f.options[1].selected) {
			target.innerHTML = ('<pre class="output_hizuke">今月の'+ f.options[1].value +'料金</pre>'+'<pre class="output_kingaku">●'+ lastmonth + "月" + lastday + "日～"+ month + "月" + day + "日　" + ryoukin +"円</pre>");

		} else if(f.options[2].selected){
			target.innerHTML = ('<pre class="output_hizuke">今月の'+ f.options[2].value +'料金</pre>'+'<pre class="output_kingaku">●'+ twomonth + "月" + day + "日～"+ month + "月" + day + "日　" + ryoukin +"円</pre>");
		}
	}
}