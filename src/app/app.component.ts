import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mark: string = ""
  message: string = ""
  games:string[] = []
  moves: any = []
  gameOver: boolean = false 
  isMoveFinish: boolean = false 
  
  constructor(){
    this.newGame();
  }

  newGame(){
    this.mark = "X"
    this.message= "Next: X"
    this.games = [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ]
    this.gameOver = false
    this.moves = []
    this.isMoveFinish = false
  }

  setMark(index: number ){
    if(this.games[index] == "" && !this.gameOver){
      this.games[index] = this.mark
      this.moves.push([...this.games])
      this.checkGameMoveIsOver()
      this.isGameOver()
      if (this.gameOver){
        this.message = "Game Over Winner: " + this.mark
      }
      else if(this.isMoveFinish){
        this.message = "Game Draw. No Winner"
      }
      else{ 
        if(this.mark == "X") this.mark = "O"
      else this.mark = "X" 
      this.message = "Next: " + this.mark
    }
  }
}

checkGameMoveIsOver(){
  this.isMoveFinish = true
for (let i = 0; i < this.games.length; i++) {
  if(this.games[i] ==""){
    this.isMoveFinish =false
    break
  }
}
}

isGameOver(){
  //My Note Row
  if(this.games[0] != "" && this.games[0] === this.games[1] && this.games[1] === this.games[2]){
    this.gameOver = true
  }
  if(this.games[3] != "" && this.games[3] === this.games[4] && this.games[4] === this.games[5]){
  this.gameOver = true
  }
  if(this.games[6] != "" && this.games[6] === this.games[7] && this.games[7] === this.games[8]){
  this.gameOver = true
  }
  //My Not Row is over

  //My Not Col 
  if(this.games[0] != "" && this.games[0] === this.games[3] && this.games[3] === this.games[6]){
    this.gameOver = true
  }
  if(this.games[1] != "" && this.games[1] === this.games[4] && this.games[4] === this.games[7]){
    this.gameOver = true
  }
  if(this.games[2] != "" && this.games[2] === this.games[5] && this.games[5] === this.games[8]){
    this.gameOver = true
  }
  //My Not Col is over

  //My Not Cross 
  if(this.games[0] != "" && this.games[0] === this.games[4] && this.games[4] === this.games[8]){
    this.gameOver = true
  }
  if(this.games[2] != "" && this.games[2] === this.games[4] && this.games[4] === this.games[6]){
    this.gameOver = true
  }
  //My Not Cross is over
}

  returnSelectMove(index:number){
    this.games = this.moves[index]
  }
}
