//bài tập 1
function ex1 () {
    var sum = 0
    for(var i = 0 ; sum < 10000 ; i++){
       
        sum = sum + i
        
    }
    document.getElementById('resBT1').innerHTML = i-1
}
// bài tập 2
function ex2 (){
    var x = document.getElementById('textNumX').value;
    var n = document.getElementById('textNumN').value;
    
   var sum = 0 
   var lt = 1
    for(var i = 1 ; i <= n ; i++){
       lt = lt *x 
       sum += lt
    }
    document.getElementById('resBT2').innerHTML = sum
}

// bài tập 3
function ex3 () {
    var num = document.getElementById('textNumBt3').value
    var giaithua = 1
    for (var i = 1 ; i <= num ; i++){
        giaithua *= i
    }
    document.getElementById('resBT3').innerHTML = giaithua
}
// bài tập 4 
function ex4 (){
    var content = document.getElementById('thediv')
    for(i = 1 ; i <=10 ; i++){
        if(i%2==0){
            content += '<div id="thediv" class="bg-danger"> div chẵn</div>' ;
            
        }else{
            content += '<div id="thediv" class="bg-primary"> div lẻ</div>' ;
          
        }
    }
    document.getElementById('resBT4').innerHTML = content
}
 
// bài 5 
function kiemtrasonguyento(number){
    var checkSNT = true
    for(var iso = 2 ; iso <= Math.sqrt(number);iso++){
        if(number % iso === 0 ){
            checkSNT = false
            break
        }
    }
    return checkSNT
}
function ex5() {
    var num = +document.getElementById('textNumBt5').value
    
    var ketqua = ''
    for(var i = 2 ; i <= num ; i++ ){
        var checkSNT = kiemtrasonguyento(i)
        if(checkSNT){
            ketqua+= i + ' '
        }
       
     
    }
    document.getElementById('resBT5').innerHTML = ketqua
}