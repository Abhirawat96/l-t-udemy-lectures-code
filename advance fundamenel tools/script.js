// ternary operator///
function isuservlid(bool){
  return bool;
}

var answer = uservalid(true) ? "you may enter" :
"access denied";




function condition(){
  if(isuservlid(true)){
    return "you may enter";
  }else{
    return "access denied";
  }
}
var answer2 = condition();


///switch statement///////

function movecommand(direction){
  var whathappen;
  switch(direction){
    case "forward":
      whathappen = "you encounter a monster";
      break;
      case "back":
        whathappen = "you arrived a home";
        break;
        case "right":
          whathappen = "you are at river";
          break;
          case "left":
            whathappen = "you run into a troll";
            break;
            default:
              whathappen = "please enter a valid direction";

  }
  return whathappen;
}
