let section = document.querySelectorAll('.gallery');//получение секции галиреи
let rows = {};

for (let i = 0; i < section.length; i++) {

    rows = section[i].querySelectorAll('div.row'); // NodeList(3) [div.row, div.row, div.row]

}

console.log(rows);

for (let i = 0; i < rows.length; i++) {
    
    let img = rows[i].querySelectorAll('img');// NodeList(1) [img.img-fluid.z-depth-1.img-thumbnail]
                                              // NodeList(3) [img.img-fluid.z-depth-1.img-thumbnail, img.img-fluid.z-depth-1.img-thumbnail, img.img-fluid.z-depth-1.img-thumbnail]
                                              // NodeList(2) [img.img-fluid.z-depth-1.img-thumbnail, img.img-fluid.z-depth-1.img-thumbnail]

}
console.log(img);





