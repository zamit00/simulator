function highlightCell(cell) {
    // Reset all cells to the original color
  let dn = parseFloat(document.getElementsById("dmeynihul")[0].value);
    const cells = document.querySelectorAll('#choosesikon td');
    const tabeletozza=document.getElementById('tbltozza');
    cells.forEach(cell => {
        cell.style.backgroundColor = 'white';
        cell.style.color='blue';
    });

    // Highlight the clicked cell
    

    

    // Find the row and column index, adjusting for the header row and column
    const rowIndex = cell.parentElement.rowIndex ; // Subtract 1 for the header row
    const columnIndex = cell.cellIndex; // Subtract 1 for the header column
    let tkofabeshanim = parseInt(document.getElementById("selecttkofa").value);
    if((rowIndex===1 && tkofabeshanim>5) || (rowIndex===2 && (tkofabeshanim<=5 || tkofabeshanim>10))
    || (rowIndex===3 && (tkofabeshanim<=10 || tkofabeshanim>20)) || (rowIndex===4 && tkofabeshanim<=20)){ 
        alert('התקופה שנבחרה אינה תואמת לבחירה בטבלה'); 
       
        tabeletozza.rows[1].cells[0].innerText='';
        tabeletozza.rows[1].cells[1].innerText='';
        tabeletozza.rows[2 ].cells[1].innerText='';
        tabeletozza.rows[3].cells[1].innerText='';
        tabeletozza.rows[4].cells[1].innerText='';
        tabeletozza.rows[1].cells[2].innerText='';
        tabeletozza.rows[2].cells[2].innerText='';
        tabeletozza.rows[3].cells[2].innerText='';
        tabeletozza.rows[4].cells[2].innerText='';
        tabeletozza.style.display= 'none';
        document.getElementById('tozaakot').style.display= 'none';
        document.getElementById('netunylakuach').style.display= 'none';
        document.getElementById('hadpeami').innerText= '';
        document.getElementById('hodshi').innerText='';
        document.getElementById('shanim').innerText= '';
        document.getElementById('dmein').innerText= '';
        document.getElementById('sikons').innerText='';
        document.getElementById('tvachsikon').innerText='';
        
        return;
    }
    
    else{ 
        cell.style.backgroundColor = 'green';
        cell.style.color='yellow';
        
let x1 = parseInt(document.getElementsByName("txt1")[0].value);
let x2 = parseInt(document.getElementsByName("txt2")[0].value);

let ribitchoose = cell.getAttribute("data-value");
let ribitOzar = 0.04;



// בדיקות תקינות
if (isNaN(x1) || isNaN(x2) || x1 < 0 || x2 < 0) {
    alert('סכומים לא תקינים');
    numbermakor0(); // הנחיות לפונקציה זו
    return;
}

if (isNaN(dn) || dn < 0 || dn > 1) {
    alert('דמי ניהול לא תקינים');
    numbermakor0(); // הנחיות לפונקציה זו
    return;
}


//console.log(x1, x2, dn, ribitchoose, ribitOzar);//
if (document.getElementById("rd1").checked){x1=x1;x2=x2;}
else if (document.getElementById("rd2").checked){x1=x1;x2=0;}
else{x1=0;x2=x2;}

sumsum(x1, x2, dn, ribitchoose, ribitOzar,tkofabeshanim,columnIndex,rowIndex)

tabeletozza.style.display= 'block';
 document.getElementById('netunylakuach').style.display= 'flex';


    }
    
    
    
}

