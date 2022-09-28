import { helper } from '@ember/component/helper';

export function colorpicker([string]) {
  if(string=="A"){
    return "#FFCDD2";
  }

  else if(string=="B"){
    return "#FF5252";
  }

  else if(string=="C"){
    return "#F8BBD0";
  }

  else if(string=="D"){
    return "#F06292";
  }

  else if(string=="E"){
    return "#EC407A";
  }

  else if(string=="F"){
    return "#F50057";
  }

  else if(string=="G"){
    return "#C51162";
  }

  else if(string=="H"){
    return "#FF4081";
  }

  else if(string=="I"){
    return "#E1BEE7";
  }

  else if(string=="J"){
    return "#BA68C8";
  }

  else if(string=="K"){
    return "#9C27B0";
  }

  else if(string=="L"){
    return "#EA80FC";
  }

  else if(string=="M"){
    return "#E040FB";
  }

  else if(string=="N"){
    return "#D1C4E9";
  }

  else if(string=="O"){
    return "#9575CD";
  }

  else if(string=="P"){
    return "#B388FF";
  }

  else if(string=="Q"){
    return "#7C4DFF";
  }

  else if(string=="R"){
    return "#9FA8DA";
  }

  else if(string=="S"){
    return "#7986CB";
  }

  else if(string=="T"){
    return "#5C6BC0";
  }

  else if(string=="U"){
    return "#8C9EFF";
  }

  else if(string=="V"){
    return "#536DFE";
  }

  else if(string=="W"){
    return "#90CAF9";
  }

  else if(string=="X"){
    return "#64B5F6";
  }

  else if(string=="Y"){
    return "#82B1FF";
  }

  else if(string=="Z"){
    return "#2962FF";
  }

}

export default helper(colorpicker);
