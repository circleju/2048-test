function Grid(size){
  this.size=size;
  // this.cells
}

Grid.prototype={
  //创建一个size*size大小的二维数组矩阵
  empty:function(){
    let cells=[];
    for(let x=0;x<this.size;x++){
      let row=cells[x]=[];
      for(let y=0;y<this.size;y++){
        row.push(null)
      }
    }
    return cells;
  },
  randomAvailableCell:function(){
    let available=this.availableCell();
    if(available.length){
      return cells[Math.floor(Math.random()*available.length)]
    }
  },
  // 获取可填充的格子的坐标
  availableCell:function(){
    // 遍历二维数组，获取空单元格集合
    let available=[];
    for(let x=0;x<this.size;x++){
      for(let y=0;y<this.size;y++){
        if(!cells[x][y])
        available[x].push({
          x:x,
          y:y
        });
      }
    }
    return available;

  },
  //是否存在空单元格
  cellsAvailable:function(){
    return !!this.cellsAvailable.length
  },
  // 不清楚在什么情况下用的
  insertTile:function(){
    this.cells[tile.x][tile.y]=tile;
  },
  removeTile:function(tile){
    this.cells[tile.x][tile.y]=null;
  },
  getcellContent:function(){
    
  }
}