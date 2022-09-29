import { helper } from '@ember/component/helper';

export function colorpicker([string]) {

  const colorpick = new Map([
   [ "A" , "#FFCDD2"],
   [ "B" , "#FF5252"],
   [ "C" , "#F8BBD0"],
   [ "D" , "#F06292"],
   [ "E" , "#EC407A"],

   [ "F" , "#F50057"],
   [ "G" , "#C51162"],
   [ "H" , "#FF4081"],
   [ "I" , "#E1BEE7"],
   [ "J" , "#BA68C8"],

   [ "K" , "#9C27B0"],
   [ "L" , "#EA80FC"],
   [ "M" , "#E040FB"],
   [ "N" , "#D1C4E9"],
   [ "O" , "#9575CD"],

   [ "P" , "#B388FF"],
   [ "Q" , "#7C4DFF"],
   [ "R" , "#9FA8DA"],
   [ "S" , "#7986CB"],
   [ "T" , "#5C6BC0"],

   [ "U" , "#8C9EFF"],
   [ "V" , "#536DFE"],
   [ "W" , "#90CAF9"],
   [ "X" , "#64B5F6"],
   [ "Y" , "#82B1FF"],
   [ "Z" , "#2962FF"],

  ]);
  return colorpick.get(string);

}

export default helper(colorpicker);