function beforesumsum(){
    let columnIndex;
    let rowIndex;
    let dn = parseFloat(document.getElementsById("dmeynihul")[0].value);
    const cells = document.querySelectorAll('#choosesikon td');
    let greenCellFound = false; // Flag to track if any green cell is found
const tabeletozza=document.getElementById('tbltozza');
   
    
    cells.forEach(cell => {
    if (cell.style.backgroundColor === 'green') {
        ribitchoose = cell.getAttribute("data-value");
        greenCellFound = true; // Set the flag to true if a green cell is found
    
     rowIndex = cell.parentElement.rowIndex ; // Subtract 1 for the header row
     columnIndex = cell.cellIndex; // Subtract 1 for the header column
    let tkofabeshanim = parseInt(document.getElementById("selecttkofa").value);
    console.log(columnIndex);

    if((rowIndex===1 && tkofabeshanim>5) || (rowIndex===2 && (tkofabeshanim<=5 || tkofabeshanim>10))
    || (rowIndex===3 && (tkofabeshanim<=10 || tkofabeshanim>20)) || (rowIndex===4 && tkofabeshanim<=20)){ 
        alert('התאם לבחירה בטבלה'); 
        tabeletozza.style.display= 'none';
        document.getElementById('netunylakuach').style.display= 'none';
        cells.forEach(cell => {
        cell.style.backgroundColor = 'white';
        cell.style.color='blue';   
    });

        
        tabeletozza.rows[1].cells[0].innerText='';
        tabeletozza.rows[1].cells[1].innerText='';
        tabeletozza.rows[2 ].cells[1].innerText='';
        tabeletozza.rows[3].cells[1].innerText='';
        tabeletozza.rows[4].cells[1].innerText='';
        tabeletozza.rows[1].cells[2].innerText='';
        tabeletozza.rows[2].cells[2].innerText='';
        tabeletozza.rows[3].cells[2].innerText='';
        tabeletozza.rows[4].cells[2].innerText='';
        
        document.getElementById('tozaakot').style.display= 'none';
        document.getElementById('hadpeami').innerText= '';
        document.getElementById('hodshi').innerText='';
        document.getElementById('shanim').innerText= '';
        document.getElementById('dmein').innerText= '';
        document.getElementById('sikons').innerText='';
        document.getElementById('tvachsikon').innerText='';
           return;
       
    }
    
    
    
    
    
    
    }
});

// Show alert if no green cell was found
if (!greenCellFound) {
    tabeletozza.rows[2 ].cells[1].innerText='';
        tabeletozza.rows[3].cells[1].innerText='';
        tabeletozza.rows[4].cells[1].innerText='';
        tabeletozza.rows[1].cells[2].innerText='';
        tabeletozza.rows[2].cells[2].innerText='';
        tabeletozza.rows[3].cells[2].innerText='';
        tabeletozza.rows[4].cells[2].innerText='';
        tabeletozza.style.display= 'none';
        document.getElementById('hadpeami').innerText= '';
        document.getElementById('hodshi').innerText='';
        document.getElementById('shanim').innerText= '';
        document.getElementById('dmein').innerText= '';
        document.getElementById('sikons').innerText='';
        document.getElementById('tvachsikon').innerText='';
        document.getElementById('netunylakuach').style.display= 'none';
    return;
}
else{


 


    //if(isNaN(ribitchoose)){alert("");return;}//
    let x1 = parseInt(document.getElementsByName("txt1")[0].value);
    let x2 = parseInt(document.getElementsByName("txt2")[0].value);  
    
    // בדיקות תקינות
if (isNaN(x1) || isNaN(x2) || x1 < 0 || x2 < 0) {
    alert('סכומים לא תקינים');
    numbermakor0(); // הנחיות לפונקציה זו
    return;
}

if (isNaN(dn) || dn < 0 || dn > 1) {
    alert('דמי ניהול לא תקינים');
    numbermakor0(); // הנחיות לפונקציה זו
    return;
}

    
    
   
    let tkofabeshanim = parseInt(document.getElementById("selecttkofa").value);
    let ribitOzar = 0.04;
    if (document.getElementById("rd1").checked){x1=x1;x2=x2;}
    else if (document.getElementById("rd2").checked){x1=x1;x2=0;}
    else{x1=0;x2=x2;}

    sumsum(x1, x2, dn, ribitchoose, ribitOzar,tkofabeshanim,columnIndex,rowIndex);


}
}


