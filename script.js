function insert_Row() {
    //Write your code here

	let bkupstr = document.querySelector("#sampleTable>tbody").innerHTML;

    let newstr = `<tr>
                 <td>New Cell1</td>
                 <td>New Cell2</td>
                 </tr>`

    document.querySelector("#sampleTable>tbody").innerHTML = newstr + bkupstr;
  
}
