<script type="text/javascript">
		

		var p = document.getElementById('content');

		document.getElementById('btn').onclick = function(){

			xxhr("GET", 'sample.txt', show);
		};

		function show(txt){
			p.innerHTML = txt;
		}

		function xxhr(method, path, func){
			
			//XHR
			var xhr = new XMLHttpRequest();
			xhr.open(method, path, true);

			xhr.onload = function(){
				if (this.status == 200){
					func(this.responseText);					 
				// }else if( this.status == 404){
				// 	p.innerHTML = " not found";
				}
			};
			xhr.send();			
		}

	</script>