function sumsum(x1, x2, dn, ribitchoose, ribitOzar,tkofabeshanim,colu,rowIndex){ 
    let ribit;
    ribitOzar=(ribitOzar-dn/100);
    ribit=ribitchoose;
    ribitchoose=(ribitchoose-dn/100);
    let sum1 = hishuv(x1,x2,ribitOzar,tkofabeshanim);
    document.getElementById('tbltozza').rows[1].cells[1].innerText=parseInt(sum1).toLocaleString() + " " + &#8362;  
;
   
    let sum2=hishuv(x1,x2,ribitchoose,tkofabeshanim);
    document.getElementById('tbltozza').rows[1].cells[2].innerText=parseInt(sum2).toLocaleString() + " " + &#8362; 
;
    

    document.getElementById('tbltozza').rows[1].cells[0].innerText='תקופה של ' + tkofabeshanim + ' שנים';
    
    if(tkofabeshanim<10){
    document.getElementById('tbltozza').rows[2].cells[0].innerText='תקופה של 10 שנים'
    document.querySelector("#tbltozza tr:nth-child(3)").display='block';

     sum1 = hishuv(x1,x2,ribitOzar,10);
     document.getElementById('tbltozza').rows[2].cells[1].innerText=parseInt(sum1).toLocaleString()+ " " + &#8362; 
    
    if(colu===1){
     ribit=0.06; }  
     else if(colu===2){
    ribit=0.05;} 
     else{
        ribit=0.03;
       
     } 
     sum2=hishuv(x1,x2,ribit-dn/100,10);
     document.getElementById('tbltozza').rows[2].cells[2].innerText=parseInt(sum2).toLocaleString() + " " + &#8362;  
    }
    else{
        document.getElementById('tbltozza').rows[2].cells[0].innerText='';
        document.querySelector("#tbltozza tr:nth-child(3)").style.display='none';
        

    }


    if(tkofabeshanim<20){
    document.getElementById('tbltozza').rows[3].cells[0].innerText='תקופה של 20 שנים';
    document.querySelector("#tbltozza tr:nth-child(4)").display='block';
    sum1 = hishuv(x1,x2,ribitOzar,20);
    document.getElementById('tbltozza').rows[3].cells[1].innerText=parseInt(sum1).toLocaleString()+ " " + &#8362; 
   
    if(colu===1){
        ribit=0.07;}
        else if(colu===2){
          ribit=0.06;}
        else{
          ribit=0.04;
        }
     sum2=hishuv(x1,x2,ribit-dn/100,20);
     document.getElementById('tbltozza').rows[3].cells[2].innerText=parseInt(sum2).toLocaleString()+ " " + &#8362; 
   
    }
    else{
        document.getElementById('tbltozza').rows[3].cells[0].innerText='';
        document.querySelector("#tbltozza tr:nth-child(4)").style.display='none';
    }
    
    

    sum1 = hishuv(x1,x2,ribitOzar,30);
    document.getElementById('tbltozza').rows[4].cells[0].innerText='תקופה של 30 שנים'
    document.getElementById('tbltozza').rows[4].cells[1].innerText=parseInt(sum1).toLocaleString()+ " " + &#8362; 
    
    if(colu===1){
       ribit=0.08;}
        else if(colu===2){
       ribit=0.07;}
        else{
        ribit=0.04;
        }
    sum2=hishuv(x1,x2,ribit-dn/100,30);
    document.getElementById('tbltozza').rows[4].cells[2].innerText=parseInt(sum2).toLocaleString() + " " + &#8362;    
    document.getElementById('hadpeami').innerText= '';
    document.getElementById('hodshi').innerText='';
    document.getElementById('shanim').innerText= '';
    document.getElementById('dmein').innerText= '';
    document.getElementById('sikons').innerText='';
    document.getElementById('tvachsikon').innerText='';

    if(x1===0) {
        
        document.getElementById('hadpeami').innerText= ' ללא';
    }
    else{
        document.getElementById('hadpeami').innerText= " " + parseInt(x1).toLocaleString() + " שח";
    } 
    if(x2===0) {
        document.getElementById('hodshi').innerText=document.getElementById('hodshi').innerText + ' ללא';
    }
    else{
        document.getElementById('hodshi').innerText=document.getElementById('hodshi').innerText + " " + parseInt(x2).toLocaleString() + &#8362; 
    }  
    
    document.getElementById('shanim').innerText= document.getElementById('shanim').innerText + " " + tkofabeshanim + " שנים";
    document.getElementById('dmein').innerText= document.getElementById('dmein').innerText + " " +dn+'%'+ " שנתי";
    document.getElementById('sikons').innerText=document.getElementById('sikons').innerText + " " + document.getElementById('choosesikon').rows[rowIndex].cells[0].innerText;
    document.getElementById('tvachsikon').innerText=  document.getElementById('tvachsikon').innerText + " " + document.getElementById('choosesikon').rows[0].cells[colu].innerText;
    document.getElementById('netunylakuach').style.display= 'flex';
    document.getElementById('tozaakot').style.display= 'block';
    document.getElementById('tbltozza').style.display= 'block';

    



}

function hishuv(schom1,schom2,ribit,tkofa){
    let hishuv = schom1 + schom2;
    hishuv=hishuv * (1+ribit/12);
    for (let i = 1; i < tkofa*12; i++) {
        hishuv = (hishuv+schom2) * (1+ribit/12);
    }
    return hishuv;
}

function toggleTextboxes() {
    const text1 = document.getElementById("tx1");
    const text2 = document.getElementById("tx2");
    
    if (document.getElementById("rd1").checked) {
    text1.disabled = false;
    text2.disabled = false;
    numbermakor1();
    
    } else if (document.getElementById("rd2").checked) {
       
    text1.disabled = false;
    text2.disabled = true;
    
    numbermakor2();
    
    
    } else if (document.getElementById("rd3").checked) {
    text1.disabled = true;
    text2.disabled = false;
    numbermakor3();
    }
    }
    function numbermakor0(){document.getElementById("tx1").value=1000;document.getElementById("tx2").value=200;}
    
    function numbermakor1(){
    if(document.getElementById("tx1").value<0 || document.getElementById("tx1").value<0 ){alert('סכומים לא תקינים');numbermakor0();return;}
    
    if(document.getElementById("tx1").value==0){document.getElementById("tx1").value=1000;}
    if(document.getElementById("tx2").value==0){document.getElementById("tx2").value=200;}
    
    } 
    function numbermakor2(){
    if(document.getElementById("tx1").value<0 ){alert('סכום לא תקין');return;}
    if(document.getElementById("tx1").value==0){document.getElementById("tx1").value=1000;}
    document.getElementById("tx2").value=0;
    
    } 
    function numbermakor3(){
    if(document.getElementById("tx2").value<0 ){alert('סכום לא תקין');return;}
    if(document.getElementById("tx2").value==0){document.getElementById("tx2").value=200;}
    document.getElementById("tx1").value=0;
    
    } 
    


