"https://fakestoreapi.com/products/1";
let data = document.getElementById("table_data");
var data_object_json = "";
let store_data = "";

let data_object = async () => {
  try {
    let response = await fetch("https://fakestoreapi.com/products");
    data_object_json = await response.json();
  } catch (error) {
    console.log("error", error);
  }
  data_object_json.forEach((data) => {
    store_data += `<tr>
    <td>${data.id}</td>
    <td>${data.category}</td>
    <td><img src="${data.image}" alt="image" width="100px" height="100px"></td>
    <td>${data.description}</td>
    <td>${data.price}</td>
    <td>${data.title}</td>
    <td>${data.rating.count}</td>
    <td>${data.rating.rate}</td>`;
  });

  data.innerHTML = `<tr>
        <th>ID</th>
        <th>Category</th>
        <th>Image</th>
        <th>Description</th>
        <th>Price</th>
        <th>Title</th>
        <th>Rating Users</th>
        <th>Reating Rate</th>
      </tr>  ${store_data}`;
};

data_object();


function searchdata(){
  let search = document.getElementById('search_id').value.toLowerCase();
  let data = document.getElementById("table_data");
  let table_row = data.getElementsByTagName('tr');

  for (let i = 0; i < table_row.length; i++) {
    let table_data_value = table_row[i].getElementsByTagName('td')[1];
    if(table_data_value){
      let value_data = table_data_value.innerText;
      if(value_data.indexOf(search) > -1){
        table_row[i].style.display = "";
      }
      else{
        table_row[i].style.display = "none";
      }
    }
    
    


    //   if(table_data_value){
    //     value_data = table_data_value.toLowerCase();
    //     console.log(value);
    //   }
    //   if (value_data.indexOf(search) > -1) {
    //     table_row[i].style.display = "";
    //   } else {
    //     table_row[i].style.display = "none";
    //   }

    // }
  }
} 

  
  


// function callapi() {
//   fetch("https://fakestoreapi.com/products")
//     .then((response) => response.json())
//     .then((responseData) => {
//       responseData.forEach((data_value) => {
//         store_data += `<tr>
//       <td>${data_value.id}</td>
//       <td>${data_value.category}</td>
//       <td><img src="${data_value.image}" alt="image" width="100px" height="100px"></td>
//       <td>${data_value.description}</td>
//       <td>${data_value.price}</td>
//       <td>${data_value.title}</td>
//       <td>${data_value.rating.count}</td>
//       <td>${data_value.rating.rate}</td>`;
//       });
//       data.innerHTML = store_data;
//       console.log(store_data);
//     });
// }

// callapi();
